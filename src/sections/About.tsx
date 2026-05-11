import React from 'react';
import AnimatedShape from '@/components/AnimatedShape';
import { PERSONAL_INFO, SKILL_CATEGORIES, EDUCATION } from '@/data';
import { GitHubCalendar } from 'react-github-calendar';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const skillData = [
  { subject: 'Frontend', A: 90, fullMark: 100 },
  { subject: 'Backend', A: 75, fullMark: 100 },
  { subject: 'Database', A: 70, fullMark: 100 },
  { subject: 'Tools', A: 85, fullMark: 100 },
  { subject: 'Programming', A: 80, fullMark: 100 },
  { subject: 'Problem Solving', A: 85, fullMark: 100 },
];

const About = () => {
  return (
    <div className="space-y-24">
      {/* Introduction */}
      <div className="relative">
        <AnimatedShape
          type="square"
          color="rgba(64, 48, 255, 0.3)"
          size={100}
          className="top-[20px] right-[10%] z-0"
          animationDelay="0s"
        />

        <div className="relative z-10 max-w-4xl">
          <div className="inline-block px-3 py-1 bg-brand-blue/20 rounded-full text-sm mb-4 text-brand-blue">
            About Me
          </div>
          <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
            {PERSONAL_INFO.role}
          </h1>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            {PERSONAL_INFO.description}
          </p>
        </div>
      </div>

      {/* Grid: Journey + Education */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-medium mb-8 flex items-center gap-3">
            <div className="w-8 h-[2px] bg-brand-blue" /> My Journey
          </h2>
          <div className="space-y-6 text-white/70 leading-relaxed">
            <p>
              I completed my Diploma in Computer Science and I am currently
              pursuing my B.Tech in Information Technology in Pune.
            </p>
            <p>
              My academic path has built a strong foundation in programming,
              web development, and software engineering principles.
            </p>
            <p>
              I’m constantly learning and improving through projects and self-development, aiming to create impactful digital solutions.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-medium mb-8 flex items-center gap-3">
            <div className="w-8 h-[2px] bg-brand-blue" /> Education
          </h2>
          <div className="space-y-6">
            {EDUCATION.map((edu, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-medium mb-1">{edu.degree}</h3>
                <p className="text-brand-blue mb-2 text-sm">{edu.institution}</p>
                <p className="text-white/60 text-xs mb-3">{edu.period}</p>
                <p className="text-white/80 text-sm">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Radar */}
      <div>
        <h2 className="text-3xl font-medium mb-10 text-center">Skills & Expertise</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="h-[350px] w-full bg-white/5 rounded-2xl border border-white/10 p-4">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillData}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 11 }} />
                <Radar name="Skills" dataKey="A" stroke="#4030FF" fill="#4030FF" fillOpacity={0.4} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {SKILL_CATEGORIES.map((skillGroup, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-5 border border-white/10">
                <h3 className="text-sm font-bold mb-3 text-white/50 uppercase tracking-widest">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-1 bg-white/10 rounded-full text-white/80">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* GitHub */}
      <div className="text-center">
        <h2 className="text-2xl font-medium mb-8 text-white/40">Open Source Activity</h2>
        <div className="bg-white/5 rounded-2xl p-8 border border-white/10 inline-block max-w-full overflow-x-auto">
          <GitHubCalendar 
            username="Mr-Ritesh-t" 
            colorScheme="dark"
            theme={{ dark: ['rgba(255,255,255,0.05)', '#4030FF'] }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
