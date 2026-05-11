import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Info, Shield, Zap } from 'lucide-react';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'system' | 'security' | 'success';
}

interface NotificationContextType {
  notify: (title: string, message: string, type?: Notification['type']) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useSystemNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) throw new Error('useSystemNotification must be used within a NotificationProvider');
  return context;
};

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const notify = (title: string, message: string, type: Notification['type'] = 'info') => {
    const id = Math.random().toString(36).substr(2, 9);
    setNotifications(prev => [...prev, { id, title, message, type }]);
    
    // Auto remove
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 5000);
  };

  // Initial welcome notification
  useEffect(() => {
    const timer = setTimeout(() => {
      notify("System Online", "Elite OS v3.4.0 initialized successfully.", "system");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}
      <div className="fixed top-24 left-8 z-[100] hidden md:flex flex-col gap-4 pointer-events-none w-80">
        <AnimatePresence>
          {notifications.map((n) => (
            <motion.div
              key={n.id}
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              className="bg-brand-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl pointer-events-auto flex gap-4 overflow-hidden relative group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-blue" />
              
              <div className="p-2 bg-brand-blue/20 rounded-xl h-fit">
                {n.type === 'system' && <Zap className="text-brand-blue" size={18} />}
                {n.type === 'info' && <Bell className="text-brand-blue" size={18} />}
                {n.type === 'security' && <Shield className="text-brand-blue" size={18} />}
                {n.type === 'success' && <Info className="text-brand-blue" size={18} />}
              </div>

              <div className="flex flex-col">
                <span className="text-xs font-bold text-white uppercase tracking-widest mb-1">{n.title}</span>
                <span className="text-[11px] text-white/50 leading-relaxed">{n.message}</span>
              </div>
              
              <button 
                onClick={() => setNotifications(prev => prev.filter(notif => notif.id !== n.id))}
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Bell size={12} className="text-white/20 hover:text-white" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </NotificationContext.Provider>
  );
};
