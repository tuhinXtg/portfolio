import type { Metadata } from "next";
import { ProjectsSection } from "@/components/projects/ProjectsSection";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Featured project Scentora, a production-oriented full-stack e-commerce app, plus smaller projects and experiments.",
};

export default function ProjectsPage() {
  return <ProjectsSection />;
}
