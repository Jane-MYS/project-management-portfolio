
import React, { useRef, useEffect } from 'react';
import ProjectCard from './ProjectCard';

export const projectsData = [
  {
    title: "Enterprise Digital Transformation",
    description: "Led a comprehensive digital transformation initiative for a Fortune 500 company, streamlining operations and increasing efficiency by 35%.",
    category: "Digital Transformation",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    fullDescription: [
      "This enterprise-wide initiative focused on modernizing legacy systems and implementing new digital workflows across the organization. The project spanned 18 months and involved coordinating with stakeholders from multiple departments.",
      "As the lead project manager, I was responsible for establishing project governance, managing the budget of $2.5M, and ensuring alignment with strategic business objectives."
    ],
    challenges: "The biggest challenge was managing resistance to change from long-term employees and integrating new systems with critical legacy infrastructure without disrupting ongoing operations.",
    solutions: "We implemented a phased approach with extensive change management procedures, including personalized training programs and dedicated support teams for each department during transition phases.",
    results: "The transformation resulted in a 35% increase in operational efficiency, $1.2M in annual cost savings, and significantly improved customer satisfaction scores from 72% to 89%."
  },
  {
    title: "Global Software Implementation",
    description: "Managed the worldwide rollout of an ERP system across 12 countries, coordinating teams across multiple time zones and cultures.",
    category: "Software Implementation",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    fullDescription: [
      "This global implementation project involved deploying a unified ERP solution across 12 countries in Europe, Asia, and North America, replacing 8 different legacy systems.",
      "The project required coordinating with 15 cross-functional teams operating in different time zones and managing cultural differences in workflow processes and compliance requirements."
    ],
    challenges: "Coordinating implementation across multiple regions with different regulatory requirements and business practices while maintaining a consistent core system presented significant challenges.",
    solutions: "We established a global governance framework with regional implementation teams, standardized core processes while allowing for necessary local adaptations, and created a 24/7 support structure.",
    results: "Successfully delivered the project on schedule and 8% under budget, resulting in standardized reporting, improved data visibility, and consolidated operations that reduced monthly closing times from 12 days to 3 days."
  },
  {
    title: "Agile Transformation Initiative",
    description: "Guided an organization of 200+ staff through an agile transformation, developing new workflows and facilitating cultural change.",
    category: "Methodology Transformation",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    fullDescription: [
      "This organization-wide initiative transformed a traditional waterfall development environment into an agile framework, affecting over 200 team members across product development, QA, operations, and customer support.",
      "As transformation lead, I designed and implemented the transition roadmap, established agile practices, and created a measurement framework to track improvements in delivery speed and quality."
    ],
    challenges: "The organization had deeply entrenched waterfall methodologies, siloed departments with minimal cross-functional collaboration, and management concerns about potential productivity disruptions during transition.",
    solutions: "We implemented a hybrid approach beginning with pilot teams, developed custom workshops for different departments, and created an Agile Center of Excellence to support teams through the transition.",
    results: "Reduced time-to-market for new features by 60%, increased release frequency from quarterly to bi-weekly, and improved team engagement scores by 42%."
  },
  {
    title: "Product Launch Campaign",
    description: "Orchestrated the launch of a flagship product, coordinating marketing, sales, and technical teams to exceed revenue targets by 28%.",
    category: "Product Management",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    fullDescription: [
      "This comprehensive product launch involved bringing a new SaaS platform to market, including coordinating product development milestones, marketing campaign creation, sales enablement, and customer support preparation.",
      "I led cross-functional teams through a 6-month launch process, managing dependencies between technical development, marketing content creation, and go-to-market strategy execution."
    ],
    challenges: "Tight timeline constraints, last-minute feature changes based on competitor analysis, and aligning messaging across different channels and market segments proved challenging.",
    solutions: "Implemented an integrated launch plan with clear stage gates, created flexible content templates that could adapt to feature changes, and established daily stand-ups in the final launch phase.",
    results: "Exceeded first-quarter revenue targets by 28%, achieved 112% of the lead generation goal, and secured coverage in 15 industry publications, establishing the product as a category leader."
  },
  {
    title: "Infrastructure Modernization",
    description: "Spearheaded a critical infrastructure upgrade project, migrating legacy systems to cloud architecture with zero downtime.",
    category: "IT Infrastructure",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    fullDescription: [
      "This project involved migrating mission-critical applications and data from on-premises legacy infrastructure to a cloud-based architecture while maintaining 24/7 operations for a financial services company.",
      "I was responsible for planning and executing the migration strategy, ensuring security compliance, managing the $3.2M budget, and coordinating with vendors and internal IT teams."
    ],
    challenges: "The legacy systems had minimal documentation, required 99.99% uptime during transition, and needed to meet strict financial industry regulatory requirements in the new environment.",
    solutions: "Developed a parallel implementation strategy with automated testing, implemented a traffic routing system for seamless cutover, and created comprehensive documentation for the new architecture.",
    results: "Completed the migration with zero downtime, reduced infrastructure costs by 42%, improved system performance by 65%, and established a more scalable and resilient architecture."
  },
  {
    title: "Regulatory Compliance Initiative",
    description: "Led a cross-functional team to implement new regulatory requirements, ensuring full compliance ahead of deadline and avoiding potential penalties.",
    category: "Compliance & Governance",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
    fullDescription: [
      "This critical initiative ensured organizational compliance with new industry regulations affecting data protection, customer privacy, and reporting requirements across multiple business units.",
      "I led a team of legal, IT, and business process experts to analyze requirements, implement necessary changes to systems and processes, and develop training programs for employees."
    ],
    challenges: "The regulations contained ambiguous requirements requiring legal interpretation, affected multiple legacy systems with complex interdependencies, and had an aggressive compliance deadline.",
    solutions: "Established a dedicated compliance task force, developed a requirements traceability matrix, and implemented a phased approach prioritizing high-risk areas first.",
    results: "Achieved full compliance two months ahead of the deadline, passed external audit with zero findings, and established ongoing compliance monitoring processes that reduced future regulatory risk."
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
              projectId={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
