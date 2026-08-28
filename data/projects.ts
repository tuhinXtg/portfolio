// ---------------------------------------------------------------------------
// PROJECTS — the Featured project (Scentora) plus everything else.
// Replace ADD_* placeholders and links as your projects progress.
// Only list features that are actually implemented; use status: "planned"
// for anything still on the roadmap so it renders as "Coming Soon".
// ---------------------------------------------------------------------------

export type FeatureStatus = "done" | "planned";

export type ProjectFeature = {
  label: string;
  status: FeatureStatus;
};

export type TechLayer = {
  layer: string;
  items: string[];
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  featured: boolean;
  techLayers: TechLayer[];
  features: ProjectFeature[];
  githubUrl: string;
  liveUrl: string | null;
  image: string;
};

export const featuredProject: Project = {
  slug: "scentora",
  name: "Scentora",
  tagline: "Production-oriented full-stack e-commerce platform for a real perfume business",
  description:
    "Scentora is being built with two goals in mind: becoming a genuinely usable application for a real business, and serving as a serious, production-oriented engineering project rather than another CRUD tutorial clone. It's my primary space for practicing full-stack architecture, REST API design, and database-driven application development end to end.",
  featured: true,
  techLayers: [
    { layer: "Frontend", items: ["React", "Vite", "TypeScript"] },
    { layer: "Backend", items: ["Python", "FastAPI"] },
    { layer: "Database", items: ["PostgreSQL", "SQLAlchemy ORM"] },
    { layer: "Validation", items: ["Pydantic"] },
    { layer: "Migrations", items: ["Alembic"] },
  ],
  features: [
    { label: "Product catalog & management", status: "done" },
    { label: "REST API for core resources", status: "done" },
    { label: "Database schema & migrations", status: "done" },
    { label: "Frontend / backend integration", status: "done" },
    { label: "Authentication & authorization", status: "planned" },
    { label: "Cart & checkout workflow", status: "done" },
    { label: "Order management", status: "planned" },
    { label: "Admin dashboard", status: "planned" },
  ],
  githubUrl: "https://github.com/tuhinXtg/Scentora",
  liveUrl: null,
  image: "/projects/scentora.jpg",
};

export const otherProjects: Project[] = [
  {
    slug: "student-assignment-tracker",
    name: "Student Assignment Tracker",
    tagline: "Full-stack app for managing student assignments",
    description:
      "ADD_PROJECT_DESCRIPTION — a full-stack application for tracking assignments, deadlines, and related coursework data.",
    featured: false,
    techLayers: [
      { layer: "Frontend", items: ["React"] },
      { layer: "Backend", items: ["FastAPI"] },
      { layer: "Database", items: ["MongoDB", "Beanie"] },
    ],
    features: [
      { label: "ADD_PROJECT_FEATURE", status: "planned" },
    ],
    githubUrl: "https://github.com/tuhinXtg/Student_Assignment_Tracker",
    liveUrl: "https://student-assignment-tracker-d2i8rfu97-cs-go2.vercel.app/login",
    image: "/projects/assignment-tracker.jpg",
  },
//   {
//     slug: "react-frontend-project",
//     name: "ADD_PROJECT_NAME",
//     tagline: "React / Vite frontend project",
//     description:
//       "ADD_PROJECT_DESCRIPTION — a React project demonstrating component-based development, API integration, and responsive UI.",
//     featured: false,
//     techLayers: [{ layer: "Frontend", items: ["React", "Vite"] }],
//     features: [{ label: "ADD_PROJECT_FEATURE", status: "planned" }],
//     githubUrl: "YOUR_GITHUB_URL",
//     liveUrl: null,
//     image: "/projects/react-project.jpg",
//   },
//   {
//     slug: "backend-api-project",
//     name: "ADD_PROJECT_NAME",
//     tagline: "Backend REST API project",
//     description:
//       "ADD_PROJECT_DESCRIPTION — a FastAPI-based backend project demonstrating CRUD operations, validation, and database integration.",
//     featured: false,
//     techLayers: [{ layer: "Backend", items: ["FastAPI", "Python"] }],
//     features: [{ label: "ADD_PROJECT_FEATURE", status: "planned" }],
//     githubUrl: "YOUR_GITHUB_URL",
//     liveUrl: null,
//     image: "/projects/backend-api-project.jpg",
//   },
];

export const allProjects: Project[] = [featuredProject, ...otherProjects];
