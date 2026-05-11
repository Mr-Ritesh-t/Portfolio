import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Command } from 'lucide-react';

const shortcuts = [
  { key: 'K', label: 'Command Menu' },
  { key: 'T', label: 'Toggle Terminal' },
  { key: 'S', label: 'Theme Cycle' },
  { key: 'H', label: 'Go Home' }
];

const ShortcutHUD = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Alt') setIsVisible(true);
      
      // Handle actual shortcuts here if needed
      if (e.altKey && e.key === 'h') {
        document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Alt') setIsVisible(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <>
      <div className="fixed bottom-32 right-8 z-[60] hidden md:flex flex-col items-end gap-2 pointer-events-none">
        <div className="bg-brand-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full flex items-center gap-2">
          <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Hold [ALT] for shortcuts</span>
        </div>
      </div>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed inset-0 z-[2000] bg-brand-black/80 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <div className="w-full max-w-lg bg-brand-black border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-blue" />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-brand-blue/20 rounded-xl">
                  <Command className="text-brand-blue" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-tight">System Hotkeys</h3>
                  <p className="text-xs text-white/40">MASTER THE INTERFACE</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {shortcuts.map((s) => (
                  <div key={s.key} className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl group hover:border-brand-blue/30 transition-colors">
                    <span className="text-sm font-medium text-white/60">{s.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-white/10 rounded text-[10px] font-mono border border-white/20">ALT</span>
                      <span className="text-white/20">+</span>
                      <span className="px-2 py-1 bg-brand-blue/20 rounded text-[10px] font-mono border border-brand-blue/30 text-brand-blue">{s.key}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 text-center">
                <p className="text-[10px] text-white/20 uppercase tracking-widest">Elite Portfolio OS v3.4.0</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ShortcutHUD;
