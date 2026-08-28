import type { Metadata } from "next";
import { AboutFull } from "@/components/about/AboutFull";

export const metadata: Metadata = {
  title: "About",
  description:
    "Computer Science student at IUB developing full-stack and backend engineering skills through project-based learning.",
};

export default function AboutPage() {
  return <AboutFull />;
}
