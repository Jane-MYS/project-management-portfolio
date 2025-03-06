import React, { useRef, useEffect } from 'react';
import ProjectCard from './ProjectCard';

export const projectsData = [
  {
    title: "TransferBot – AI-Powered Support for Transfer",
    description: "Founded and led the development of TransferBot, an AI-powered Discord chatbot designed to support California community college students in their transfer process.",
    category: "Founder & Developer",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    fullDescription: [
      "TransferBot is an AI-powered Discord chatbot I designed to help California community college students navigate the complex transfer process to UC, CSU, and private universities.",
      "I founded and developed this solution starting in January 2024 to address the low transfer rates and complex requirements students face."
    ],
    challenges: "Only ~20% of students transfer within four years due to credit loss, complex requirements, and limited advising support.",
    solutions: "Built an AI chatbot integrated with ASSIST.org, ADT, IGETC, and CSU GE to provide 24/7 automated course equivalency checks, academic advising, personalized study plans, and transfer application support.",
    results: "Increased accessibility to free, instant transfer guidance, reducing reliance on overburdened advisors and improving student confidence in transfer planning.",
    technologies: "Discord API, AI/NLP models, ASSIST.org integration, database management, and automation tools.",
    methodologies: "Agile development, user-centered design, and continuous feedback from students and advisors to refine AI responses and expand features."
  },
  {
    title: "Google Workspace Migration & Implementation",
    description: "Led the Google Workspace migration and implementation to enhance training, marketing, and membership management for a professional organization with 4,000+ members.",
    category: "Project Management Institute (PMI)",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    fullDescription: [
      "Led the Google Workspace migration and implementation project to enhance training, marketing, and membership management capabilities for a professional organization with over 4,000 members.",
      "Focused on improving stakeholder engagement, operational efficiency, and communication workflows while ensuring a smooth transition to new digital tools."
    ],
    challenges: "Needed to improve stakeholder engagement, operational efficiency, and communication workflows while ensuring a smooth transition to new digital tools.",
    solutions: "Implemented Google Workspace, established a ticketing system for improved member support, and integrated AI tools to streamline administrative functions.",
    results: "Improved collaboration, reduced manual workload, enhanced stakeholder engagement, and optimized response times for member inquiries.",
    technologies: "Google Workspace, Joomla, WordPress, Wix, DarkRhino, Mailchimp, Slack, Trello, AI-powered automation tools.",
    methodologies: "Agile project management, stakeholder-driven development, and process optimization."
  },
  {
    title: "PMI Delaware Valley Chapter",
    description: "Managed a 6-month document migration to Google Shared Drive, improving access by 30% and establishing an efficient folder hierarchy with proper access controls.",
    category: "Project Manager (Volunteer)",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    fullDescription: [
      "Applied Waterfall methodology with defined phases for planning, migration, training, and final review to ensure structured implementation of the Google Workspace Migration.",
      "Managed a 6-month document migration to Google Shared Drive, improving access by 30% and establishing a folder hierarchy."
    ],
    challenges: "Coordinating a volunteer-based project team while ensuring proper document organization, access control, and user adoption across the chapter.",
    solutions: "Defined access permissions, created drive management protocols, and delivered comprehensive training to members to ensure smooth transition and adoption.",
    results: "Achieved 80% user adoption within the first month, significantly improved document accessibility, and established sustainable document management practices for the chapter."
  },
  {
    title: "Santa Monica College Tutoring Program",
    description: "Designed and delivered engaging training programs for over 50 tutors, establishing a virtual platform with resources for over 1,000 users.",
    category: "Tutoring Coordinator",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    fullDescription: [
      "Designed and delivered engaging in-person and virtual training programs for over 50 new hire tutors, creating materials that equipped them with essential methodologies and problem-solving skills.",
      "Led interactive group training sessions (5-10 tutors), fostering collaboration and knowledge sharing, resulting in high satisfaction ratings and demonstrating the effectiveness of the training approach."
    ],
    challenges: "Transitioning to and maintaining effective tutoring services in both in-person and virtual environments while ensuring consistent quality of tutor training.",
    solutions: "Established the MLTC virtual platform with extensive resources and implemented standardized protocols for virtual onboarding and communication.",
    results: "Facilitated smooth adoption by over 1,000 users, enhanced accessibility to tutoring services, and implemented workflow optimizations across multiple departments within three months."
  },
  {
    title: "Redux Reimagine LLC – AI-Enhanced Smart Trash Can",
    description: "Managed a team of 5 engineers in AI-driven software development, achieving 85% classification accuracy while reducing costs by 15%.",
    category: "Project Manager",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    fullDescription: [
      "Utilized Scrum methodology with sprint planning and reviews, improving team alignment and achieving deliverables on time for AI-Enhanced Smart Trash Can development.",
      "Managed a team of 5 engineers in AI-driven software development, achieving 85% classification accuracy."
    ],
    challenges: "Developing advanced AI classification systems with limited funding during COVID-19 while maintaining project momentum and technical quality.",
    solutions: "Oversaw budget allocation, achieving a 15% cost reduction by optimizing resources and vendor contracts. Utilized structured risk management to mitigate impacts from limited funding.",
    results: "Successfully delivered AI software with 85% classification accuracy while maintaining budget discipline and producing comprehensive documentation for investor updates."
  },
  {
    title: "Advance Academy – Transfer Application Counseling",
    description: "Co-led transfer application counseling with a 90% success rate in students meeting deadlines, while increasing program engagement by 25%.",
    category: "Program Manager",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    fullDescription: [
      "Applied Agile principles, utilizing regular feedback loops to adapt to student needs and optimize program offerings for the Transfer Application Counseling Program.",
      "Co-led transfer application counseling with a 90% success rate in students meeting deadlines."
    ],
    challenges: "Addressing enrollment challenges while providing personalized counseling services that met the diverse needs of transfer applicants.",
    solutions: "Organized monthly workshops to improve engagement and implemented a risk management framework to address enrollment challenges.",
    results: "Improved engagement by 25%, increased inquiries by 20% through digital marketing campaigns, and achieved a 90% enrollment rate through personalized outreach."
  },
  {
    title: "BMW China – New Model Launch",
    description: "Supported the launch of a new BMW model's paint shop, coordinating with 500 employees and reducing defects by 10%.",
    category: "Project Intern",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
    fullDescription: [
      "Employed Lean methodology focused on quality improvement and waste reduction to enhance process efficiency for the Paint Shop Setup project.",
      "Supported the launch of a new BMW model's paint shop, coordinating with 500 employees to meet milestones, improving schedule adherence by 15%."
    ],
    challenges: "Coordinating with a large workforce of 500 employees while implementing quality control systems in a high-precision manufacturing environment.",
    solutions: "Assisted in implementing quality control systems and developed SOPs to streamline operations and onboarding processes.",
    results: "Reduced defects by 10%, improved schedule adherence by 15%, and reduced onboarding time by 20% through effective SOP development."
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
            Project Experience
          </h2>
          <p 
            ref={descriptionRef}
            className="text-lg text-muted-foreground opacity-0 animation-delay-200"
          >
            A selection of key projects that demonstrate my approach to project management, problem-solving, and delivering exceptional results across diverse industries.
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
