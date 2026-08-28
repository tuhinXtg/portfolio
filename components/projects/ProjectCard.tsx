import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/data/projects";
import { GithubIcon } from "@/components/icons";

export function ProjectCard({ project }: { project: Project }) {
  const allTech = project.techLayers.flatMap((l) => l.items);

  return (
    <div className="flex flex-col rounded-lg border border-border bg-surface p-5 transition-colors hover:border-border-strong">
      <h3 className="text-base font-medium text-foreground">
        {project.name}
      </h3>
      <p className="mt-1 text-sm text-muted">{project.tagline}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {allTech.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-4 pt-1 text-sm text-subtle">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 hover:text-accent"
        >
          <GithubIcon width={14} height={14} /> Code
        </a>
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-accent"
          >
            <ExternalLink size={14} /> Live
          </a>
        ) : (
          <span className="font-mono text-[11px]">In Development</span>
        )}
      </div>
    </div>
  );
}
