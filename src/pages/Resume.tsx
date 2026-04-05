import React, { useEffect } from 'react';
import AnimatedShape from '@/components/AnimatedShape';
import { Helmet } from 'react-helmet-async';
import {
  Briefcase,
  GraduationCap,
  BadgeCheck,
  Code,
  Mail,
  Phone,
  Github,
  Linkedin,
  MapPin,
  Trophy,
  Heart,
  Download
} from 'lucide-react';
import { PERSONAL_INFO, SKILL_CATEGORIES, EDUCATION, CERTIFICATIONS, STRENGTHS, HOBBIES } from '@/data';

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>{PERSONAL_INFO.name} | Resume</title>
        <meta name="description" content={`${PERSONAL_INFO.name} - Resume & Experience`} />
      </Helmet>

      <main className="relative pt-32 pb-20 page-transition">
        <section className="container mx-auto px-4 md:px-6 mb-16">
          <div className="relative">
            <AnimatedShape
              type="circle"
              color="rgba(64, 48, 255, 0.2)"
              size={100}
              className="top-[-50px] right-[20%] z-0"
              animationDelay="0s"
            />
            <AnimatedShape
              type="circle"
              color="rgba(255, 243, 163, 0.2)"
              size={150}
              className="bottom-[-70px] left-[10%] z-0"
              animationDelay="0.2s"
            />

            <div className="relative z-10 max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in uppercase">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-lg text-brand-blue mb-3 animate-fade-in">
                  {PERSONAL_INFO.role}
                </p>

                <div
                  className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 text-white/80 animate-fade-in"
                  style={{ animationDelay: '0.1s' }}
                >
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{PERSONAL_INFO.location}</span>
                  </div>

                  <div className="hidden md:block h-4 w-px bg-white/20"></div>

                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-1" />
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="hover:text-brand-blue transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>

                  <div className="hidden md:block h-4 w-px bg-white/20"></div>

                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-1" />
                    <a
                      href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                      className="hover:text-brand-blue transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div
                  className="flex justify-center gap-4 mt-3 animate-fade-in"
                  style={{ animationDelay: '0.2s' }}
                >
                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>

                <div
                  className="flex justify-center mt-6 animate-fade-in"
                  style={{ animationDelay: '0.25s' }}
                >
                  <a
                    href={PERSONAL_INFO.resumeLink}
                    download
                    className="inline-flex items-center justify-center px-6 py-2 border border-brand-blue/50 text-brand-blue rounded-full font-medium hover:bg-brand-blue/10 transition-colors"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Resume
                  </a>
                </div>
              </div>

              <div className="space-y-10">
                {/* Summary */}
                <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <h2 className="text-2xl font-medium mb-4 border-b border-white/10 pb-2">
                    SUMMARY
                  </h2>
                  <p className="text-white/80 leading-7">
                    Aspiring Full-Stack Web Developer with a strong foundation in frontend and
                    backend technologies, including React.js, Django, and MySQL. Passionate about
                    building modern, responsive, and user-friendly web applications with clean UI
                    and practical functionality. Continuously improving technical and problem-solving
                    skills through projects, hands-on development, and self-learning.
                  </p>
                </div>

                {/* Education */}
                <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="h-5 w-5 text-brand-blue" />
                    <h2 className="text-2xl font-medium border-b border-white/10 pb-2 flex-grow">
                      EDUCATION
                    </h2>
                  </div>

                  <div className="space-y-6">
                    {EDUCATION.map((edu, idx) => (
                      <div key={idx}>
                        <h3 className="text-xl font-medium">{edu.degree}</h3>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center text-white/80">
                          <p>{edu.institution}</p>
                          <p className="md:pl-5">{edu.period}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-center gap-2 mb-4">
                    <Code className="h-5 w-5 text-brand-blue" />
                    <h2 className="text-2xl font-medium border-b border-white/10 pb-2 flex-grow">
                      SKILLS
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {SKILL_CATEGORIES.map((skillGroup, idx) => (
                      <div key={idx}>
                        <h3 className="font-medium text-brand-yellow mb-2">{skillGroup.category}</h3>
                        <div className="flex flex-wrap gap-2">
                          {skillGroup.items.map((skill) => (
                            <span key={skill} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase className="h-5 w-5 text-brand-blue" />
                    <h2 className="text-2xl font-medium border-b border-white/10 pb-2 flex-grow">
                      PROJECTS
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-medium">Sundown Studio Clone</h3>
                        <span className="text-white/70 text-sm">Dec 2024</span>
                      </div>
                      <ul className="list-disc list-inside text-white/80 space-y-1 ml-1 mt-2">
                        <li>Developed a modern and visually engaging website inspired by Sundown Studio.</li>
                        <li>Built using HTML, CSS, and JavaScript with smooth animations and responsive design.</li>
                        <li>Focused on interactive UI, clean layout, and immersive user experience.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-medium">Employee Management System</h3>
                        <span className="text-white/70 text-sm">Ongoing</span>
                      </div>
                      <ul className="list-disc list-inside text-white/80 space-y-1 ml-1 mt-2">
                        <li>Developing a web application for managing employee records efficiently.</li>
                        <li>Using Django and MySQL for backend logic, data handling, and CRUD operations.</li>
                        <li>Focused on building a practical and scalable management system.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-medium">Personal Portfolio Website</h3>
                        <span className="text-white/70 text-sm">2026</span>
                      </div>
                      <ul className="list-disc list-inside text-white/80 space-y-1 ml-1 mt-2">
                        <li>Designed and developed a personal portfolio website to showcase skills, education, and projects.</li>
                        <li>Built with a modern UI, responsive design, and clean user experience.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
                  <div className="flex items-center gap-2 mb-4">
                    <BadgeCheck className="h-5 w-5 text-brand-blue" />
                    <h2 className="text-2xl font-medium border-b border-white/10 pb-2 flex-grow">
                      CERTIFICATIONS
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {CERTIFICATIONS.map((cert, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <p className="text-white/80">{cert.name}</p>
                        <p className="text-white/70 text-sm">{cert.date}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Strengths */}
                <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
                  <div className="flex items-center gap-2 mb-4">
                    <Trophy className="h-5 w-5 text-brand-blue" />
                    <h2 className="text-2xl font-medium border-b border-white/10 pb-2 flex-grow">
                      STRENGTHS
                    </h2>
                  </div>
                  <ul className="list-disc list-inside text-white/80 space-y-1 ml-1">
                    {STRENGTHS.map((str, idx) => (
                      <li key={idx}>{str}</li>
                    ))}
                  </ul>
                </div>

                {/* Interests */}
                <div className="animate-fade-in" style={{ animationDelay: '0.9s' }}>
                  <div className="flex items-center gap-2 mb-4">
                    <Heart className="h-5 w-5 text-brand-blue" />
                    <h2 className="text-2xl font-medium border-b border-white/10 pb-2 flex-grow">
                      HOBBIES & INTERESTS
                    </h2>
                  </div>
                  <ul className="list-disc list-inside text-white/80 space-y-1 ml-1">
                    {HOBBIES.map((hby, idx) => (
                      <li key={idx}>{hby}</li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Resume;