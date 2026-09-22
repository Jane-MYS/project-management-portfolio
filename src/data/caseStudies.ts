export type ApproachStep = {
  n: string;
  title: string;
  body: string;
};

export type Workflow = {
  title: string;
  steps: string[];
};

export type ProcessStage = {
  title: string;
  items: string[];
};

export type ImpactStat = {
  figure: string;
  label: string;
};

export type CaseStudy = {
  slug: string;
  number: string;
  title: string;
  organization: string;
  year?: string;
  tags: string[];
  summary: string;
  challenge: string[];
  objective?: string;
  role: string;
  scope: string[];
  owned: string[];
  approach: ApproachStep[];
  workflows?: Workflow[];
  process?: ProcessStage[];
  impact: ImpactStat[];
  deliverables: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "smc-tutoring-operations",
    number: "01",
    title: "Scaling Multi-Disciplinary Tutoring Operations",
    organization: "Santa Monica College",
    tags: ["Program Operations", "Workforce Coordination", "Student Services"],
    summary:
      "Coordinate tutoring operations supporting multiple academic disciplines and 30–50+ student employees, integrating staffing, scheduling, training, faculty coordination, technology, reporting, and service delivery across in-person and online environments.",
    challenge: [
      "Santa Monica College's tutoring operations require coordinating student employees, faculty expectations, scheduling, multiple academic disciplines, technology platforms, and both online and in-person service delivery.",
      "The operational challenge is maintaining consistent service while responding to changing course demand, tutor availability, hiring timelines, faculty needs, and institutional requirements.",
    ],
    role: "Tutoring Coordinator",
    scope: [
      "30–50+ student employees",
      "Multiple academic disciplines",
      "In-person + online services",
      "Faculty and departmental stakeholders",
      "Multiple operational platforms",
    ],
    owned: [
      "Workforce planning and tutor recruitment",
      "Candidate screening and onboarding coordination",
      "Tutor scheduling and coverage",
      "Faculty/stakeholder communication",
      "Training and documentation",
      "Service policies and procedures",
      "WCOnline scheduling administration",
      "Zoom/online service operations",
      "Timesheet and reporting workflows",
      "Operational issue resolution",
      "Service-demand monitoring",
    ],
    approach: [
      {
        n: "01",
        title: "Assess",
        body: "Understand student demand, course coverage, staffing availability, and operational constraints.",
      },
      {
        n: "02",
        title: "Design",
        body: "Develop staffing plans, workflows, schedules, policies, and communication processes.",
      },
      {
        n: "03",
        title: "Implement",
        body: "Coordinate hiring, onboarding, training, technology setup, and service launch.",
      },
      {
        n: "04",
        title: "Monitor",
        body: "Track utilization, coverage, reporting compliance, and operational issues.",
      },
      {
        n: "05",
        title: "Improve",
        body: "Adjust staffing, processes, documentation, and service delivery based on actual demand.",
      },
    ],
    workflows: [
      {
        title: "Tutor Recruitment Workflow",
        steps: [
          "Application",
          "Screening",
          "Faculty Evaluation",
          "Employment Processing",
          "Training",
          "Scheduling",
          "Service Launch",
        ],
      },
      {
        title: "Tutor Training System",
        steps: [
          "Policies",
          "WCOnline",
          "Zoom",
          "Tutoring Reports",
          "Timesheets",
          "Communication Standards",
        ],
      },
      {
        title: "Hybrid Service Model",
        steps: [
          "Student booking",
          "Front desk",
          "Zoom",
          "Breakout room",
          "Tutor",
          "Session report",
          "Faculty communication",
        ],
      },
    ],
    impact: [
      { figure: "30–50+", label: "Student employees coordinated per semester" },
      { figure: "13+", label: "Language/subject areas supported through MLTC" },
      { figure: "Hybrid", label: "In-person and online service delivery" },
    ],
    deliverables: [
      "Standard Operating Procedures",
      "Process Maps",
      "Operational Tracking",
      "Training Materials",
      "Staffing Plans",
      "Stakeholder Communications",
    ],
  },
  {
    slug: "smc-tutoring-expansion",
    number: "02",
    title: "Expanding Tutoring Services Across Business, CSIS & Design",
    organization: "Santa Monica College",
    year: "2026",
    tags: ["Program Launch", "Change Management", "Operations Design"],
    summary:
      "Led the operational expansion of tutoring services into Business, Computer Science/Information Systems, and Graphic & Interaction Design, developing staffing, scheduling, faculty coordination, training, communication, and service-delivery processes.",
    challenge: [
      "Tutoring operations were already running as a multi-disciplinary service. Expanding into Business, Computer Science/Information Systems, and Graphic & Interaction Design meant standing up new coverage without disrupting existing students, tutors, or faculty relationships.",
      "The launch required new staffing profiles, scheduling models, faculty coordination, training, and communication—change management across departments that had not previously been part of the tutoring operation.",
    ],
    role: "Tutoring Coordinator",
    scope: [
      "Three new academic areas: Business, CSIS, Graphic & Interaction Design",
      "2026 service expansion",
      "Faculty and departmental partners in new disciplines",
      "Staffing, scheduling, training, and service-delivery design",
    ],
    owned: [
      "Program launch planning",
      "Staffing design for new disciplines",
      "Scheduling and coverage models",
      "Faculty coordination",
      "Training and onboarding for new tutors",
      "Change communication",
      "Service-delivery process design",
    ],
    approach: [
      {
        n: "01",
        title: "Assess",
        body: "Identify demand, faculty expectations, and staffing constraints in the new academic areas.",
      },
      {
        n: "02",
        title: "Design",
        body: "Build staffing plans, schedules, training, and communication processes for the expansion.",
      },
      {
        n: "03",
        title: "Implement",
        body: "Coordinate hiring, onboarding, technology setup, and service launch into the new disciplines.",
      },
      {
        n: "04",
        title: "Monitor",
        body: "Track early coverage, utilization, and operational issues during the launch period.",
      },
      {
        n: "05",
        title: "Improve",
        body: "Adjust staffing, documentation, and service delivery as actual demand in the new areas becomes clear.",
      },
    ],
    workflows: [
      {
        title: "Program Launch Sequence",
        steps: [
          "Need identification",
          "Faculty coordination",
          "Staffing design",
          "Hiring & training",
          "Schedule build",
          "Service launch",
          "Early-term review",
        ],
      },
    ],
    impact: [
      { figure: "3", label: "Additional academic areas added through the 2026 expansion" },
      { figure: "2026", label: "Service launch year" },
      { figure: "Launch", label: "New operation built—not only an existing one maintained" },
    ],
    deliverables: [
      "Staffing Plans",
      "Process Maps",
      "Training Materials",
      "Stakeholder Communications",
      "Service Policies",
    ],
  },
  {
    slug: "waai-google-workspace",
    number: "03",
    title: "Building Scalable Google Workspace Infrastructure",
    organization: "Nonprofit Organization",
    tags: ["Digital Transformation", "Systems Administration", "Process Design"],
    summary:
      "Designed and implemented a Google Workspace operating environment supporting multiple departments and regional programs, including user administration, Shared Drive architecture, shared inboxes/groups, permissions, access governance, and standardized account-management processes.",
    challenge: [
      "The organization was operating without a standardized digital infrastructure for account management, shared files, departmental collaboration, regional programs, and access governance.",
      "As the organization expanded, inconsistent tools and access practices created increasing operational complexity.",
    ],
    objective:
      "Create a centralized, scalable collaboration environment that could support organizational growth while improving access management and information organization.",
    role: "Program Development & Technology Platforms / Google Workspace Administrator",
    scope: [
      "Organization-wide collaboration environment",
      "Multiple departments and functions",
      "Regional program teams",
      "Account, permission, and Drive governance",
    ],
    owned: [
      "User administration",
      "Shared Drive architecture",
      "Groups and shared inboxes",
      "Permissions and access governance",
      "Account onboarding and offboarding",
      "Documentation of operating standards",
    ],
    approach: [
      {
        n: "01",
        title: "Assess",
        body: "Map users, departments, regional programs, and current access practices.",
      },
      {
        n: "02",
        title: "Design",
        body: "Define information architecture, ownership, and access requirements.",
      },
      {
        n: "03",
        title: "Implement",
        body: "Stand up Workspace accounts, Shared Drives, groups, and permissions.",
      },
      {
        n: "04",
        title: "Monitor",
        body: "Review access, ownership, and collaboration patterns as teams adopt the environment.",
      },
      {
        n: "05",
        title: "Improve",
        body: "Standardize onboarding/offboarding and documentation as the organization grows.",
      },
    ],
    process: [
      {
        title: "Before",
        items: [
          "Fragmented tools",
          "Inconsistent access",
          "Limited account governance",
          "No standardized Drive architecture",
        ],
      },
      {
        title: "Assessment & Design",
        items: [
          "Mapped users",
          "Mapped departments",
          "Mapped regional programs",
          "Defined access requirements",
          "Designed information architecture",
        ],
      },
      {
        title: "Implementation",
        items: [
          "Google Workspace",
          "User accounts",
          "Shared Drives",
          "Groups/shared inboxes",
          "Permissions",
          "Ownership structure",
        ],
      },
      {
        title: "Governance",
        items: [
          "Account ownership",
          "Backup ownership",
          "Access standards",
          "Onboarding/offboarding",
          "Documentation",
        ],
      },
    ],
    impact: [
      { figure: "51", label: "User accounts created/managed" },
      { figure: "20+", label: "Shared inboxes/groups established" },
      { figure: "14", label: "Functions/departments supported through shared infrastructure" },
      { figure: "6", label: "Regional programs supported" },
      { figure: "34", label: "Users collaborating through the regional program environment" },
    ],
    deliverables: [
      "Information Architecture",
      "System Configuration",
      "Standard Operating Procedures",
      "Process Maps",
      "Stakeholder Communications",
    ],
  },
  {
    slug: "bmw-paint-shop-launch",
    number: "04",
    title: "Coordinating a New-Model Paint Shop Launch",
    organization: "BMW China",
    year: "2017",
    tags: ["Project Planning", "Lean Operations", "Manufacturing Launch"],
    summary:
      "Supported the launch of a new BMW model's paint shop, coordinating a large manufacturing workforce, quality-control systems, onboarding procedures, and production milestones in a high-stakes automotive environment.",
    challenge: [
      "A new-model paint shop launch had to come online while coordinating hundreds of employees, quality expectations, onboarding, and production milestones.",
      "The work required structured planning, Lean process support, and regular risk visibility for leadership—capabilities distinct from running a campus operation or implementing Workspace.",
    ],
    role: "Project Coordinator, Paint Shop Launch",
    scope: [
      "New-model paint shop launch",
      "Coordination with a 500-person workforce",
      "Quality control and standard operating procedures",
      "Production milestone tracking",
    ],
    owned: [
      "Launch coordination",
      "Lean process support",
      "Quality-control systems",
      "SOP development for onboarding",
      "Risk tracking and leadership updates",
      "Cross-functional milestone coordination",
    ],
    approach: [
      {
        n: "01",
        title: "Assess",
        body: "Clarify launch milestones, workforce constraints, quality requirements, and operational risks.",
      },
      {
        n: "02",
        title: "Design",
        body: "Structure SOPs, onboarding, quality checks, and communication for the launch window.",
      },
      {
        n: "03",
        title: "Implement",
        body: "Coordinate people, procedures, and milestone work through the paint shop launch.",
      },
      {
        n: "04",
        title: "Monitor",
        body: "Track schedule adherence, defects, onboarding, and risk items against executive expectations.",
      },
      {
        n: "05",
        title: "Improve",
        body: "Tighten procedures and tracking as the shop moved from launch into steady operations.",
      },
    ],
    workflows: [
      {
        title: "Launch Operating Loop",
        steps: [
          "Milestone plan",
          "Workforce coordination",
          "SOP / onboarding",
          "Quality checks",
          "Risk log",
          "Leadership update",
        ],
      },
    ],
    impact: [
      { figure: "500", label: "Employees coordinated during the launch" },
      { figure: "2017", label: "New-model paint shop launch window" },
      { figure: "Lean", label: "Process, SOP, and quality systems in a manufacturing setting" },
    ],
    deliverables: [
      "Standard Operating Procedures",
      "Staffing Plans",
      "Operational Tracking",
      "Stakeholder Communications",
      "Process Maps",
    ],
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((study) => study.slug === slug);
