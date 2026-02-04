const mongoose = require('mongoose');
const Datastore = require('nedb');
const path = require('path');
const fs = require('fs');

let useLocalDb = false;
let localDb;

// Initialize local DB parameters
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}
const dbPath = path.join(dataDir, 'local_transactions.db');

const transactionSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    transaction_id: String,
    timestamp: { type: Date, default: Date.now },
    amount: Number,
    currency: String,
    payment_mode: String,
    device_id: String,
    ip: String,
    lat: Number,
    lon: Number,
    location: String,
    user_id: String,
    merchant: String,
    fraud_score: Number,
    risk_score: Number,
    features: mongoose.Schema.Types.Mixed,
    rule_triggers: [String]
}, { timestamps: true });

const Transaction = mongoose.model('Transaction', transactionSchema);

const initDb = async () => {
    try {
        const mongoUri = process.env.MONGO_URI;
        if (!mongoUri) throw new Error("MONGO_URI not found in environment");

        // Short timeout for fallback
        await mongoose.connect(mongoUri, {
            serverSelectionTimeoutMS: 5000
        });
        console.log('✅ Connected to MongoDB Atlas Cloud');
    } catch (err) {
        console.warn('⚠️ MongoDB Atlas Connection Failed:', err.message);
        console.log('🔄 AUTOMATIC FALLBACK: Using local NeDB database instead.');
        useLocalDb = true;
        localDb = new Datastore({ filename: dbPath, autoload: true });
    }
};

const insertTransaction = async (tx) => {
    if (useLocalDb) {
        localDb.insert(tx);
    } else {
        try {
            await Transaction.create(tx);
        } catch (err) {
            console.error('Error inserting transaction:', err.message);
        }
    }
};

const getRecentTransactions = async (limit = 100) => {
    if (useLocalDb) {
        return new Promise((resolve) => {
            localDb.find({}).sort({ timestamp: -1 }).limit(limit).exec((err, docs) => {
                resolve(docs || []);
            });
        });
    }

    try {
        return await Transaction.find().sort({ timestamp: -1 }).limit(limit);
    } catch (err) {
        console.error('Error fetching recent transactions:', err);
        return [];
    }
};

const getAllTransactions = async () => {
    if (useLocalDb) {
        return new Promise((resolve) => {
            localDb.find({}).sort({ timestamp: -1 }).exec((err, docs) => {
                resolve(docs || []);
            });
        });
    }

    try {
        return await Transaction.find().sort({ timestamp: -1 });
    } catch (err) {
        console.error('Error fetching all transactions:', err);
        return [];
    }
};

module.exports = {
    initDb,
    insertTransaction,
    getRecentTransactions,
    getAllTransactions
};
