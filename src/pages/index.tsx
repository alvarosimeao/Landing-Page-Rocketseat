import { FeatureSection } from "@/Components/feature-section/feature-section";
import { HeroSection } from "@/Components/hero-section";

export default function Home() {
  return (
    <>
      <article className="flex flex-col">
      <HeroSection/>
      <FeatureSection/>
      </article>
    </>
  );
}
