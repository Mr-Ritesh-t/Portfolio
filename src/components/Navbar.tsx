
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { useSound } from './SoundProvider';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  const { playHover, playClick } = useSound();

  const toggleMenu = () => {
    playClick();
    setIsMenuOpen(!isMenuOpen);
  };

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    ['home', 'work', 'about', 'resume', 'contact'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-brand-black/80 backdrop-blur',
        isScrolled ? 'py-4' : 'py-6'
      )}
    >
      <div className="container mx-auto px-4  md:px-6 flex items-center justify-between ">
        <div className="flex items-center gap-6">
          <Link 
            to="/" 
            onMouseEnter={playHover}
            onClick={playClick}
            className="group relative flex flex-col animate-fade-in"
          >
            <span className="text-xl font-bold tracking-tighter text-white leading-none">RITESH</span>
            <span className="text-xl font-bold tracking-tighter text-white/40 -mt-1 group-hover:text-brand-blue transition-colors leading-none">TAYADE</span>
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-0 group-hover:h-6 bg-brand-blue transition-all duration-300 hidden md:block" />
          </Link>
          <div className="hidden md:flex items-center gap-1.5 px-2 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-white/50 font-medium">
            <span className="text-[10px]">⌘</span>K
          </div>
        </div>

        {isMobile ? (
          <button
            onClick={toggleMenu}
            onMouseEnter={playHover}
            className="text-white focus:outline-none z-50"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        ) : (
          <nav className="flex items-center space-x-8">
            {['Work', 'About', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                onMouseEnter={playHover}
                onClick={(e) => {
                  e.preventDefault();
                  playClick();
                  document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={cn(
                  "nav-link text-white/50 hover:text-white transition-colors cursor-pointer text-sm font-medium uppercase tracking-widest",
                  activeSection === item.toLowerCase() && "text-brand-blue after:w-full"
                )}
              >
                {item}
              </a>
            ))}
            <Link 
              to="/client" 
              onClick={playClick}
              onMouseEnter={playHover}
              className="px-4 py-2 bg-brand-blue/10 border border-brand-blue/30 rounded-lg text-[10px] font-black uppercase tracking-widest text-brand-blue hover:bg-brand-blue hover:text-white transition-all"
            >
              Client Access
            </Link>
          </nav>
        )}
      </div>

      {isMobile && (
        <div
          className={cn(
            'fixed inset-0 bg-brand-black z-40 transition-transform duration-300 ease-in-out ',
            isMenuOpen ? 'translate-x-0' : 'translate-x-[-100%]'
          )}
        >
          <div className="container  bg-brand-black h-screen mx-auto px-4 py-20 flex flex-col">
            <nav className="flex flex-col space-y-8 mt-10">
              {['Home', 'Work', 'About', 'Resume', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onMouseEnter={playHover}
                  onClick={(e) => {
                    e.preventDefault();
                    playClick();
                    setIsMenuOpen(false);
                    document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-3xl font-medium text-white/80 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
              <button
                onClick={() => {
                  playClick();
                  setIsMenuOpen(false);
                  window.dispatchEvent(new CustomEvent('toggle-era'));
                }}
                className="text-3xl font-medium text-brand-blue hover:text-white transition-colors text-left flex items-center gap-4"
              >
                AI ERA
                <div className="w-3 h-3 bg-brand-blue rounded-full animate-pulse" />
              </button>
              <Link
                to="/client"
                onClick={() => { playClick(); setIsMenuOpen(false); }}
                className="text-3xl font-medium text-white/40 hover:text-white transition-colors text-left flex flex-col"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-blue mb-2">SECURE_ACCESS</span>
                CLIENT PORTAL
              </Link>
            </nav>

            <div className="mt-auto mb-10 bottom-10">
              <div className="text-white/60 text-sm">
                &copy; {new Date().getFullYear()} RITESH TAYADE
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
