import React, { useEffect } from 'react';
import AnimatedShape from '@/components/AnimatedShape';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PERSONAL_INFO, SKILL_CATEGORIES, EDUCATION } from '@/data';
import { GitHubCalendar } from 'react-github-calendar';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import ScrollReveal from '@/components/ScrollReveal';

const skillData = [
  { subject: 'Frontend', A: 90, fullMark: 100 },
  { subject: 'Backend', A: 75, fullMark: 100 },
  { subject: 'Database', A: 70, fullMark: 100 },
  { subject: 'Tools', A: 85, fullMark: 100 },
  { subject: 'Programming', A: 80, fullMark: 100 },
  { subject: 'Problem Solving', A: 85, fullMark: 100 },
];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>{PERSONAL_INFO.name} | About</title>
        <meta name="description" content={`About ${PERSONAL_INFO.name} - ${PERSONAL_INFO.role}`} />
        <meta property="og:title" content={`${PERSONAL_INFO.name} | About`} />
        <meta property="og:description" content={`Learn more about ${PERSONAL_INFO.name}'s journey, education, and skills.`} />
        <meta property="og:type" content="profile" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${PERSONAL_INFO.name} | About`} />
        <meta name="twitter:description" content={`Learn more about ${PERSONAL_INFO.name}'s journey, education, and skills.`} />
      </Helmet>

      <main className="relative pt-32 pb-20 page-transition">
        {/* Hero */}
        <section className="container mx-auto px-4 md:px-6 mb-16">
          <div className="relative">
            <AnimatedShape
              type="square"
              color="rgba(64, 48, 255, 0.3)"
              size={100}
              className="top-[20px] right-[10%] z-0"
              animationDelay="0s"
            />

            <div className="relative z-10 max-w-3xl">
              <ScrollReveal>
                <div className="inline-block px-3 py-1 bg-brand-blue/20 rounded-full text-sm mb-4">
                  About Me
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
                  {PERSONAL_INFO.role}
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-lg text-white/80 mb-8">
                  {PERSONAL_INFO.description}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Journey + Education */}
        <section className="container mx-auto px-4 md:px-6 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-medium mb-6">My Journey</h2>
                <p className="text-white/80 mb-6">
                  I have successfully completed my Diploma in Computer Science and I am currently
                  pursuing my B.Tech in Information Technology at Ratan Tata Maharashtra State Skill University, Pune.
                </p>
                <p className="text-white/80 mb-6">
                  My academic journey has helped me build a strong foundation in programming,
                  web development, databases, and software engineering principles.
                </p>
                <p className="text-white/80">
                  I’m constantly learning and improving my skills through projects, practical
                  development, and self-learning. My goal is to become a skilled full-stack
                  developer and create impactful digital solutions.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <h2 className="text-3xl font-medium mb-6">Education</h2>
                <div className="space-y-6">
                  {EDUCATION.map((edu, index) => (
                    <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <h3 className="text-xl font-medium mb-1">{edu.degree}</h3>
                      <p className="text-brand-blue mb-2">{edu.institution}</p>
                      <p className="text-white/60 text-sm mb-3">{edu.period}</p>
                      <p className="text-white/80">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Skills */}
        <section className="container mx-auto px-4 md:px-6 mb-20">
          <ScrollReveal>
            <h2 className="text-3xl font-medium mb-10">Skills & Expertise</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <ScrollReveal>
              <div className="h-[300px] md:h-[400px] w-full bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center p-4">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillData}>
                    <PolarGrid stroke="rgba(255,255,255,0.2)" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(255,255,255,0.8)', fontSize: 12 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar name="Skills" dataKey="A" stroke="#4030FF" fill="#4030FF" fillOpacity={0.5} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {SKILL_CATEGORIES.map((skillGroup, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col h-full">
                    <h3 className="text-xl font-medium mb-4">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {skillGroup.items.map((skill, idx) => (
                        <span key={idx} className="text-sm px-3 py-1 bg-white/10 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* GitHub Calendar */}
        <section className="container mx-auto px-4 md:px-6 mb-20">
          <ScrollReveal>
            <h2 className="text-3xl font-medium mb-10">GitHub Contributions</h2>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 overflow-x-auto flex justify-center">
              <GitHubCalendar 
                username="Mr-Ritesh-t" 
                colorScheme="dark"
                blockSize={14}
                blockMargin={4}
                fontSize={14}
                theme={{
                  dark: ['rgba(255,255,255,0.1)', '#4030FF']
                }}
              />
            </div>
          </ScrollReveal>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 md:px-6 mb-16">
          <ScrollReveal>
            <div className="bg-brand-blue rounded-3xl p-10 md:p-16">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-medium mb-6">Want to work together?</h2>
                <p className="text-white/80 mb-8">
                  Need a website or want to hire me? Let’s bring your ideas to life.
                  I’m always open to internships, collaborations, and exciting opportunities.
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

export default About;