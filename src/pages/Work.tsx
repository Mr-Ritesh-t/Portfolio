import React, { useEffect } from 'react';
import WorkCard from '@/components/WorkCard';
import AnimatedShape from '@/components/AnimatedShape';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PERSONAL_INFO } from '@/data';
import ScrollReveal from '@/components/ScrollReveal';

const Work = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>{PERSONAL_INFO.name} | Work</title>
        <meta name="description" content={`Projects and portfolio of ${PERSONAL_INFO.name}`} />
        <meta property="og:title" content={`${PERSONAL_INFO.name} | Work`} />
        <meta property="og:description" content={`Explore the latest projects and portfolio of ${PERSONAL_INFO.name}`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${PERSONAL_INFO.name} | Work`} />
        <meta name="twitter:description" content={`Explore the latest projects and portfolio of ${PERSONAL_INFO.name}`} />
      </Helmet>

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
              <ScrollReveal>
                <div className="inline-block px-3 py-1 bg-brand-blue/20 rounded-full text-sm mb-4">
                  My Projects
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
                  Featured Work
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-lg text-white/80 mb-8">
                  Explore my latest projects, showcasing my expertise in web development, design, and problem-solving.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <ScrollReveal delay={0.1}>
              <WorkCard 
                title="Sundown Studio Website Clone" 
                category="Web Development"
                description=" Modern, Interactive Web Design A sleek and immersive website designed to showcase creative environments and experiences."
                technologies={["HTML", "CSS", "JavaScript"]}
                image="https://i.postimg.cc/dtDVw6fG/Sundown.png"
                date="2024"
                link="https://mr-ritesh-t.github.io/SunDown-clone/"
                github="https://github.com/Mr-Ritesh-t/SunDown-clone"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <WorkCard 
                title="Work Studio Website Clone" 
                category="Web Development"
                description="A sleek, immersive website to showcase creative environments with smooth animations and interactive UI components."
                technologies={["HTML", "CSS", "JavaScript"]}
                link="https://mr-ritesh-t.github.io/Works.studio-clone/"
                github="https://github.com/Mr-Ritesh-t/Works.studio-clone"
                image="https://i.postimg.cc/Jn1ryC1d/Work-studio.png"
                date="2024"
              />
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <WorkCard 
                title="Employee Management App" 
                category="Full-Stack Development"
                description="A comprehensive web application for managing employees, featuring user authentication and CRUD operations."
                technologies={["React", "Tailwind CSS"]}
                image="https://i.postimg.cc/MpszfQj1/Employee-management.png"
                date="In Progress"
                link="https://ritesh-employee-managment-system.netlify.app/"
                github="https://github.com/Mr-Ritesh-t"
              />
            </ScrollReveal>
          </div>
        </section>

        <section className="container mx-auto px-4 md:px-6 mb-16">
          <ScrollReveal>
            <h2 className="text-3xl font-medium mb-8">Skills & Expertise</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <ScrollReveal delay={0.1}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors h-full">
                <h3 className="text-xl font-medium mb-3 text-brand-blue">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm px-3 py-1 bg-white/10 rounded-full">HTML</span>
                  <span className="text-sm px-3 py-1 bg-white/10 rounded-full">CSS</span>
                  <span className="text-sm px-3 py-1 bg-white/10 rounded-full">JavaScript</span>
                  <span className="text-sm px-3 py-1 bg-white/10 rounded-full">ReactJs</span>
                  <span className="text-sm px-3 py-1 bg-white/10 rounded-full">Tailwind CSS</span>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors h-full">
                <h3 className="text-xl font-medium mb-3 text-brand-blue">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm px-3 py-1 bg-white/10 rounded-full">Python</span>
                  <span className="text-sm px-3 py-1 bg-white/10 rounded-full">Django</span>
                  <span className="text-sm px-3 py-1 bg-white/10 rounded-full">MySQL</span>
                  <span className="text-sm px-3 py-1 bg-white/10 rounded-full">RESTful APIs</span>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors h-full">
                <h3 className="text-xl font-medium mb-3 text-brand-blue">Programming</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm px-3 py-1 bg-white/10 rounded-full">Java</span>
                  <span className="text-sm px-3 py-1 bg-white/10 rounded-full">C</span>
                  <span className="text-sm px-3 py-1 bg-white/10 rounded-full">C++</span>
                  <span className="text-sm px-3 py-1 bg-white/10 rounded-full">Python</span>
                  <span className="text-sm px-3 py-1 bg-white/10 rounded-full">JavaScript</span>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors h-full">
                <h3 className="text-xl font-medium mb-3 text-brand-blue">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm px-3 py-1 bg-white/10 rounded-full">Git</span>
                  <span className="text-sm px-3 py-1 bg-white/10 rounded-full">GitHub</span>
                  <span className="text-sm px-3 py-1 bg-white/10 rounded-full">VS Code</span>
                  <span className="text-sm px-3 py-1 bg-white/10 rounded-full">Firebase</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="container mx-auto px-4 md:px-6 mb-16">
          <ScrollReveal>
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
          </ScrollReveal>
        </section>
      </main>
    </>
  );
};

export default Work;
