
import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from "sonner";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    const elements = [titleRef.current, formRef.current, contactInfoRef.current];
    elements.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully", {
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl font-medium text-center mb-12 opacity-0 mx-auto"
        >
          Let's Connect
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div 
            ref={contactInfoRef}
            className="md:col-span-1 opacity-0 animation-delay-200"
          >
            <div className="bg-secondary/30 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Phone</p>
                  <p className="text-sm">213-519-2319</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Email</p>
                  <p className="text-sm">Mengyish@usc.edu</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">LinkedIn</p>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">View Profile</a>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Certifications</p>
                  <p className="text-sm">PMP, Business Analytics, Organizational Leadership in DEI</p>
                </div>
              </div>
            </div>
          </div>
          
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="md:col-span-2 space-y-6 opacity-0 animation-delay-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary/50 transition-shadow"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary/50 transition-shadow"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary/50 transition-shadow min-h-[150px]"
                placeholder="Your message"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "w-full py-3 px-6 flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground font-medium transition-all",
                isSubmitting 
                  ? "opacity-90 cursor-not-allowed" 
                  : "hover:opacity-90 active:scale-[0.98]"
              )}
            >
              {isSubmitting ? (
                <>
                  <span className="h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></span>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
