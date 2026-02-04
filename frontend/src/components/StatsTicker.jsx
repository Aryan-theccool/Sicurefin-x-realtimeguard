import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, AlertTriangle, DollarSign, Activity } from 'lucide-react';

export default function StatsTicker({ transactions }) {
  const total = transactions.length;
  const fraud = transactions.filter(t => t.fraud_score > 80).length;
  const saved = fraud * 1250; // Mock average value

  const stats = [
    { label: 'Total Processed', value: total, icon: Activity, color: 'text-blue-400' },
    { label: 'Fraud Detected', value: fraud, icon: AlertTriangle, color: 'text-red-500' },
    { label: 'Est. Saved', value: `₹${saved.toLocaleString()}`, icon: DollarSign, color: 'text-emerald-400' },
    { label: 'System Status', value: 'OPERATIONAL', icon: ShieldCheck, color: 'text-green-400' },
  ];

  return (
    <div className="w-full bg-slate-950/50 border-b border-slate-800 overflow-hidden py-2">
      <div className="flex items-center justify-around max-w-6xl mx-auto px-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex items-center space-x-2">
            <stat.icon size={16} className={stat.color} />
            <span className="text-slate-400 text-xs uppercase tracking-wider">{stat.label}</span>
            <span className={`font-mono font-bold ${stat.color}`}>{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
