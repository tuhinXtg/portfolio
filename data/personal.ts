// ---------------------------------------------------------------------------
// PERSONAL INFORMATION — edit this file to update your name, links, and bio
// across the entire site. Nothing else needs to change.
// ---------------------------------------------------------------------------

export const personal = {
  name: "Nazmul Alam",
  role: "Full-Stack Developer",
  focus: "Backend Engineering Enthusiast",
  university: "Independent University, Bangladesh (IUB)",
  degree: "Computer Science and Engineering (CSE)",
  academicProgress: "3rd year, 2nd semester completed",

  // Replace with your real contact details
  email: "natuhin02@gmail.com",
  github: "https://github.com/tuhinXtg",
  linkedin: "https://www.linkedin.com/in/nazmul-alam-aa3a32405/",

  // Drop your PDF resume at this exact path in /public
  resumePath: "/resume/Nazmul-Alam-Resume.pdf",

  // Replace with your real photo at this exact path in /public
  profileImage: "/images/profile.jpg",
} as const;

export const heroCopy = {
  greeting: "Hi, I'm Nazmul Alam.",
  headline: "Full-Stack Developer with a strong focus on Backend Engineering.",
  subtext:
    "I build modern web applications with a particular interest in Python, FastAPI, APIs, databases, and reliable backend systems.",
  highlightTech: ["Python", "FastAPI", "PostgreSQL", "React", "Node.js"],
};

export const aboutCopy = {
  paragraphs: [
    "I'm studying Computer Science and Engineering at Independent University, Bangladesh, and I've completed my third year, second semester.",
    "I'm developing myself as a full-stack web developer while increasingly focusing on backend engineering — I enjoy working with APIs, databases, backend systems, and modern frontend technologies.",
    "I learn primarily through building projects, gradually applying more production-oriented engineering practices as I go.",
    "My long-term goal is to become a skilled software / backend engineer capable of designing reliable and maintainable real-world systems.",
  ],
  facts: [
    { label: "University", value: personal.university },
    { label: "Degree", value: personal.degree },
    { label: "Progress", value: personal.academicProgress },
    { label: "Focus", value: "Backend Engineering" },
  ],
};

export const dsaAchievement = {
  title: "Data Structures & Algorithms",
  issuer: "Phitron",
  description:
    "Completed a structured DSA and algorithm course through Phitron and earned a certificate through strong performance.",
};

export const contactCopy = {
  headline: "Let's build something useful.",
  subtext:
    "Have an interesting project, opportunity, or idea? I'd love to hear from you.",
};
