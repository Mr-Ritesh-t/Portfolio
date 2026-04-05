import React from 'react';
import { Linkedin, Github, Mail, Phone, BookOpen, Twitter, Instagram } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { PERSONAL_INFO } from '@/data';

const SocialSidebar = () => {
  const location = useLocation();
  // Don't show the exact same sidebar on Index if you have different layout there, but for consistency we use it everywhere.
  // Actually, keeping the sidebar uniform across pages is cleaner.

  return (
    <div className="fixed left-0 top-0 bottom-0 w-16 bg-brand-black/80 z-40 flex flex-col items-center justify-center gap-8 border-r border-white/10 hidden sm:flex">
      <a
        href={PERSONAL_INFO.socials.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/60 hover:text-brand-blue transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin className="h-5 w-5" />
      </a>

      {PERSONAL_INFO.socials.twitter && (
        <a
          href={PERSONAL_INFO.socials.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-brand-blue transition-colors"
          aria-label="Twitter"
        >
          <Twitter className="h-5 w-5" />
        </a>
      )}

      {PERSONAL_INFO.socials.instagram && (
        <a
          href={PERSONAL_INFO.socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-brand-blue transition-colors"
          aria-label="Instagram"
        >
          <Instagram className="h-5 w-5" />
        </a>
      )}

      <a
        href={PERSONAL_INFO.socials.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/60 hover:text-brand-blue transition-colors"
        aria-label="GitHub"
      >
        <Github className="h-5 w-5" />
      </a>

      {location.pathname !== '/resume' && (
        <Link
          to="/resume"
          className="text-white/60 hover:text-brand-blue transition-colors"
          aria-label="Resume"
        >
          <BookOpen className="h-5 w-5" />
        </Link>
      )}

      {location.pathname !== '/contact' && (
        <>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-white/60 hover:text-brand-blue transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
            className="text-white/60 hover:text-brand-blue transition-colors"
            aria-label="Phone"
          >
            <Phone className="h-5 w-5" />
          </a>
        </>
      )}
    </div>
  );
};

export default SocialSidebar;
