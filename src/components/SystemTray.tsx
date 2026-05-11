import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, Battery, Volume2, Moon, Sun, Cpu, Settings, Zap, Shield, Monitor } from 'lucide-react';
import { useSound } from './SoundProvider';

const SystemTray = () => {
  const [time, setTime] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { playHover, playClick } = useSound();
  const [hackerMode, setHackerMode] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleHackerMode = () => {
    setHackerMode(!hackerMode);
    document.documentElement.classList.toggle('hacker-mode');
    playClick();
  };

  return (
    <div className="fixed top-6 right-8 z-[100] hidden md:flex items-center gap-4">
      {/* Control Center Trigger */}
      <motion.button
        onClick={() => { setIsMenuOpen(!isMenuOpen); playClick(); }}
        onMouseEnter={playHover}
        className="flex items-center gap-3 px-4 py-2 bg-brand-black/40 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/5 transition-all group"
      >
        <div className="flex items-center gap-2 border-r border-white/10 pr-3">
          <Wifi size={14} className="text-brand-blue" />
          <Battery size={14} className="text-green-400" />
        </div>
        <span className="text-xs font-mono font-bold tracking-wider">
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </motion.button>

      {/* Control Center Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-14 right-0 w-72 bg-brand-black/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl z-[101]"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">System Center</h3>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-brand-blue" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={toggleHackerMode}
                className={`p-4 rounded-2xl border transition-all flex flex-col items-center gap-2 group ${hackerMode ? 'bg-brand-blue/20 border-brand-blue' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
              >
                <Monitor size={20} className={hackerMode ? 'text-brand-blue' : 'text-white/60 group-hover:text-white'} />
                <span className="text-[10px] font-bold uppercase">Hacker Mode</span>
              </button>
              
              <button className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all flex flex-col items-center gap-2 group">
                <Moon size={20} className="text-white/60 group-hover:text-white" />
                <span className="text-[10px] font-bold uppercase">Sleep Mode</span>
              </button>

              <button className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all flex flex-col items-center gap-2 group">
                <Volume2 size={20} className="text-white/60 group-hover:text-white" />
                <span className="text-[10px] font-bold uppercase">Mute Audio</span>
              </button>

              <button className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all flex flex-col items-center gap-2 group">
                <Cpu size={20} className="text-white/60 group-hover:text-white" />
                <span className="text-[10px] font-bold uppercase">Perf Mode</span>
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-white/5 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Shield size={14} className="text-brand-blue" />
                  <span className="text-[10px] text-white/60 font-medium">Neural Firewall</span>
                </div>
                <span className="text-[10px] font-bold text-green-500">ACTIVE</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap size={14} className="text-brand-blue" />
                  <span className="text-[10px] text-white/60 font-medium">Core Load</span>
                </div>
                <div className="w-20 h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '45%' }}
                    className="h-full bg-brand-blue"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SystemTray;
