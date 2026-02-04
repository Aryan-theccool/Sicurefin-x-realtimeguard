import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, CheckCircle, CreditCard, MapPin } from 'lucide-react';

export default function LiveFeed({ transactions, onSelect }) {
  return (
    <div className="glass-panel h-full flex flex-col rounded-xl overflow-hidden">
      <div className="p-4 glass-header flex justify-between items-center">
        <h2 className="text-slate-100 font-bold flex items-center gap-2">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          LIVE STREAM
        </h2>
        <span className="text-xs text-slate-500 font-mono">
          {transactions.length} EVENTS
        </span>
      </div>

      <div className="flex-1 overflow-y-auto p-2 space-y-2 custom-scrollbar">
        <AnimatePresence initial={false}>
          {transactions.map((tx) => {
            const isFraud = tx.fraud_score > 80;
            const isSuspicious = tx.fraud_score > 50 && !isFraud;

            let borderClass = 'border-slate-800 hover:border-slate-600';
            let bgClass = 'bg-slate-900/40';
            let glowClass = '';

            if (isFraud) {
              borderClass = 'border-red-500/50 hover:border-red-500';
              bgClass = 'bg-red-950/20';
              glowClass = 'glow-red';
            } else if (isSuspicious) {
              borderClass = 'border-amber-500/50 hover:border-amber-500';
              bgClass = 'bg-amber-950/20';
            }

            return (
              <motion.div
                key={tx.id}
                initial={{ opacity: 0, x: -20, height: 0 }}
                animate={{ opacity: 1, x: 0, height: 'auto' }}
                exit={{ opacity: 0, x: 20, height: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => onSelect(tx)}
                className={`
                  relative p-3 rounded-lg border cursor-pointer transition-all duration-200
                  ${borderClass} ${bgClass} ${glowClass}
                `}
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full ${isFraud ? 'bg-red-500/20 text-red-500' : 'bg-emerald-500/20 text-emerald-500'}`}>
                      {isFraud ? <AlertTriangle size={16} /> : <CheckCircle size={16} />}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-200 flex items-center gap-2">
                        {tx.merchant}
                        {isFraud && <span className="text-[10px] bg-red-600 text-white px-1 rounded">FRAUD</span>}
                      </div>
                      <div className="text-xs text-slate-500 flex items-center gap-1">
                        <MapPin size={10} /> {tx.location}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono font-bold text-slate-200">₹{tx.amount?.toFixed(2)}</div>
                    <div className="text-[10px] text-slate-500">{new Date(tx.timestamp).toLocaleTimeString()}</div>
                  </div>
                </div>

                {/* Micro-interaction line */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-[2px] ${isFraud ? 'bg-red-500' : 'bg-emerald-500'}`}
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2 }}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
