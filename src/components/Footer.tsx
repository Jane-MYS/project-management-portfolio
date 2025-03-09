import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="py-12 md:py-16 px-6 md:px-10 border-t border-border/60">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Project Management Portfolio. All rights reserved.
          </p>

          {/* Social Media Links */}
          <div className="flex items-center space-x-4">
            {/* GitHub Link */}
            <button
              onClick={() => handleClick('https://github.com/Jane-MYS')}
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </button>

            {/* LinkedIn Link */}
            <button
              onClick={() => handleClick('https://www.linkedin.com/in/jane-shi-m-a-pmp-46a418153')}
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </button>

            {/* Email Link */}
            <button
              onClick={() => handleClick('mailto:mengyishi9@gmail.com')}
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
