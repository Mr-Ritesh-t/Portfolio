
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AnimatedShape from '@/components/AnimatedShape';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Ritesh Tayade | Portfolio</title>
        <meta name="description" content="A Web Developer passionate about building modern and interactive web applications with strong skills in Python, Java, JavaScript, React.js, and Django." />
      </Helmet>
      <main className="relative pt-16 pb-20">
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
    </>
  );
};

export default Index;