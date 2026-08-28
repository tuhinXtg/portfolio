import { Hero } from "@/components/hero/Hero";
import { AboutPreview } from "@/components/about/AboutPreview";
import { FocusGrid } from "@/components/focus/FocusGrid";
import { HomeCta } from "@/components/home/HomeCta";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FocusGrid />
      <HomeCta />
    </>
  );
}
