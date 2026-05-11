import React from 'react';
import { Link } from 'react-router-dom';
import { useSound } from './SoundProvider';

const Logo = () => {
  const { playHover, playClick } = useSound();

  return (
    <div className="fixed top-8 left-8 z-[100]">
      <Link 
        to="/" 
        onMouseEnter={playHover}
        onClick={playClick}
        className="group relative flex flex-col"
      >
        <span className="text-xl font-bold tracking-tighter text-white">RITESH</span>
        <span className="text-xl font-bold tracking-tighter text-white/40 -mt-2 group-hover:text-brand-blue transition-colors">TAYADE</span>
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-0 group-hover:h-8 bg-brand-blue transition-all duration-300" />
      </Link>
    </div>
  );
};

export default Logo;
