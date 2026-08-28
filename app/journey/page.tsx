import type { Metadata } from "next";
import { JourneyTimeline } from "@/components/journey/JourneyTimeline";

export const metadata: Metadata = {
  title: "Journey",
  description: "A timeline of how I've been building my development skills.",
};

export default function JourneyPage() {
  return <JourneyTimeline />;
}
