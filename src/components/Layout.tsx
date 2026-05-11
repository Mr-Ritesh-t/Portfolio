import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CommandMenu from './CommandMenu';
import ScrollProgress from './ScrollProgress';
import AIAssistant from './AIAssistant';

const Layout = () => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-brand-black text-white overflow-hidden flex flex-col relative">
      <ScrollProgress />
      <AIAssistant />
      <Navbar />
      <CommandMenu />
      <div className="flex-1 flex flex-col">
        <main key={location.pathname} className="flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-in-out">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
