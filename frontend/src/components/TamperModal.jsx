import React from 'react';

import { ShieldAlert, X, AlertTriangle, History, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TamperModal({ isOpen, onClose, data }) {
    if (!isOpen || !data) return null;

    const { errors } = data;

    return (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-slate-900 border border-red-500/50 rounded-2xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl shadow-red-900/20"
            >
                {/* Header */}
                <div className="p-6 border-b border-red-500/30 flex justify-between items-center bg-red-500/10 rounded-t-2xl">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-red-500/20 rounded-full text-red-500">
                            <ShieldAlert size={24} />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-white">Security Alert: Blockchain Tampered</h2>
                            <p className="text-red-400 text-sm font-mono">{errors.length} Compromised Block(s) Detected</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">

                    {errors.map((err, index) => {
                        const { block, error, signerHistory } = err;
                        const isFalsePositive = block.data.action === 'ALLOW';

                        return (
                            <div key={index} className="border-b border-slate-800 pb-8 last:border-0 last:pb-0">
                                <h3 className="text-red-500 font-bold mb-4 flex items-center gap-2">
                                    <span className="bg-red-500/10 px-2 py-1 rounded text-xs">Error #{index + 1}</span>
                                    {error} at Block Index {err.blockIndex}
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Compromised Block Details */}
                                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                                        <h3 className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-3 flex items-center gap-2">
                                            <AlertTriangle size={14} /> {isFalsePositive ? 'False Positive Transaction' : 'Compromised Transaction'}
                                        </h3>
                                        <div className="space-y-3">
                                            <div>
                                                <span className="text-slate-500 text-xs block">Transaction ID</span>
                                                <span className="text-white font-mono text-sm break-all">{block.data.id}</span>
                                            </div>
                                            <div>
                                                <span className="text-slate-500 text-xs block">Action</span>
                                                <span className={`font-bold ${isFalsePositive ? 'text-emerald-400' : 'text-red-400'}`}>
                                                    {isFalsePositive ? 'False Positive (ALLOW)' : 'Transaction Blocked (BLOCK)'}
                                                </span>
                                            </div>
                                            <div>
                                                <span className="text-slate-500 text-xs block">Notes</span>
                                                <span className="text-slate-300 text-sm">{block.data.notes || 'N/A'}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Signer Details */}
                                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                                        <h3 className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-3 flex items-center gap-2">
                                            <User size={14} /> Signer Identity (Analyst)
                                        </h3>
                                        <div className="space-y-3">
                                            <div>
                                                <span className="text-slate-500 text-xs block">Signer Address</span>
                                                <span className="text-emerald-400 font-mono text-xs break-all bg-emerald-950/30 p-2 rounded border border-emerald-900/50 block">
                                                    {block.signer}
                                                </span>
                                            </div>
                                            <div>
                                                <span className="text-slate-500 text-xs block">Cryptographic Signature</span>
                                                <span className="text-slate-500 font-mono text-[10px] break-all bg-slate-900 p-2 rounded border border-slate-800 block">
                                                    {block.signature}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Signer History */}
                                <div className="mt-6">
                                    <h3 className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-3 flex items-center gap-2">
                                        <History size={14} /> Activity History for this Signer
                                    </h3>
                                    <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
                                        <table className="w-full text-left text-sm text-slate-400">
                                            <thead className="bg-slate-900 text-slate-500 font-medium">
                                                <tr>
                                                    <th className="p-3">Time</th>
                                                    <th className="p-3">Action</th>
                                                    <th className="p-3">Transaction ID</th>
                                                    <th className="p-3">Hash</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-800">
                                                {signerHistory && signerHistory.length > 0 ? (
                                                    signerHistory.map((item, idx) => (
                                                        <tr key={idx} className="hover:bg-slate-900/50 transition-colors">
                                                            <td className="p-3 font-mono text-xs text-slate-500">
                                                                {new Date(item.timestamp).toLocaleString()}
                                                            </td>
                                                            <td className="p-3">
                                                                <span className={`px-2 py-1 rounded text-[10px] font-bold ${item.action === 'BLOCK' ? 'bg-red-500/10 text-red-500' : 'bg-emerald-500/10 text-emerald-500'}`}>
                                                                    {item.action}
                                                                </span>
                                                            </td>
                                                            <td className="p-3 font-mono text-xs text-white">
                                                                {item.id}
                                                            </td>
                                                            <td className="p-3 font-mono text-[10px] text-slate-600 truncate max-w-[100px]">
                                                                {item.hash}
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="4" className="p-4 text-center text-slate-600">No other history found.</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </motion.div>
        </div>
    );
}
