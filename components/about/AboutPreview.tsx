import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutCopy } from "@/data/personal";

export function AboutPreview() {
  return (
    <section className="border-b border-border py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <SectionHeading eyebrow="01 / About" title="A bit about how I work" />
          <p className="max-w-xl text-base leading-relaxed text-muted">
            {aboutCopy.paragraphs[0]} {aboutCopy.paragraphs[1]}
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-strong"
          >
            Read the full story
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {aboutCopy.facts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-lg border border-border bg-surface p-4"
            >
              <p className="font-mono text-[11px] uppercase tracking-wide text-subtle">
                {fact.label}
              </p>
              <p className="mt-1 text-sm text-foreground">{fact.value}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
