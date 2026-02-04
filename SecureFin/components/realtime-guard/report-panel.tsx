"use client";

import { useState } from 'react';
import { AlertCircle, CheckCircle, XCircle, ChevronRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Transaction {
    id: string;
    merchant: string;
    amount: number;
    fraud_score: number;
    location: string;
    rule_triggers?: string[];
}

interface ReportPanelProps {
    transaction: Transaction | null;
}

export function ReportPanel({ transaction }: ReportPanelProps) {
    const [submitting, setSubmitting] = useState(false);
    const [lastAction, setLastAction] = useState<string | null>(null);

    if (!transaction) {
        return (
            <div className="bg-black/50 border border-green-900/30 p-6 rounded-lg h-full flex flex-col items-center justify-center text-green-900">
                <AlertCircle className="h-12 w-12 mb-4 opacity-20" />
                <p className="text-sm font-bold tracking-widest uppercase opacity-40">Awaiting Signal Selection</p>
            </div>
        );
    }

    const handleAction = async (action: string) => {
        setSubmitting(true);
        try {
            const res = await fetch('http://localhost:4000/api/action', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    transaction_id: transaction.id,
                    action,
                    notes: 'Analyst manual review via RealtimeGuard Terminal'
                })
            });

            if (res.ok) {
                setLastAction(action);
                setTimeout(() => setLastAction(null), 3000);
            }
        } catch (e) {
            console.error("Action failed", e);
        } finally {
            setSubmitting(false);
        }
    };

    const isHighRisk = transaction.fraud_score > 80;

    return (
        <div className="bg-black/80 border border-green-900 rounded-lg p-6 h-full flex flex-col relative overflow-hidden group">
            {/* Scanner Animation Effect */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-green-500/30 animate-[scan_3s_linear_infinite] shadow-[0_0_15px_rgba(34,197,94,0.5)] z-0" />

            <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-green-500 text-xs font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                    <Activity className="h-4 w-4 animate-pulse" /> TRANSACTION FORENSICS
                </h3>

                <div className="flex-1 space-y-6">
                    <div className="p-4 bg-green-950/20 rounded border border-green-900/50">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-green-900 text-[10px] font-bold">SIGNAL ID</span>
                            <span className="font-mono text-[10px] text-green-500/70">{transaction.id}</span>
                        </div>
                        <div className="text-2xl font-bold text-white mb-1 tracking-tight">
                            ₹{transaction.amount?.toLocaleString()}
                        </div>
                        <div className="text-sm text-green-300 font-bold uppercase tracking-wider">
                            {transaction.merchant}
                        </div>
                        <div className="text-xs text-green-700 mt-1">
                            LOC: {transaction.location}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-bold text-green-800 uppercase tracking-widest mb-3">Anomaly Detection Matrix</h4>
                        <div className="space-y-2">
                            {transaction.rule_triggers && transaction.rule_triggers.length > 0 ? (
                                transaction.rule_triggers.map((trigger, index) => (
                                    <div key={index} className="flex items-center gap-2 text-red-400 text-[11px] bg-red-950/30 p-2 rounded border border-red-900/20 font-bold">
                                        <ChevronRight size={14} className="shrink-0" />
                                        {trigger.replace(/_/g, ' ')}
                                    </div>
                                ))
                            ) : isHighRisk ? (
                                <div className="flex items-center gap-2 text-yellow-500 text-[11px] bg-yellow-950/30 p-2 rounded border border-yellow-900/20 font-bold">
                                    <AlertCircle size={14} className="shrink-0" />
                                    Heuristic Risk Threshold Breached
                                </div>
                            ) : (
                                <div className="flex items-center gap-2 text-green-400 text-[11px] bg-green-950/30 p-2 rounded border border-green-900/20 font-bold">
                                    <CheckCircle size={14} className="shrink-0" />
                                    Baseline Integrity Verified
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-green-900/50">
                    <h4 className="text-[10px] font-bold text-green-800 uppercase tracking-widest mb-4">Command Actions</h4>

                    {lastAction ? (
                        <div className={`text-center py-3 rounded border font-bold text-sm animate-pulse ${lastAction === 'BLOCK' ? 'bg-red-500/10 border-red-500/20 text-red-400' : 'bg-green-500/10 border-green-500/20 text-green-400'}`}>
                            {lastAction === 'BLOCK' ? 'THREAT NEUTRALIZED' : 'LEGITIMACY RECORDED'}
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 gap-4">
                            <Button
                                onClick={() => handleAction('BLOCK')}
                                disabled={submitting}
                                variant="destructive"
                                className="bg-red-900/20 border-red-800 hover:bg-red-600 hover:text-white text-red-500 h-10 font-bold  uppercase tracking-tighter text-xs"
                            >
                                {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <XCircle className="h-4 w-4 mr-2" />}
                                Block Threat
                            </Button>
                            <Button
                                onClick={() => handleAction('ALLOW')}
                                disabled={submitting}
                                variant="outline"
                                className="bg-green-900/20 border-green-800 hover:bg-green-600 hover:text-white text-green-500 h-10 font-bold uppercase tracking-tighter text-xs"
                            >
                                {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <CheckCircle className="h-4 w-4 mr-2" />}
                                Mark Safe
                            </Button>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
                @keyframes scan {
                    0% { top: 0; opacity: 0; }
                    50% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
            `}</style>
        </div>
    );
}

import { Activity } from 'lucide-react';
