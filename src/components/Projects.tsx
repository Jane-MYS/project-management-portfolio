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
    title: "Educational Learning Support Program",
    description: "Developed and managed a comprehensive training and learning support program for tutors and students, enhancing accessibility and effectiveness of tutoring services.",
    category: "Santa Monica College",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    fullDescription: [
      "Developed and managed a comprehensive training and learning support program for tutors and students at Santa Monica College from July 2021 to present.",
      "Project included a 3-month initiation phase followed by ongoing enhancement and maintenance activities to continuously improve the program."
    ],
    challenges: "Needed to improve tutor onboarding, training consistency, resource accessibility, and operational workflows across multiple departments.",
    solutions: "Designed and delivered in-person and virtual training for 50+ new tutors, established the MLTC virtual platform with extensive resources for 1,000+ users, and streamlined onboarding and communication through standardized protocols.",
    results: "Increased tutor engagement and effectiveness, achieved high satisfaction ratings, reduced onboarding time, and improved cross-departmental coordination within three months.",
    technologies: "Learning Management Systems (Canvas), Zoom, Google Workspace, Trello, and workflow automation tools.",
    methodologies: "Instructional design, blended learning strategies, agile project management, and process optimization."
  },
  {
    title: "Redux Reimagine LLC – AI-Enhanced Smart Trash Can",
    description: "Led the development of an AI-powered smart trash can, integrating machine learning for waste classification and automation.",
    category: "Project Manager",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    fullDescription: [
      "Led the development of an AI-powered smart trash can at Redux Reimagine LLC from March 2020 to July 2021, integrating machine learning for waste classification and automation.",
      "Managed a team of 5 engineers, implementing Scrum methodology with sprint planning and reviews to improve team alignment and deliver on time."
    ],
    challenges: "Faced budget constraints and funding limitations during COVID-19, requiring strategic resource allocation and risk management.",
    solutions: "Implemented Scrum methodologies for sprint planning and reviews, optimized vendor contracts, and developed investor-focused project documentation.",
    results: "Achieved 85% classification accuracy, reduced costs by 15%, and maintained project timelines despite financial constraints.",
    technologies: "AI/ML frameworks, Scrum boards (Jira/Trello), budget tracking tools, and investor reporting documentation.",
    methodologies: "Agile (Scrum), risk management, cost optimization, and stakeholder communication."
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
