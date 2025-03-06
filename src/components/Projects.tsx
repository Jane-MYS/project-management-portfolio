
import React, { useRef, useEffect } from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: "Enterprise Digital Transformation",
    description: "Led a comprehensive digital transformation initiative for a Fortune 500 company, streamlining operations and increasing efficiency by 35%.",
    category: "Digital Transformation",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    title: "Global Software Implementation",
    description: "Managed the worldwide rollout of an ERP system across 12 countries, coordinating teams across multiple time zones and cultures.",
    category: "Software Implementation",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    title: "Agile Transformation Initiative",
    description: "Guided an organization of 200+ staff through an agile transformation, developing new workflows and facilitating cultural change.",
    category: "Methodology Transformation",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
  },
  {
    title: "Product Launch Campaign",
    description: "Orchestrated the launch of a flagship product, coordinating marketing, sales, and technical teams to exceed revenue targets by 28%.",
    category: "Product Management",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    title: "Infrastructure Modernization",
    description: "Spearheaded a critical infrastructure upgrade project, migrating legacy systems to cloud architecture with zero downtime.",
    category: "IT Infrastructure",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    title: "Regulatory Compliance Initiative",
    description: "Led a cross-functional team to implement new regulatory requirements, ensuring full compliance ahead of deadline and avoiding potential penalties.",
    category: "Compliance & Governance",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544"
  }
];

const Projects = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    if (descriptionRef.current) {
      observer.observe(descriptionRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
      if (descriptionRef.current) {
        observer.unobserve(descriptionRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="py-20 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-24">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-medium mb-6 opacity-0"
          >
            Featured Projects
          </h2>
          <p 
            ref={descriptionRef}
            className="text-lg text-muted-foreground opacity-0 animation-delay-200"
          >
            A selection of key projects that demonstrate my approach to project management, problem-solving, and delivering exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              category={project.category}
              image={project.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
