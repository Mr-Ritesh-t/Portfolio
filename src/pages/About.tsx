
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import AnimatedShape from '@/components/AnimatedShape';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Mail, Phone, BookOpen } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skills = [
    { category: "Programming Languages", items: ["Python", "Java", "JavaScript", "C", "C++"] },
    { category: "Web Development", items: ["HTML", "CSS", "React.js", "Django", "MySQL"] },
    { category: "Tools & Technologies", items: ["Tailwind CSS", "Firebase", "RESTful APIs", "Git", "GitHub"] }
  ];

  const education = [
    {
      degree: "Diploma in Computer Science",
      institution: "Shree Gulabrao Deokar College of Polytechnic, Jalgaon",
      period: "2022 - 2025",
      description: "Currently pursuing a diploma in Computer Science with focus on software development and web technologies."
    }
  ];

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
          href="https://github.com/Mr-Ritesh-t" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white/60 hover:text-brand-blue transition-colors"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5" />
        </a>
        <a 
          href="mailto:riteshtayade68@gmail.com" 
          className="text-white/60 hover:text-brand-blue transition-colors"
          aria-label="Email"
        >
          <Mail className="h-5 w-5" />
        </a>
        <a 
          href="tel:+918668740625" 
          className="text-white/60 hover:text-brand-blue transition-colors"
          aria-label="Phone"
        >
          <Phone className="h-5 w-5" />
        </a>
        <Link to={'/resume'}>
        <a 
          className="text-white/60 hover:text-brand-blue transition-colors"
          aria-label="Resume"
        >
          <BookOpen className="h-5 w-5" />
        </a>
        </Link>
      </div>

      <div className="pl-16">
        <Navbar />

        <main className="relative pt-32 pb-20 page-transition">
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
                <div className="inline-block px-3 py-1 bg-brand-blue/20 rounded-full text-sm mb-4 animate-fade-in">
                  About Me
                </div>
                <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6 animate-fade-in">
                  Aspiring Web Developer
                </h1>
                <p className="text-lg text-white/80 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  I'm Ritesh Tayade, an aspiring web developer based in Pune, India. I'm passionate about building modern, responsive, and user-friendly websites and applications.
                </p>
              </div>
            </div>
          </section>

          <section className="container mx-auto px-4 md:px-6 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-medium mb-6">My Journey</h2>
                <p className="text-white/80 mb-6">
                  I'm currently pursuing a Diploma in Computer Science at Shree Gulabrao Deokar College of Polytechnic, Jalgaon. My academic journey has been focused on developing a strong foundation in programming languages, web development technologies, and software engineering principles.
                </p>
                <p className="text-white/80">
                  I'm constantly learning and expanding my skills through projects, online courses, and certifications. My goal is to become a proficient full-stack developer who can create impactful digital solutions.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-medium mb-6">Education</h2>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <h3 className="text-xl font-medium mb-1">{edu.degree}</h3>
                      <p className="text-brand-blue mb-2">{edu.institution}</p>
                      <p className="text-white/60 text-sm mb-3">{edu.period}</p>
                      <p className="text-white/80">
                        {edu.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="container mx-auto px-4 md:px-6 mb-20">
            <h2 className="text-3xl font-medium mb-10">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-white/5 rounded-2xl p-6 border border-white/10 animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
                  <h3 className="text-xl font-medium mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, idx) => (
                      <span key={idx} className="text-sm px-3 py-1 bg-white/10 rounded-full">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="container mx-auto px-4 md:px-6 mb-16">
            <div className="bg-brand-blue rounded-3xl p-10 md:p-16">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-medium mb-6">Want to work together?</h2>
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
                  Aspiring web developer with a passion for creating modern, responsive web applications.
                </p>
              </div>
              <div>
                <div className="text-lg font-medium mb-4">Connect</div>
                <div className="flex flex-col space-y-2">
                  <a href="https://github.com/Mr-Ritesh-1" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">GitHub</a>
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

export default About;
