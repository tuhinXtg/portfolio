// ---------------------------------------------------------------------------
// SKILLS — grouped by category. Add/remove entries freely; the UI adapts.
// ---------------------------------------------------------------------------

export type Skill = { name: string };
export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Building responsive, component-based interfaces.",
    skills: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Vite" },
    ],
  },
  {
    id: "backend",
    title: "Backend Engineering",
    description: "Designing APIs and server-side application logic.",
    skills: [
      { name: "Python" },
      { name: "FastAPI" },
      { name: "Node.js" },
      { name: "REST APIs" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    description: "Modeling and working with relational and document data.",
    skills: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "SQLAlchemy" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    description: "Day-to-day development environment and version control.",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "API testing tools" },
    ],
  },
];

export type FocusArea = {
  title: string;
  description: string;
};

export const focusAreas: FocusArea[] = [
  {
    title: "Backend Engineering",
    description:
      "Building clean, maintainable, and reliable server-side applications.",
  },
  {
    title: "API Development",
    description:
      "Designing RESTful APIs that connect applications and services.",
  },
  {
    title: "Database Engineering",
    description:
      "Working with relational and NoSQL databases and understanding how application data should be structured.",
  },
  {
    title: "Full-Stack Applications",
    description:
      "Connecting modern frontend interfaces with robust backend systems.",
  },
];

export const currentlyLearning: string[] = [
  "Advanced FastAPI",
  "PostgreSQL",
  "Database design",
  "Authentication & authorization",
  "API security",
  "Backend architecture",
  "Testing",
  "Docker",
  "Deployment",
  "System design",
];
