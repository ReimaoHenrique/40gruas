"use client";

import { motion } from "framer-motion";
import Image from "next/image";
interface Partner {
  id: number;
  name: string;
  logo: string;
  category: string;
  description: string;
}

const partners: Partner[] = [
  {
    id: 1,
    name: "Moda Bahia",
    logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=100&fit=crop",
    category: "Moda",
    description: "Loja de roupas e acessórios",
  },
  {
    id: 2,
    name: "Studio Clicks",
    logo: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200&h=100&fit=crop",
    category: "Fotografia",
    description: "Estúdio fotográfico profissional",
  },
  {
    id: 3,
    name: "Eventos Bahia",
    logo: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=200&h=100&fit=crop",
    category: "Eventos",
    description: "Organização de eventos corporativos",
  },
  {
    id: 4,
    name: "Fashion House",
    logo: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=200&h=100&fit=crop",
    category: "Moda",
    description: "Boutique de luxo",
  },
  {
    id: 5,
    name: "Canal Bahia",
    logo: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=200&h=100&fit=crop",
    category: "Mídia",
    description: "Canal de televisão local",
  },
  {
    id: 6,
    name: "Agência Digital",
    logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=100&fit=crop",
    category: "Marketing",
    description: "Agência de marketing digital",
  },
  {
    id: 7,
    name: "Beauty Salon",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
    category: "Beleza",
    description: "Salão de beleza e estética",
  },
  {
    id: 8,
    name: "Luxury Hotels",
    logo: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&h=100&fit=crop",
    category: "Hospedagem",
    description: "Rede de hotéis de luxo",
  },
];

export function PartnersMarquee() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-white mb-6">
            NOSSOS PARCEIROS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empresas que confiam na 40grausbahia para seus projetos de
            modelagem.
          </p>
        </motion.div>

        {/* Marquee de Parceiros */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={`${partner.id}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 mx-6"
              >
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  {/* Logo */}
                  <div className="w-48 h-24 mb-4 overflow-hidden rounded-lg">
                    <Image
                      width={150}
                      height={150}
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Informações */}
                  <div className="text-center">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">
                      {partner.name}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium mb-2">
                      {partner.category}
                    </span>
                    <p className="text-gray-600 text-sm">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Estatísticas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-gray-300">Parceiros Ativos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">200+</div>
            <div className="text-gray-300">Projetos Realizados</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-gray-300">Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">5+</div>
            <div className="text-gray-300">Anos de Experiência</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 mb-6">
            Quer se tornar nosso parceiro?
          </p>
          <button className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all duration-300 hover:scale-105 shadow-lg">
            FALAR CONOSCO
          </button>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 12.5s linear infinite;
        }
      `}</style>
    </section>
  );
}
