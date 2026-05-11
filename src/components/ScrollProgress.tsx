import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (totalHeight > 0) {
        setProgress((scrollPosition / totalHeight) * 100);
      } else {
        setProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call to set correct progress if page loaded scrolled down
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[150] pointer-events-none">
      <div 
        className="h-full bg-brand-blue shadow-[0_0_15px_rgba(64,48,255,0.8)] transition-all duration-150 ease-out rounded-r-full"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
