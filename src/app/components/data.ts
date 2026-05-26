export const PROFILE = {
  name: "Pratik Derepatil",
  firstName: "Pratik",
  lastName: "Derepatil",
  initials: "PD",
  title: "Software Engineer",
  location: "Pune, Maharashtra, India",
  email: "pratikdere333@gmail.com",
  phone: "+91 7745081531",
  linkedin: "https://linkedin.com/in/pratikderepatil",
  github: "https://github.com/pratikderepatil",
  website: "https://pratikderepatil.github.io",
  summary:
    "Full-Stack Software Developer with 3.5 years of experience building scalable web applications using React.js, Next.js, Node.js, and modern frontend technologies. Skilled in developing reusable components, configurable UI systems. Experienced in collaborating with cross-functional teams, optimizing application performance, and delivering high-quality production-ready solutions.",
  roles: [
    "Software Engineer",
    "Full-Stack Developer",
    "Frontend Developer",
    "React Developer",
  ],
};

export const STATS = [
  { value: "3+", label: "Years Experience" },
  { value: "3", label: "Companies" },
  { value: "30+", label: "Components Built" },
  { value: "200+", label: "Products Launched" },
];

export const SKILLS = {
  Frontend: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SCSS",
    "Material UI",
    "Context API",
    "Redux",
  ],
  Backend: [
    "Node.js",
    "Nest.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "RESTful API Design",
  ],
  "DevOps & Cloud": [
    "Docker",
    "AWS Lambda",
    "AWS S3",
    "CI/CD Pipelines",
    "Git",
    "GitLab",
  ],
  Testing: ["Jest", "React Testing Library"],
  "Tools & Platforms": [
    "Figma",
    "Jira",
    "Strapi CMS",
    "Adobe Experience Manager",
    "Google Maps API",
  ],
  Practices: [
    "Agile / Scrum",
    "RBAC",
    "Microservices",
    "No-Code Platform Design",
    "System Design",
    "REST Contracts",
    "Code Review",
  ],
};

export const EXPERIENCE = [
  {
    role: "Software Engineer",
    company: "Rahi Platform Technologies",
    companyInitials: "RPT",
    location: "Pune, Maharashtra",
    period: "Oct 2024 — Present",
    current: true,
    color: "#3b82f6",
    bullets: [
      "Built the UI Configurator: a drag-and-drop no-code page builder enabling business users to assemble production UIs from a custom React component library (30+ components, zero external dependencies), using Context API, custom hooks, and a modular SCSS framework.",
      "Built 10+ React components as part of the Web Renderer Library, dynamically rendering UIs from JSON DSL configurations at runtime, achieving >95% Lighthouse scores and sub-1-second load times — validated with Jest and React Testing Library.",
      "Designed and implemented Route Planning and Map components using Google Maps API, enabling DSL-driven dynamic route visualization with auto updates and interactive drag-based route handling.",
      "Enhanced the Workflow Designer: a visual infinite-canvas editor in React supporting 12+ node types — implementing cut/paste, add/remove/modify field capabilities.",
      "Implemented RBAC, JWT-based session management, and tenant-scoped API routing using Nest.js and PostgreSQL, securing an enterprise-grade multi-tenant platform.",
      "Optimized Docker containerization with multi-stage builds, reducing image size by 90% and streamlining deployment pipelines.",
      "Delivered the official company website in 5 days using Next.js and Strapi CMS — earned the Synergy Champion award for pixel-perfect frontend implementation.",
    ],
    tags: [
      "React.js",
      "Next.js",
      "Nest.js",
      "TypeScript",
      "PostgreSQL",
      "Docker",
    ],
  },
  {
    role: "Associate Product Engineer",
    company: "Travelopia",
    companyInitials: "TVP",
    location: "Bangalore, Karnataka",
    period: "Jun 2023 — Apr 2024",
    current: false,
    color: "#8b5cf6",
    bullets: [
      "Implemented TOTP-based 2FA on the Artemis 3 platform, enabling secure QR-based access to internal reports and eliminating the need for individual user credential management.",
      "Contributed to a custom in-house translation system where page sections resolved dynamically by language, region, and user context at runtime.",
      "Built MongoDB aggregation pipelines ($match, $group, $lookup) to generate ad-hoc product analysis reports across large travel datasets.",
    ],
    tags: ["React.js", "Node.js", "Nest.js", "MongoDB", "TypeScript"],
  },
  {
    role: "Associate Trainee",
    company: "Bajaj Finserv",
    companyInitials: "BFS",
    location: "Pune, Maharashtra",
    period: "Jul 2021 — Mar 2022",
    current: false,
    color: "#10b981",
    bullets: [
      "Wrote 100+ test cases from BRD/BRE specifications for Pocket and Asset Insurance products and manually executed them before every release.",
      "Launched 200+ Pocket and Asset Insurance products by authoring and publishing AEM Content Fragments at enterprise scale across multiple digital channels.",
    ],
    tags: ["QA Testing", "AEM", "Content Management"],
  },
];

export const EDUCATION = [
  {
    degree: "Master of Science in Computer Application",
    institution: "Fergusson College",
    location: "Pune, Maharashtra",
    year: "May 2021",
    icon: "🎓",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "MIT ACSC",
    location: "Pune, Maharashtra",
    year: "Oct 2018",
    icon: "🎓",
  },
];

export const CERTIFICATIONS = [
  {
    title: "Full Stack Web Development (MERN Stack)",
    issuer: "Masai School",
    period: "Apr 2022 — Feb 2023",
    icon: "⚡",
  },
  {
    title: "Java Certification (Power Pack)",
    issuer: "Seed Infotech",
    period: "Aug 2018 — Feb 2019",
    icon: "☕",
  },
];

export const ACHIEVEMENTS = [
  {
    title: "Hero of the Month",
    subtitle: "March 2025 · Rahi Platform Technologies",
    description:
      "Recognized for consistently delivering high-quality solutions and impacting project outcomes across frontend and backend concerns.",
    color: "#f59e0b",
  },
  {
    title: "The Synergy Champion",
    subtitle: "October 2025 · Rahi Platform Technologies",
    description:
      "Honored for innovative thinking and problem-solving that set a benchmark for the team — awarded for the most accurate Figma-to-frontend implementation seen by the UI/UX team.",
    color: "#60a5fa",
  },
];
