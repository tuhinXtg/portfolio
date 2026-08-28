import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { journey } from "@/data/journey";

export function JourneyTimeline() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Journey"
          title="Development Journey"
          description="Not a job history — a record of how I've been building up my skills, one project and one concept at a time."
        />

        <ol className="relative border-l border-border pl-8 sm:pl-10">
          {journey.map((milestone) => (
            <li key={milestone.title} className="mb-10 last:mb-0">
              <span
                className={
                  "absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full border-2 " +
                  (milestone.current
                    ? "border-accent bg-accent"
                    : "border-border-strong bg-background")
                }
                aria-hidden
              />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-xs uppercase tracking-wide text-accent">
                  {milestone.date}
                </span>
                <h3 className="text-base font-medium text-foreground">
                  {milestone.title}
                </h3>
                {milestone.current && (
                  <span className="rounded-full border border-accent-border bg-accent-dim px-2 py-0.5 font-mono text-[10px] uppercase text-accent">
                    Current
                  </span>
                )}
              </div>
              <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted">
                {milestone.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
