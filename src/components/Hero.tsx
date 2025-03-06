
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          lineRef.current?.classList.add('animate-scale-in');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-10">
      <div 
        ref={heroRef} 
        className="max-w-4xl mx-auto text-center opacity-0"
      >
        <p className="text-sm md:text-base text-muted-foreground mb-4 tracking-wider uppercase">
          Project Management Portfolio
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-tight md:leading-tight lg:leading-tight mb-6">
          Delivering <span className="relative inline-block">exceptional<span className="absolute -bottom-1 left-0 w-full h-[1px] bg-foreground"></span></span> results through strategic project management
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Results-driven Project Manager with 8+ years of experience in technology and higher education sectors, specializing in Agile, Waterfall, and Lean methodologies.
        </p>
        
        <div 
          ref={lineRef} 
          className="w-16 h-[1px] bg-muted-foreground/50 mx-auto my-12 opacity-0"
        ></div>
      </div>
      
      <button
        onClick={scrollToProjects}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll to projects"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </button>
    </section>
  );
};

export default Hero;
