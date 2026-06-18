import {
  Award,
  BarChart3,
  Brain,
  Bot,
  Cloud,
  Code2,
  Cpu,
  Database,
  Github,
  Globe,
  Linkedin,
  Mail,
  Monitor,
  ScrollText,
  Smartphone,
  Table2,
  Terminal,
  Rocket,
  Server,
  Sparkles,
  Trophy,
  Wrench,
} from "lucide-react";

export const siteConfig = {
  name: "Prince Thakur",
  title: "B.Tech AI Student & Full Stack Developer",
  tagline: "Building AI-powered products, full stack systems, and meaningful digital experiences.",
  email: "princesinghsisodiya703@gmail.com",
  location: "Indore, India",
  university: "SAGE University, Indore",
  mvp: "Nexora",
  url: "https://princethakur.vercel.app",
  profileImage: "/profile/prince-thakur.png",
  resumePath: "/resume/Prince_Thakur_Resume.pdf",
  resumeFileName: "Prince_Thakur_Resume.pdf",
  description:
    "Prince Thakur is a B.Tech Artificial Intelligence student, full stack developer, and AI product builder from Indore, India, focused on practical AI systems and modern web products.",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const heroRoles = [
  "B.Tech Artificial Intelligence Student",
  "Full Stack Developer",
  "AI Product Builder",
];

export const heroStats = [
  { value: "5", label: "Verified Certifications" },
  { value: "1", label: "Live Project" },
  { value: "6", label: "Skill Areas" },
  { value: "Open", label: "Collaborations" },
];

export const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/princesinghsisodiya703-art",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/prince-thakur007",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:princesinghsisodiya703@gmail.com",
    label: "Email",
  },
];

export const aboutHighlights = [
  {
    icon: Brain,
    title: "AI / ML",
    description:
      "Learning artificial intelligence and machine learning concepts through practical, hands-on projects.",
  },
  {
    icon: Bot,
    title: "Robotics",
    description:
      "Exploring robotics, automation, and intelligent systems as part of a broader AI learning journey.",
  },
  {
    icon: Sparkles,
    title: "Continuous Learning",
    description:
      "Building discipline through consistent practice, new technologies, and real-world problem solving.",
  },
  {
    icon: Globe,
    title: "Full Stack Development",
    description:
      "Creating modern web applications with frontend, backend, database, and deployment fundamentals.",
  },
  {
    icon: Wrench,
    title: "Modern Web Development",
    description:
      "Combining design awareness and engineering skills to build clean, usable digital experiences.",
  },
];

export const timeline = [
  {
    year: "Foundation",
    title: "Academic Learning Journey",
    org: "Artificial Intelligence Undergraduate",
    description:
      "Building a formal foundation in artificial intelligence, software development, and problem solving through B.Tech coursework and independent practice.",
  },
  {
    year: "Credentials",
    title: "AI & Red Hat Certifications",
    org: "Verified Technical Learning",
    description:
      "Completing verified certification programs across Linux administration, Java EE, Python, and applied AI concepts.",
  },
  {
    year: "Build",
    title: "Personal Product Development",
    org: "Nexora AI Communication Platform",
    description:
      "Designing, building, and deploying a live AI-powered communication platform with a modern full stack workflow.",
  },
];

export const projects = [
  {
    id: "nexora-ai-communication-platform",
    title: "Nexora AI Communication Platform",
    description:
      "A live communication-focused web platform that demonstrates modern full stack delivery, responsive product UI, and an AI-ready foundation for future intelligent workflows.",
    status: "Live Production Deployment",
    priority: "Featured Project #1",
    category: "AI Product",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "AI Workflows", "Vercel"],
    gradient: "from-blue-600/40 via-purple-600/30 to-cyan-500/20",
    github: "https://github.com/princesinghsisodiya703-art/nexoracomm.git",
    live: "https://nexoracomm.vercel.app",
    featured: true,
    overview: {
      description:
        "Nexora is a live product build created to demonstrate end-to-end delivery: planning, frontend implementation, responsive UX, GitHub presentation, and Vercel deployment.",
      problem:
        "Early-stage product ideas often stop at static portfolio screenshots, which makes it hard for recruiters and clients to judge whether the developer can ship a usable deployment.",
      solution:
        "The project turns the idea into a public, production-hosted web experience with a clear interface and a codebase that can support richer AI-assisted communication workflows over time.",
    },
    role: [
      "Planned the product direction and user-facing experience.",
      "Built the frontend interface and responsive layout.",
      "Prepared the project for production deployment on Vercel.",
      "Structured the codebase for future AI workflow expansion.",
    ],
    techStack: {
      frameworks: ["Next.js", "React"],
      languages: ["TypeScript", "JavaScript"],
      libraries: ["Tailwind CSS", "Framer Motion"],
      platforms: ["Vercel", "GitHub"],
    },
    features: [
      "Modern communication-focused product experience",
      "AI-ready architecture for future intelligent interaction features",
      "Responsive interface optimized for desktop and mobile",
      "Production deployment on Vercel",
    ],
    challenges: [
      {
        challenge: "Creating a product experience that felt modern without overcomplicating the first version.",
        solution:
          "Focused the first production version on clear interaction patterns, responsive UI, and a scalable interface foundation.",
      },
      {
        challenge: "Preparing a student-built project for public deployment.",
        solution:
          "Used a production hosting workflow with Vercel and kept the stack simple enough to maintain and iterate.",
      },
    ],
    impact: [
      "Converted a learning project into a live production deployment",
      "Demonstrates practical full stack execution and product thinking",
      "Creates a strong foundation for future AI communication features",
    ],
    learnings: [
      "A real deployed product teaches more than a static demo.",
      "Product clarity matters as much as visual polish.",
      "A focused first version is easier to improve than an overloaded MVP.",
    ],
    screenshots: [] as {
      src: string;
      alt: string;
      caption: string;
      width: number;
      height: number;
    }[],
  },
];

export const projectCategories = [
  "AI Product",
  "Full Stack",
  "Machine Learning",
  "Robotics",
  "Future Builds",
];

export const services = [
  {
    title: "Website Development",
    icon: Globe,
    description:
      "Custom, responsive, and modern websites built for businesses, startups, and personal brands.",
    skills: ["HTML/CSS", "JavaScript", "React"],
  },
  {
    title: "App Development",
    icon: Smartphone,
    description:
      "Developing fast, scalable, and user-friendly web applications using modern technologies.",
    skills: ["React", "Node.js", "APIs"],
  },
  {
    title: "AI & Machine Learning",
    icon: Bot,
    description:
      "Python-based AI learning, machine learning experiments, automation workflows, and intelligent application concepts.",
    skills: ["Python", "Scikit-Learn", "Machine Learning"],
  },
  {
    title: "Prompt Engineering",
    icon: Terminal,
    description:
      "Structured prompt design for LLM workflows, content generation, research support, and automation planning.",
    skills: ["ChatGPT", "LLM Prompts", "AI Workflows"],
  },
  {
    title: "Desktop Applications",
    icon: Monitor,
    description:
      "Building clean, efficient desktop applications and business tools using Python.",
    skills: ["Python", "Tkinter", "Custom Tools"],
  },
  {
    title: "Cloud Architecture",
    icon: Cloud,
    description:
      "Deploying web projects and preparing cloud-ready hosting workflows for modern applications.",
    skills: ["Vercel", "GitHub", "Deployment"],
  },
  {
    title: "Resume & Portfolio Design",
    icon: ScrollText,
    description:
      "Creating professional resumes, CVs, LinkedIn profiles, and portfolio websites that help clients stand out.",
    skills: ["ATS-Friendly Resume", "Portfolio Design", "Personal Branding"],
  },
  {
    title: "Excel & Data Management",
    icon: Table2,
    description:
      "Excel dashboards, automation, data cleaning, formulas, reports, and business spreadsheets.",
    skills: ["Microsoft Excel", "Data Analysis", "Automation"],
  },
  {
    title: "Data Analytics & Visualization",
    icon: BarChart3,
    description:
      "Cleaning, analyzing, and visualizing data to create actionable business insights, dashboards, and reports.",
    skills: ["NumPy", "Pandas", "Seaborn", "Data Visualization"],
  },
];

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "JavaScript", "TypeScript", "C++"],
  },
  {
    title: "AI / ML",
    icon: Brain,
    skills: ["NumPy", "Pandas", "Scikit-Learn", "Machine Learning"],
  },
  {
    title: "Frontend",
    icon: Globe,
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Cursor AI"],
  },
];

export const techIcons = [
  "Python",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Framer Motion",
  "GitHub",
  "Cursor",
  "AWS",
  "C++",
  "AI/ML",
];

export const experience = [
  {
    period: "Current",
    role: "Academic Learning Journey",
    company: "B.Tech Artificial Intelligence",
    description:
      "Studying artificial intelligence fundamentals while steadily building software engineering, mathematics, and problem-solving skills.",
    type: "education" as const,
  },
  {
    period: "Verified",
    role: "AI Certifications",
    company: "Credly Verified Learning",
    description:
      "Completed applied AI learning programs including customer review analysis and modern AI foundations.",
    type: "credential" as const,
  },
  {
    period: "Production",
    role: "Personal Project Builder",
    company: "Nexora AI Communication Platform",
    description:
      "Built and deployed a live AI-powered communication platform as a self-driven full stack product project.",
    type: "project" as const,
  },
  {
    period: "Ongoing",
    role: "Technical Skill Growth",
    company: "Self-driven Development Experience",
    description:
      "Practicing modern frontend, backend, database, and AI/ML workflows through focused learning and hands-on implementation.",
    type: "growth" as const,
  },
];

export const certifications = [
  {
    title: "Red Hat System Administration II (RH134 - RHA) - Ver. 10",
    issuer: "Red Hat",
    issueDate: "See attached certificate",
    status: "Verified",
    badge: "RH134",
    verificationUrl:
      "https://www.credly.com/badges/3a07b383-7051-402a-8868-50a29ce40120/public_url",
    certificatePdf: "/certificates/prince-thakur-certificates.pdf",
    certificateFileName: "Prince-Thakur-Red-Hat-System-Administration-II-RH134.pdf",
    icon: Server,
  },
  {
    title: "Apply AI: Analyze Customer Reviews",
    issuer: "Cisco",
    issueDate: "See attached certificate",
    status: "Verified",
    badge: "AI",
    verificationUrl:
      "https://www.credly.com/badges/add96131-e4de-4750-a28a-d88dbe3476fb/public_url",
    certificatePdf: "/certificates/prince-thakur-certificates.pdf",
    certificateFileName: "Prince-Thakur-Apply-AI-Analyze-Customer-Reviews.pdf",
    icon: Brain,
  },
  {
    title: "Introduction to Modern AI",
    issuer: "Cisco",
    issueDate: "See attached certificate",
    status: "Verified",
    badge: "AI",
    verificationUrl:
      "https://www.credly.com/badges/5cf8cf95-f74f-4111-b97c-dec724f9ee4f/public_url",
    certificatePdf: "/certificates/prince-thakur-certificates.pdf",
    certificateFileName: "Prince-Thakur-Introduction-to-Modern-AI.pdf",
    icon: Sparkles,
  },
  {
    title: "Red Hat Application Development I: Programming in Java EE (AD183 - RHA) - Ver. 7.0",
    issuer: "Red Hat",
    issueDate: "See attached certificate",
    status: "Verified",
    badge: "AD183",
    verificationUrl:
      "https://www.credly.com/badges/054aa277-39bd-499d-976b-f71334515b04/public_url",
    certificatePdf: "/certificates/prince-thakur-certificates.pdf",
    certificateFileName: "Prince-Thakur-Red-Hat-Application-Development-I-AD183.pdf",
    icon: Code2,
  },
  {
    title: "Python Programming with Red Hat (AD141 - RHA) - Ver. 9.0",
    issuer: "Red Hat",
    issueDate: "See attached certificate",
    status: "Verified",
    badge: "AD141",
    verificationUrl:
      "https://www.credly.com/badges/a5096d63-bf21-4175-b8c7-f0127aafacd7/public_url",
    certificatePdf: "/certificates/prince-thakur-certificates.pdf",
    certificateFileName: "Prince-Thakur-Python-Programming-with-Red-Hat-AD141.pdf",
    icon: Cpu,
  },
];

export const contactServiceOptions = services.map((service) => service.title);

export const budgetOptions = [
  "Under ₹5,000",
  "₹5,000–₹15,000",
  "₹15,000–₹50,000",
  "₹50,000–₹1,00,000",
  "₹1,00,000+",
];

export const deadlineOptions = [
  "ASAP",
  "Within 1 Week",
  "Within 2 Weeks",
  "Within 1 Month",
  "1–3 Months",
  "3+ Months",
  "Flexible",
];

export const achievements = [
  {
    icon: Rocket,
    title: "Built and deployed Nexora",
    description:
      "Built and deployed the Nexora AI Communication Platform as a live production project.",
  },
  {
    icon: Trophy,
    title: "Multiple Red Hat certifications",
    description:
      "Completed verified Red Hat credentials across system administration, Java EE, and Python programming.",
  },
  {
    icon: Award,
    title: "AI certification achievements",
    description:
      "Completed applied AI and modern AI certification programs through verified learning pathways.",
  },
  {
    icon: Sparkles,
    title: "Active AI and full stack journey",
    description:
      "Continuously learning AI, machine learning, full stack development, robotics, and modern web technologies.",
  },
];
