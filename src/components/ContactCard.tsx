
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, Mail, Phone, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ContactCardProps {
  className?: string;
  email?: string;
  phone?: string;
  github?: string;
  linkedin?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ 
  className,
  email = "Riteshtayade68@gmail.com",
  phone = "+91 8668740625",
  github = "https://github.com/Mr-Ritesh-t",
  linkedin = "https://www.linkedin.com/in/mr-ritesh"
}) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-3xl p-8 flex flex-col justify-between card-hover',
        'bg-brand-yellow text-brand-black',
        className
      )}
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-medium">Contact me</h2>
        
        <div className="space-y-3 my-4">
          <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-brand-blue transition-colors">
            <Mail className="h-4 w-4" />
            <span>{email}</span>
          </a>
          
          <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-brand-blue transition-colors">
            <Phone className="h-4 w-4" />
            <span>{phone}</span>
          </a>
          
          <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-blue transition-colors">
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
          
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-blue transition-colors">
            <Linkedin className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
      
      <Link to="/contact" className="flex justify-end items-center group">
        <span className="mr-2 text-sm font-medium group-hover:mr-3 transition-all">Get in touch</span>
        <ArrowRight className="h-5 w-5" />
      </Link>
    </div>
  );
};

export default ContactCard;
