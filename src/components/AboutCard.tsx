
import React from 'react';
import { cn } from '@/lib/utils';
import { Users } from 'lucide-react';

interface AboutCardProps {
  className?: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-3xl p-8 flex flex-col justify-between card-hover',
        'bg-brand-gray text-white',
        className
      )}
    >
      <div className="flex justify-between items-start">
        <h2 className="text-2xl font-medium">About Me</h2>
        <Users className="h-6 w-6" />
      </div>
      
      <div className="mt-auto flex justify-end">
        <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
