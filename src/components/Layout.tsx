import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import SocialSidebar from './SocialSidebar';

const Layout = () => {
  return (
    <div className="min-h-screen bg-brand-black text-white overflow-hidden flex flex-col">
      <SocialSidebar />
      <div className="flex-1 flex flex-col sm:pl-16">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
