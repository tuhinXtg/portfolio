import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";
import { SkillCategoryCard } from "@/components/skills/SkillCategoryCard";

export function SkillsSection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="Grouped by where they sit in an application — not ranked, not scored. Depth varies by category and grows with each project."
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {skillCategories.map((category) => (
            <SkillCategoryCard key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}
