
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import WorkCard from '@/components/WorkCard';
import AnimatedShape from '@/components/AnimatedShape';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Twitter, Youtube, BookOpen, Instagram } from 'lucide-react';

const Work = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black text-white overflow-hidden">
      {/* Social sidebar */}
      <div className="fixed left-0 top-0 bottom-0 w-16 bg-brand-black/80 z-40 flex flex-col items-center justify-center gap-8 border-r border-white/10">
        <a 
          href="https://www.linkedin.com/in/mr-ritesh" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white/60 hover:text-brand-blue transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a 
          href="https://x.com/RiteshTaya82223" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white/60 hover:text-brand-blue transition-colors"
          aria-label="Twitter"
        >
          <Twitter className="h-5 w-5" />
        </a>
        <a href="https://www.instagram.com/mr.ritesh__t/" target="_blank" 
          rel="noopener noreferrer"
          className="text-white/60 hover:text-brand-blue transition-colors"
          aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </a>
        <a 
          href="https://github.com/Mr-Ritesh-t" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white/60 hover:text-brand-blue transition-colors"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5" />
        </a>
        <a 
          href="/resume" 
          className="text-white/60 hover:text-brand-blue transition-colors"
          aria-label="Resume"
        >
          <BookOpen className="h-5 w-5" />
        </a>
      </div>

      {/* Main content */}
      <div className="pl-16">
        <Navbar />

        <main className="relative pt-32 pb-20 page-transition">
          <section className="container mx-auto px-4 md:px-6 mb-16">
            <div className="relative">
              <AnimatedShape 
                type="triangle" 
                color="rgba(64, 48, 255, 0.3)" 
                size={120}
                className="top-[-80px] right-[15%] z-0"
                animationDelay="0s"
              />

              <div className="relative z-10 max-w-3xl">
                <div className="inline-block px-3 py-1 bg-brand-blue/20 rounded-full text-sm mb-4 animate-fade-in">
                  My Projects
                </div>
                <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6 animate-fade-in">
                  Featured Work
                </h1>
                <p className="text-lg text-white/80 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  Explore my latest projects, showcasing my expertise in web development, design, and problem-solving.
                </p>
              </div>
            </div>
          </section>

          <section className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <WorkCard 
                title="Sundown Studio Website Clone" 
                category="Web Development"
                description=" Modern, Interactive Web Design A sleek and immersive website designed to showcase creative environments and experiences."
                technologies={["HTML", "CSS", "JavaScript"]}
                image="https://i.postimg.cc/dtDVw6fG/Sundown.png"
                date="2024"
                className="animate-fade-in"
                link="https://mr-ritesh-t.github.io/SunDown-clone/"
              />


              <WorkCard 
                title="Work Studio Website Clone" 
                category="Web Development"
                description="A sleek, immersive website to showcase creative environments with smooth animations and interactive UI components."
                technologies={["HTML", "CSS", "JavaScript"]}
                link="https://mr-ritesh-t.github.io/Works.studio-clone/"
                image="https://i.postimg.cc/Jn1ryC1d/Work-studio.png"
                date="2024"
                className="animate-fade-in"
              />
              
              <WorkCard 
                title="Employee Management App" 
                category="Full-Stack Development"
                description="A comprehensive web application for managing employees, featuring user authentication and CRUD operations."
                technologies={["React", "Tailwind CSS"]}
                image="https://i.postimg.cc/MpszfQj1/Employee-management.png"
                date="In Progress"
                className="animate-fade-in"
                link="https://ritesh-employee-managment-system.netlify.app/"
              />

            </div>
          </section>

          <section className="container mx-auto px-4 md:px-6 mb-16">
            <h2 className="text-3xl font-medium mb-8">Skills & Expertise</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-medium mb-3 text-brand-blue">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm px-3 py-1 bg-white/10 rounded-full">HTML</span>
                  <span className="text-sm px-3 py-1 bg-white/10 rounded-full">CSS</span>
                  <span className="text-sm px-3 py-1 bg-white/10 rounded-full">JavaScript</span>
                  <span className="text-sm px-3 py-1 bg-white/10 rounded-full">ReactJs</span>
                  <span className="text-sm px-3 py-1 bg-white/10 rounded-full">Tailwind CSS</span>
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-medium mb-3 text-brand-blue">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm px-3 py-1 bg-white/10 rounded-full">Python</span>
                  <span className="text-sm px-3 py-1 bg-white/10 rounded-full">Django</span>
                  <span className="text-sm px-3 py-1 bg-white/10 rounded-full">MySQL</span>
                  <span className="text-sm px-3 py-1 bg-white/10 rounded-full">RESTful APIs</span>
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-medium mb-3 text-brand-blue">Programming</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm px-3 py-1 bg-white/10 rounded-full">Java</span>
                  <span className="text-sm px-3 py-1 bg-white/10 rounded-full">C</span>
                  <span className="text-sm px-3 py-1 bg-white/10 rounded-full">C++</span>
                  <span className="text-sm px-3 py-1 bg-white/10 rounded-full">Python</span>
                  <span className="text-sm px-3 py-1 bg-white/10 rounded-full">JavaScript</span>
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-medium mb-3 text-brand-blue">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm px-3 py-1 bg-white/10 rounded-full">Git</span>
                  <span className="text-sm px-3 py-1 bg-white/10 rounded-full">GitHub</span>
                  <span className="text-sm px-3 py-1 bg-white/10 rounded-full">VS Code</span>
                  <span className="text-sm px-3 py-1 bg-white/10 rounded-full">Firebase</span>
                </div>
              </div>
            </div>
          </section>

          <section className="container mx-auto px-4 md:px-6 mb-16">
            <div className="bg-brand-blue rounded-3xl p-10 md:p-16">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-medium mb-6">Interested in working together?</h2>
                <p className="text-white/80 mb-8">
                Need a website or want to hire me? Let's bring your idea to life! I'm always open to new opportunities and challenges. Get in touch.
                </p>
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-brand-blue rounded-full font-medium hover:bg-white/90 transition-colors"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 py-10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-2xl font-medium mb-4">Ritesh Tayade</div>
                <p className="text-white/60 max-w-md">
                Passionate web developer with a strong foundation in frontend and backend technologies, dedicated to creating dynamic and user-friendly applications.
                </p>
              </div>
              <div>
                <div className="text-lg font-medium mb-4">Connect</div>
                <div className="flex flex-col space-y-2">
                  <a href="https://github.com/Mr-Ritesh-t" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">GitHub</a>
                  <a href="https://www.linkedin.com/in/mr-ritesh" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">LinkedIn</a>
                </div>
              </div>
              <div>
                <div className="text-lg font-medium mb-4">Contact</div>
                <div className="flex flex-col space-y-2">
                  <a href="mailto:riteshtayade68@gmail.com" className="text-white/60 hover:text-white transition-colors">
                    Riteshtayade68@gmail.com
                  </a>
                  <a href="tel:+918668740625" className="text-white/60 hover:text-white transition-colors">
                    +91 8668740625
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
              <div className="text-white/60 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Ritesh Tayade. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Work;
