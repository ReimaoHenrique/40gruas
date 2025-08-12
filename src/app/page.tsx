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
    <>
      <main className="min-h-screen bg-white">
        <AnimatedHeader />
        <Hero />
        <div className="pt-16">
          <section aria-label="Nossos Modelos">
            <ModelsGrid />
          </section>
          <section aria-label="Sobre Nós">
            <About />
          </section>
          <section aria-label="Nossos Serviços">
            <Services />
          </section>
          <section aria-label="Workshops e Treinamentos">
            <Workshops />
          </section>
          <section aria-label="Depoimentos de Clientes">
            <TestimonialsMarquee />
          </section>
          <section aria-label="Nossos Parceiros">
            <PartnersMarquee />
          </section>
          <section aria-label="Entre em Contato">
            <Contact />
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}
