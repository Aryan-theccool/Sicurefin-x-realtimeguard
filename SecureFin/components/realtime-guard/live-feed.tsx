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
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        layout
                        onClick={() => onSelect(tx)}
                        className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-emerald-500/30 hover:bg-white/10 transition-all cursor-pointer group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none" />
                        
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-[10px] font-mono text-slate-500 group-hover:text-emerald-500 transition-colors flex items-center gap-2">
                                <span className="h-1 w-1 rounded-full bg-emerald-500/40" />
                                {tx.id.slice(0, 12)}...
                            </span>
                            <span className={`text-[8px] font-black px-2 py-1 rounded-full uppercase tracking-widest border ${tx.fraud_score > 80 ? 'bg-rose-500/10 text-rose-500 border-rose-500/20' : 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'}`}>
                                {tx.fraud_score > 80 ? 'Threat' : 'Verified'}
                            </span>
                        </div>
                        <div className="flex justify-between items-end">
                            <div>
                                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-0.5">Merchant Entity</div>
                                <div className="text-sm font-black text-slate-100 tracking-tight">{tx.merchant}</div>
                            </div>
                            <div className="text-right">
                                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-0.5 font-sans">Exposure</div>
                                <div className="text-sm font-black text-indigo-400 font-mono">₹{tx.amount?.toLocaleString()}</div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>

        </div>
    );
}
