"use client";

import { ShieldAlert, X, AlertTriangle, History, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface TamperModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: any;
}

export function TamperModal({ isOpen, onClose, data }: TamperModalProps) {
    if (!data) return null;
    const { errors } = data;

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="max-w-5xl max-h-[90vh] overflow-hidden flex flex-col bg-slate-950 border-red-500/50 text-slate-200">
                <DialogHeader className="bg-red-500/10 p-6 -m-6 mb-6 border-b border-red-500/30">
                    <div className="flex justify-between items-center pr-8">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-red-500/20 rounded-full text-red-500">
                                <ShieldAlert size={24} />
                            </div>
                            <div>
                                <DialogTitle className="text-xl font-bold text-white uppercase tracking-tight">Security Alert: Chain Integrity Compromised</DialogTitle>
                                <p className="text-red-400 text-sm font-mono">{errors.length} Tampered Block(s) Detected</p>
                            </div>
                        </div>
                    </div>
                </DialogHeader>

                <div className="flex-1 overflow-y-auto space-y-8 pr-2 custom-scrollbar">
                    {errors.map((err: any, index: number) => {
                        const { block, error, signerHistory } = err;
                        const isFalsePositive = block.data.action === 'ALLOW';

                        return (
                            <div key={index} className="border-b border-slate-800 pb-8 last:border-0 last:pb-0">
                                <h3 className="text-red-500 font-bold mb-4 flex items-center gap-2">
                                    <span className="bg-red-500/10 px-2 py-1 rounded text-xs">ERR_{index + 1}</span>
                                    {error} at BLOCK #{err.blockIndex}
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-black/40 p-4 rounded-xl border border-slate-800">
                                        <h4 className="text-slate-500 text-[10px] uppercase font-bold mb-3 flex items-center gap-2">
                                            <AlertTriangle size={12} /> Transaction Payload
                                        </h4>
                                        <div className="space-y-2">
                                            <div className="font-mono text-[11px] text-slate-400 break-all bg-black/40 p-2 rounded">
                                                ID: {block.data.id}
                                            </div>
                                            <div className={`text-xs font-bold ${isFalsePositive ? 'text-emerald-400' : 'text-red-400'}`}>
                                                ACTION: {block.data.action}
                                            </div>
                                            <div className="text-xs text-slate-500 italic">
                                                NOTE: {block.data.notes || 'No analyst notes'}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-black/40 p-4 rounded-xl border border-slate-800">
                                        <h4 className="text-slate-500 text-[10px] uppercase font-bold mb-3 flex items-center gap-2">
                                            <User size={12} /> Digital Signature
                                        </h4>
                                        <div className="space-y-2">
                                            <div className="font-mono text-[10px] text-emerald-500/80 break-all bg-emerald-950/20 p-2 rounded border border-emerald-900/30">
                                                SGR: {block.signer}
                                            </div>
                                            <div className="font-mono text-[8px] text-slate-600 break-all bg-black/40 p-2 rounded">
                                                SIG: {block.signature}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <h4 className="text-slate-500 text-[10px] uppercase font-bold mb-2 flex items-center gap-2">
                                        <History size={12} /> Signer Forensics
                                    </h4>
                                    <div className="bg-black/40 rounded-lg border border-slate-800 overflow-hidden text-[10px]">
                                        <table className="w-full text-left">
                                            <thead className="bg-slate-900 text-slate-500">
                                                <tr>
                                                    <th className="p-2">Timestamp</th>
                                                    <th className="p-2">Action</th>
                                                    <th className="p-2">Tx ID</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-800">
                                                {signerHistory?.map((h: any, i: number) => (
                                                    <tr key={i} className="text-slate-400">
                                                        <td className="p-2 font-mono opacity-60 text-[9px]">{new Date(h.timestamp).toLocaleString()}</td>
                                                        <td className={`p-2 font-bold ${h.action === 'BLOCK' ? 'text-red-500' : 'text-emerald-500'}`}>{h.action}</td>
                                                        <td className="p-2 font-mono truncate max-w-[150px]">{h.id}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </DialogContent>
        </Dialog>
    );
}
