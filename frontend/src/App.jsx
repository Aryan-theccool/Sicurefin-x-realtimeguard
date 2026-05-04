import React, { useState, useEffect } from 'react';
import StatsTicker from './components/StatsTicker';
import MapView from './components/MapView';
import LiveFeed from './components/LiveFeed';
import AuditLog from './components/AuditLog';
import ExplainabilityPanel from './components/ExplainabilityPanel';
import RiskGauge from './components/RiskGauge';
import TamperModal from './components/TamperModal';
import { ShieldAlert } from 'lucide-react';

import { WS_URL, ENDPOINTS } from './config';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [transactions, setTransactions] = useState([]);
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [isTamperModalOpen, setIsTamperModalOpen] = useState(false);
    const [isAuditLogOpen, setIsAuditLogOpen] = useState(false);
    const [isConnected, setIsConnected] = useState(false);

    const [verificationData, setVerificationData] = useState(null);

    useEffect(() => {
        const ws = new WebSocket(WS_URL);

        ws.onopen = () => {
            console.log('Connected to WebSocket');
            setIsConnected(true);
        };

        ws.onmessage = (event) => {
            try {
                const message = JSON.parse(event.data);
                if (message.type === 'HISTORY') {
                    setTransactions(message.data);
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
    }, []);

    // Auto-select first transaction if none selected
    useEffect(() => {
        if (!selectedTransaction && transactions.length > 0) {
            setSelectedTransaction(transactions[0]);
        }
    }, [transactions, selectedTransaction]);

    const verifyBlockchain = async () => {
        try {
            const response = await fetch(ENDPOINTS.VERIFY);
            const data = await response.json();

            if (data.valid) {
                alert(`✅ Blockchain Integrity Verified!\nChain Length: ${data.chainLength} Blocks\nStatus: SECURE`);
            } else {
                setVerificationData(data);
                setIsTamperModalOpen(true);
            }
        } catch (error) {
            console.error("Verification failed:", error);
            alert("❌ Error connecting to backend verification service.");
        }
    };

    if (!isLoggedIn) {
        return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
    }

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
            {/* Header */}
            <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h1 className="font-bold text-xl tracking-tight text-slate-100">
                            Realtime<span className="text-indigo-400">Guard</span>
                        </h1>
                        {isConnected ? (
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                        ) : (
                            <span className="h-2 w-2 rounded-full bg-red-500"></span>
                        )}
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsAuditLogOpen(true)}
                            className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700 rounded-md hover:bg-slate-700 transition-colors"
                        >
                            <ShieldAlert size={14} />
                            Audit Log
                        </button>
                        <button
                            onClick={verifyBlockchain}
                            className="px-3 py-1.5 text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20 rounded-md hover:bg-red-500/20 transition-colors"
                        >
                            Verify Integrity
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-[1600px] mx-auto px-4 py-6 h-[calc(100vh-64px)] overflow-hidden">
                {/* Stats Row */}
                <div className="mb-4">
                    <StatsTicker transactions={transactions} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100%-80px)]">

                    {/* Column 1: Live Feed (Left) */}
                    <div className="lg:col-span-1 bg-slate-900/50 rounded-xl border border-slate-800 flex flex-col overflow-hidden">
                        <div className="p-4 border-b border-slate-800 bg-slate-900/80">
                            <h2 className="font-semibold text-slate-200 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                Live Transactions
                            </h2>
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <LiveFeed transactions={transactions} onSelect={setSelectedTransaction} />
                        </div>
                    </div>

                    {/* Column 2 & 3: Map & Risk (Middle) */}
                    <div className="lg:col-span-2 relative bg-slate-900/50 rounded-xl border border-slate-800 overflow-hidden group">
                        <div className="absolute inset-0 bg-grid-slate-800/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none" />
                        <MapView transactions={transactions} />

                        {/* Risk Gauge Overlay */}
                        <div className="absolute top-4 left-4 z-[400]">
                            {selectedTransaction ? (
                                <RiskGauge score={selectedTransaction.fraud_score} />
                            ) : (
                                <div className="glass-panel p-4 rounded-xl text-slate-500 text-xs">
                                    Select TX for Risk
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Column 4: Analysis Report (Right) */}
                    <div className="lg:col-span-1">
                        <ExplainabilityPanel transaction={selectedTransaction} />
                    </div>

                </div>
            </main>

            {/* Modals */}
            <AuditLog isOpen={isAuditLogOpen} onClose={() => setIsAuditLogOpen(false)} />

            {isTamperModalOpen && (
                <TamperModal
                    isOpen={isTamperModalOpen}
                    onClose={() => setIsTamperModalOpen(false)}
                    data={verificationData}
                />
            )}
        </div>
    );
}

export default App;
