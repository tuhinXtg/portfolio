import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { HeroDiagram } from "@/components/hero/HeroDiagram";
import { personal, heroCopy } from "@/data/personal";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Hero() {
  return (
    <section className="border-b border-border">
      <Container className="grid items-center gap-14 py-20 md:py-28 lg:grid-cols-2">
        <div className="animate-fade-up">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-accent">
            Computer Science Student &middot; Aspiring Backend Engineer
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {heroCopy.greeting}
          </h1>
          <p className="mt-4 text-xl font-medium text-foreground/90 md:text-2xl">
            {heroCopy.headline}
          </p>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
            {heroCopy.subtext}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {heroCopy.highlightTech.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="/projects">View My Projects</Button>
            <Button href="/contact" variant="secondary">
              Let&apos;s Talk
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-accent"
            >
              <GithubIcon width={20} height={20} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-accent"
            >
              <LinkedinIcon width={20} height={20} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="text-muted transition-colors hover:text-accent"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:150ms]">
          <HeroDiagram />
        </div>
      </Container>
    </section>
  );
}
