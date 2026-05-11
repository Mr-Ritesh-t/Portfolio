import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

interface ScrollSectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({ children, id, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], [0.8, 1, 1, 0.8]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  return (
    <section 
      id={id} 
      ref={ref} 
      className={`min-h-screen py-20 px-4 md:px-20 flex flex-col justify-center relative ${className}`}
    >
      <motion.div
        style={{ opacity, scale, y, rotateX, transformStyle: "preserve-3d" }}
        className="w-full max-w-7xl mx-auto perspective-1000"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default ScrollSection;
