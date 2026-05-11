import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, User, ChevronLeft, ChevronRight, Zap, Activity, Shield, Cpu, Terminal as TerminalIcon, Download, Globe, Github, Linkedin, MessageSquare, Play, Sparkles } from 'lucide-react';
import { useSound } from './SoundProvider';
import { PERSONAL_INFO, SKILL_CATEGORIES, EDUCATION, CERTIFICATIONS } from '../data';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  isAction?: boolean;
}

type Mode = 'chat' | 'tour' | 'contact';

const TOUR_STEPS = [
  { 
    section: 'home', 
    text: "Hi! I'm Ritesh. Welcome to my digital home. I love building things that help people and businesses grow." 
  },
  { 
    section: 'work', 
    text: "These are some of the projects I've built lately. I focus on making things fast, reliable, and easy to use." 
  },
  { 
    section: 'about', 
    text: "I'm a student of Information Technology with a passion for problem-solving. I'm always learning new things to stay ahead." 
  },
  { 
    section: 'resume', 
    text: "I've spent years honing my skills in computer science. You can see my full educational journey and certifications here." 
  },
  { 
    section: 'contact', 
    text: "I'd love to hear from you! Whether you have a project idea or just want to say hi, feel free to reach out." 
  }
];

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm ERA, Ritesh's AI assistant. How can I help you explore his work today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [mode, setMode] = useState<Mode>('chat');
  const [step, setStep] = useState(0);
  const [contactData, setContactData] = useState({ name: '', email: '', message: '' });
  const [telemetry, setTelemetry] = useState('SYSTEM_READY');
  const scrollRef = useRef<HTMLDivElement>(null);
  const { playClick, playHover } = useSound();

  useEffect(() => {
    const handleToggle = () => {
      setIsOpen(prev => !prev);
      playClick();
    };
    window.addEventListener('toggle-era', handleToggle);
    return () => window.removeEventListener('toggle-era', handleToggle);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const codes = ['STABLE', 'ONLINE', 'READY', 'SYNCED'];
      setTelemetry(codes[Math.floor(Math.random() * codes.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Friendly Guided Tour Logic
  useEffect(() => {
    if (mode === 'tour') {
      const currentStep = TOUR_STEPS[step];
      if (currentStep) {
        setIsTyping(true);
        const timer = setTimeout(() => {
          const target = document.getElementById(currentStep.section);
          if (target) {
            const yOffset = -100; 
            const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
          }

          const aiMsg: Message = { id: Date.now().toString(), text: currentStep.text, sender: 'ai', timestamp: new Date() };
          setMessages(prev => [...prev, aiMsg]);
          setIsTyping(false);
          
          if (step < TOUR_STEPS.length - 1) {
            setTimeout(() => setStep(prev => prev + 1), 8000); // 8 seconds for a relaxed feel
          } else {
            setTimeout(() => {
              setMessages(prev => [...prev, { id: 'end', text: "That's the end of our little tour! Feel free to browse around or ask me anything.", sender: 'ai', timestamp: new Date() }]);
              setMode('chat');
              setStep(0);
            }, 5000);
          }
        }, 2000);
        return () => clearTimeout(timer);
      }
    }
  }, [mode, step]);

  const handleContactSubmit = async (data: typeof contactData) => {
    setIsTyping(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
          ...data,
          subject: `Portfolio Message from ${data.name} via ERA AI`
        })
      });
      const result = await response.json();
      if (result.success) {
        setMessages(prev => [...prev, { id: 'success', text: "TRANSMISSION_SUCCESSFUL: Message delivered to Ritesh's private server.", sender: 'ai', timestamp: new Date() }]);
      } else {
        throw new Error();
      }
    } catch (error) {
      setMessages(prev => [...prev, { id: 'error', text: "TRANSMISSION_ERROR: Secure uplink failed. Please use manual terminal.", sender: 'ai', timestamp: new Date() }]);
    }
    setIsTyping(false);
    setMode('chat');
    setContactData({ name: '', email: '', message: '' });
  };

  const handleSend = async (customInput?: string) => {
    const val = customInput || input;
    if (!val.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), text: val, sender: 'user', timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    playClick();

    // TOUR MODE TRIGGER
    if (val.toLowerCase().includes('tour') || val.toLowerCase().includes('guide')) {
      setMode('tour');
      setStep(0);
      setIsOpen(false); // Close sidebar for tour as requested
      return;
    }

    // CONTACT MODE TRIGGER
    if (val.toLowerCase().includes('message') || val.toLowerCase().includes('send') || val.toLowerCase().includes('hire')) {
      setMode('contact');
      setStep(0);
      return;
    }

    // Normal logic follows...
    setIsTyping(true);
    setTimeout(() => {
      // (Simplified logic for this turn to focus on tour overlay)
      const aiMsg: Message = { id: Date.now().toString(), text: "Direct query received. Analysis operational.", sender: 'ai', timestamp: new Date() };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Tour Popup Overlay (Visible when sidebar is closed during a tour) */}
      <AnimatePresence>
        {mode === 'tour' && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            key={step}
            className="fixed bottom-24 md:bottom-10 left-4 right-4 md:left-1/2 md:-translate-x-1/2 z-[200] md:w-full md:max-w-md"
          >
            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-4 md:p-6 rounded-[24px] md:rounded-[32px] shadow-2xl flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-blue rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                <Bot size={20} className="text-white md:hidden" />
                <Bot size={24} className="text-white hidden md:block" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-0.5 md:mb-1">
                  <span className="text-[9px] md:text-[10px] font-bold tracking-widest text-brand-blue uppercase">Tour Guide</span>
                  <div className="w-1 h-1 rounded-full bg-brand-blue animate-pulse" />
                </div>
                <p className="text-[12px] md:text-sm text-white font-medium leading-snug">
                  {TOUR_STEPS[step]?.text}
                </p>
              </div>
              <button 
                onClick={() => { setMode('chat'); playClick(); }}
                className="p-1.5 md:p-2 hover:bg-white/10 rounded-full text-white/40 hover:text-white transition-colors"
              >
                <X size={18} className="md:hidden" />
                <X size={20} className="hidden md:block" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ERA Toggle Handle */}
      <motion.div
        initial={false}
        animate={{ left: isOpen ? (window.innerWidth < 768 ? '0' : '400px') : '0' }}
        className="fixed top-1/2 -translate-y-1/2 z-[100] transition-all duration-500 ease-in-out hidden md:flex"
      >
        <button
          onClick={() => { setIsOpen(!isOpen); playClick(); }}
          onMouseEnter={playHover}
          className={`flex flex-col items-center gap-6 py-10 px-3 bg-brand-blue/10 backdrop-blur-3xl border border-white/10 rounded-r-3xl border-l-0 group hover:bg-brand-blue/20 transition-all shadow-[10px_0_40px_rgba(64,48,255,0.2)] ${isOpen && window.innerWidth < 768 ? 'hidden' : ''}`}
        >
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="text-brand-blue"><ChevronRight size={20} /></motion.div>
          <span className="[writing-mode:vertical-lr] text-[10px] font-black uppercase tracking-[0.6em] text-white/40 group-hover:text-brand-blue transition-colors">ERA_SYSTEM</span>
          <div className="flex flex-col gap-1">
            <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
            <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }} className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
          </div>
        </button>
      </motion.div>

      {/* ERA Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 h-full w-full md:w-[400px] z-[101] bg-brand-black/80 backdrop-blur-[60px] border-r border-brand-blue/20 flex flex-col shadow-[40px_0_80px_rgba(0,0,0,0.8)]"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/5 relative z-10 bg-gradient-to-b from-brand-blue/5 to-transparent">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center border border-brand-blue/30 relative">
                    <Zap size={24} className="text-brand-blue" />
                    <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0, 0.5, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute inset-0 bg-brand-blue rounded-2xl" />
                  </div>
                  <div>
                    <h2 className="text-lg font-black uppercase tracking-[0.3em] text-white">ERA</h2>
                    <div className="flex items-center gap-2">
                      <Activity size={10} className="text-brand-blue" />
                      <span className="text-[9px] text-brand-blue font-mono tracking-widest">{telemetry}</span>
                    </div>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-3 hover:bg-white/5 rounded-2xl text-white/40 hover:text-white"><ChevronLeft size={24} /></button>
              </div>

              {/* Advanced Visualizer */}
              <div className="flex items-center gap-1.5 h-10 bg-black/40 rounded-xl px-4 border border-white/5">
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: isTyping ? [6, 24, 6] : [2, 8, 2], opacity: isTyping ? 1 : 0.2 }}
                    transition={{ repeat: Infinity, duration: 0.5 + Math.random(), delay: i * 0.05 }}
                    className="w-1 bg-brand-blue rounded-full"
                  />
                ))}
              </div>
            </div>

            {/* Chat Body */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide relative z-10">
              {messages.map((msg) => (
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`flex items-center gap-2 mb-2 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/20">{msg.sender === 'user' ? 'GUEST_USER' : 'SYSTEM_ERA'}</span>
                  </div>
                  <div className={`p-5 rounded-3xl text-[13px] leading-relaxed max-w-[95%] ${
                    msg.sender === 'user' ? 'bg-white/5 border border-white/10 rounded-tr-none' : 'bg-brand-blue/10 border border-brand-blue/30 rounded-tl-none text-white'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex flex-col items-start">
                  <span className="text-[9px] font-black uppercase tracking-widest text-white/20 mb-2">ERA IS THINKING...</span>
                  <div className="p-5 rounded-3xl bg-brand-blue/5 border border-brand-blue/10 rounded-tl-none flex gap-2">
                    <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
                    <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
                  </div>
                </div>
              )}
            </div>

            {/* Command HUD Footer */}
            <div className="p-8 border-t border-white/5 bg-brand-black/40 relative z-10">
              <div className="flex gap-4 mb-6 overflow-x-auto scrollbar-hide">
                <button onClick={() => handleSend('Guide me')} className="whitespace-nowrap px-3 py-1.5 bg-brand-blue/10 border border-brand-blue/30 rounded-lg text-[10px] text-brand-blue hover:text-white hover:bg-brand-blue transition-all uppercase font-bold tracking-widest flex items-center gap-2"><Play size={10} /> START TOUR</button>
                <button onClick={() => handleSend('Send message')} className="whitespace-nowrap px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] text-white/40 hover:text-white hover:bg-brand-blue/20 hover:border-brand-blue/30 transition-all uppercase font-bold tracking-widest flex items-center gap-2"><MessageSquare size={10} /> MESSAGE</button>
                <button onClick={() => setInput('Show me projects')} className="whitespace-nowrap px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] text-white/40 hover:text-white hover:bg-brand-blue/20 hover:border-brand-blue/30 transition-all uppercase font-bold tracking-widest">PROJECTS</button>
              </div>
              <div className="relative group">
                <input 
                  type="text" 
                  value={input} 
                  onChange={(e) => setInput(e.target.value)} 
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()} 
                  placeholder={mode === 'contact' ? "TYPE_YOUR_RESPONSE_..." : "AUTHORIZE_ACCESS_..."} 
                  className="w-full bg-transparent border-b border-white/10 py-5 pr-12 text-sm focus:outline-none focus:border-brand-blue transition-colors font-mono tracking-widest placeholder:text-white/10" 
                />
                <button onClick={() => handleSend()} disabled={!input.trim()} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-brand-blue hover:text-white transition-colors disabled:opacity-0"><Send size={20} /></button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
