import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutCopy, dsaAchievement, personal } from "@/data/personal";
import { currentlyLearning } from "@/data/skills";
import { Award, Download } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function AboutFull() {
  return (
    <>
      <section className="border-b border-border py-20 md:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-xl border border-border-strong">
              <Image
                src={personal.profileImage}
                alt={`Portrait of ${personal.name}`}
                fill
                sizes="(min-width: 1024px) 320px, 60vw"
                className="object-cover object-top"
                priority
              />
            </div>

            <div className="mt-6 rounded-lg border border-accent-border bg-accent-dim p-4">
              <div className="flex items-center gap-2 text-accent">
                <Award size={16} />
                <p className="font-mono text-xs uppercase tracking-wide">
                  Achievement
                </p>
              </div>
              <p className="mt-2 text-sm font-medium text-foreground">
                {dsaAchievement.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {dsaAchievement.description}
              </p>
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="About" title="Building my way into software engineering" />
            <div className="space-y-4">
              {aboutCopy.paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
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

            <div className="mt-8">
              <Button href={personal.resumePath} variant="secondary" external>
                <Download size={16} /> Download Resume
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Currently Improving"
            title="What I'm actively developing"
            description="Areas I'm deliberately building depth in right now, as I move toward production-grade backend engineering."
          />
          <div className="flex flex-wrap gap-2.5">
            {currentlyLearning.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border-strong bg-surface px-4 py-2 text-sm text-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
