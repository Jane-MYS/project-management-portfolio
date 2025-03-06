
import React, { useRef, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

const skills = [
  "Agile & Waterfall Methodologies",
  "Risk Management",
  "Stakeholder Communication",
  "Budget Management",
  "Cross-functional Leadership",
  "Strategic Planning",
  "Change Management",
  "Technical Implementation",
  "Process Optimization",
  "Resource Allocation"
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
                With over a decade of project management experience across various industries, I've developed a methodology that balances precision with adaptability. I believe the best project outcomes result from clear communication, thoughtful planning, and responsive execution.
              </p>
              <p>
                My approach centers on understanding the unique needs of each project while maintaining a focus on delivering tangible value. By aligning technical requirements with business objectives, I ensure projects not only meet specifications but drive meaningful results.
              </p>
              <p>
                I specialize in guiding complex initiatives from concept to completion, particularly in environments where change management and stakeholder alignment are critical to success.
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
