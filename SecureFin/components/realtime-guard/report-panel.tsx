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
            <div className="bg-slate-900/30 border border-white/5 p-8 rounded-[2rem] h-full flex flex-col items-center justify-center text-slate-600 shadow-2xl backdrop-blur-sm">
                <div className="relative mb-6">
                    <AlertCircle className="h-16 w-16 opacity-10" />
                    <div className="absolute inset-0 blur-2xl bg-white/5 animate-pulse" />
                </div>
                <p className="text-[10px] font-black tracking-[0.3em] uppercase opacity-40 text-center">Interpreting Node Telemetry...<br/>Select Signal</p>
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
                    notes: 'Analyst manual review via Realguard Interface'
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
        <div className="bg-slate-900/60 border border-white/5 rounded-[2rem] p-8 h-full flex flex-col relative overflow-hidden group shadow-2xl backdrop-blur-xl">
            {/* Ambient Animated Gradient */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 blur-[100px] pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-700" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-500/10 blur-[100px] pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-700" />

            {/* Shimmer Scanner Effect */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent animate-[shimmer_4s_infinite] z-0" />

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                    <h3 className="text-slate-400 text-xs font-black uppercase tracking-[0.3em] flex items-center gap-3">
                        <Activity className="h-4 w-4 text-emerald-500 animate-pulse" /> Signal Analysis
                    </h3>
                    <div className="px-2 py-1 bg-white/5 rounded-md border border-white/5 text-[8px] font-bold text-slate-500">REF_TERMINAL_2.1</div>
                </div>

                <div className="flex-1 space-y-8">
                    <div className="p-6 bg-white/5 rounded-3xl border border-white/5 relative overflow-hidden group/card shadow-inner">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />
                        <div className="flex justify-between items-center mb-2 relative z-10">
                            <span className="text-slate-600 text-[9px] font-black tracking-widest uppercase">Telemetry ID</span>
                            <span className="font-mono text-[9px] text-emerald-500/60 lowercase">{transaction.id}</span>
                        </div>
                        <div className="text-4xl font-black text-white mb-2 tracking-tighter relative z-10">
                            ₹{transaction.amount?.toLocaleString()}
                        </div>
                        <div className="text-md font-black text-slate-200 uppercase tracking-tight relative z-10">
                            {transaction.merchant}
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-slate-500 mt-4 font-bold uppercase tracking-widest relative z-10">
                            <span className="h-1 w-1 rounded-full bg-indigo-500" />
                            Grid Node: {transaction.location}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] px-1">Heuristic Matrix</h4>
                        <div className="space-y-2.5">
                            {transaction.rule_triggers && transaction.rule_triggers.length > 0 ? (
                                transaction.rule_triggers.map((trigger, index) => (
                                    <div key={index} className="flex items-center gap-3 text-rose-400 text-[11px] bg-rose-500/5 p-3 rounded-2xl border border-rose-500/10 font-bold group/rule hover:bg-rose-500/10 transition-colors">
                                        <div className="h-1.5 w-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)]" />
                                        {trigger.replace(/_/g, ' ')}
                                    </div>
                                ))
                            ) : isHighRisk ? (
                                <div className="flex items-center gap-3 text-amber-400 text-[11px] bg-amber-500/5 p-3 rounded-2xl border border-amber-500/10 font-bold">
                                    <AlertCircle size={14} className="shrink-0 animate-pulse" />
                                    Threshold Violation Detected
                                </div>
                            ) : (
                                <div className="flex items-center gap-3 text-emerald-400 text-[11px] bg-emerald-500/5 p-3 rounded-2xl border border-emerald-500/10 font-bold">
                                    <CheckCircle size={14} className="shrink-0" />
                                    Baseline Integrity Verified
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/5">
                    <h4 className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] mb-5 px-1">Enforcement Protcols</h4>

                    {lastAction ? (
                        <div className={`text-center py-4 rounded-2xl border font-black text-[10px] tracking-widest uppercase animate-pulse shadow-2xl ${lastAction === 'BLOCK' ? 'bg-rose-500/20 border-rose-500/30 text-rose-400' : 'bg-emerald-500/20 border-emerald-500/30 text-emerald-400'}`}>
                            {lastAction === 'BLOCK' ? 'Threat Neutralized' : 'Validation Recorded'}
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 gap-4">
                            <Button
                                onClick={() => handleAction('BLOCK')}
                                disabled={submitting}
                                variant="destructive"
                                className="bg-rose-500/10 border-rose-500/20 hover:bg-rose-600 text-rose-500 hover:text-white h-12 font-black uppercase tracking-widest text-[10px] rounded-2xl transition-all shadow-lg"
                            >
                                {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <XCircle className="h-4 w-4 mr-2" />}
                                Neutralize
                            </Button>
                            <Button
                                onClick={() => handleAction('ALLOW')}
                                disabled={submitting}
                                variant="outline"
                                className="bg-emerald-500/10 border-emerald-500/20 hover:bg-emerald-600 text-emerald-500 hover:text-white h-12 font-black uppercase tracking-widest text-[10px] rounded-2xl transition-all shadow-lg"
                            >
                                {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <CheckCircle className="h-4 w-4 mr-2" />}
                                Validate
                            </Button>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
                @keyframes shimmer {
                    0% { transform: translateY(0); opacity: 0; }
                    20% { opacity: 0.5; }
                    80% { opacity: 0.5; }
                    100% { transform: translateY(650px); opacity: 0; }
                }
            `}</style>
        </div>

    );
}

import { Activity } from 'lucide-react';
