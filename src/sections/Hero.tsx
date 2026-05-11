import NeuralCore from '@/components/NeuralCore';
import Typewriter from 'typewriter-effect';
import Magnetic from '@/components/Magnetic';

const Hero = () => {
  return (
    <div className="max-w-4xl mx-auto text-center relative min-h-[60vh] flex flex-col justify-center">
      <NeuralCore />

      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 tracking-tight">
          HEY, I'M RITESH TAYADE
        </h1>
        <div className="text-2xl md:text-4xl font-medium text-brand-blue mb-6 tracking-tight h-[40px] md:h-[48px]">
          <Typewriter
            options={{
              strings: ['Full-Stack Developer', 'React Enthusiast', 'Python Developer', 'UI/UX Enthusiast'],
              autoStart: true,
              loop: true,
              wrapperClassName: "text-brand-blue",
              cursorClassName: "text-brand-blue animate-pulse",
            }}
          />
        </div>
        
        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
          A Web Developer passionate about building modern and interactive web applications with strong skills in Python, Java, JavaScript, React.js, and Django.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Magnetic>
            <a 
              href="#work"
              className="inline-block py-3 px-8 bg-brand-blue text-white font-medium rounded-md hover:bg-brand-blue/90 transition-colors"
            >
              MY PROJECTS
            </a>
          </Magnetic>
          <Magnetic>
            <a 
              href="#contact"
              className="inline-block py-3 px-8 bg-transparent text-white border border-white/20 font-medium rounded-md hover:bg-white/5 transition-colors"
            >
              CONTACT ME
            </a>
          </Magnetic>
        </div>
        <div className="mt-20 animate-bounce opacity-20">
          <div className="w-6 h-10 border-2 border-white rounded-full mx-auto relative after:content-[''] after:absolute after:top-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-2 after:bg-white after:rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
