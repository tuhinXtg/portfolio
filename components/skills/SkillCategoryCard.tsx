import { skillCategories } from "@/data/skills";
import { Badge } from "@/components/ui/Badge";

export function SkillCategoryCard({
  category,
}: {
  category: (typeof skillCategories)[number];
}) {
  return (
    <div className="rounded-lg border border-border bg-surface p-6">
      <h3 className="text-base font-medium text-foreground">
        {category.title}
      </h3>
      <p className="mt-1.5 text-sm text-muted">{category.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <Badge key={skill.name}>{skill.name}</Badge>
        ))}
      </div>
    </div>
  );
}
