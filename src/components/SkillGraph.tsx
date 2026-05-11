import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', level: 90, x: 0, y: 0 },
  { name: 'Python', level: 85, x: -120, y: -60 },
  { name: 'Django', level: 80, x: -140, y: 40 },
  { name: 'TypeScript', level: 85, x: 120, y: -40 },
  { name: 'Node.js', level: 75, x: 100, y: 80 },
  { name: 'Java', level: 70, x: 0, y: -130 },
  { name: 'PostgreSQL', level: 75, x: 0, y: 130 },
];

const SkillGraph = () => {
  return (
    <div className="relative h-[400px] w-full flex items-center justify-center overflow-hidden bg-white/5 rounded-3xl border border-white/10">
      {/* Central Hub */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20">
        <div className="w-[300px] h-[300px] border border-brand-blue rounded-full animate-pulse" />
        <div className="absolute w-[200px] h-[200px] border border-brand-blue rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 w-full h-full">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, type: 'spring' }}
            style={{ 
              left: `calc(50% + ${skill.x}px)`,
              top: `calc(50% + ${skill.y}px)`,
              transform: 'translate(-50%, -50%)'
            }}
            className="absolute group cursor-pointer"
          >
            {/* Connection Line to center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] bg-brand-blue/20 origin-center rotate-[var(--angle)] h-[var(--dist)] z-[-1]" />
            
            <div className="relative p-4 bg-brand-black border border-white/10 rounded-2xl group-hover:border-brand-blue/50 transition-all group-hover:shadow-[0_0_20px_rgba(64,48,255,0.3)] flex flex-col items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-white/80 group-hover:text-white">{skill.name}</span>
              <div className="mt-2 w-12 h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  className="h-full bg-brand-blue"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-white/20 uppercase tracking-[0.3em]">
        Neural Skill Mapping
      </div>
    </div>
  );
};

export default SkillGraph;
