import React from 'react';
import { motion } from 'framer-motion';

export default function RiskGauge({ score = 0 }) {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (score / 100) * circumference;

    let color = 'text-emerald-500';
    if (score > 50) color = 'text-amber-500';
    if (score > 80) color = 'text-red-600';

    return (
        <div className="flex flex-col items-center justify-center p-4 glass-panel rounded-xl">
            <h3 className="text-slate-400 text-sm uppercase tracking-widest mb-4">Fraud Probability</h3>
            <div className="relative w-32 h-32">
                <svg className="w-full h-full transform -rotate-90">
                    <circle
                        cx="64"
                        cy="64"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-slate-800"
                    />
                    <motion.circle
                        cx="64"
                        cy="64"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className={color}
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset: offset }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        strokeLinecap="round"
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className={`text-3xl font-bold ${color}`}>{score}%</span>
                    <span className="text-xs text-slate-500">RISK</span>
                </div>
            </div>
        </div>
    );
}
