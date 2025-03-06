
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import AnimatedShape from '@/components/AnimatedShape';
import { Briefcase, GraduationCap, BadgeCheck, Code, Mail, Phone, Github, Linkedin, MapPin, Trophy, Heart, ExternalLink } from 'lucide-react';

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black text-white overflow-hidden">
      <Navbar />

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
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">RITESH TAYADE</h1>
                <p className="text-lg text-brand-blue mb-3 animate-fade-in">Web Developer</p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 text-white/80 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Pune, Maharashtra</span>
                  </div>
                  <div className="hidden md:block h-4 w-px bg-white/20"></div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-1" /> 
                    <a href="mailto:riteshtayade68@gmail.com" className="hover:text-brand-blue transition-colors">
                      riteshtayade68@gmail.com
                    </a>
                  </div>
                  <div className="hidden md:block h-4 w-px bg-white/20"></div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-1" /> 
                    <a href="tel:+918668740625" className="hover:text-brand-blue transition-colors">
                      +91 8668740625
                    </a>
                  </div>
                </div>
                <div className="flex justify-center gap-4 mt-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <a href="https://github.com/Mr-Ritesh-t" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/mr-ritesh" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
              
              <div className="space-y-10">
                <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <h2 className="text-2xl font-medium mb-4 border-b border-white/10 pb-2">SUMMARY</h2>
                  <p className="text-white/80">
                  Dedicated web developer with a solid understanding of frontend and backend technologies, with expertise in Django and ReactJs. Dedicated to developing engaging, contemporary web solutions with an eye for UI/UX design and problem-solving. Looking for opportunities to bring my technical abilities to bear and contribute to creative projects.
                  </p>
                </div>
                
                <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="h-5 w-5 text-brand-blue" />
                    <h2 className="text-2xl font-medium border-b border-white/10 pb-2 flex-grow">EDUCATION</h2>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">Diploma in Computer Science</h3>
                    <div className="flex justify-between items-center text-white/80">
                      <p>Shree Gulabrao Deokar College of Polytechnic, Jalgaon</p>
                      <p>Sep 2021 - Present</p>
                    </div>
                  </div>
                </div>
                
                <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-center gap-2 mb-4">
                    <Code className="h-5 w-5 text-brand-blue" />
                    <h2 className="text-2xl font-medium border-b border-white/10 pb-2 flex-grow">SKILLS</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium text-brand-yellow mb-2">Programming Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Python</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Java</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-sm">JavaScript</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-sm">HTML</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-sm">CSS</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-brand-yellow mb-2">Frameworks & Libraries</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Django</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-sm">ReactJs</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Tailwind CSS</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-brand-yellow mb-2">Databases</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-white/10 rounded-full text-sm">MySQL</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-brand-yellow mb-2">Version Control & Tools</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Git</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-sm">GitHub</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-sm">VS Code</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-sm">PyCharm</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase className="h-5 w-5 text-brand-blue" />
                    <h2 className="text-2xl font-medium border-b border-white/10 pb-2 flex-grow">PROJECTS</h2>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-medium">Clone of Sundown Studio</h3>
                        <span className="text-white/70 text-sm">Dec 2024</span>
                      </div>
                      <ul className="list-disc list-inside text-white/80 space-y-1 ml-1 mt-2">
                        <li>Developed a sleek, immersive website to showcase creative environments.</li>
                        <li>Built with HTML, CSS, and JavaScript featuring smooth animations, interactive UI components, and a responsive design.</li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-medium">Employee Management App</h3>
                        <span className="text-white/70 text-sm">Present</span>
                      </div>
                      <ul className="list-disc list-inside text-white/80 space-y-1 ml-1 mt-2">
                        <li>Building a comprehensive web app for managing employees with Django and MySQL.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
                  <div className="flex items-center gap-2 mb-4">
                    <BadgeCheck className="h-5 w-5 text-brand-blue" />
                    <h2 className="text-2xl font-medium border-b border-white/10 pb-2 flex-grow">CERTIFICATIONS</h2>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <p className="text-white/80">Data Science</p>
                      <p className="text-white/70 text-sm">Aug 2024</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-white/80">HTML, CSS, and JavaScript</p>
                      <p className="text-white/70 text-sm">Jul 2023</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-white/80">C, C++, Core Java</p>
                      <p className="text-white/70 text-sm">Jun 2023</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-white/80">Badges in Firebase and RESTful APIs</p>
                      <p className="text-white/70 text-sm">Feb 2025</p>
                    </div>
                  </div>
                </div>

                <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
                  <div className="flex items-center gap-2 mb-4">
                    <Trophy className="h-5 w-5 text-brand-blue" />
                    <h2 className="text-2xl font-medium border-b border-white/10 pb-2 flex-grow">STRENGTHS</h2>
                  </div>
                  <ul className="list-disc list-inside text-white/80 space-y-1 ml-1">
                    <li>Strong problem-solving abilities</li>
                    <li>Quick learner with a passion for web technologies</li>
                    <li>Effective communication and teamwork</li>
                    <li>Ability to design user-friendly and responsive web applications</li>
                  </ul>
                </div>

                <div className="animate-fade-in" style={{ animationDelay: '0.9s' }}>
                  <div className="flex items-center gap-2 mb-4">
                    <Heart className="h-5 w-5 text-brand-blue" />
                    <h2 className="text-2xl font-medium border-b border-white/10 pb-2 flex-grow">HOBBIES AND INTERESTS</h2>
                  </div>
                  <ul className="list-disc list-inside text-white/80 space-y-1 ml-1">
                    <li>Web Development (Frontend & Backend)</li>
                    <li>Problem-Solving & Competitive Programming</li>
                    <li>Learning New Technologies</li>
                    <li>UI/UX Design & Responsive Web Design</li>
                    <li>Open-Source Contribution</li>
                    <li>Watching Movies</li>
                    <li>Playing PC Games</li>
                    <li>Listening To Music</li>
                    <li>Reading Books</li>
                    <li>Traveling</li>
                  </ul>
                </div>
                
                <div className="animate-fade-in" style={{ animationDelay: '1.0s' }}>
                  <div className="flex items-center gap-2 mb-4">
                    <Mail className="h-5 w-5 text-brand-blue" />
                    <h2 className="text-2xl font-medium border-b border-white/10 pb-2 flex-grow">CONTACT</h2>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4">
                    <a href="mailto:riteshtayade68@gmail.com" className="flex items-center gap-2 text-white/80 hover:text-brand-blue transition-colors">
                      <Mail className="h-4 w-4" />
                      Riteshtayade68@gmail.com
                    </a>
                    <a href="tel:+918668740625" className="flex items-center gap-2 text-white/80 hover:text-brand-blue transition-colors">
                      <Phone className="h-4 w-4" />
                      +91 8668740625
                    </a>
                    <a href="https://github.com/Mr-Ritesh-1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-brand-blue transition-colors">
                      <Github className="h-4 w-4" />
                      github.com/Mr-Ritesh-t
                    </a>
                    <a href="https://www.linkedin.com/in/mr-ritesh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-brand-blue transition-colors">
                      <Linkedin className="h-4 w-4" />
                      linkedin.com/in/mr-ritesh
                    </a>
                  </div>
                </div>
              </div>
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
                  riteshtayade68@gmail.com
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
            <div className="flex space-x-6">
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Resume;
