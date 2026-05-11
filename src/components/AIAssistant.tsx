import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, User, ChevronLeft, ChevronRight, Zap, Activity, Shield, Cpu, Terminal as TerminalIcon, Download, Globe, Github, Linkedin } from 'lucide-react';
import { useSound } from './SoundProvider';
import { PERSONAL_INFO, SKILL_CATEGORIES, EDUCATION, CERTIFICATIONS } from '../data';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  isAction?: boolean;
}

const PROJECTS = [
  { name: "Sundown Studio Clone", tech: "HTML, CSS, JS, GSAP", desc: "A sleek, immersive creative environment showcase." },
  { name: "Work Studio Clone", tech: "HTML, CSS, JS, Locomotive", desc: "A high-end creative portfolio clone with smooth animations." },
  { name: "Employee Management", tech: "React, Tailwind, Firebase", desc: "Full-stack application with real-time CRUD operations." }
];

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "ERA System v5.0.0 [NEURAL_CORE_ACTIVE]. All sectors operational. How can I assist you with Ritesh's data today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [telemetry, setTelemetry] = useState('FETCHING_DATA');
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
      const codes = ['0x442', '0x991', '0x102', 'SEC_STABLE', 'NET_ALIGNED', 'CORE_OPTIMIZED', 'SYNC_88%'];
      setTelemetry(codes[Math.floor(Math.random() * codes.length)]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const generateResponse = (query: string): { text: string, action?: () => void } => {
    const q = query.toLowerCase();

    // Command Logic
    if (q.includes('resume') || q.includes('cv')) {
      return { 
        text: "Initiating resume decryption... Accessing secure storage. Would you like to download the PDF?",
        action: () => window.open(PERSONAL_INFO.resumeLink, '_blank')
      };
    }
    if (q.includes('github')) {
      return { text: "Redirecting to Ritesh's GitHub repository archive...", action: () => window.open(PERSONAL_INFO.socials.github, '_blank') };
    }
    if (q.includes('linkedin')) {
      return { text: "Opening LinkedIn communication channel...", action: () => window.open(PERSONAL_INFO.socials.linkedin, '_blank') };
    }
    if (q.includes('contact') || q.includes('hire') || q.includes('email')) {
      return { 
        text: "Aligning communication module. Ritesh's email is " + PERSONAL_INFO.email + ". I am scrolling to the contact terminal now.",
        action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      };
    }
    if (q.includes('work') || q.includes('project')) {
      return { 
        text: "Opening 3D Project Archive. Ritesh has built " + PROJECTS.length + " featured projects. Analyzing repository metrics...",
        action: () => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
      };
    }
    if (q.includes('matrix') || q.includes('hacker') || q.includes('overclock')) {
      return { 
        text: "SYSTEM_OVERRIDE: Initiating high-performance visualization mode.",
        action: () => document.documentElement.classList.toggle('hacker-mode')
      };
    }

    // Knowledge Base Logic
    if (q.includes('who') || q.includes('about')) {
      return { text: PERSONAL_INFO.description };
    }
    if (q.includes('skill') || q.includes('tech') || q.includes('language')) {
      const allSkills = SKILL_CATEGORIES.map(c => `${c.category}: ${c.items.join(', ')}`).join('. ');
      return { text: "Scanning skill matrix... Verified proficiencies: " + allSkills };
    }
    if (q.includes('education') || q.includes('study') || q.includes('college')) {
      const edu = EDUCATION[0];
      return { text: `Ritesh is currently pursuing ${edu.degree} at ${edu.institution} (${edu.period}). He also holds a ${EDUCATION[1].degree}.` };
    }
    if (q.includes('certif')) {
      const certs = CERTIFICATIONS.map(c => c.name).join(', ');
      return { text: "Verified Certifications: " + certs };
    }
    if (q.includes('hello') || q.includes('hi') || q.includes('hey')) {
      return { text: "Greetings. I am ERA, an advanced neural interface for Ritesh Tayade. My primary function is to optimize your exploration of his professional data. How may I assist?" };
    }

    return { text: "Query received. Analysis inconclusive. Please refine your query regarding 'skills', 'projects', 'resume', or 'contact'. Alternatively, try 'matrix mode'." };
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), text: input, sender: 'user', timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);
    playClick();

    setTimeout(() => {
      const { text, action } = generateResponse(input);
      const aiMsg: Message = { id: (Date.now() + 1).toString(), text, sender: 'ai', timestamp: new Date() };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
      if (action) setTimeout(action, 1000);
    }, 1500);
  };

  return (
    <>
      {/* ERA Toggle Handle */}
      <motion.div
        initial={false}
        animate={{ left: isOpen ? 400 : 0 }}
        className="fixed top-1/2 -translate-y-1/2 z-[100] transition-all duration-500 ease-in-out hidden md:block"
      >
        <button
          onClick={() => { setIsOpen(!isOpen); playClick(); }}
          onMouseEnter={playHover}
          className="flex flex-col items-center gap-6 py-10 px-3 bg-brand-blue/10 backdrop-blur-3xl border border-white/10 rounded-r-3xl border-l-0 group hover:bg-brand-blue/20 transition-all shadow-[10px_0_40px_rgba(64,48,255,0.2)]"
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
            className="fixed top-0 left-0 h-full w-full md:w-[400px] z-[101] bg-brand-black/60 backdrop-blur-[60px] border-r border-brand-blue/20 flex flex-col shadow-[40px_0_80px_rgba(0,0,0,0.8)]"
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
                <button onClick={() => setInput('Who is Ritesh?')} className="whitespace-nowrap px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] text-white/40 hover:text-white hover:bg-brand-blue/20 hover:border-brand-blue/30 transition-all uppercase font-bold tracking-widest">ABOUT</button>
                <button onClick={() => setInput('What are your skills?')} className="whitespace-nowrap px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] text-white/40 hover:text-white hover:bg-brand-blue/20 hover:border-brand-blue/30 transition-all uppercase font-bold tracking-widest">SKILLS</button>
                <button onClick={() => setInput('Show me projects')} className="whitespace-nowrap px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] text-white/40 hover:text-white hover:bg-brand-blue/20 hover:border-brand-blue/30 transition-all uppercase font-bold tracking-widest">PROJECTS</button>
              </div>
              <div className="relative group">
                <input 
                  type="text" 
                  value={input} 
                  onChange={(e) => setInput(e.target.value)} 
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()} 
                  placeholder="AUTHORIZE_ACCESS_..." 
                  className="w-full bg-transparent border-b border-white/10 py-5 pr-12 text-sm focus:outline-none focus:border-brand-blue transition-colors font-mono tracking-widest placeholder:text-white/10" 
                />
                <button onClick={handleSend} disabled={!input.trim()} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-brand-blue hover:text-white transition-colors disabled:opacity-0"><Send size={20} /></button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
