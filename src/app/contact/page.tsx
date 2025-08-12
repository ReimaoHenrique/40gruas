"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/sections/ContactForm";
import { ThankYouModal } from "@/components/sections/ThankYouModal";

export default function ContactPage() {
  const [showThankYou, setShowThankYou] = useState(false);

  const handleFormSubmit = () => {
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Estamos aqui para ajudar a realizar seu projeto. Entre em contato conosco e responderemos em até 15 minutos.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
                Solicite um Orçamento
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Preencha o formulário abaixo e entraremos em contato em até 15 minutos.
              </p>
              <ContactForm onSubmit={handleFormSubmit} />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
                Informações de Contato
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Endereço</h3>
                  <p className="text-gray-600">
                    Rua das Flores, 123<br />
                    Centro - São Paulo, SP<br />
                    CEP: 01234-567
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Telefone</h3>
                  <p className="text-gray-600">
                    (11) 99999-9999<br />
                    (11) 88888-8888
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Email</h3>
                  <p className="text-gray-600">
                    contato@luxmodels.com.br<br />
                    comercial@luxmodels.com.br
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Horário de Atendimento</h3>
                  <p className="text-gray-600">
                    Segunda a Sexta: 9h às 18h<br />
                    Sábado: 9h às 14h<br />
                    Domingo: Fechado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-12">
            Nossa Localização
          </h2>
          <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
            <div className="text-center">
              <span className="text-gray-500 text-lg">Mapa Interativo</span>
              <p className="text-gray-400 mt-2">Rua das Flores, 123 - Centro, São Paulo</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-12">
            Perguntas Frequentes
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Como funciona o processo de contratação?
              </h3>
              <p className="text-gray-600">
                Após o contato inicial, analisamos suas necessidades e apresentamos os modelos mais adequados para seu projeto.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Qual o prazo para resposta?
              </h3>
              <p className="text-gray-600">
                Respondemos todos os contatos em até 15 minutos durante o horário comercial.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Vocês atendem todo o Brasil?
              </h3>
              <p className="text-gray-600">
                Sim, atendemos projetos em todo o território nacional, com logística completa.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Como é feito o orçamento?
              </h3>
              <p className="text-gray-600">
                O orçamento é personalizado de acordo com o tipo de projeto, duração e modelo escolhido.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ThankYouModal 
        isOpen={showThankYou} 
        onClose={() => setShowThankYou(false)} 
      />

      <Footer />
    </div>
  );
}
