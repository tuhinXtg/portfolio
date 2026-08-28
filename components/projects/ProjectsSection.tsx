import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredProject, otherProjects } from "@/data/projects";
import { FeaturedProjectCard } from "@/components/projects/FeaturedProjectCard";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function ProjectsSection() {
  return (
    <>
      <section className="py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Projects"
            title="What I've been building"
            description="I learn primarily by building. Below is my main production-oriented project, followed by smaller applications and experiments from along the way."
          />
          <FeaturedProjectCard project={featuredProject} />
        </Container>
      </section>

      <section className="border-t border-border py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Other Projects"
            title="Smaller builds & experiments"
            description="Practice projects and focused builds — not every project needs to carry the same weight."
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
