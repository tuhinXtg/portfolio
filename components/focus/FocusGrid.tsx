import { Server, Network, Database, Layers } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { focusAreas } from "@/data/skills";

const icons = [Server, Network, Database, Layers];

export function FocusGrid() {
  return (
    <section className="border-b border-border py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="02 / What I Focus On"
          title="Where I spend most of my energy"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={area.title}
                className="group rounded-lg border border-border bg-surface p-5 transition-colors hover:border-accent-border hover:bg-surface-hover"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border-strong text-accent transition-colors group-hover:border-accent-border">
                  <Icon size={18} />
                </div>
                <h3 className="mt-4 text-base font-medium text-foreground">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
