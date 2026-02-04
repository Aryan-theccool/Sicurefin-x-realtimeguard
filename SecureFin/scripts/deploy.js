const { ethers } = require("ethers");
const fs = require("fs");
const path = require("path");

async function main() {
    const GANACHE_RPC = "http://127.0.0.1:8545";
    const provider = new ethers.JsonRpcProvider(GANACHE_RPC);

    // Get the first account from Ganache
    const signer = await provider.getSigner(0);
    const deployerAddress = await signer.getAddress();
    console.log("Deploying contract with account:", deployerAddress);

    const abiPath = path.join(__dirname, "out", "SecureToken_sol_SecureToken.abi");
    const binPath = path.join(__dirname, "out", "SecureToken_sol_SecureToken.bin");

    const abi = JSON.parse(fs.readFileSync(abiPath, "utf8"));
    const bytecode = fs.readFileSync(binPath, "utf8");

    const factory = new ethers.ContractFactory(abi, bytecode, signer);

    // Initial supply: 1,000,000 SFT
    const initialSupply = 1000000;
    console.log("Deploying SecureToken...");
    const contract = await factory.deploy(initialSupply);
    await contract.waitForDeployment();

    const contractAddress = await contract.getAddress();
    console.log("SecureToken deployed to:", contractAddress);

    // Update config.ts
    const configPath = path.join(__dirname, "..", "src", "blockchain", "config.ts");
    let configContent = fs.readFileSync(configPath, "utf8");

    const updatedContent = configContent.replace(
        /export const SFT_TOKEN_ADDRESS = "0x[0-9a-fA-F]+";/,
        `export const SFT_TOKEN_ADDRESS = "${contractAddress.toLowerCase()}";`
    );

    fs.writeFileSync(configPath, updatedContent);
    console.log("Updated config.ts with new contract address.");
}

main().catch((error) => {
    console.error("Deployment failed:", error);
    process.exit(1);
});
