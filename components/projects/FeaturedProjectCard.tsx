import { ExternalLink, CheckCircle2, Circle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { Project } from "@/data/projects";
import { GithubIcon } from "@/components/icons";

export function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <div className="overflow-hidden rounded-xl border border-accent-border bg-surface">
      <div className="border-b border-border bg-accent-dim px-6 py-3">
        <p className="font-mono text-xs uppercase tracking-wide text-accent">
          Featured Project
        </p>
      </div>

      <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-foreground">
            {project.name}
          </h3>
          <p className="mt-2 text-sm font-medium text-accent">
            {project.tagline}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {project.description}
          </p>

          <div className="mt-6 space-y-3">
            {project.techLayers.map((layer) => (
              <div key={layer.layer} className="flex flex-wrap items-center gap-2">
                <span className="w-24 shrink-0 font-mono text-[11px] uppercase tracking-wide text-subtle">
                  {layer.layer}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {layer.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={project.githubUrl} external variant="secondary">
              <GithubIcon width={16} height={16} /> View Code
            </Button>
            {project.liveUrl ? (
              <Button href={project.liveUrl} external variant="ghost">
                <ExternalLink size={16} /> Live Site
              </Button>
            ) : (
              <span className="inline-flex items-center gap-2 px-2 text-sm text-subtle">
                Live site not yet deployed
              </span>
            )}
          </div>
        </div>

        <div className="rounded-lg border border-border bg-background p-5">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-wide text-subtle">
            Implementation Status
          </p>
          <ul className="space-y-3">
            {project.features.map((feature) => (
              <li key={feature.label} className="flex items-start gap-2.5 text-sm">
                {feature.status === "done" ? (
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-accent"
                  />
                ) : (
                  <Circle size={16} className="mt-0.5 shrink-0 text-subtle" />
                )}
                <span
                  className={
                    feature.status === "done"
                      ? "text-foreground"
                      : "text-subtle"
                  }
                >
                  {feature.label}
                  {feature.status === "planned" && (
                    <span className="ml-2 font-mono text-[11px] text-subtle">
                      Coming Soon
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
