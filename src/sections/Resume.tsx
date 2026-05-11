import React from 'react';
import {
  GraduationCap,
  BadgeCheck,
  Code,
  Briefcase,
  Trophy,
  Heart,
  Download
} from 'lucide-react';
import { PERSONAL_INFO, SKILL_CATEGORIES, EDUCATION, CERTIFICATIONS, STRENGTHS, HOBBIES } from '@/data';
import Magnetic from '@/components/Magnetic';

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 uppercase tracking-tighter text-white">RESUME</h2>
        <div className="w-20 h-1 bg-brand-blue mx-auto mb-8" />
        <Magnetic>
          <a
            href={PERSONAL_INFO.resumeLink}
            download
            className="inline-flex items-center justify-center px-8 py-3 bg-brand-blue text-white rounded-full font-medium hover:bg-brand-blue/80 transition-colors shadow-lg shadow-brand-blue/20"
          >
            <Download className="h-5 w-5 mr-2" />
            Download Full CV
          </a>
        </Magnetic>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Education */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 text-brand-blue">
            <GraduationCap size={24} />
            <h3 className="text-xl font-bold uppercase tracking-widest">Education</h3>
          </div>
          <div className="space-y-6 border-l border-white/10 ml-3 pl-6">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[31px] top-1.5 w-2 h-2 rounded-full bg-brand-blue shadow-[0_0_10px_rgba(64,48,255,0.8)]" />
                <h4 className="text-lg font-bold">{edu.degree}</h4>
                <p className="text-brand-blue text-sm">{edu.institution}</p>
                <p className="text-white/40 text-xs mt-1">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 text-brand-blue">
            <BadgeCheck size={24} />
            <h3 className="text-xl font-bold uppercase tracking-widest">Certifications</h3>
          </div>
          <div className="space-y-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <div key={idx} className="flex justify-between items-center bg-white/5 p-4 rounded-lg border border-white/10">
                <span className="text-sm font-medium">{cert.name}</span>
                <span className="text-[10px] text-white/40">{cert.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="space-y-8">
        <div className="flex items-center gap-3 text-brand-blue">
          <Code size={24} />
          <h3 className="text-xl font-bold uppercase tracking-widest">Core Strengths</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STRENGTHS.map((str, idx) => (
            <div key={idx} className="p-4 bg-white/5 border border-white/10 rounded-xl text-center hover:bg-brand-blue/10 transition-colors">
              <p className="text-xs text-white/80">{str}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hobbies */}
      <div className="space-y-8">
        <div className="flex items-center gap-3 text-brand-blue">
          <Heart size={24} />
          <h3 className="text-xl font-bold uppercase tracking-widest">Interests</h3>
        </div>
        <div className="flex flex-wrap gap-3">
          {HOBBIES.map((hby, idx) => (
            <span key={idx} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-white/60">
              {hby}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
