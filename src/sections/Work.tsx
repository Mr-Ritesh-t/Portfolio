import ProjectCarousel from '@/components/ProjectCarousel';
import AnimatedShape from '@/components/AnimatedShape';

const Work = () => {
  return (
    <div className="space-y-8">
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
            Portfolio
          </div>
          <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6 uppercase tracking-tighter italic">
            Neural Project Archive
          </h1>
          <p className="text-lg text-white/60 mb-8 max-w-2xl">
            Accessing decrypted project data nodes... Explore the intersection of high-end design and scalable architecture.
          </p>
        </div>
      </div>

      <div className="relative z-10">
        <ProjectCarousel />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-20">
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
