
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedShape from './AnimatedShape';

interface ServiceCardProps {
  title: string;
  description: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-3xl p-8 bg-brand-blue text-white card-hover',
        className
      )}
    >
      <div className="relative z-10">
        <h3 className="text-2xl font-medium mb-4">{title}</h3>
        <p className="text-white/80 mb-6">{description}</p>
        <button className="text-sm font-medium py-2 px-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
          See more
        </button>
      </div>
      
      <AnimatedShape 
        type="triangle" 
        color="rgba(255, 255, 255, 0.1)" 
        size={120}
        className="top-[-20px] right-[-20px]"
        animationDelay="0s"
      />
      <AnimatedShape 
        type="square" 
        color="rgba(255, 255, 255, 0.1)" 
        size={80}
        className="bottom-[-20px] left-[30%]"
        animationDelay="1s"
      />
      <AnimatedShape 
        type="circle" 
        color="rgba(255, 255, 255, 0.1)" 
        size={60}
        className="top-[40%] left-[-20px]"
        animationDelay="2s"
      />
    </div>
  );
};

export default ServiceCard;
