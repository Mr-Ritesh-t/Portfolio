import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BootScreen = () => {
  const [loading, setLoading] = useState(true);
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  const bootLogs = [
    "INITIALIZING ELITE_OS v3.4.0...",
    "LOADING NEURAL CORES...",
    "ESTABLISHING SECURE PROTOCOLS...",
    "MOUNTING WORK_REPOS...",
    "CALIBRATING UI FLUIDITY...",
    "SYSTEM_READY_FOR_DEPLOYMENT"
  ];

  useEffect(() => {
    let currentLog = 0;
    const logInterval = setInterval(() => {
      if (currentLog < bootLogs.length) {
        setLogs(prev => [...prev, bootLogs[currentLog]]);
        currentLog++;
        setProgress((currentLog / bootLogs.length) * 100);
      } else {
        clearInterval(logInterval);
        setTimeout(() => setLoading(false), 800);
      }
    }, 400);

    return () => clearInterval(logInterval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="fixed inset-0 z-[1000] bg-brand-black flex flex-col items-center justify-center font-mono p-4"
        >
          <div className="w-full max-w-md space-y-8">
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] text-brand-blue uppercase tracking-widest font-bold">
                <span>System Boot</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-brand-blue"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="space-y-1 h-32 overflow-hidden">
              {logs.map((log, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-[10px] md:text-xs text-white/40 flex items-center gap-2"
                >
                  <span className="text-brand-blue">>></span>
                  {log}
                </motion.div>
              ))}
            </div>

            <div className="pt-8 text-center">
              <motion.div
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-[10px] text-white/20 uppercase tracking-[0.5em]"
              >
                Initializing Consciousness
              </motion.div>
            </div>
          </div>
          
          {/* Decorative Grid */}
          <div className="absolute inset-0 z-[-1] opacity-20" 
               style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(64,48,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }} 
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BootScreen;
