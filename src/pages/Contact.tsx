import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import AnimatedShape from '@/components/AnimatedShape';
import { useToast } from '@/hooks/use-toast';
import { Linkedin, Github, Twitter, Youtube, BookOpen } from 'lucide-react';
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { toast } = useToast();
  const apiKey = "868f7675-6e32-4f57-aae4-1d179b5f6dae"; 

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Ritesh's Portfolio",
      subject: "New Contact Message from Portfolio",
    },
    onSuccess: (msg, data) => {
      toast({
        title: "Message sent!",
        description: "I'll get back to you as soon as possible.",
      });
      reset();
    },
    onError: (msg, data) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    },
  });

  return (
    <div className="min-h-screen bg-brand-black text-white overflow-hidden">
      <div className="fixed left-0 top-0 bottom-0 w-16 bg-brand-black/80 z-40 flex flex-col items-center justify-center gap-8 border-r border-white/10">
        {/* ... your existing social links ... */}
      </div>

      <div className="pl-16">
        <Navbar />

        <main className="relative pt-32 pb-20 page-transition">
          <section className="container mx-auto px-4 md:px-6 mb-16">
            <div className="relative">
              <AnimatedShape 
                type="circle" 
                color="rgba(255, 243, 163, 0.3)" 
                size={100}
                className="top-[-50px] right-[20%] z-0"
                animationDelay="0s"
              />

              <div className="relative z-10 max-w-3xl">
                <div className="inline-block px-3 py-1 bg-brand-yellow/20 rounded-full text-sm mb-4 animate-fade-in">
                  Get in Touch
                </div>
                <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6 animate-fade-in">
                  Let's start a conversation
                </h1>
                <p className="text-lg text-white/80 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  Have a project in mind or just want to say hello? I'd love to hear from you. Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>
            </div>
          </section>

          <section className="container mx-auto px-4 md:px-6 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <input type="checkbox" className="hidden" {...register("botcheck")} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        {...register("name", { required: "Name is required" })}
                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white focus:outline-none focus:ring-2 transition-all ${
                          errors.name ? "border-red-600 focus:ring-red-600" : "border-white/10 focus:border-brand-blue focus:ring-brand-blue"
                        }`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-1">{errors.name.message?.toString()}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        {...register("email", { 
                          required: "Email is required",
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Invalid email format"
                          }
                        })}
                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white focus:outline-none focus:ring-2 transition-all ${
                          errors.email ? "border-red-600 focus:ring-red-600" : "border-white/10 focus:border-brand-blue focus:ring-brand-blue"
                        }`}
                        placeholder="Your email"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1">{errors.email.message?.toString()}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <select
                      id="subject"
                      {...register("subject", { required: "Subject is required" })}
                     className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all appearance-none"
                    >
                      <option className='text-black' value="" disabled>Select a subject</option>
                      <option className='text-black' value="New Project">New Project</option>
                      <option className='text-black' value="Collaboration">Collaboration</option>
                      <option className='text-black' value="Job Offer">Want To Hire Me</option>
                      <option className='text-black' value="Other">Other</option>
                    </select>
                    {errors.subject && (
                      <p className="text-red-400 text-sm mt-1">{errors.subject.message?.toString()}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      {...register("message", { 
                        required: "Message is required",
                        minLength: {
                          value: 20,
                          message: "Message should be at least 20 characters"
                        }
                      })}
                      rows={5}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white focus:outline-none focus:ring-2 transition-all resize-none ${
                        errors.message ? "border-red-600 focus:ring-red-600" : "border-white/10 focus:border-brand-blue focus:ring-brand-blue"
                      }`}
                      placeholder="Tell me about your project..."
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-1">{errors.message.message?.toString()}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-brand-blue text-white rounded-lg font-medium hover:bg-brand-blue/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <svg
                        className="w-5 h-5 mx-auto animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="bg-white/5 rounded-2xl p-8 border border-white/10 h-full">
                  <h2 className="text-2xl font-medium mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Email</h3>
                      <a href="mailto:riteshtayade68@gmail.com" className="text-white/80 hover:text-white transition-colors">
                        riteshtayade68@gmail.com
                      </a>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Phone</h3>
                      <a href="tel:+918668740625" className="text-white/80 hover:text-white transition-colors">
                        +91 8668740625
                      </a>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Location</h3>
                      <address className="text-white/80 not-italic">
                        Pune, Maharashtra<br />
                        India
                      </address>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4">Connect With Me</h3>
                      <div className="flex space-x-4">
                        <a href="https://www.linkedin.com/in/mr-ritesh" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a href="https://github.com/Mr-Ritesh-1" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                          <Github className="h-5 w-5" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                          <Twitter className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        
        <footer className="border-t border-white/10 py-10">
        <div className="container mx-auto px-4 md:px-6">
            <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
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

export default Contact;