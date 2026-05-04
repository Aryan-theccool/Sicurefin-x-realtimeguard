import { AlertCircle, CheckCircle, XCircle, ChevronRight } from 'lucide-react';
import { ENDPOINTS } from '../config';

export default function ExplainabilityPanel({ transaction }) {
    const [feedbackSent, setFeedbackSent] = useState(false);

    if (!transaction) {
        return (
            <div className="glass-panel p-6 rounded-xl h-full flex items-center justify-center text-slate-500">
                <p>Select a transaction to view analysis</p>
            </div>
        );
    }

    const handleAction = async (action) => {
        try {
            await fetch(ENDPOINTS.ACTION, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    transaction_id: transaction.id,
                    action,
                    notes: 'Analyst manual review'
                })
            });
            setFeedbackSent(true);
            setTimeout(() => setFeedbackSent(false), 3000);
        } catch (e) {
            console.error(e);
        }
    };

    const isFraud = transaction.fraud_score > 80;

    return (
        <div className="glass-panel p-6 rounded-xl h-full flex flex-col">
            <h3 className="text-slate-400 text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                <AlertCircle size={16} /> ANALYSIS REPORT
            </h3>

            <div className="flex-1 space-y-4">
                <div className="p-4 bg-slate-950/50 rounded-lg border border-slate-800">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-400 text-xs">TRANSACTION ID</span>
                        <span className="font-mono text-xs text-slate-500">{transaction.id}</span>
                    </div>
                    <div className="text-xl font-bold text-white mb-1">
                        ₹{transaction.amount?.toFixed(2)}
                    </div>
                    <div className="text-sm text-slate-400">
                        {transaction.merchant} • {transaction.location}
                    </div>
                </div>

                <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">TRIGGERED RULES</h4>
                    <ul className="space-y-2">
                        {transaction.rule_triggers && transaction.rule_triggers.length > 0 ? (
                            transaction.rule_triggers.map((trigger, index) => (
                                <li key={index} className="flex items-center gap-2 text-red-400 text-sm bg-red-950/20 p-2 rounded">
                                    <ChevronRight size={14} />
                                    {trigger.replace(/_/g, ' ').replace('PMLA', 'PMLA:').replace('CTR', '(CTR)')}
                                </li>
                            ))
                        ) : isFraud ? (
                            // Fallback for legacy mock data without specific triggers
                            <>
                                <li className="flex items-center gap-2 text-red-400 text-sm bg-red-950/20 p-2 rounded">
                                    <ChevronRight size={14} /> High Risk Score Detected
                                </li>
                            </>
                        ) : (
                            <li className="flex items-center gap-2 text-emerald-400 text-sm bg-emerald-950/20 p-2 rounded">
                                <CheckCircle size={14} /> No Anomalies Detected
                            </li>
                        )}
                    </ul>
                </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-800">
                <h4 className="text-xs font-bold text-slate-500 uppercase mb-3">ANALYST FEEDBACK</h4>
                {feedbackSent ? (
                    <div className="text-center text-emerald-400 py-2 bg-emerald-950/30 rounded animate-pulse">
                        Feedback Submitted
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            onClick={() => handleAction('BLOCK')}
                            className="flex items-center justify-center gap-2 p-2 bg-red-600/20 hover:bg-red-600/40 text-red-400 border border-red-600/50 rounded transition-colors"
                        >
                            <XCircle size={16} /> Confirm Fraud
                        </button>
                        <button
                            onClick={() => handleAction('ALLOW')}
                            className="flex items-center justify-center gap-2 p-2 bg-emerald-600/20 hover:bg-emerald-600/40 text-emerald-400 border border-emerald-600/50 rounded transition-colors"
                        >
                            <CheckCircle size={16} /> False Positive
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
