import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  LayoutDashboard, 
  Briefcase, 
  Clock, 
  CreditCard, 
  MessageSquare, 
  ShieldCheck, 
  ChevronRight, 
  ArrowUpRight,
  Zap,
  Globe,
  Database,
  Lock
} from 'lucide-react';
import { PERSONAL_INFO } from '@/data';
import { useSound } from '@/components/SoundProvider';

const ClientPortal = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { playClick, playHover } = useSound();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectStatus = [
    { id: 1, name: "SaaS Platform Alpha", status: "In Progress", progress: 65, deadline: "May 30, 2026" },
    { id: 2, name: "E-commerce Redesign", status: "Completed", progress: 100, deadline: "May 05, 2026" },
    { id: 3, name: "Neural Analytics API", status: "Discovery", progress: 15, deadline: "June 15, 2026" }
  ];

  const services = [
    { 
      title: "Full-Stack MVP", 
      price: "$2,500+", 
      features: ["Custom UI/UX", "Database Design", "Auth System", "Deployment"],
      icon: <Zap className="text-brand-blue" size={20} />
    },
    { 
      title: "Enterprise Scale", 
      price: "$5,000+", 
      features: ["High Availability", "Security Audit", "API Integration", "24/7 Support"],
      icon: <ShieldCheck className="text-brand-blue" size={20} />
    },
    { 
      title: "Consultation", 
      price: "$150/hr", 
      features: ["Architecture Review", "Code Audit", "Performance Optimization"],
      icon: <Globe className="text-brand-blue" size={20} />
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-10 max-w-7xl mx-auto">
      <Helmet>
        <title>Client Portal | {PERSONAL_INFO.name}</title>
        <meta name="description" content="Secure client dashboard for project management and professional services." />
      </Helmet>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-blue">Secure_Client_Terminal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter">
            Command Center
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => { window.dispatchEvent(new CustomEvent('toggle-era')); playClick(); }}
            className="p-4 bg-brand-blue/10 border border-brand-blue/30 rounded-2xl text-brand-blue hover:bg-brand-blue/20 transition-all group"
          >
            <MessageSquare size={24} className="group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-3 space-y-2">
          {[
            { id: 'overview', label: 'Overview', icon: <LayoutDashboard size={18} /> },
            { id: 'projects', label: 'Active Projects', icon: <Briefcase size={18} /> },
            { id: 'services', label: 'Service Catalog', icon: <Zap size={18} /> },
            { id: 'billing', label: 'Billing & Invoices', icon: <CreditCard size={18} /> },
            { id: 'security', label: 'Security Protocols', icon: <Lock size={18} /> }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); playClick(); }}
              onMouseEnter={playHover}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl text-sm font-bold uppercase tracking-widest transition-all ${
                activeTab === tab.id 
                ? 'bg-brand-blue text-white shadow-[0_10px_30px_rgba(64,48,255,0.3)]' 
                : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white border border-transparent hover:border-white/10'
              }`}
            >
              {tab.icon}
              {tab.label}
              {activeTab === tab.id && <ChevronRight size={14} className="ml-auto" />}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-9">
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                {/* Hero / Welcome */}
                <div className="p-10 bg-gradient-to-br from-brand-blue/20 to-transparent border border-brand-blue/30 rounded-[40px] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-[100px] -mr-32 -mt-32" />
                  <div className="relative z-10 max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-black text-white uppercase italic leading-tight mb-4">
                      Elevate Your Digital Infrastructure
                    </h2>
                    <p className="text-white/60 text-sm leading-relaxed mb-8">
                      Welcome to the secure client terminal. This dashboard is designed to provide you with full transparency, real-time telemetry, and direct access to high-end engineering solutions. Whether you're scaling a startup or optimizing enterprise systems, you're in the right place.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <button 
                        onClick={() => { window.dispatchEvent(new CustomEvent('toggle-era')); playClick(); }}
                        className="px-6 py-3 bg-brand-blue text-white font-black rounded-xl uppercase tracking-widest text-[10px] hover:scale-105 transition-transform"
                      >
                        Start Free Consultation
                      </button>
                      <button 
                        onClick={() => setActiveTab('services')}
                        className="px-6 py-3 bg-white/5 border border-white/10 text-white font-black rounded-xl uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all"
                      >
                        Explore Solutions
                      </button>
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { label: 'Uptime Guarantee', value: '99.9%', icon: <Globe size={20} /> },
                    { label: 'Security Health', value: '100%', icon: <ShieldCheck size={20} /> },
                    { label: 'Architecture Score', value: 'A+', icon: <Database size={20} /> }
                  ].map((stat, i) => (
                    <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-3xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        {stat.icon}
                      </div>
                      <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-1">{stat.label}</p>
                      <p className="text-3xl font-black text-white italic">{stat.value}</p>
                    </div>
                  ))}
                </div>

                {/* Client Roadmap */}
                <div className="p-8 bg-white/5 border border-white/10 rounded-[40px]">
                  <h3 className="text-xl font-black text-white uppercase italic tracking-tight mb-8">Project Roadmap</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 hidden md:block" />
                    {[
                      { step: '01', title: 'Consult', status: 'Available' },
                      { step: '02', title: 'Design', status: 'Locked' },
                      { step: '03', title: 'Build', status: 'Locked' },
                      { step: '04', title: 'Deploy', status: 'Locked' }
                    ].map((s, i) => (
                      <div key={i} className="relative z-10 p-4 bg-brand-black border border-white/10 rounded-2xl text-center">
                        <span className="text-[10px] font-black text-brand-blue mb-1 block uppercase">{s.step}</span>
                        <p className="text-xs font-bold text-white uppercase mb-2">{s.title}</p>
                        <span className={`text-[8px] px-2 py-0.5 rounded-full font-black uppercase tracking-widest ${
                          s.status === 'Available' ? 'bg-brand-blue/20 text-brand-blue' : 'bg-white/5 text-white/20'
                        }`}>
                          {s.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action */}
                <div className="p-8 bg-white text-brand-black rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-black uppercase italic leading-tight">Need a custom quote?</h3>
                    <p className="text-brand-black/60 text-sm mt-1">Initialize a direct uplink with Ritesh's AI Assistant.</p>
                  </div>
                  <button 
                    onClick={() => { window.dispatchEvent(new CustomEvent('toggle-era')); playClick(); }}
                    className="px-8 py-4 bg-brand-blue text-white font-black rounded-2xl uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-[0_10px_30px_rgba(64,48,255,0.4)]"
                  >
                    Open Secure Link
                  </button>
                </div>
              </motion.div>
            )}

            {activeTab === 'services' && (
              <motion.div
                key="services"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {services.map((service, i) => (
                  <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[40px] hover:border-brand-blue/30 transition-all group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                      {service.icon}
                    </div>
                    <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-black text-white uppercase italic mb-1">{service.title}</h3>
                    <p className="text-brand-blue font-mono font-bold mb-6 tracking-widest uppercase">{service.price}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((f, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-xs text-white/50">
                          <ArrowUpRight size={12} className="text-brand-blue" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <button 
                      onClick={() => { window.dispatchEvent(new CustomEvent('toggle-era')); playClick(); }}
                      className="w-full py-4 bg-brand-blue text-white border border-brand-blue rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-brand-blue/80 transition-all shadow-lg shadow-brand-blue/20"
                    >
                      Inquire About {service.title}
                    </button>
                  </div>
                ))}
              </motion.div>
            )}

            {(activeTab === 'billing' || activeTab === 'security' || activeTab === 'projects') && (
              <motion.div
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-[400px] flex flex-col items-center justify-center border border-dashed border-white/10 rounded-[40px] text-center"
              >
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                  <Lock size={24} className="text-white/20" />
                </div>
                <h3 className="text-xl font-black text-white uppercase italic">Access Restricted</h3>
                <p className="text-xs text-white/30 mt-2 max-w-xs">This sector requires a verified client hash for access. Please contact Ritesh for decryption keys.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ClientPortal;
