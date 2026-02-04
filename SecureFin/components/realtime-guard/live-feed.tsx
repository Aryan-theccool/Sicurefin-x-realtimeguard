"use client";

import { motion, AnimatePresence } from 'framer-motion';

interface Transaction {
    id: string;
    merchant: string;
    amount: number;
    fraud_score: number;
    timestamp: string;
}

interface LiveFeedProps {
    transactions: Transaction[];
    onSelect: (tx: Transaction) => void;
}

export function LiveFeed({ transactions, onSelect }: LiveFeedProps) {
    return (
        <div className="h-full overflow-y-auto custom-scrollbar p-2 space-y-2">
            <AnimatePresence initial={false}>
                {transactions.map((tx) => (
                    <motion.div
                        key={tx.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        layout
                        onClick={() => onSelect(tx)}
                        className="p-3 bg-slate-950/40 rounded border border-green-900/30 hover:bg-green-900/10 hover:border-green-500/50 transition-all cursor-pointer group"
                    >
                        <div className="flex justify-between items-start mb-1">
                            <span className="text-[9px] font-mono text-green-900 group-hover:text-green-500 transition-colors">
                                <span className="mr-1">◈</span> {tx.id.slice(0, 14)}
                            </span>
                            <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${tx.fraud_score > 80 ? 'bg-red-500/10 text-red-500 border-red-500/20' : 'bg-green-500/10 text-green-500 border-green-500/20'}`}>
                                {tx.fraud_score > 80 ? '!! THREAT !!' : 'SECURE'}
                            </span>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                            <span className="text-xs font-bold text-green-100 uppercase tracking-tight">{tx.merchant}</span>
                            <span className="text-xs font-mono text-green-400 font-bold">₹{tx.amount?.toLocaleString()}</span>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}
