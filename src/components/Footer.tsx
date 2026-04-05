import React from 'react';
import { PERSONAL_INFO } from '@/data';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-10 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-medium mb-4">{PERSONAL_INFO.name}</div>
            <p className="text-white/60 max-w-md">
              {PERSONAL_INFO.shortDescription}
            </p>
          </div>

          <div>
            <div className="text-lg font-medium mb-4">Connect</div>
            <div className="flex flex-col space-y-2">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <div className="text-lg font-medium mb-4">Contact</div>
            <div className="flex flex-col space-y-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-white/60 hover:text-white transition-colors"
              >
                {PERSONAL_INFO.email}
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="text-white/60 hover:text-white transition-colors"
              >
                {PERSONAL_INFO.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
