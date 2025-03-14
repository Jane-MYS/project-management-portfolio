import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 md:py-16 px-6 md:px-10 border-t border-border/60">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Project Management Portfolio. All rights reserved.
          </p>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Jane-MYS"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary transition-colors cursor-pointer"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="mailto:mengyishi9@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary transition-colors cursor-pointer"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="http://www.linkedin.com/in/jane-shi-m-a-pmp-46a418153"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary transition-colors cursor-pointer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>

            {/* ... other social links follow the same pattern ... */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
