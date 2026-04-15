"use client";

import React from 'react';
import { ShieldAlert, AlertTriangle, History, User } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface TamperModalProps {
    isOpen: boolean;
    onClose: () => void;
    onRepair: () => void;
    data: any;
}

export function TamperModal({ isOpen, onClose, onRepair, data }: TamperModalProps) {
    if (!data || !data.errors) return null;
    const errors = Array.isArray(data.errors) ? data.errors : [];

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="max-w-5xl max-h-[90vh] overflow-hidden flex flex-col bg-slate-950 border-red-500/50 text-slate-200">
                <DialogHeader className="bg-red-500/10 p-6 -m-6 mb-6 border-b border-red-500/30">
                    <div className="flex justify-between items-center pr-8 w-full">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-red-500/20 rounded-full text-red-500">
                                <ShieldAlert size={24} />
                            </div>
                            <div>
                                <DialogTitle className="text-xl font-bold text-white uppercase tracking-tight">
                                    Security Alert: Chain Integrity Compromised
                                </DialogTitle>
                                <p className="text-red-400 text-sm font-mono">
                                    {errors.length} Tampered Block(s) Detected
                                </p>
                            </div>
                        </div>
                        <Button 
                            onClick={onRepair}
                            className="bg-red-600 hover:bg-red-500 text-white font-bold px-6 border border-red-400 shadow-[0_0_15px_rgba(220,38,38,0.4)]"
                        >
                            🛡️ Repair System Integrity
                        </Button>
                    </div>
                </DialogHeader>

                <div className="flex-1 overflow-y-auto space-y-8 pr-2 custom-scrollbar">
                    {errors.map((err: any, index: number) => {
                        const block = err?.block || {};
                        const blockData = block?.data || {};
                        const errorMsg = err?.error || "Unknown Integrity Breach";
                        const blockIndex = err?.blockIndex ?? "N/A";
                        const signerHistory = Array.isArray(err?.signerHistory) ? err.signerHistory : [];

                        return (
                            <div key={index} className="border-b border-slate-800 pb-8 last:border-0 last:pb-0">
                                <h3 className="text-red-500 font-bold mb-4 flex items-center gap-2">
                                    <span className="bg-red-500/10 px-2 py-1 rounded text-xs">ERR_{index + 1}</span>
                                    {errorMsg} at BLOCK #{blockIndex}
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-black/40 p-4 rounded-xl border border-slate-800">
                                        <h4 className="text-slate-500 text-[10px] uppercase font-bold mb-3 flex items-center gap-2">
                                            <AlertTriangle size={12} /> Transaction Payload
                                        </h4>
                                        <div className="space-y-2">
                                            <div className="font-mono text-[11px] text-slate-400 break-all bg-black/40 p-2 rounded">
                                                ID: {blockData.id || "N/A"}
                                            </div>
                                            <div className="text-xs font-bold text-red-400">
                                                ACTION: {blockData.action || "SUSPECT"}
                                            </div>
                                            <div className="text-xs text-slate-500 italic">
                                                NOTE: {blockData.notes || 'Forensic trace incomplete'}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-black/40 p-4 rounded-xl border border-slate-800">
                                        <h4 className="text-slate-500 text-[10px] uppercase font-bold mb-3 flex items-center gap-2">
                                            <User size={12} /> Digital Signature
                                        </h4>
                                        <div className="space-y-2">
                                            <div className="font-mono text-[11px] text-green-400 break-all bg-emerald-950/20 p-2 rounded border border-emerald-900/30">
                                                SGR: <span className="text-white">{block.signer || "GENESIS_NODE"}</span>
                                            </div>
                                            <div className="font-mono text-[9px] text-slate-300 break-all bg-black/60 p-2 rounded border border-slate-800">
                                                SIG: <span className="text-slate-400">{block.signature || "ROOT_SALT_SYSTEM"}</span>
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
                                                {signerHistory.length > 0 ? (
                                                    signerHistory.map((h: any, i: number) => (
                                                        <tr key={i} className="text-slate-400">
                                                            <td className="p-2 font-mono opacity-60 text-[9px]">
                                                                {h.timestamp ? new Date(h.timestamp).toLocaleTimeString() : "N/A"}
                                                            </td>
                                                            <td className={`p-2 font-bold ${h.action === 'BLOCK' ? 'text-red-500' : 'text-emerald-500'}`}>
                                                                {h.action}
                                                            </td>
                                                            <td className="p-2 font-mono truncate max-w-[150px]">
                                                                {h.id || "N/A"}
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan={3} className="p-4 text-center text-slate-600 italic">
                                                            No historical context available for this node address
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
