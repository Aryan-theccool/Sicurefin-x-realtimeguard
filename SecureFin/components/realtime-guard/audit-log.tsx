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
            const res = await fetch('http://localhost:4000/api/actions');
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
            const res = await fetch('http://localhost:4000/api/blockchain/verify');
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

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="max-w-4xl max-h-[85vh] overflow-hidden flex flex-col bg-slate-950 border-slate-800 text-slate-200">
                <DialogHeader className="border-b border-slate-800 pb-4">
                    <div className="flex justify-between items-center pr-8">
                        <DialogTitle className="text-xl font-bold flex items-center gap-2">
                            <ShieldAlert className="text-emerald-500" />
                            Blockchain Audit Log
                        </DialogTitle>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={verifyChain}
                            disabled={verifying}
                            className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20"
                        >
                            {verifying ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Lock className="h-4 w-4 mr-2" />}
                            Verify Integrity
                        </Button>
                    </div>
                </DialogHeader>

                <div className="flex-1 overflow-y-auto mt-4 space-y-4 pr-2 custom-scrollbar">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20 text-slate-500">
                            <Loader2 className="h-10 w-10 animate-spin mb-4" />
                            <p>Loading encrypted audit trail...</p>
                        </div>
                    ) : logs.length === 0 ? (
                        <div className="text-center py-20 text-slate-600">No blockchain records found.</div>
                    ) : (
                        logs.map((log, i) => (
                            <div key={i} className="group relative p-4 bg-slate-900/50 rounded-xl border border-slate-800/50 hover:border-emerald-500/30 transition-all overflow-hidden">
                                <div className="absolute -right-4 -top-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                                    <Link size={100} />
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className={`p-2 rounded-full ${log.action === 'BLOCK' ? 'bg-red-500/20 text-red-500' : 'bg-emerald-500/20 text-emerald-500'}`}>
                                        {log.action === 'BLOCK' ? <ShieldAlert size={18} /> : <CheckCircle size={18} />}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="font-bold text-slate-200">
                                                {log.action === 'BLOCK' ? 'Transaction Blocked' : 'Marked as Legitimate'}
                                            </h3>
                                            <span className="text-[10px] text-slate-500">
                                                {new Date(log.timestamp).toLocaleString()}
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-400 truncate">
                                            Tx ID: <span className="font-mono text-slate-500">{log.id}</span>
                                        </p>

                                        <div className="mt-3 space-y-1">
                                            <div className="flex gap-2 text-[10px] font-mono">
                                                <span className="text-slate-500 w-12">HASH:</span>
                                                <span className="text-emerald-500/70 truncate">{log.hash}</span>
                                            </div>
                                            <div className="flex gap-2 text-[10px] font-mono">
                                                <span className="text-slate-500 w-12">PREV:</span>
                                                <span className="text-slate-600 truncate">{log.previousHash}</span>
                                            </div>
                                        </div>

                                        {log.notes && (
                                            <div className="mt-2 text-xs text-slate-400 bg-black/30 p-2 rounded border border-slate-800/50">
                                                {log.notes}
                                            </div>
                                        )}

                                        {log.signature && (
                                            <div className="mt-2 text-[9px] font-mono p-2 bg-emerald-950/20 border border-emerald-900/30 rounded">
                                                <div className="flex gap-1 break-all">
                                                    <span className="text-emerald-500 font-bold shrink-0">SIGNER:</span>
                                                    <span className="text-emerald-600">{log.signer}</span>
                                                </div>
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
