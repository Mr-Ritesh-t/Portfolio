
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Youtube, Github, BookOpen, Instagram } from 'lucide-react';
import AnimatedShape from '@/components/AnimatedShape';
import Navbar from '@/components/Navbar';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black text-white overflow-hidden">
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
      <div className="pl-16">
        <Navbar />
        <main className="relative pt-32 pb-20">
          <section className="container mx-auto px-4 md:px-6 min-h-[calc(100vh-80px)] flex flex-col justify-center">
            <div className="max-w-4xl mx-auto text-center relative">
              <AnimatedShape 
                type="circle" 
                color="rgba(64, 48, 255, 0.1)" 
                size={180}
                className="top-[-100px] right-[-50px] z-0"
                animationDelay="0s"
              />
              <AnimatedShape 
                type="triangle" 
                color="rgba(255, 243, 163, 0.2)" 
                size={120}
                className="bottom-[-60px] left-[10%] z-0"
                animationDelay="0.5s"
              />

              <div className="relative z-10">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight animate-fade-in">
                  HEY, I'M RITESH TAYADE
                </h1>
                
                <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  A Web Developer passionate about building modern and interactive web applications with strong skills in Python, Java, JavaScript, React.js, and Django.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <Link 
                    to="/work"
                    className="inline-block py-3 px-8 bg-brand-blue text-white font-medium rounded-md hover:bg-brand-blue/90 transition-colors"
                  >
                    MY PROJECTS
                  </Link>
                  <Link 
                    to="/contact"
                    className="inline-block py-3 px-8 bg-transparent text-white border border-white/20 font-medium rounded-md hover:bg-white/5 transition-colors"
                  >
                    CONTACT ME
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 py-6">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-white/60 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Ritesh Tayade. All rights reserved.
              </div>
              <div className="flex space-x-6">
                <a href="mailto:Riteshtayade68@gmail.com" className="text-white/60 hover:text-white text-sm transition-colors">Riteshtayade68@gmail.com</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
