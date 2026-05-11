import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Command } from 'cmdk';
import { Home, Briefcase, User, Mail, FileText, Github, Linkedin, Palette, Terminal as TerminalIcon } from 'lucide-react';
import { useSound } from './SoundProvider';

const CommandMenu = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { playHover, playClick } = useSound();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        playClick();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [playClick]);

  const runCommand = (command: () => void) => {
    playClick();
    setOpen(false);
    command();
  };

  const setTheme = (color: string) => {
    document.documentElement.style.setProperty('--brand-blue', color);
    playClick();
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-[20vh] animate-in fade-in duration-200" onClick={() => setOpen(false)}>
      <div 
        className="w-full max-w-lg bg-[#0F0F11] border border-white/10 rounded-xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <Command className="w-full bg-transparent flex flex-col overflow-hidden">
          <div className="flex items-center border-b border-white/10 px-3">
            <Command.Input 
              autoFocus 
              placeholder="Type a command or search..." 
              className="flex h-14 w-full bg-transparent py-3 text-sm outline-none placeholder:text-white/40 text-white disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <Command.List className="max-h-[300px] overflow-y-auto p-2 text-white/80">
            <Command.Empty className="py-6 text-center text-sm text-white/40">No results found.</Command.Empty>
            
            <Command.Group heading="Navigation" className="px-2 py-2 text-xs text-white/40 font-medium">
              <Command.Item 
                onSelect={() => runCommand(() => navigate('/'))}
                onMouseEnter={playHover}
                className="relative flex cursor-pointer select-none items-center rounded-md px-2 py-2.5 text-sm outline-none aria-selected:bg-white/10 aria-selected:text-white data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 mt-1 transition-colors"
              >
                <Home className="mr-3 h-4 w-4 text-brand-blue" />
                <span>Home</span>
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => navigate('/work'))}
                onMouseEnter={playHover}
                className="relative flex cursor-pointer select-none items-center rounded-md px-2 py-2.5 text-sm outline-none aria-selected:bg-white/10 aria-selected:text-white data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 mt-1 transition-colors"
              >
                <Briefcase className="mr-3 h-4 w-4 text-brand-blue" />
                <span>Work</span>
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => navigate('/about'))}
                onMouseEnter={playHover}
                className="relative flex cursor-pointer select-none items-center rounded-md px-2 py-2.5 text-sm outline-none aria-selected:bg-white/10 aria-selected:text-white data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 mt-1 transition-colors"
              >
                <User className="mr-3 h-4 w-4 text-brand-blue" />
                <span>About</span>
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => navigate('/resume'))}
                onMouseEnter={playHover}
                className="relative flex cursor-pointer select-none items-center rounded-md px-2 py-2.5 text-sm outline-none aria-selected:bg-white/10 aria-selected:text-white data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 mt-1 transition-colors"
              >
                <FileText className="mr-3 h-4 w-4 text-brand-blue" />
                <span>Resume</span>
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => navigate('/contact'))}
                onMouseEnter={playHover}
                className="relative flex cursor-pointer select-none items-center rounded-md px-2 py-2.5 text-sm outline-none aria-selected:bg-white/10 aria-selected:text-white data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 mt-1 transition-colors"
              >
                <Mail className="mr-3 h-4 w-4 text-brand-blue" />
                <span>Contact</span>
              </Command.Item>
            </Command.Group>

            <Command.Group heading="Themes" className="px-2 py-2 text-xs text-white/40 font-medium mt-2">
              <Command.Item 
                onSelect={() => setTheme('#4030FF')}
                onMouseEnter={playHover}
                className="relative flex cursor-pointer select-none items-center rounded-md px-2 py-2.5 text-sm outline-none aria-selected:bg-white/10 aria-selected:text-white data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 mt-1 transition-colors"
              >
                <Palette className="mr-3 h-4 w-4 text-[#4030FF]" />
                <span>Electric Blue (Default)</span>
              </Command.Item>
              <Command.Item 
                onSelect={() => setTheme('#00FF9C')}
                onMouseEnter={playHover}
                className="relative flex cursor-pointer select-none items-center rounded-md px-2 py-2.5 text-sm outline-none aria-selected:bg-white/10 aria-selected:text-white data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 mt-1 transition-colors"
              >
                <Palette className="mr-3 h-4 w-4 text-[#00FF9C]" />
                <span>Neon Green</span>
              </Command.Item>
              <Command.Item 
                onSelect={() => setTheme('#FF3030')}
                onMouseEnter={playHover}
                className="relative flex cursor-pointer select-none items-center rounded-md px-2 py-2.5 text-sm outline-none aria-selected:bg-white/10 aria-selected:text-white data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 mt-1 transition-colors"
              >
                <Palette className="mr-3 h-4 w-4 text-[#FF3030]" />
                <span>Pulse Red</span>
              </Command.Item>
              <Command.Item 
                onSelect={() => setTheme('#F0ABFC')}
                onMouseEnter={playHover}
                className="relative flex cursor-pointer select-none items-center rounded-md px-2 py-2.5 text-sm outline-none aria-selected:bg-white/10 aria-selected:text-white data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 mt-1 transition-colors"
              >
                <Palette className="mr-3 h-4 w-4 text-[#F0ABFC]" />
                <span>Cyber Pink</span>
              </Command.Item>
            </Command.Group>
            
            <Command.Group heading="Socials" className="px-2 py-2 text-xs text-white/40 font-medium mt-2">
               <Command.Item 
                onSelect={() => runCommand(() => window.open('https://github.com/Mr-Ritesh-t', '_blank'))}
                onMouseEnter={playHover}
                className="relative flex cursor-pointer select-none items-center rounded-md px-2 py-2.5 text-sm outline-none aria-selected:bg-white/10 aria-selected:text-white data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 mt-1 transition-colors"
              >
                <Github className="mr-3 h-4 w-4 text-white" />
                <span>GitHub Profile</span>
              </Command.Item>
               <Command.Item 
                onSelect={() => runCommand(() => window.open('https://www.linkedin.com/in/mr-ritesh', '_blank'))}
                onMouseEnter={playHover}
                className="relative flex cursor-pointer select-none items-center rounded-md px-2 py-2.5 text-sm outline-none aria-selected:bg-white/10 aria-selected:text-white data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 mt-1 transition-colors"
              >
                <Linkedin className="mr-3 h-4 w-4 text-blue-500" />
                <span>LinkedIn Profile</span>
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
};

export default CommandMenu;
