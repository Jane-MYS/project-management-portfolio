
import React, { useRef, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

const skills = [
  "Risk Management",
  "Agile & Waterfall Methodologies",
  "Budget Management",
  "Stakeholder Communication",
  "Scope Management",
  "Contract Management",
  "Resource Allocation",
  "Process Optimization",
  "Tech-Savvy & Adaptive",
  "Vendor & Partnership Management"
];

const About = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    const elements = [titleRef.current, textRef.current, skillsRef.current];
    elements.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-10 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <h2 
              ref={titleRef} 
              className="text-3xl md:text-4xl font-medium mb-6 opacity-0"
            >
              About My Approach
            </h2>
            
            <div 
              ref={textRef}
              className="space-y-4 text-muted-foreground opacity-0 animation-delay-200"
            >
              <p>
                With over 8 years of experience in project management across technology and higher education sectors, I've developed a methodology that balances precision with adaptability, consistently delivering projects on time, within scope, and under budget.
              </p>
              <p>
                My approach is centered on effective risk management, strategic resource allocation, and clear stakeholder communication. By aligning technical requirements with business objectives, I ensure projects not only meet specifications but drive meaningful results with an average of 20% improvement in project efficiency.
              </p>
              <p>
                I'm proficient in Agile, Waterfall, and Lean methodologies, adapting my approach to each project's unique requirements. My PMP certification, combined with expertise in business analytics and organizational leadership in DEI, enables me to lead complex initiatives from concept to completion.
              </p>
            </div>
          </div>

          <div 
            ref={skillsRef}
            className="opacity-0 animation-delay-400"
          >
            <div className="bg-background rounded-lg p-8 portfolio-card-shadow">
              <h3 className="text-xl font-medium mb-6">Core Competencies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary/70 flex-shrink-0" />
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
