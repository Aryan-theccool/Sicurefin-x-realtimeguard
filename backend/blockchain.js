const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const { Web3 } = require('web3');

// Initialize Web3 with a random account for signing
const web3 = new Web3();
const account = web3.eth.accounts.create();
console.log("Blockchain Signer Address:", account.address);

class Block {
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
        this.signature = null;
        this.signer = null;
    }

    calculateHash() {
        return crypto
            .createHash('sha256')
            .update(
                this.index +
                this.previousHash +
                this.timestamp +
                JSON.stringify(this.data) +
                this.nonce
            )
            .digest('hex');
    }

    // Sign the block hash using Ethereum private key
    signBlock() {
        const signatureObject = account.sign(this.hash);
        this.signature = signatureObject.signature;
        this.signer = account.address;
    }
}

class Blockchain {
    constructor() {
        this.chainFile = path.join(__dirname, 'data', 'blockchain.json');
        this.chain = [this.createGenesisBlock()];
        this.loadChain();
    }

    createGenesisBlock() {
        const genesis = new Block(0, "2024-01-01", "Genesis Block", "0");
        genesis.signBlock(); // Sign genesis too
        return genesis;
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        newBlock.signBlock(); // Sign with Web3 before adding
        this.chain.push(newBlock);
        this.saveChain();
    }

    // --- DEMO TOOLS ---
    
    // Deliberately corrupt a block to simulate an attack
    corruptBlock(index = -1) {
        if (this.chain.length <= 1) return false;
        
        // Default to a random block if none specified (excluding genesis)
        const targetIndex = index === -1 ? Math.floor(Math.random() * (this.chain.length - 1)) + 1 : index;
        
        if (this.chain[targetIndex]) {
            console.log(`[ATTACK SIMULATOR] Corrupting Block #${targetIndex}`);
            // Change the action to something suspicious
            this.chain[targetIndex].data.action = "ALLOW"; 
            this.chain[targetIndex].data.notes = "INJECTED_BY_HACKER";
            // WE DON'T RE-CALCULATE HASH OR SIGNATURE. This breaks the chain.
            this.saveChain();
            return true;
        }
        return false;
    }

    // Restore the disk file from the current valid in-memory chain
    restoreChain() {
        console.log("[SECURITY] Restoring chain integrity from memory...");
        this.saveChain();
    }

    isChainValid() {
        const errors = [];
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            // 1. Re-calculate hash
            const reconstructedBlock = new Block(
                currentBlock.index,
                currentBlock.timestamp,
                currentBlock.data,
                currentBlock.previousHash
            );
            reconstructedBlock.nonce = currentBlock.nonce;

            if (currentBlock.hash !== reconstructedBlock.calculateHash()) {
                console.log(`Invalid Hash at block ${i}`);
                errors.push({ 
                    valid: false, 
                    error: "Hash Mismatch", 
                    blockIndex: i, 
                    block: currentBlock,
                    signerHistory: this.getSignerHistory(currentBlock.signer)
                });
                continue; 
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                console.log(`Invalid Previous Link at block ${i}`);
                errors.push({ valid: false, error: "Broken Chain Link", blockIndex: i, block: currentBlock });
                continue;
            }

            // 2. Verify Ethereum Signature
            if (currentBlock.signature) {
                const recoveredSigner = web3.eth.accounts.recover(currentBlock.hash, currentBlock.signature);
                if (recoveredSigner !== currentBlock.signer) {
                    console.log(`Invalid Signature at block ${i}`);
                    errors.push({ 
                        valid: false, 
                        error: "Invalid Signature", 
                        blockIndex: i, 
                        block: currentBlock,
                        signerHistory: this.getSignerHistory(currentBlock.signer)
                    });
                    continue;
                }
            }
        }
        return { valid: errors.length === 0, errors };
    }

    // New helper to fetch historical context for a signer
    getSignerHistory(signerAddress) {
        if (!signerAddress) return [];
        return this.chain
            .filter(b => b.signer === signerAddress)
            .map(b => ({
                timestamp: b.timestamp,
                action: b.data?.action || "TRANSIT",
                id: b.data?.id || "N/A"
            }))
            .slice(-5); // Last 5 recorded actions
    }

    saveChain() {
        // Ensure data dir exists
        const dir = path.dirname(this.chainFile);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(this.chainFile, JSON.stringify(this.chain, null, 2));
    }

    loadChain() {
        if (fs.existsSync(this.chainFile)) {
            try {
                console.log("Reloading chain from disk...");
                const data = JSON.parse(fs.readFileSync(this.chainFile, 'utf8'));
                if (data && data.length > 0) {
                    this.chain = data;
                    console.log(`Loaded ${this.chain.length} blocks.`);
                }
            } catch (err) {
                console.error("Error loading blockchain:", err);
            }
        }
    }
}

module.exports = { Blockchain, Block };
