import React from 'react';
import WorkCard from '@/components/WorkCard';
import AnimatedShape from '@/components/AnimatedShape';

const Work = () => {
  return (
    <div className="space-y-20">
      <div className="relative">
        <AnimatedShape 
          type="triangle" 
          color="rgba(64, 48, 255, 0.3)" 
          size={120}
          className="top-[-80px] right-[15%] z-0"
          animationDelay="0s"
        />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-block px-3 py-1 bg-brand-blue/20 rounded-full text-sm mb-4 text-brand-blue">
            My Projects
          </div>
          <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
            Featured Work
          </h1>
          <p className="text-lg text-white/80 mb-8">
            Explore my latest projects, showcasing my expertise in web development, design, and problem-solving.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <WorkCard 
          title="Sundown Studio Website Clone" 
          category="Web Development"
          description="A sleek and immersive website designed to showcase creative environments and experiences."
          technologies={["HTML", "CSS", "JavaScript"]}
          image="https://i.postimg.cc/dtDVw6fG/Sundown.png"
          date="2024"
          link="https://mr-ritesh-t.github.io/SunDown-clone/"
          github="https://github.com/Mr-Ritesh-t/SunDown-clone"
        />

        <WorkCard 
          title="Work Studio Website Clone" 
          category="Web Development"
          description="A sleek, immersive website to showcase creative environments with smooth animations."
          technologies={["HTML", "CSS", "JavaScript"]}
          link="https://mr-ritesh-t.github.io/Works.studio-clone/"
          github="https://github.com/Mr-Ritesh-t/Works.studio-clone"
          image="https://i.postimg.cc/Jn1ryC1d/Work-studio.png"
          date="2024"
        />
        
        <WorkCard 
          title="Employee Management App" 
          category="Full-Stack Development"
          description="A comprehensive web application for managing employees with CRUD operations."
          technologies={["React", "Tailwind CSS"]}
          image="https://i.postimg.cc/MpszfQj1/Employee-management.png"
          date="In Progress"
          link="https://ritesh-employee-managment-system.netlify.app/"
          github="https://github.com/Mr-Ritesh-t"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-brand-blue/30 transition-all">
          <h3 className="text-xl font-medium mb-3 text-brand-blue">Frontend</h3>
          <div className="flex flex-wrap gap-2">
            {["HTML", "CSS", "JS", "React", "Tailwind"].map(s => (
              <span key={s} className="text-xs px-2 py-1 bg-white/10 rounded-full">{s}</span>
            ))}
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-brand-blue/30 transition-all">
          <h3 className="text-xl font-medium mb-3 text-brand-blue">Backend</h3>
          <div className="flex flex-wrap gap-2">
            {["Python", "Django", "MySQL", "REST APIs"].map(s => (
              <span key={s} className="text-xs px-2 py-1 bg-white/10 rounded-full">{s}</span>
            ))}
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-brand-blue/30 transition-all">
          <h3 className="text-xl font-medium mb-3 text-brand-blue">Language</h3>
          <div className="flex flex-wrap gap-2">
            {["Java", "C", "C++", "Python", "JS"].map(s => (
              <span key={s} className="text-xs px-2 py-1 bg-white/10 rounded-full">{s}</span>
            ))}
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-brand-blue/30 transition-all">
          <h3 className="text-xl font-medium mb-3 text-brand-blue">Tools</h3>
          <div className="flex flex-wrap gap-2">
            {["Git", "GitHub", "VS Code", "Firebase"].map(s => (
              <span key={s} className="text-xs px-2 py-1 bg-white/10 rounded-full">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
