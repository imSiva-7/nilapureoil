// app/page.tsx
import { Hero } from "@/components/sections/Hero";
import { Values } from "@/components/sections/Values";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { StorySection } from "@/components/sections/StorySection";
import { CtaBand } from "@/components/sections/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Values />
      <FeaturedProducts />
      <StorySection />
      <CtaBand />
    </>
  );
}