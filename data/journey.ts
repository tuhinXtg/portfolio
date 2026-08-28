// ---------------------------------------------------------------------------
// DEVELOPMENT JOURNEY — an editable timeline instead of a fake job history.
// Replace "YYYY" with real dates (or a range) as you confirm them.
// ---------------------------------------------------------------------------

export type JourneyMilestone = {
  date: string;
  title: string;
  description: string;
  current?: boolean;
};

export const journey: JourneyMilestone[] = [
  {
    date: "YYYY",
    title: "Programming Fundamentals",
    description:
      "Started learning core programming concepts and problem solving.",
  },
  {
    date: "YYYY",
    title: "Data Structures & Algorithms",
    description:
      "Completed a structured DSA course through Phitron, building a stronger CS foundation.",
  },
  {
    date: "YYYY",
    title: "Web Development Fundamentals",
    description: "Learned HTML, CSS, and JavaScript fundamentals.",
  },
  {
    date: "YYYY",
    title: "React & Frontend Development",
    description:
      "Started building component-based interfaces with React and modern tooling.",
  },
  {
    date: "YYYY",
    title: "REST API Development",
    description: "Learned to design and consume REST APIs.",
  },
  {
    date: "YYYY",
    title: "Python Backend Development",
    description: "Began building server-side applications with Python.",
  },
  {
    date: "YYYY",
    title: "FastAPI & Database Development",
    description:
      "Started building APIs with FastAPI backed by PostgreSQL and MongoDB.",
  },
  {
    date: "YYYY",
    title: "Full-Stack Applications",
    description:
      "Began connecting React frontends to FastAPI backends end to end.",
  },
  {
    date: "YYYY",
    title: "Production-Oriented Project Development",
    description:
      "Started Scentora with a focus on production-style architecture and practices.",
  },
  {
    date: "Now",
    title: "Current Focus: Backend Engineering",
    description:
      "Deepening backend architecture, database design, and API engineering skills.",
    current: true,
  },
];
