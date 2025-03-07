
import React from 'react';
import { Linkedin, Award } from 'lucide-react';

interface ContactInfoProps {
  className?: string;
}

const ContactInfo = ({ className }: ContactInfoProps) => {
  return (
    <div className={`lg:col-span-2 space-y-8 ${className}`}>
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Linkedin className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="text-base font-medium">LinkedIn</h3>
            <a 
              href="https://www.linkedin.com/in/jane-shi-m-a-pmp-46a418153" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline mt-1 block"
            >
              Connect with me
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Award className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="text-base font-medium">Certifications</h3>
            <p className="text-sm text-muted-foreground mt-1">PMP, Business Analytics, Organizational Leadership in DEI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
