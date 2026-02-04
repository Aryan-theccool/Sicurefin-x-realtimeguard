"use client"

import { useEffect, useState } from "react"
import { Shield, Activity, Lock, AlertTriangle, Server, Home, ShieldAlert, Cpu, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import dynamic from 'next/dynamic'
import { LiveFeed } from "@/components/realtime-guard/live-feed"
import { AuditLog } from "@/components/realtime-guard/audit-log"
import { ReportPanel } from "@/components/realtime-guard/report-panel"

// Load MapView dynamically to avoid SSR issues
const MapView = dynamic(() => import('@/components/realtime-guard/map-view'), { ssr: false });

export default function RealtimeGuardPage() {
    const [transactions, setTransactions] = useState<any[]>([])
    const [selectedTransaction, setSelectedTransaction] = useState<any>(null)
    const [isAuditLogOpen, setIsAuditLogOpen] = useState(false)
    const [isConnected, setIsConnected] = useState(false)

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
    }, [selectedTransaction]);

    const fraudCount = transactions.filter(t => t.fraud_score > 80).length;

    return (
        <div className="min-h-screen bg-black text-green-500 font-mono flex flex-col relative overflow-hidden">
            <AuditLog isOpen={isAuditLogOpen} onClose={() => setIsAuditLogOpen(false)} />

            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />

            <header className="border-b border-green-900/50 bg-black/80 backdrop-blur-md sticky top-0 z-50">
                <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Shield className="h-8 w-8 text-green-500 animate-pulse" />
                            <Cpu className="h-4 w-4 text-green-400 absolute -bottom-1 -right-1" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-lg tracking-[0.2em] uppercase leading-none">RealtimeGuard</span>
                            <span className="text-[10px] text-green-800 font-bold uppercase tracking-widest">Global Defense Grid • Alpha v2.0</span>
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center gap-8 px-6 border-x border-green-900/30">
                        <div className="flex flex-col items-center">
                            <span className="text-[9px] text-green-900 uppercase font-bold">Node Status</span>
                            <span className="text-[11px] font-bold text-green-500 flex items-center gap-1">
                                <Zap className="h-3 w-3 fill-green-500" /> STABLE
                            </span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-[9px] text-green-900 uppercase font-bold">Traffic Purge</span>
                            <span className="text-[11px] font-bold text-green-500">99.9%</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setIsAuditLogOpen(true)}
                            className="bg-green-950/20 border-green-800 text-green-400 hover:bg-green-500 hover:text-black transition-all duration-300 group"
                        >
                            <ShieldAlert className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                            Audit Log
                        </Button>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-green-700 bg-green-950/30 px-3 py-1.5 rounded border border-green-900/50">
                            <div className={`w-1.5 h-1.5 rounded-full ${isConnected ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,1)] animate-pulse' : 'bg-red-500'}`} />
                            {isConnected ? 'LIVE_PROTOCOL_ACTIVE' : 'PROTOCOL_OFFLINE'}
                        </div>
                        <Button variant="ghost" size="sm" asChild className="text-green-900 hover:text-green-400 hover:bg-green-950/50">
                            <Link href="/">
                                <Home className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </header>

            <main className="flex-1 container px-4 md:px-6 py-8 space-y-8 relative z-10">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <div className="bg-black/50 border border-green-900/50 p-4 rounded-lg relative overflow-hidden group hover:border-green-500/50 transition-colors">
                        <div className="absolute -right-2 -bottom-2 opacity-5 group-hover:opacity-10 transition-opacity">
                            <AlertTriangle className="h-16 w-16" />
                        </div>
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-[10px] uppercase font-bold text-green-800 tracking-widest">Threat Level</h3>
                            <div className="h-1 w-12 bg-green-900 rounded-full overflow-hidden">
                                <div className={`h-full bg-red-500 transition-all duration-1000`} style={{ width: `${Math.min(fraudCount * 10, 100)}%` }} />
                            </div>
                        </div>
                        <div className={`text-2xl font-bold tracking-tighter ${fraudCount > 5 ? 'text-red-500' : 'text-yellow-500'}`}>
                            {fraudCount > 10 ? 'CRITICAL' : fraudCount > 5 ? 'HIGH' : 'MODERATE'}
                        </div>
                    </div>

                    <div className="bg-black/50 border border-green-900/50 p-4 rounded-lg relative overflow-hidden group hover:border-green-500/50 transition-colors">
                        <div className="absolute -right-2 -bottom-2 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Activity className="h-16 w-16" />
                        </div>
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-[10px] uppercase font-bold text-green-800 tracking-widest">Sync Frequency</h3>
                        </div>
                        <div className="text-2xl font-bold tracking-tighter">{isConnected ? '2.48 GHz' : '0.00 GHz'}</div>
                    </div>

                    <div className="bg-black/50 border border-green-900/50 p-4 rounded-lg relative overflow-hidden group hover:border-green-500/50 transition-colors">
                        <div className="absolute -right-2 -bottom-2 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Shield className="h-16 w-16" />
                        </div>
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-[10px] uppercase font-bold text-green-800 tracking-widest">Confirmed Frauds</h3>
                        </div>
                        <div className="text-2xl font-bold tracking-tighter text-red-500/80">{fraudCount}</div>
                    </div>

                    <div className="bg-black/50 border border-green-900/50 p-4 rounded-lg relative overflow-hidden group hover:border-green-500/50 transition-colors">
                        <div className="absolute -right-2 -bottom-2 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Server className="h-16 w-16" />
                        </div>
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-[10px] uppercase font-bold text-green-800 tracking-widest">Buffer Latency</h3>
                        </div>
                        <div className="text-2xl font-bold tracking-tighter">14ms</div>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-4 h-full min-h-[600px]">
                    <div className="md:col-span-2 bg-black/50 border border-green-900 rounded-lg overflow-hidden flex flex-col">
                        <MapView transactions={transactions} />
                    </div>
                    <div className="bg-black/50 border border-green-900 rounded-lg flex flex-col h-[600px]">
                        <div className="p-4 border-b border-green-900/50 flex justify-between items-center">
                            <h3 className="text-sm font-bold flex items-center gap-2">
                                <Lock className="h-4 w-4" />
                                Live Stream
                            </h3>
                            <span className="text-[10px] text-green-800 animate-pulse">SYNCHRONIZING</span>
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <LiveFeed transactions={transactions} onSelect={setSelectedTransaction} />
                        </div>
                    </div>
                    <div className="h-[600px]">
                        <ReportPanel transaction={selectedTransaction} />
                    </div>
                </div>
            </main>
        </div>
    )
}
