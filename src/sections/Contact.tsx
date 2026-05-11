import React from 'react';
import { useToast } from '@/hooks/use-toast';
import { Linkedin, Github, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';
import { PERSONAL_INFO } from '@/data';

const Contact = () => {
  const { toast } = useToast();
  const apiKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY; 

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
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "I'll get back to you as soon as possible.",
      });
      reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    },
  });

  return (
    <div className="space-y-10">
      <div className="max-w-3xl">
        <div className="inline-block px-3 py-1 bg-brand-blue/20 rounded-full text-sm mb-4 text-brand-blue">
          Get in Touch
        </div>
        <h2 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
          Let's start a conversation
        </h2>
        <p className="text-lg text-white/60 mb-8 leading-relaxed">
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <input type="checkbox" className="hidden" {...register("botcheck")} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-blue transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-blue transition-all"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <textarea
              {...register("message", { required: "Message is required" })}
              rows={5}
              className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-blue transition-all resize-none"
              placeholder="Tell me about your project..."
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-brand-blue text-white rounded-xl font-bold hover:bg-brand-blue/80 transition-all disabled:opacity-50"
            >
              {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Mail className="text-brand-blue" /> Contact Info
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors">
                  <Mail size={20} className="text-brand-blue" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest">Email</p>
                  <p className="text-sm font-medium">{PERSONAL_INFO.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors">
                  <Phone size={20} className="text-brand-blue" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest">Phone</p>
                  <p className="text-sm font-medium">{PERSONAL_INFO.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors">
                  <MapPin size={20} className="text-brand-blue" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest">Location</p>
                  <p className="text-sm font-medium">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
