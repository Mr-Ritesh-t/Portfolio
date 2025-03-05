
import React from 'react';
import { cn } from '@/lib/utils';
import { Image, ExternalLink, Calendar } from 'lucide-react';

interface WorkCardProps {
  title: string;
  category?: string;
  description?: string;
  technologies?: string[];
  image?: string;
  link?: string;
  date?: string;
  className?: string;
}

const WorkCard: React.FC<WorkCardProps> = ({
  title,
  category,
  description,
  technologies,
  image,
  link,
  date,
  className,
}) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-3xl flex flex-col card-hover h-full',
        'bg-white text-brand-black',
        className
      )}
    >
      <div className="relative aspect-video bg-gray-100 w-full overflow-hidden" >
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
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
      
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-brand-blue hover:underline text-sm mt-auto"
          >
            View Project <ExternalLink className="ml-1 h-3 w-3" />
          </a>
        )}
      </div>
    </div>
  );
};

export default WorkCard;
