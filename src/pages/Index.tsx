import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ScrollSection from '@/components/ScrollSection';
import SideNav from '@/components/SideNav';
import Hero from '@/sections/Hero';
import Work from '@/sections/Work';
import About from '@/sections/About';
import Resume from '@/sections/Resume';
import Contact from '@/sections/Contact';
import MatrixRain from '@/components/MatrixRain';

const Index = () => {
  useEffect(() => {
    const hash = window.location.hash;
    const path = window.location.pathname.replace('/', '');
    
    const targetId = hash ? hash : (path ? `#${path}` : null);
    
    if (targetId) {
      setTimeout(() => {
        const element = document.querySelector(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 800);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Ritesh Tayade | Premium Portfolio OS</title>
        <meta name="description" content="A premium, interactive developer portfolio and operating system experience by Ritesh Tayade." />
      </Helmet>

      <main className="relative bg-brand-black snap-y snap-mandatory">
        {/* Background Gradients */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <MatrixRain />
          <div className="absolute top-0 -left-[10%] w-[60%] h-[60%] bg-brand-blue/5 blur-[160px] rounded-full animate-pulse" />
          <div className="absolute bottom-0 -right-[10%] w-[60%] h-[60%] bg-brand-blue/10 blur-[160px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10">
          <SideNav />
          <ScrollSection id="home" className="snap-start">
            <Hero />
          </ScrollSection>

          <ScrollSection id="work" className="snap-start">
            <Work />
          </ScrollSection>

          <ScrollSection id="about" className="snap-start">
            <About />
          </ScrollSection>

          <ScrollSection id="resume" className="snap-start">
            <Resume />
          </ScrollSection>

          <ScrollSection id="contact" className="snap-start">
            <Contact />
          </ScrollSection>
        </div>
      </main>
    </>
  );
};

export default Index;