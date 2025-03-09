
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
      "Project initiation since July 2021.",
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
    title: "Transfer Application Counseling Program",
    description: "Designed and managed a transfer application counseling program to support students applying to four-year universities, ensuring they navigated the process effectively.",
    category: "Advance Academy",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    fullDescription: [
      "Designed and managed a transfer application counseling program at Advance Academy from August 2019 to April 2020, supporting students applying to four-year universities.",
      "Applied Agile principles, utilizing regular feedback loops to adapt to student needs and optimize program offerings."
    ],
    challenges: "Students often faced unclear application requirements, tight deadlines, and limited guidance, leading to missed opportunities. Additionally, enrollment fluctuations and limited awareness impacted program reach.",
    solutions: "Implemented structured counseling sessions, personalized transfer roadmaps, and deadline tracking systems. Organized monthly workshops to boost engagement and implemented a risk management framework to mitigate enrollment challenges. Launched digital marketing campaigns and executed personalized outreach strategies.",
    results: "Increased workshop engagement by 25%, boosted inquiries by 20%, achieved a 90% enrollment rate, and improved contract fulfillment by 15%. Additionally, 90% of students met application deadlines, improving application completion and acceptance rates.",
    technologies: "Google Workspace, Smartsheet (tracking & reporting), Trello (task management), Zoom (virtual counseling), CRM tools, and digital marketing platforms.",
    methodologies: "Agile program management, risk management, student-centered advising, and process optimization."
  },
  {
    title: "New Model Launch, Paint Shop Staff Workshop",
    description: "Supported the launch of a new BMW model's paint shop, ensuring smooth operations and process efficiency in a high-stakes automotive manufacturing environment.",
    category: "BMW China",
    image: "https://unsplash.com/photos/a-close-up-of-the-tail-lights-of-a-car-9dp9DHM0Z84",
    fullDescription: [
      "Supported the launch of a new BMW model's paint shop at BMW China from January 2017 to July 2017, ensuring smooth operations and process efficiency.",
      "Applied Lean methodology to improve efficiency and coordinated with 500 employees to meet production milestones."
    ],
    challenges: "Needed to enhance quality control, streamline onboarding, and improve milestone adherence while coordinating with a large workforce.",
    solutions: "Applied Lean methodology to improve efficiency, coordinated with 500 employees to meet production milestones, implemented quality control systems, and developed Standard Operating Procedures (SOPs) for smoother onboarding. Regular risk assessments and updates ensured alignment with executive expectations.",
    results: "Improved schedule adherence by 15%, reduced defects by 10%, decreased onboarding time by 20%, and enhanced overall project tracking with structured risk logs.",
    technologies: "Lean Six Sigma tools, SOP documentation frameworks, risk management logs, and internal reporting dashboards.",
    methodologies: "Lean project management, quality control, and process optimization."
  },
  {
    title: "Spring Bud Education Support Initiative",
    description: "Managed education funding for girls in rural China, ensuring financial aid reached those most in need while maintaining transparency and stakeholder trust.",
    category: "Project Coordinator",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    fullDescription: [
      "Managed education funding for girls in rural China during Summers 2015 – 2017, ensuring financial aid reached those most in need.",
      "Applied a stakeholder-centered approach to improve fund allocation and expand outreach to families in need."
    ],
    challenges: "Faced inefficiencies in fund distribution, limited outreach, and the need for increased donor engagement to sustain long-term impact.",
    solutions: "Applied a stakeholder-centered approach, improving fund allocation accuracy by 30%, expanded outreach to 200+ families, and strengthened collaboration with orphanages and foster care organizations. Led social media campaigns to raise awareness, increasing annual donations by 15%, and developed detailed progress reports to enhance transparency for stakeholders.",
    results: "Successfully allocated ¥100,000 RMB per summer, improved fund distribution accuracy by 30%, expanded access to education for 200+ families, and increased donor contributions by 15%.",
    technologies: "Google Workspace, social media platforms, data analytics tools, and donor management systems.",
    methodologies: "Stakeholder-centered project management, data-driven decision-making, and nonprofit fundraising strategies."
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
