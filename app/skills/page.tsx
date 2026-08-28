import type { Metadata } from "next";
import { SkillsSection } from "@/components/skills/SkillsSection";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Frontend, backend, database, and tooling skills — organized by category, not scored with fake percentages.",
};

export default function SkillsPage() {
  return <SkillsSection />;
}
