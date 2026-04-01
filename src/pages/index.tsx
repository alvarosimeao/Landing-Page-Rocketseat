import { CallToAction } from "@/Components/call-to-action";
import { CustomerStorySection } from "@/Components/customer-story-section";
import { FeatureSection } from "@/Components/feature-section/feature-section";
import { HeroSection } from "@/Components/hero-section";
import { SupportSection } from "@/Components/support-section";

export default function Home() {
  return (
    <>
      <article className="flex flex-col">
      <HeroSection/>
      <FeatureSection/>
      <SupportSection/>
      <CustomerStorySection/>
      <CallToAction/>
      </article>
    </>
  );
}
