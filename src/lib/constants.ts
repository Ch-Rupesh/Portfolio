// ============================================
// PORTFOLIO CONSTANTS & DATA
// ============================================

// ── Personal Info ──────────────────────────────

export const personalInfo = {
  name: "Chitturi Rupesh Siva Mani Kanta",
  firstName: "Rupesh",
  tagline:
    "Software Developer passionate about full-stack development, scalable systems, and building intelligent solutions.",
  email: "2300031153cseh1@gmail.com",
  linkedin: "https://www.linkedin.com/in/rupeshsivamanikantachitturi/",
  github: "https://github.com/Ch-Rupesh",
  leetcode: "https://leetcode.com/u/klu2300031153/",
  codechef: "https://www.codechef.com/users/klu2300031153",
  hackerrank: "https://www.hackerrank.com/profile/h2300031153",
  resumeLink:
    "https://drive.google.com/file/d/1jy78jzFUMXDHKcBeJ4fu-k0SUlthsL5C/view?usp=sharing",
} as const;

// ── Navigation ─────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Achievements", href: "/achievements" },
  { label: "Certifications", href: "/certifications" },
  { label: "Coding Profiles", href: "/coding-profiles" },
  { label: "Contact", href: "/contact" },
];

// ── Typing Animation Roles ─────────────────────

export const roles: string[] = [
  "Software Engineer",
  "AI Engineer",
  "Multi-Agent Systems Developer",
  "Full Stack Developer",
];

// ── Skills ─────────────────────────────────────

export interface Skill {
  name: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    icon: "FaCode",
    skills: [
      { name: "Java" },
      { name: "C" },
      { name: "SQL" },
      { name: "Python" },
      { name: "JavaScript" },
    ],
  },
  {
    category: "Frontend",
    icon: "FaReact",
    skills: [
      { name: "React.js" },
      { name: "Tailwind CSS" },
      { name: "HTML" },
      { name: "CSS" },
    ],
  },
  {
    category: "Backend",
    icon: "FaServer",
    skills: [{ name: "Spring Boot" }, { name: "FastAPI" }],
  },
  {
    category: "AI / ML",
    icon: "FaBrain",
    skills: [
      { name: "Agentic AI" },
      { name: "LangGraph" },
      { name: "Ollama" },
      { name: "Multi-Agent Systems" },
    ],
  },
  {
    category: "Databases",
    icon: "FaDatabase",
    skills: [
      { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "PostGIS" },
    ],
  },
  {
    category: "Tools",
    icon: "FaTools",
    skills: [
      { name: "Git" },
      { name: "VS Code" },
      { name: "Eclipse IDE" },
    ],
  },
  {
    category: "CS Fundamentals",
    icon: "FaBook",
    skills: [
      { name: "DSA" },
      { name: "DBMS" },
      { name: "Operating Systems" },
    ],
  },
];

// ── Projects ───────────────────────────────────

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  features: string[];
  github?: string;
  liveDemo?: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: "aquamyst",
    title: "AquaMyst: The Hidden Ocean Interpreter",
    tagline: "AI-Powered Multi-Agent Ocean Intelligence",
    description:
      "An AI-powered multi-agent ocean intelligence platform that autonomously analyzes oceanographic datasets using structured reasoning pipelines.",
    techStack: ["Python", "LangGraph", "Ollama", "PostgreSQL", "PostGIS", "FastAPI"],
    features: [
      "Multi-agent orchestration",
      "AI reasoning pipelines",
      "Natural language data analysis",
      "Local LLM integration",
      "Intelligent scientific insights",
      "AI-driven ocean intelligence workflows",
    ],
    github: "https://github.com/Ch-Rupesh",
    featured: true,
  },
  {
    id: "job-tracker",
    title: "Online Job Application Tracker",
    tagline: "Full-Stack Job Management Platform",
    description:
      "A full-stack application for tracking job applications with notification systems and backend data management.",
    techStack: ["React.js", "Spring Boot", "MySQL", "CSS"],
    features: [
      "Job tracking dashboard",
      "Notification system",
      "REST APIs",
      "Database integration",
      "Dynamic UI components",
    ],
    github: "https://github.com/Ch-Rupesh",
    featured: false,
  },
];

// ── Achievements ───────────────────────────────

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const achievementsData: Achievement[] = [
  {
    id: "hackathon-prize",
    title: "Consolation Prize — 36-hour Hackathon",
    description:
      "Recognized for building an innovative solution during an intense 36-hour hackathon competition.",
    icon: "FaMedal",
  },
  {
    id: "president-club",
    title: "President of DataScience AI Dynamos Club",
    description:
      "Led the university's premier AI and Data Science club, driving initiatives, workshops, and collaborative learning sessions.",
    icon: "FaCrown",
  },
  {
    id: "international-hackathon",
    title: "International-level Hackathon Organizer",
    description:
      "Organized and managed an international-level hackathon, bringing together global talent to solve real-world challenges.",
    icon: "FaTrophy",
  },
  {
    id: "national-hackathon",
    title: "National-level Hackathon Organizer",
    description:
      "Organized and managed a national-level hackathon, coordinating participants, mentors, and judges for a successful event.",
    icon: "FaTrophy",
  },
  {
    id: "mentor",
    title: "Student Mentor",
    description:
      "Mentored junior students in programming fundamentals, AI concepts, and project development.",
    icon: "FaUsers",
  },
  {
    id: "hdfc-scholarship",
    title: "HDFC Parivartan Scholarship",
    description:
      "Received the prestigious HDFC Parivartan Scholarship for academic excellence and demonstrated potential.",
    icon: "FaAward",
  },
];

// ── Certifications ─────────────────────────────

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  skills: string[];
}

export const certificationsData: Certification[] = [
  {
    id: "cambridge-linguaskill",
    title: "Linguaskill General",
    issuer: "Cambridge Assessment English",
    skills: ["English Proficiency", "Written Communication", "Professional English"],
  },
];

// ── Coding Profiles ────────────────────────────

export interface CodingProfile {
  id: string;
  platform: string;
  username: string;
  profileUrl: string;
  icon: string;
  color: string;
}

export const codingProfilesData: CodingProfile[] = [
  {
    id: "github-profile",
    platform: "GitHub",
    username: "Ch-Rupesh",
    profileUrl: "https://github.com/Ch-Rupesh",
    icon: "FaGithub",
    color: "#333333",
  },
  {
    id: "leetcode",
    platform: "LeetCode",
    username: "klu2300031153",
    profileUrl: "https://leetcode.com/u/klu2300031153/",
    icon: "SiLeetcode",
    color: "#FFA116",
  },
  {
    id: "codechef",
    platform: "CodeChef",
    username: "klu2300031153",
    profileUrl: "https://www.codechef.com/users/klu2300031153",
    icon: "SiCodechef",
    color: "#5B4638",
  },
  {
    id: "hackerrank",
    platform: "HackerRank",
    username: "h2300031153",
    profileUrl: "https://www.hackerrank.com/profile/h2300031153",
    icon: "FaHackerrank",
    color: "#00EA64",
  },
];
