"use client";

import { useEffect, useState } from 'react';
import { X, ShieldAlert, CheckCircle, Clock, Link, Lock, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { TamperModal } from './tamper-modal';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface LogEntry {
    id: string;
    action: string;
    notes: string;
    timestamp: string;
    hash: string;
    previousHash: string;
    signature?: string;
    signer?: string;
}

interface AuditLogProps {
    isOpen: boolean;
    onClose: () => void;
}

export function AuditLog({ isOpen, onClose }: AuditLogProps) {
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [loading, setLoading] = useState(false);
    const [verifying, setVerifying] = useState(false);
    const [tamperData, setTamperData] = useState<any>(null);

    useEffect(() => {
        if (isOpen) {
            fetchLogs();
        }
    }, [isOpen]);

    const fetchLogs = async () => {
        setLoading(true);
        try {
            const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
            const res = await fetch(`${baseUrl}/api/actions`);
            const data = await res.json();
            setLogs(data);
        } catch (e) {
            console.error("Failed to fetch logs", e);
        } finally {
            setLoading(false);
        }
    };

    const verifyChain = async () => {
        setVerifying(true);
        try {
            const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
            const res = await fetch(`${baseUrl}/api/blockchain/verify`);
            const data = await res.json();
            if (data.valid) {
                alert(`✅ Blockchain Integrity Verified!\nChain Length: ${data.chainLength} Blocks`);
            } else {
                setTamperData(data);
            }
        } catch (e: any) {
            alert("Verification failed: " + e.message);
        } finally {
            setVerifying(false);
        }
    };

    const simulateAttack = async () => {
        try {
            const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
            const res = await fetch(`${baseUrl}/api/blockchain/simulate-attack`, {
                method: 'POST'
            });
            const data = await res.json();
            if (data.success) {
                alert("😈 Attack Simulated! Close this log to see the alert.");
            } else {
                alert("❌ Attack failed: " + data.error);
            }
        } catch (e: any) {
            alert("Error simulating attack: " + e.message);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="max-w-4xl max-h-[85vh] overflow-hidden flex flex-col bg-slate-950/80 backdrop-blur-2xl border-white/5 text-slate-200 shadow-2xl p-0 gap-0">
                <DialogHeader className="p-8 bg-white/5 border-b border-white/5">
                    <div className="flex justify-between items-center">
                        <div>
                            <DialogTitle className="text-2xl font-black flex items-center gap-3 tracking-tighter uppercase">
                                <ShieldAlert className="text-emerald-500 h-6 w-6" />
                                Integrity Ledger
                            </DialogTitle>
                            <p className="text-[10px] text-slate-500 font-bold tracking-[0.2em] mt-1">CRYPTOGRAPHIC AUDIT TRAIL • SECURE_NODE_01</p>
                        </div>
                        <div className="flex gap-3">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={simulateAttack}
                                className="text-[10px] uppercase font-bold tracking-widest text-rose-500 hover:bg-rose-500/10 hover:text-rose-400"
                            >
                                Simulate External Attack
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={verifyChain}
                                disabled={verifying}
                                className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20 rounded-full px-6 font-bold"
                            >
                                {verifying ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Lock className="h-4 w-4 mr-2" />}
                                Verify Chain
                            </Button>
                        </div>
                    </div>
                </DialogHeader>

                <div className="flex-1 overflow-y-auto p-8 space-y-4 custom-scrollbar">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-24 text-slate-500">
                            <div className="relative mb-6">
                                <Loader2 className="h-12 w-12 animate-spin text-emerald-500" />
                                <div className="absolute inset-0 blur-xl bg-emerald-500/20 animate-pulse" />
                            </div>
                            <p className="text-xs font-bold tracking-widest uppercase opacity-60">Synchronizing Ledger...</p>
                        </div>
                    ) : logs.length === 0 ? (
                        <div className="text-center py-24 text-slate-600 font-bold uppercase tracking-widest text-xs">No entries detected in local grid</div>
                    ) : (
                        logs.map((log, i) => (
                            <div key={i} className="group relative p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all duration-300">
                                <div className="absolute -right-4 -top-4 opacity-[0.02] pointer-events-none group-hover:opacity-10 transition-opacity">
                                    <Link size={120} />
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className={`p-3 rounded-xl ${log.action === 'BLOCK' ? 'bg-rose-500/10 text-rose-500 border border-rose-500/20' : 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'}`}>
                                        {log.action === 'BLOCK' ? <ShieldAlert size={20} /> : <CheckCircle size={20} />}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-black text-slate-100 tracking-tight text-sm uppercase">
                                                {log.action === 'BLOCK' ? 'Threat Intercepted' : 'Transaction Authenticated'}
                                            </h3>
                                            <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-slate-500 font-mono">
                                                {new Date(log.timestamp).toLocaleTimeString()}
                                            </span>
                                        </div>
                                        <p className="text-[10px] text-slate-500 mb-4 flex items-center gap-2">
                                            SIG ID: <span className="font-mono text-emerald-500/60 lowercase">{log.id}</span>
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5 p-3 rounded-xl bg-black/20 border border-white/5">
                                                <div className="flex items-center justify-between text-[9px] uppercase font-black tracking-widest text-slate-600">
                                                    <span>Block Hash</span>
                                                    <span className="text-emerald-500">LEN_256</span>
                                                </div>
                                                <div className="font-mono text-[10px] text-emerald-500/70 truncate bg-emerald-500/5 p-1.5 rounded">{log.hash}</div>
                                            </div>
                                            <div className="space-y-1.5 p-3 rounded-xl bg-black/20 border border-white/5">
                                                <div className="flex items-center justify-between text-[9px] uppercase font-black tracking-widest text-slate-600">
                                                    <span>Parent Ptr</span>
                                                    <span className="text-indigo-400">PTR_STK</span>
                                                </div>
                                                <div className="font-mono text-[10px] text-slate-400 truncate bg-white/5 p-1.5 rounded">{log.previousHash}</div>
                                            </div>
                                        </div>

                                        {log.notes && (
                                            <div className="mt-4 p-3 text-[11px] font-medium text-slate-400 bg-indigo-500/5 rounded-xl border border-indigo-500/10 italic leading-relaxed">
                                                {log.notes}
                                            </div>
                                        )}

                                        {log.signature && (
                                            <div className="mt-4 flex items-center justify-between gap-4 p-3 bg-white/5 rounded-xl border border-white/5 text-[9px] font-mono">
                                                <div className="flex gap-2">
                                                    <span className="text-slate-600 font-bold uppercase">Signer:</span>
                                                    <span className="text-emerald-400 font-bold">{log.signer}</span>
                                                </div>
                                                <div className="h-1 flex-1 bg-gradient-to-r from-emerald-500/20 to-transparent rounded-full" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <TamperModal
                    isOpen={!!tamperData}
                    onClose={() => setTamperData(null)}
                    data={tamperData}
                />
            </DialogContent>
        </Dialog>

    );
}
