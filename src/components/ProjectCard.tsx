
import React, { useRef, useEffect } from 'react';

import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  index: number;
  projectId: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  category,
  image,
  index,
  projectId
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <Link to={`/project/${projectId}`}>
      <div 
        ref={cardRef}
        className={`group relative aspect-[4/3] md:aspect-[3/2] lg:aspect-[16/9] rounded-lg overflow-hidden portfolio-card-shadow portfolio-hover opacity-0 animation-delay-${index * 200}`}
      >
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300 z-10"></div>
        
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          <div className="bg-background/90 glass-effect p-6 rounded-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {category}
              </span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground/70 group-hover:text-primary transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-medium mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
