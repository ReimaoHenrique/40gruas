"use client";

import { AnimatedHeader } from "@/components/layout/AnimatedHeader";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ModelsGrid } from "@/components/sections/ModelsGrid";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Workshops } from "@/components/sections/Workshops";
import { TestimonialsMarquee } from "@/components/sections/TestimonialsMarquee";
import { PartnersMarquee } from "@/components/sections/PartnersMarquee";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <AnimatedHeader />
      <Hero />
      <div className="pt-16">
        <ModelsGrid />
        <About />
        <Services />
        <Workshops />
        <TestimonialsMarquee />
        <PartnersMarquee />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
