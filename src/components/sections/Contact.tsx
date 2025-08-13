"use client";

import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-12">
          PRECISA DE NOSSOS SERVIÇOS?
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Deixe seu número de telefone e entraremos em contato em 15 minutos.
        </p>

        <div className="max-w-md mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
