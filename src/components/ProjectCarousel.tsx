import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Calendar, Tag, Zap } from 'lucide-react';
import { useSound } from './SoundProvider';

interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  date: string;
  link: string;
  github: string;
}

import { PERSONAL_INFO, PROJECTS } from '../data';

const ProjectCarousel = () => {
  const [index, setIndex] = useState(0);
  const { playClick, playHover } = useSound();
  const containerRef = useRef<HTMLDivElement>(null);

  const next = () => {
    setIndex((prev) => (prev + 1) % PROJECTS.length);
    playClick();
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
    playClick();
  };

  return (
    <div className="relative py-20 px-4 overflow-visible" ref={containerRef}>
      {/* 3D Stage */}
      <div className="relative h-[600px] w-full max-w-6xl mx-auto flex items-center justify-center perspective-[2000px]">
        <AnimatePresence mode="popLayout">
          {PROJECTS.map((project, i) => {
            const isCenter = i === index;
            const isLeft = i === (index - 1 + PROJECTS.length) % PROJECTS.length;
            const isRight = i === (index + 1) % PROJECTS.length;
            
            if (!isCenter && !isLeft && !isRight) return null;

            return (
              <motion.div
                key={project.title}
                initial={{ 
                  opacity: 0,
                  scale: 0.8,
                  rotateY: isRight ? 45 : isLeft ? -45 : 0,
                  x: isRight ? '100%' : isLeft ? '-100%' : 0,
                  z: -200
                }}
                animate={{ 
                  opacity: isCenter ? 1 : 0.4,
                  scale: isCenter ? 1 : 0.8,
                  rotateY: isCenter ? 0 : isRight ? 45 : -45,
                  x: isCenter ? 0 : isRight ? '60%' : '-60%',
                  z: isCenter ? 0 : -400,
                  filter: isCenter ? 'blur(0px)' : 'blur(4px)'
                }}
                exit={{ 
                  opacity: 0,
                  scale: 0.5,
                  z: -500
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                drag={isCenter ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x > 100) prev();
                  else if (info.offset.x < -100) next();
                }}
                className={`absolute w-full max-w-3xl h-[520px] md:h-auto md:aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl ${isCenter ? 'z-30 cursor-grab active:cursor-grabbing' : 'z-10 pointer-events-none'}`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Project Image */}
                <div className="absolute inset-0">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-end">
                  <div className="relative z-10">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: isCenter ? 1 : 0, y: isCenter ? 0 : 20 }}
                      className="space-y-3 md:space-y-4"
                    >
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-brand-blue/30 backdrop-blur-md rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest border border-brand-blue/30">
                          {project.category}
                        </span>
                        <div className="flex items-center gap-1.5 text-white/40 text-[9px] md:text-[10px] uppercase font-bold tracking-widest">
                          <Calendar size={10} />
                          {project.date}
                        </div>
                      </div>

                      <h2 className="text-2xl md:text-5xl font-black tracking-tight text-white uppercase italic leading-tight">
                        {project.title}
                      </h2>

                      <p className="text-white/60 text-xs md:text-sm max-w-xl leading-relaxed line-clamp-2 md:line-clamp-none">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <div className="hidden md:flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-brand-blue/60 font-medium">
                        {project.highlights.map((h, idx) => (
                          <div key={idx} className="flex items-center gap-1.5">
                            <Zap size={10} />
                            {h}
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.technologies.slice(0, 5).map(tech => (
                          <span key={tech} className="text-[9px] font-mono text-brand-blue/80 bg-brand-blue/5 border border-brand-blue/20 px-1.5 py-0.5 rounded">
                            #{tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 pt-3 md:pt-4">
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue/80 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-xl text-xs md:text-sm font-bold transition-all"
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-xl text-xs md:text-sm font-bold transition-all border border-white/10"
                        >
                          <Github size={14} />
                          Source
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Glass Glare Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-8 z-40">
          <button 
            onClick={prev}
            className="p-4 bg-white/5 hover:bg-brand-blue/20 border border-white/10 hover:border-brand-blue/30 rounded-full text-white/40 hover:text-white transition-all group"
          >
            <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          
          <div className="flex gap-2">
            {PROJECTS.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 rounded-full transition-all duration-500 ${i === index ? 'w-12 bg-brand-blue shadow-[0_0_10px_#4030FF]' : 'w-2 bg-white/10'}`} 
              />
            ))}
          </div>

          <button 
            onClick={next}
            className="p-4 bg-white/5 hover:bg-brand-blue/20 border border-white/10 hover:border-brand-blue/30 rounded-full text-white/40 hover:text-white transition-all group"
          >
            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
