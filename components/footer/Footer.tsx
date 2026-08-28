import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { personal } from "@/data/personal";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col items-center gap-4 py-10 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-mono text-sm text-foreground">{personal.name}</p>
          <p className="mt-1 text-sm text-subtle">
            Full-Stack Developer • Backend Engineering Enthusiast
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-accent"
          >
            <GithubIcon width={18} height={18} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-accent"
          >
            <LinkedinIcon width={18} height={18} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="text-muted transition-colors hover:text-accent"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="text-xs text-subtle">
          © 2026 {personal.name}. Built with modern web technologies.
        </p>
      </Container>
    </footer>
  );
}
