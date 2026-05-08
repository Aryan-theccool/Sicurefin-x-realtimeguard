"use client";

import React from 'react';
import { ShieldAlert, AlertTriangle, History, User } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface TamperModalProps {
    isOpen: boolean;
    onClose: () => void;
    onRepair?: () => void;
    data: any;
}

export function TamperModal({ isOpen, onClose, onRepair, data }: TamperModalProps) {
    if (!data || !data.errors) return null;
    const errors = Array.isArray(data.errors) ? data.errors : [];

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="max-w-5xl max-h-[92vh] overflow-hidden flex flex-col bg-slate-950/90 backdrop-blur-3xl border-white/5 text-slate-200 shadow-[0_0_50px_rgba(244,63,94,0.15)] p-0 gap-0">
                <DialogHeader className="bg-rose-500/10 p-8 border-b border-rose-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.1),transparent)] pointer-events-none" />
                    <div className="flex justify-between items-center relative z-10">
                        <div className="flex items-center gap-5">
                            <div className="relative">
                                <div className="absolute inset-0 bg-rose-500 blur-xl opacity-20 animate-pulse" />
                                <div className="p-3 bg-rose-500 rounded-2xl text-white relative">
                                    <ShieldAlert size={28} />
                                </div>
                            </div>
                            <div>
                                <DialogTitle className="text-2xl font-black text-white uppercase tracking-tighter leading-tight">
                                    Integrity Breach Detected
                                </DialogTitle>
                                <p className="text-rose-400 text-xs font-bold tracking-widest uppercase mt-1">
                                    {errors.length} Anomalous Block(s) Sequential Failure
                                </p>
                            </div>
                        </div>
                        {onRepair && (
                            <Button 
                                onClick={onRepair}
                                className="bg-rose-600 hover:bg-rose-500 text-white font-black px-8 py-6 rounded-full border border-rose-400/50 shadow-[0_0_20px_rgba(225,29,72,0.4)] transition-all hover:scale-105 active:scale-95 uppercase tracking-widest text-xs"
                            >
                                🛡️ Execute System Repair
                            </Button>
                        )}
                    </div>
                </DialogHeader>

                <div className="flex-1 overflow-y-auto p-8 space-y-10 custom-scrollbar">
                    {errors.map((err: any, index: number) => {
                        const block = err?.block || {};
                        const blockData = block?.data || {};
                        const errorMsg = err?.error || "Integrity Violation";
                        const blockIndex = err?.blockIndex ?? "ERR";
                        const signerHistory = Array.isArray(err?.signerHistory) ? err.signerHistory : [];

                        return (
                            <div key={index} className="space-y-6 pb-10 border-b border-white/5 last:border-0 last:pb-0">
                                <div className="flex items-center gap-4">
                                    <span className="bg-rose-500/20 text-rose-500 px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">
                                        BLOCK #{blockIndex}
                                    </span>
                                    <h3 className="text-lg font-bold text-slate-100 tracking-tight">
                                        {errorMsg}
                                    </h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white/5 p-6 rounded-3xl border border-white/5 group hover:border-rose-500/20 transition-all">
                                        <h4 className="text-slate-500 text-[10px] uppercase font-black tracking-[0.2em] mb-4 flex items-center gap-3">
                                            <AlertTriangle size={14} className="text-rose-500" /> Forensic Payload
                                        </h4>
                                        <div className="space-y-3">
                                            <div className="font-mono text-[11px] text-slate-400 break-all bg-black/40 p-3 rounded-xl border border-white/5">
                                                <span className="text-slate-600 mr-2">UID:</span> {blockData.id || "N/A"}
                                            </div>
                                            <div className="flex justify-between items-center p-3 rounded-xl bg-rose-500/5 border border-rose-500/10">
                                                <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest">Inferred Action</span>
                                                <span className="text-xs font-bold text-white uppercase">{blockData.action || "SUSPECT"}</span>
                                            </div>
                                            <div className="text-xs text-slate-500 italic px-1 pt-1 opacity-60">
                                                “{blockData.notes || 'Forensic trace incomplete – possible salt manipulation'}”
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white/5 p-6 rounded-3xl border border-white/5 group hover:border-emerald-500/20 transition-all">
                                        <h4 className="text-slate-500 text-[10px] uppercase font-black tracking-[0.2em] mb-4 flex items-center gap-3">
                                            <User size={14} className="text-emerald-500" /> Crypto Signature
                                        </h4>
                                        <div className="space-y-3">
                                            <div className="font-mono text-[11px] text-emerald-400 break-all bg-emerald-500/5 p-3 rounded-xl border border-emerald-500/10">
                                                <span className="text-emerald-900 mr-2">SGR:</span> 
                                                <span className="text-emerald-200 font-bold">{block.signer || "SYSTEM"}</span>
                                            </div>
                                            <div className="font-mono text-[9px] text-slate-300 break-all bg-black/40 p-3 rounded-xl border border-white/5 leading-relaxed">
                                                <span className="text-slate-600 mr-2 block mb-1 font-sans uppercase font-black tracking-widest">Signature Hash (SHA-256)</span>
                                                <span className="text-slate-400 opacity-60">{block.signature || "ROOT_SALT_SYSTEM"}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-slate-500 text-[10px] uppercase font-black tracking-[0.2em] flex items-center gap-3">
                                        <History size={14} /> Node Activity History
                                    </h4>
                                    <div className="bg-white/5 rounded-3xl border border-white/5 overflow-hidden">
                                        <table className="w-full text-left">
                                            <thead className="bg-white/5 text-[10px] text-slate-500 uppercase tracking-widest font-black">
                                                <tr>
                                                    <th className="px-6 py-4">Timestamp</th>
                                                    <th className="px-6 py-4">Protocol Action</th>
                                                    <th className="px-6 py-4 text-right">Transaction Reference</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-white/5">
                                                {signerHistory.length > 0 ? (
                                                    signerHistory.map((h: any, i: number) => (
                                                        <tr key={i} className="text-[11px] font-medium text-slate-400 group/row hover:bg-white/5 transition-colors">
                                                            <td className="px-6 py-4 font-mono opacity-60">
                                                                {h.timestamp ? new Date(h.timestamp).toLocaleTimeString() : "N/A"}
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                <span className={`px-2 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter ${h.action === 'BLOCK' ? 'bg-rose-500/10 text-rose-500' : 'bg-emerald-500/10 text-emerald-500'}`}>
                                                                    {h.action}
                                                                </span>
                                                            </td>
                                                            <td className="px-6 py-4 font-mono text-right opacity-40 text-[10px]">
                                                                {h.id || "GENESIS"}
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan={3} className="px-6 py-10 text-center text-slate-600 text-[10px] font-bold uppercase tracking-widest italic">
                                                            No historical telemetry available for this node
                                                        </td>
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
            </DialogContent>
        </Dialog>

    );
}
