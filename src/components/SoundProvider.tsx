import React, { createContext, useContext, useCallback } from 'react';

interface SoundContextType {
  playHover: () => void;
  playClick: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const playSound = useCallback((frequency: number, type: OscillatorType, duration: number, volume: number) => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;

      const audioCtx = new AudioContextClass();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      oscillator.type = type;
      oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
      
      gainNode.gain.setValueAtTime(volume, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      oscillator.start();
      oscillator.stop(audioCtx.currentTime + duration);
      
      // Clean up context after sound finishes
      setTimeout(() => {
        if (audioCtx.state !== 'closed') {
          audioCtx.close();
        }
      }, duration * 1000 + 100);
    } catch (e) {
      // Audio context might be blocked by browser policy until user interaction
    }
  }, []);

  const playHover = useCallback(() => {
    // Very subtle high-pitched tick
    playSound(800, 'sine', 0.02, 0.01);
  }, [playSound]);

  const playClick = useCallback(() => {
    // Satisfying "pop" or "click"
    playSound(400, 'sine', 0.1, 0.03);
  }, [playSound]);

  return (
    <SoundContext.Provider value={{ playHover, playClick }}>
      <div 
        onMouseEnter={() => {
          // Dummy to ensure AudioContext can be initialized
        }}
      >
        {children}
      </div>
    </SoundContext.Provider>
  );
};

export const useSound = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return context;
};
