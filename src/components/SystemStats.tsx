import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Clock, Server } from 'lucide-react';

const SystemStats = () => {
  const [uptime, setUptime] = useState(0);
  const [cpu, setCpu] = useState(12);

  useEffect(() => {
    const timer = setInterval(() => {
      setUptime(prev => prev + 1);
    }, 1000);

    const cpuTimer = setInterval(() => {
      setCpu(Math.floor(Math.random() * 15) + 5);
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(cpuTimer);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed top-24 right-6 z-30 hidden lg:block pointer-events-none">
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-brand-black/40 backdrop-blur-md border border-white/10 rounded-lg p-3 w-44 space-y-3"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Server size={14} className="text-brand-blue" />
            <span className="text-[10px] font-mono text-white/40 uppercase">System Status</span>
          </div>
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock size={12} className="text-white/40" />
              <span className="text-[10px] font-mono text-white/60">UPTIME</span>
            </div>
            <span className="text-[10px] font-mono text-brand-blue">{formatTime(uptime)}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity size={12} className="text-white/40" />
              <span className="text-[10px] font-mono text-white/60">CPU LOAD</span>
            </div>
            <span className="text-[10px] font-mono text-brand-blue">{cpu}%</span>
          </div>
        </div>

        <div className="pt-2 border-t border-white/5">
          <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
            <motion.div 
              animate={{ width: `${cpu}%` }}
              className="h-full bg-brand-blue"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SystemStats;
