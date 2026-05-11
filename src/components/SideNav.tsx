import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const sections = ['home', 'work', 'about', 'resume', 'contact'];

const SideNav = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
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

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-6">
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => scrollTo(section)}
          className="group relative flex items-center justify-end"
        >
          <span className={`absolute right-8 text-[10px] uppercase tracking-widest font-bold transition-all duration-300 ${activeSection === section ? 'opacity-100 translate-x-0 text-brand-blue' : 'opacity-0 translate-x-4 text-white/40 group-hover:opacity-100 group-hover:translate-x-0'}`}>
            {section}
          </span>
          <div className={`w-2 h-2 rounded-full transition-all duration-500 ${activeSection === section ? 'bg-brand-blue scale-150 shadow-[0_0_15px_rgba(64,48,255,0.8)]' : 'bg-white/20 hover:bg-white/50'}`} />
          {activeSection === section && (
            <motion.div
              layoutId="sideNavActive"
              className="absolute inset-[-4px] border border-brand-blue/30 rounded-full"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default SideNav;
