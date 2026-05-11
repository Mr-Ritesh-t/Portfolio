
import React, { useRef } from 'react';
import { cn } from '@/lib/utils';
import { Image, ExternalLink, Calendar, Github } from 'lucide-react';

interface WorkCardProps {
  title: string;
  category?: string;
  description?: string;
  technologies?: string[];
  image?: string;
  video?: string;
  link?: string;
  github?: string;
  date?: string;
  className?: string;
}

const WorkCard: React.FC<WorkCardProps> = ({
  title,
  category,
  description,
  technologies,
  image,
  video,
  link,
  github,
  date,
  className,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) videoRef.current.play();
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      data-cursor-text="VIEW"
      className={cn(
        'relative overflow-hidden rounded-b-3xl rounded-t-sm flex flex-col card-hover h-full group',
        'bg-white text-brand-black hover:shadow-brand-blue/30 hover:shadow-2xl',
        className
      )}
    >
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-10 mix-blend-multiply"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(64,48,255,0.15), transparent 40%)`
        }}
      />
      <div className="relative aspect-video bg-gray-100 w-full overflow-hidden" >
        {video && (
          <video
            ref={videoRef}
            src={video}
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
          />
        )}
        {image ? (
          <>
            <img 
              src={image} 
              alt={title} 
              loading="lazy"
              className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <Image className="w-12 h-12 text-gray-400" />
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          {category && (
            <span className="text-xs uppercase tracking-wider text-gray-500 inline-block">
              {category}
            </span>
          )}
          {date && (
            <span className="text-xs flex items-center text-gray-500">
              <Calendar className="h-3 w-3 mr-1" />
              {date}
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        
        {description && (
          <p className="text-gray-600 text-sm mb-4">{description}</p>
        )}
        
        {technologies && technologies.length > 0 && (
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="text-xs px-2 py-1 bg-gray-100 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      
        <div className="flex gap-4 mt-auto">
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-brand-blue hover:underline text-sm font-medium"
            >
              View Project <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          )}
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-600 hover:text-brand-blue hover:underline text-sm font-medium transition-colors"
            >
              Source Code <Github className="ml-1 h-3 w-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
