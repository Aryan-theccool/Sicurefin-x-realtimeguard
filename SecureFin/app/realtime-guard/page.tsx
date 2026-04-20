"use client"

import { useEffect, useState } from "react"
import { Shield, Activity, Lock, AlertTriangle, Server, Home, ShieldAlert, Cpu, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import dynamic from 'next/dynamic'
import { LiveFeed } from "@/components/realtime-guard/live-feed"
import { AuditLog } from "@/components/realtime-guard/audit-log"
import { ReportPanel } from "@/components/realtime-guard/report-panel"
import { TamperModal } from "@/components/realtime-guard/tamper-modal"

// Load MapView dynamically to avoid SSR issues
const MapView = dynamic(() => import('@/components/realtime-guard/map-view'), { ssr: false });

export default function RealtimeGuardPage() {
    const [transactions, setTransactions] = useState<any[]>([])
    const [selectedTransaction, setSelectedTransaction] = useState<any>(null)
    const [isAuditLogOpen, setIsAuditLogOpen] = useState(false)
    const [isConnected, setIsConnected] = useState(false)
    const [tamperData, setTamperData] = useState<any>(null)
    const [isTamperModalOpen, setIsTamperModalOpen] = useState(false)

    useEffect(() => {
        const wsUrl = 'ws://localhost:4000';
        const ws = new WebSocket(wsUrl);

        ws.onopen = () => {
            console.log('Connected to WebSocket');
            setIsConnected(true);
        };

        ws.onmessage = (event) => {
            try {
                const message = JSON.parse(event.data);
                if (message.type === 'HISTORY') {
                    setTransactions(message.data);
                    // Select first transaction by default if none selected
                    if (message.data.length > 0 && !selectedTransaction) {
                        setSelectedTransaction(message.data[0]);
                    }
                } else if (message.type === 'TX') {
                    setTransactions(prev => [message.data, ...prev].slice(0, 50));
                } else if (message.type === 'BLOCKCHAIN_TAMPERED') {
                    setTamperData(message.data);
                    setIsTamperModalOpen(true);
                } else if (message.type === 'BLOCKCHAIN_RECOVERY') {
                    setIsTamperModalOpen(false);
                    setTamperData(null);
                }
            } catch (e) {
                console.error('Error parsing WS message:', e);
            }
        };

        ws.onclose = () => {
            console.log('Disconnected from WebSocket');
            setIsConnected(false);
        };

        return () => ws.close();
    }, []);

    const handleSimulateAttack = async () => {
        try {
            await fetch('http://localhost:4000/api/blockchain/simulate-attack', { method: 'POST' });
        } catch (e) {
            console.error('Failed to simulate');
        }
    }

    const handleRestoreChain = async () => {
        try {
            await fetch('http://localhost:4000/api/blockchain/restore', { method: 'POST' });
            setIsTamperModalOpen(false);
            setTamperData(null);
        } catch (e) {
            console.error('Failed to restore');
        }
    }

    const fraudCount = transactions.filter(t => t.fraud_score > 80).length;

    return (
        <div className="min-h-screen bg-[#030712] text-slate-200 font-sans flex flex-col relative overflow-hidden">
            <AuditLog isOpen={isAuditLogOpen} onClose={() => setIsAuditLogOpen(false)} />

            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#1e293b,transparent)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

            <header className="border-b border-white/5 bg-slate-950/40 backdrop-blur-xl sticky top-0 z-50">
                <div className="container flex h-20 items-center justify-between px-4 md:px-6">
                    <div className="flex items-center gap-4">
                        <div className="relative group">
                            <div className="absolute -inset-2 bg-emerald-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            <Shield className="h-9 w-9 text-emerald-500 relative" />
                            <Cpu className="h-4 w-4 text-indigo-400 absolute -bottom-1 -right-1" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-black text-2xl tracking-tighter uppercase leading-none bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">Realguard</span>
                            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em]">Integrity Protocol • v2.1</span>
                        </div>
                    </div>

                    <div className="hidden xl:flex items-center gap-12 px-8 border-x border-white/5">
                        <div className="flex flex-col">
                            <span className="text-[9px] text-slate-500 uppercase font-bold tracking-widest mb-1">Defense Vector</span>
                            <span className="text-xs font-bold text-emerald-400 flex items-center gap-2">
                                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> ACTIVE_ENFORCEMENT
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[9px] text-slate-500 uppercase font-bold tracking-widest mb-1">Grid Latency</span>
                            <span className="text-xs font-bold text-indigo-400">0.024ms</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setIsAuditLogOpen(true)}
                            className="bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white transition-all rounded-full px-5"
                        >
                            <ShieldAlert className="h-4 w-4 mr-2" />
                            Audit Trail
                        </Button>
                        <Button
                            size="sm"
                            onClick={handleSimulateAttack}
                            className="bg-rose-500/10 hover:bg-rose-500/20 text-rose-500 border border-rose-500/20 font-bold rounded-full px-5"
                        >
                            <Zap className="h-4 w-4 mr-2" /> Simulate Breach
                        </Button>
                        
                        <div className="h-8 w-px bg-white/10 mx-2" />

                        <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                            <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)] animate-pulse' : 'bg-rose-500'}`} />
                            <span className="text-[10px] font-black tracking-widest text-slate-400">
                                {isConnected ? 'LIVE' : 'OFFLINE'}
                            </span>
                        </div>
                        
                        <Button variant="ghost" size="icon" asChild className="text-slate-500 hover:text-white hover:bg-white/5 rounded-full">
                            <Link href="/">
                                <Home className="h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </header>

            <main className="flex-1 container px-4 md:px-6 py-10 space-y-10 relative z-10">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        { label: 'System Integrity', value: fraudCount > 5 ? 'COMPROMISED' : 'SECURE', icon: AlertTriangle, color: fraudCount > 5 ? 'text-rose-500' : 'text-emerald-500', trend: 'L1' },
                        { label: 'Processing Power', value: isConnected ? '4.82 TFLOPS' : '0.00', icon: Activity, color: 'text-indigo-400', trend: 'UP' },
                        { label: 'Neutralized Threats', value: fraudCount, icon: Shield, color: 'text-slate-200', trend: 'TOTAL' },
                        { label: 'Blockchain Depth', value: '14,208', icon: Server, color: 'text-slate-400', trend: 'V2' }
                    ].map((stat, i) => (
                        <div key={i} className="glass-card bg-slate-900/40 border border-white/5 p-6 rounded-2xl relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-500 shadow-2xl">
                            <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                                <stat.icon className="h-24 w-24" />
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-[0.2em]">{stat.label}</span>
                                <span className="text-[8px] font-black px-1.5 py-0.5 rounded bg-white/5 text-slate-400">{stat.trend}</span>
                            </div>
                            <div className={`text-2xl font-black tracking-tight ${stat.color}`}>
                                {stat.value}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid gap-8 lg:grid-cols-4 h-full min-h-[650px]">
                    <div className="lg:col-span-2 bg-slate-900/30 border border-white/5 rounded-3xl overflow-hidden flex flex-col shadow-2xl relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none" />
                        <MapView transactions={transactions} />
                    </div>
                    <div className="bg-slate-900/40 border border-white/5 rounded-3xl flex flex-col h-[650px] shadow-2xl backdrop-blur-sm overflow-hidden">
                        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
                            <h3 className="text-xs font-black uppercase tracking-widest flex items-center gap-3">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                Transmission Feed
                            </h3>
                            <div className="flex gap-1">
                                <div className="h-1 w-4 bg-emerald-500/50 rounded-full" />
                                <div className="h-1 w-2 bg-white/10 rounded-full" />
                            </div>
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <LiveFeed transactions={transactions} onSelect={setSelectedTransaction} />
                        </div>
                    </div>
                    <div className="h-[650px]">
                        <ReportPanel transaction={selectedTransaction} />
                    </div>
                </div>
            </main>
            <TamperModal
                isOpen={isTamperModalOpen}
                onClose={() => setIsTamperModalOpen(false)}
                onRepair={handleRestoreChain}
                data={tamperData}
            />
        </div>

    )
}
