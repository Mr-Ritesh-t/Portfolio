import ProjectCarousel from '@/components/ProjectCarousel';
import AnimatedShape from '@/components/AnimatedShape';
import { motion } from 'framer-motion';
import { PROCESS } from '@/data';

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

      {/* Professional Workflow Section */}
      <div className="pt-24 space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-black uppercase tracking-widest text-white italic">The Engineering Process</h2>
          <p className="text-white/40 text-sm mt-2">How I transform your vision into a scalable digital reality.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROCESS.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-brand-blue/5 border border-brand-blue/10 rounded-3xl group hover:bg-brand-blue/10 hover:border-brand-blue/30 transition-all relative overflow-hidden"
            >
              <span className="text-4xl font-black text-brand-blue/10 absolute top-4 right-6 group-hover:text-brand-blue/20 transition-colors">
                {item.step}
              </span>
              <h3 className="text-lg font-black text-white uppercase tracking-widest mb-4 group-hover:text-brand-blue transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
