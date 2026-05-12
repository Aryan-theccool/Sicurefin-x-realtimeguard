import React, { useEffect, useState } from 'react';
import { X, ShieldAlert, CheckCircle, Clock, Link, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TamperModal from './TamperModal';
import { ENDPOINTS } from '../config';

export default function AuditLog({ isOpen, onClose }) {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [verifying, setVerifying] = useState(false);
    const [tamperData, setTamperData] = useState(null);

    useEffect(() => {
        if (isOpen) {
            fetchLogs();
        }
    }, [isOpen]);

    const fetchLogs = async () => {
        setLoading(true);
        try {
            const res = await fetch(ENDPOINTS.ACTIONS);
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
            const res = await fetch(ENDPOINTS.VERIFY);
            const data = await res.json();
            console.log("Verification Result:", data);
            if (data.valid) {
                alert(`Blockchain Verified! Chain Length: ${data.chainLength}`);
            } else {
                console.log("Tamper Detected:", data);
                setTamperData(data);
            }
        } catch (e) {
            alert("Verification failed: " + e.message);
        } finally {
            setVerifying(false);
        }
    };

    const simulateAttack = async () => {
        try {
            const res = await fetch(`${ENDPOINTS.ACTION.replace('/api/action', '')}/api/blockchain/simulate-attack`, {
                method: 'POST'
            });
            const data = await res.json();
            if (data.success) {
                alert("😈 Attack Simulated! Close this log to see the alert.");
            } else {
                alert("❌ Attack failed: " + data.error);
            }
        } catch (e) {
            alert("Error simulating attack: " + e.message);
        }
    };

    if (!isOpen) return null;

    return (
        <>
            <TamperModal
                isOpen={!!tamperData}
                onClose={() => setTamperData(null)}
                data={tamperData}
            />

            <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-3xl max-h-[80vh] flex flex-col shadow-2xl"
                >
                    <div className="p-6 border-b border-slate-800 flex justify-between items-center">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <ShieldAlert className="text-emerald-400" /> Blockchain Audit Log
                        </h2>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={simulateAttack}
                                className="text-[10px] uppercase font-bold tracking-widest text-red-500 hover:text-red-400 px-3 py-1 hover:bg-red-500/10 rounded transition-colors"
                            >
                                Simulate Attack
                            </button>
                            <button
                                onClick={verifyChain}
                                disabled={verifying}
                                className="text-xs bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors flex items-center gap-1"
                            >
                                <Lock size={12} />
                                {verifying ? "Verifying..." : "Verify Integrity"}
                            </button>
                            <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
                                <X size={24} />
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
                        {loading ? (
                            <div className="text-center text-slate-500 py-10">Loading history...</div>
                        ) : logs.length === 0 ? (
                            <div className="text-center text-slate-500 py-10">No actions recorded yet.</div>
                        ) : (
                            logs.map((log, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 bg-slate-950/50 rounded-lg border border-slate-800 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-2 opacity-10">
                                        <Link size={64} />
                                    </div>
                                    <div className={`p-2 rounded-full ${log.action === 'BLOCK' ? 'bg-red-500/20 text-red-500' : 'bg-emerald-500/20 text-emerald-500'}`}>
                                        {log.action === 'BLOCK' ? <ShieldAlert size={18} /> : <CheckCircle size={18} />}
                                    </div>
                                    <div className="flex-1 z-10">
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-bold text-slate-200">
                                                {log.action === 'BLOCK' ? 'Transaction Blocked' : 'Marked as False Positive'}
                                            </h3>
                                            <span className="text-xs text-slate-500 flex items-center gap-1">
                                                <Clock size={12} /> {new Date(log.timestamp).toLocaleString()}
                                            </span>
                                        </div>
                                        <p className="text-sm text-slate-400 mt-1">
                                            Transaction ID: <span className="font-mono text-slate-500">{log.id}</span>
                                        </p>

                                        <div className="mt-3 grid grid-cols-1 gap-2 text-[10px] font-mono text-slate-500 bg-slate-900/50 p-2 rounded border border-slate-800/50">
                                            <div className="flex gap-2">
                                                <span className="text-slate-400">Hash:</span>
                                                <span className="truncate text-emerald-500/70">{log.hash}</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <span className="text-slate-400">Prev:</span>
                                                <span className="truncate text-slate-600">{log.previousHash}</span>
                                            </div>
                                        </div>

                                        {log.notes && (
                                            <div className="mt-2 text-xs bg-slate-900 p-2 rounded text-slate-400 border border-slate-800">
                                                Note: {log.notes}
                                            </div>
                                        )}

                                        {log.signature && (
                                            <div className="mt-2 text-[10px] font-mono text-emerald-600 bg-emerald-950/30 p-2 rounded border border-emerald-900/50 break-all">
                                                <div className="mb-1">
                                                    <span className="text-emerald-500 font-bold">ETH Signer:</span> {log.signer}
                                                </div>
                                                <div>
                                                    <span className="text-emerald-500 font-bold">Signature:</span> {log.signature}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </motion.div>
            </div>
        </>
    );
}
