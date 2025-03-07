import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from "sonner";
import emailjs from 'emailjs-com';

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className }: ContactFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("EMfMIqzm2ItpvMqoh");
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (formRef.current) observer.observe(formRef.current);

    return () => {
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // EmailJS configuration
    const serviceId = 'service_dtqxfea';
    const templateId = 'YOUR_EMAILJS_TEMPLATE_ID';
    
    const templateParams = {
      from_name: name,
      reply_to: email,
      message: message
    };
    
    emailjs.send(serviceId, templateId, templateParams)
      .then((response) => {
        console.log('Email sent successfully:', response);
        toast.success("Message sent successfully", {
          description: "Thank you for your message. I'll get back to you soon.",
        });
        // Reset form
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        toast.error("Failed to send message", {
          description: "There was an error sending your message. Please try again later.",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <form
      ref={formRef} 
      onSubmit={handleSubmit}
      className={cn("lg:col-span-3 bg-card shadow-lg rounded-xl p-6 md:p-8 portfolio-card-shadow", className)}
    >
      <h3 className="text-xl font-bold mb-6">Send a Message</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2.5 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            placeholder="Your name"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2.5 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            placeholder="Your email"
            required
          />
        </div>
      </div>
      
      <div className="space-y-2 mb-6">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-2.5 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all min-h-[150px]"
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
            ? "opacity-80 cursor-not-allowed" 
            : "hover:bg-primary/90 active:scale-[0.98]"
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
  );
};

export default ContactForm;
