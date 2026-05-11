import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSound } from './SoundProvider';
import { X, Terminal as TerminalIcon } from 'lucide-react';
import { useSystemNotification } from './SystemNotification';

const Terminal = () => {
  const { notify } = useSystemNotification();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>(['Welcome to Ritesh OS v1.0.0', 'Type "help" to see available commands.']);
  const navigate = useNavigate();
  const { playHover, playClick } = useSound();
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`') {
        e.preventDefault();
        setIsOpen(prev => !prev);
        playClick();
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        playClick();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, playClick]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, `> ${input}`];

    switch (cmd) {
      case 'help':
        newHistory.push('Available commands:', '  ls          - List pages', '  cd [page]   - Navigate to page', '  clear       - Clear terminal', '  exit        - Close terminal', '  whoami      - About Ritesh', '  hacker      - ???');
        break;
      case 'hacker':
        document.documentElement.classList.toggle('hacker-mode');
        const isHacker = document.documentElement.classList.contains('hacker-mode');
        newHistory.push(isHacker ? 'HACKER_MODE: ENABLED. Accessing mainframe...' : 'HACKER_MODE: DISABLED. Returning to normal ops.');
        notify(
          isHacker ? "Security Breach" : "System Restored", 
          isHacker ? "Unauthorized access detected. CRT filters engaged." : "Neural core stabilized.",
          isHacker ? "security" : "success"
        );
        break;
      case 'ls':
        newHistory.push('index, work, about, resume, contact');
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'exit':
        setIsOpen(false);
        setInput('');
        return;
      case 'whoami':
        newHistory.push('Ritesh Tayade - Full Stack Developer & UI Designer.', 'Building the future of the web.');
        break;
      case 'cd index':
      case 'cd /':
        navigate('/');
        newHistory.push('Navigating to home...');
        break;
      case 'cd work':
        navigate('/work');
        newHistory.push('Navigating to work...');
        break;
      case 'cd about':
        navigate('/about');
        newHistory.push('Navigating to about...');
        break;
      case 'cd contact':
        navigate('/contact');
        newHistory.push('Navigating to contact...');
        break;
      case 'cd resume':
        navigate('/resume');
        newHistory.push('Navigating to resume...');
        break;
      case 'matrix':
        newHistory.push('CRITICAL: Accessing neural stream...', 'Matrix override engaged.');
        document.documentElement.classList.toggle('hacker-mode');
        break;
      case 'chat':
        newHistory.push('Neural Assistant v1.0.4 initialized.', 'Ask me anything about Ritesh:', '  - "skills"', '  - "experience"', '  - "contact"');
        break;
      case 'skills':
        newHistory.push('Ritesh specializes in:', '  - Full Stack: React, Node, Django', '  - Data Science: Python, Java', '  - Design: Framer Motion, TailwindCSS');
        break;
      case 'experience':
        newHistory.push('Current Status: Final Year B.Tech IT student in Pune.', 'Experience: Building high-end web clones and full-stack management systems.');
        break;
      default:
        if (cmd.startsWith('cd ')) {
          newHistory.push(`Directory not found: ${cmd.split(' ')[1]}`);
        } else {
          newHistory.push(`Command not found: ${cmd}`);
        }
    }

    setHistory(newHistory);
    setInput('');
    playClick();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300">
      <div className="w-full max-w-4xl bg-[#0a0a0c] border border-white/10 rounded-lg shadow-2xl flex flex-col overflow-hidden h-[60vh]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
          <div className="flex items-center gap-2">
            <TerminalIcon size={16} className="text-brand-blue" />
            <span className="text-xs font-mono text-white/60">ritesh@os: ~</span>
          </div>
          <button 
            onClick={() => { setIsOpen(false); playClick(); }}
            className="text-white/40 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Terminal Body */}
        <div 
          ref={terminalRef}
          className="flex-1 overflow-y-auto p-4 font-mono text-sm space-y-1 custom-scrollbar animate-[glitch-terminal_0.2s_ease-in-out]"
        >
          {history.map((line, i) => (
            <div key={i} className={line.startsWith('>') ? 'text-brand-blue' : 'text-white/80'}>
              {line}
            </div>
          ))}
          <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2">
            <span className="text-brand-blue font-bold">{'>'}</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-white caret-brand-blue"
              spellCheck={false}
              autoComplete="off"
            />
          </form>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes glitch-terminal {
          0% { transform: translate(2px, 0) skew(0deg); }
          20% { transform: translate(-2px, 0) skew(1deg); }
          40% { transform: translate(2px, 0) skew(-1deg); }
          60% { transform: translate(-2px, 0) skew(0deg); }
          80% { transform: translate(2px, 0) skew(1deg); }
          100% { transform: translate(0, 0) skew(0deg); }
        }
      `}} />
    </div>
  );
};

export default Terminal;
