import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Briefcase, User, Mail, FileText, Github, Linkedin, Twitter, Instagram, Phone } from 'lucide-react';
import { useSound } from './SoundProvider';
import { PERSONAL_INFO } from '@/data';

const navIcons = [
  { id: 'home', icon: Home, label: 'Home', path: '#home' },
  { id: 'work', icon: Briefcase, label: 'Work', path: '#work' },
  { id: 'about', icon: User, label: 'About', path: '#about' },
  { id: 'resume', icon: FileText, label: 'Resume', path: '#resume' },
  { id: 'contact', icon: Mail, label: 'Contact', path: '#contact' },
];

const socialIcons = [
  { id: 'github', icon: Github, label: 'GitHub', href: PERSONAL_INFO.socials.github },
  { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: PERSONAL_INFO.socials.linkedin },
  { id: 'twitter', icon: Twitter, label: 'Twitter', href: PERSONAL_INFO.socials.twitter },
  { id: 'instagram', icon: Instagram, label: 'Instagram', href: PERSONAL_INFO.socials.instagram },
];

const DockIcon = ({ icon: Icon, path, href, label, mouseX }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const { playHover, playClick } = useSound();

  const distance = useMotionValue(Infinity);
  const size = useTransform(distance, [-100, 0, 100], [40, 60, 40]);
  const springSize = useSpring(size, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
          distance.set(e.clientX - (rect.left + rect.width / 2));
        }
      }}
      onMouseLeave={() => distance.set(Infinity)}
      onMouseEnter={playHover}
      style={{ width: springSize, height: springSize }}
      className="flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-brand-blue/20 hover:border-brand-blue/50 transition-colors group relative"
    >
      <Icon size={18} />
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-brand-black/90 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10 whitespace-nowrap z-50">
        {label}
      </span>
    </motion.div>
  );

  const handleClick = (e: React.MouseEvent) => {
    playClick();
    if (path?.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  if (path) {
    if (path.startsWith('#')) {
      return <a href={path} onClick={handleClick}>{content}</a>;
    }
    return <Link to={path} onClick={playClick}>{content}</Link>;
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={playClick}>
      {content}
    </a>
  );
};

const Dock = () => {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="hidden md:block fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-full max-w-fit px-4">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex items-end gap-2 md:gap-4 px-3 py-2 md:px-4 md:py-3 rounded-2xl bg-brand-black/40 backdrop-blur-xl border border-white/10 shadow-2xl overflow-x-auto no-scrollbar"
      >
        {navIcons.map((item) => (
          <DockIcon key={item.id} {...item} mouseX={mouseX} />
        ))}
        <div className="w-[1px] h-8 bg-white/10 mx-1 hidden md:block" />
        {socialIcons.map((item) => (
          <DockIcon key={item.id} {...item} mouseX={mouseX} />
        ))}
      </motion.div>
    </div>
  );
};

export default Dock;
