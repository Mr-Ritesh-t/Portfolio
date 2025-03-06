
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300  bg-brand-black/80 backdrop-blur',
        isScrolled ? 'py-4' : 'py-6'
      )}
    >
      <div className="container mx-auto px-4  md:px-6 flex items-center justify-between ">
        <Link 
          to="/" 
          className="text-2xl font-medium tracking-tight animate-fade-in "
        >
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">RITESH</span>
            <span className="font-semibold text-white">TAYADE</span>
          </div>
        </Link>

        {isMobile ? (
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none z-50"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        ) : (
          <nav className="flex items-center space-x-8">
            <Link 
              to="/work" 
              className={cn(
                'nav-link text-white/80 hover:text-white transition-colors',
                location.pathname === '/work' && 'text-white after:w-full'
              )}
            >
              Work
            </Link>
            <Link 
              to="/about" 
              className={cn(
                'nav-link text-white/80 hover:text-white transition-colors',
                location.pathname === '/about' && 'text-white after:w-full'
              )}
            >
              About Me
            </Link>
            <Link 
              to="/contact" 
              className={cn(
                'nav-link text-white/80 hover:text-white transition-colors',
                location.pathname === '/contact' && 'text-white after:w-full'
              )}
            >
              Contact
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
              <Link 
                to="/work" 
                className="text-3xl font-medium"
              >
                Work
              </Link>
              <Link 
                to="/about" 
                className="text-3xl font-medium"
              >
                About Me
              </Link>
              <Link 
                to="/contact" 
                className="text-3xl font-medium"
              >
                Contact
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
