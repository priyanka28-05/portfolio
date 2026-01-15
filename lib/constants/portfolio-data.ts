// Profile data constants for the portfolio
// Centralized data management following single source of truth principle

export const PROFILE_INFO = {
  name: "Priyanka Mansuriya",
  title: "Technical Specialist",
  subtitle: "API & Microservices Security",
  tagline: "Building the digital nervous system for modern banking.",
  location: "Dubai, UAE",
  phone: "+971 521501603",
  email: "mansuriyapriyanka@gmail.com",
  visa: "UAE Spouse Visa",
  linkedIn: "https://www.linkedin.com/in/priyanka-mansuriya",
  github: "https://github.com/priyanka-mansuriya",
} as const

export const PROFESSIONAL_SUMMARY = `I don't just write code; I secure the flow of data. Specializing in Java Spring Boot, Apigee, and High-Scale Microservices.`

export const ABOUT_CONTENT = {
  intro: `With over 6 years of experience, I engineer robust backend systems that power the banking sector. Currently based in Dubai, I bridge the gap between complex legacy systems and modern cloud-native architectures.`,
  focus: `My core focus is Security & Scalability. Whether it's implementing OAuth 2.0/OIDC for Open Banking or migrating workloads to Google Cloud Platform (GCP) & Anthos, I ensure data moves fast and stays safe.`,
} as const

export const TECH_STACK_TICKER = [
  "Java",
  "Spring Boot",
  "Apigee",
  "Docker",
  "Kubernetes",
  "GCP",
  "Jenkins",
  "OAuth 2.0",
  "PostgreSQL",
  "MongoDB",
  "REST APIs",
  "Microservices",
  "Anthos",
  "DevSecOps",
  "JWT",
  "OIDC",
] as const

export const SKILLS_DATA = {
  apiManagement: {
    title: "API Management & Security",
    skills: [
      "Apigee (Edge & X)",
      "OAuth 2.0",
      "OIDC",
      "JWT",
      "HMAC",
      "PKCE",
      "Rate Limiting",
      "Developer Portals",
      "API Governance",
    ],
  },
  backend: {
    title: "Backend & Databases",
    skills: [
      "Java",
      "Python",
      "Spring Boot",
      "JavaScript",
      "Microservices",
      "PostgreSQL",
      "MongoDB",
      "SQL",
      "RESTful APIs",
    ],
  },
  tools: {
    title: "Tools & Testing",
    skills: ["Postman", "JMeter", "Jira", "Confluence", "Git", "Jenkins", "DevSecOps"],
  },
  cloud: {
    title: "Cloud & Infrastructure",
    skills: ["GCP", "Anthos", "Kubernetes", "Docker", "CI/CD Pipelines"],
  },
  banking: {
    title: "Banking Domain",
    skills: ["Open Banking", "Payments Integration", "PSD2 Compliance", "API Banking"],
  },
  soft: {
    title: "Soft Skills",
    skills: ["Leadership", "Team Collaboration", "Problem Solving", "Stakeholder Communication"],
  },
} as const

export const CASE_STUDY_DATA = {
  title: "Scaling the Digital Bank",
  role: "Technical Specialist",
  period: "2021 – 2025",
  company: "Arab Bank",
  challenge:
    "Managing a massive ecosystem of banking services requiring strict regulatory compliance (PSD2) and high availability.",
  solutions: [
    {
      title: "API Gateway",
      description: "Architected traffic management using Apigee (Edge & X) for 30,000+ APIs.",
    },
    {
      title: "Security",
      description: "Implemented military-grade security using OAuth 2.0, JWT, and PKCE.",
    },
    {
      title: "Modernization",
      description: "Migrated banking workloads to Kubernetes and GCP Anthos.",
    },
  ],
  results: [
    { metric: "30,000+", label: "APIs Managed" },
    { metric: "20+", label: "Mini-Apps Delivered" },
    { metric: "0%", label: "Security Incidents" },
    { metric: "4 Years", label: "Zero Downtime" },
  ],
} as const

export const EXPERIENCE_DATA = [
  {
    id: "arab-bank",
    role: "Technical Specialist (API & Microservices)",
    company: "Arab Bank",
    location: "Dubai, UAE",
    period: "March 2021 – May 2025",
    highlights: [
      "API Ecosystem Management: Managed the full lifecycle of 30,000+ APIs using Apigee (Edge & X). Implemented traffic management (Spike Arrest/Quotas), monetization policies, and developer portals.",
      "Microservices Development: Developed scalable backend services using Java Spring Boot and JavaScript, supporting the rollout of 20+ mini-apps.",
      "Cloud-Native Deployment: Executed the migration and deployment of banking workloads onto Google Cloud Platform (GCP) and Anthos/Kubernetes.",
      "Security Implementation: Secured sensitive banking APIs using OAuth 2.0, OpenID Connect, JWT, HMAC, and PKCE, ensuring full compliance with regulatory frameworks and Open Banking standards.",
      'Project Delivery: Delivered strategies for critical projects including "Reflect" Neobank, MOFA, and NPSS.',
      "Quality Assurance: Integrated CI/CD pipelines (DevSecOps) for automated deployment and contract testing, achieving zero security incidents over 4 years.",
      "Technical Leadership: Mentored developers on Apigee best practices and Java design patterns.",
    ],
  },
  {
    id: "zerones",
    role: "Jr. Java Developer",
    company: "ZerOnes",
    location: "Rajkot, India",
    period: "Jan 2020 – Feb 2021",
    highlights: [
      "Core Application Development: Contributed to the full SDLC of Java-based applications by writing clean, maintainable code for core modules.",
      "Performance Optimization: Collaborated with senior developers to troubleshoot application bugs and optimize code performance.",
      "Quality Assurance: Actively participated in peer code reviews and debugging sessions.",
    ],
  },
  {
    id: "hexaware",
    role: "Associate Software Engineer",
    company: "Hexaware Technologies",
    location: "Pune, India",
    period: "Dec 2018 – Dec 2019",
    highlights: [
      "Backend Development: Engineered backend modules using Test-Driven Development (TDD) methodologies to ensure high code quality.",
      "Agile Delivery: Actively participated in Agile and Scrum ceremonies, bridging the gap between technical execution and project management requirements.",
      "Project Coordination: Assisted the Project Management Office (PMO) with sprint planning and status reporting.",
    ],
  },
] as const

export const PROJECTS_DATA = [
  {
    id: "dhansplit",
    title: "DhanSplit",
    year: "2024",
    tech: ["Java", "Spring Boot", "RESTful APIs"],
    description: "A smart expense-sharing platform automating balance calculations with secure user management.",
    github: "https://github.com/priyanka-mansuriya/dhansplit",
  },
  {
    id: "pdf-compressor",
    title: "PDF Compressor",
    year: "2024",
    tech: ["Spring Boot", "Next.js"],
    description: "High-performance document processing engine with optimized compression logic.",
    github: "https://github.com/priyanka-mansuriya/pdf-compressor",
  },
  {
    id: "covid-report",
    title: "Covid Report Generation",
    year: "2023",
    tech: ["JSP", "Java Servlets", "SQL"],
    description: "A system to generate professional, printable Covid reports based on real-time data.",
    github: "https://github.com/priyanka-mansuriya/covid-report",
  },
  {
    id: "random-chat",
    title: "Random Chat Application",
    year: "2023",
    tech: ["Spring Boot", "React.js", "WebSocket"],
    description: "Real-time chat application enabling users to connect instantly via WebSocket messaging.",
    github: "https://github.com/priyanka-mansuriya/random-chat",
  },
] as const

export const EDUCATION_DATA = [
  {
    id: "bachelor",
    degree: "Bachelor of Engineering in Computer Engineering",
    institution: "University of Mumbai",
    period: "2015 – 2018",
  },
  {
    id: "diploma",
    degree: "Diploma in Computer Engineering",
    institution: "Maharashtra State Board of Technical Education",
    period: "2012 – 2015",
  },
] as const

export const CERTIFICATIONS_DATA = [
  {
    id: "apigee-dev",
    title: "API Development on Google Cloud's Apigee",
    year: "2025",
    hasCredential: true,
    featured: true,
  },
  {
    id: "apigee-security",
    title: "API Security on Google Cloud's Apigee",
    year: "2025",
    hasCredential: true,
    featured: true,
  },
  {
    id: "api-design",
    title: "API Design and Fundamentals - Google",
    year: "2025",
    hasCredential: true,
    featured: false,
  },
  {
    id: "identity-protection",
    title: "Identity Protection and Governance",
    year: "2025",
    hasCredential: true,
    featured: false,
  },
  {
    id: "python-crash",
    title: "Crash Course on Python - Google",
    year: "2025",
    hasCredential: true,
    featured: false,
  },
  {
    id: "java-dev",
    title: "Java Development – Rajesh Patkar Institute",
    year: "2018",
    hasCredential: false,
    featured: false,
  },
] as const

export const LANGUAGES_DATA = ["English", "Hindi", "Gujarati", "Marathi"] as const

export const INTERESTS_DATA = ["Travelling", "Music", "Board Games", "Cooking"] as const

export const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "case-study", label: "Case Study" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
] as const

export const STATS_DATA = [
  { value: "30,000+", label: "APIs Delivered" },
  { value: "6+", label: "Years Experience" },
  { value: "0", label: "Security Incidents" },
  { value: "20+", label: "Mini-Apps" },
] as const
