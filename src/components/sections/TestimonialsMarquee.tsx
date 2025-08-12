"use client";

import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ana Silva",
    role: "Diretora de Marketing",
    company: "Moda Bahia",
    text: "Excelente trabalho! Os modelos da 40grausbahia são profissionais e entregam resultados incríveis.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "Fotógrafo",
    company: "Studio Clicks",
    text: "Trabalhar com a 40grausbahia é sempre uma experiência incrível. Modelos talentosos e dedicados.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    id: 3,
    name: "Maria Santos",
    role: "Produtora de Eventos",
    company: "Eventos Bahia",
    text: "Profissionalismo e qualidade em todos os projetos. Recomendo fortemente!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    id: 4,
    name: "João Oliveira",
    role: "Diretor Criativo",
    company: "Agência Digital",
    text: "Os modelos da 40grausbahia elevam qualquer campanha ao próximo nível.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    id: 5,
    name: "Fernanda Costa",
    role: "Stylist",
    company: "Fashion House",
    text: "Qualidade excepcional e versatilidade. Perfeito para qualquer tipo de projeto.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    id: 6,
    name: "Roberto Lima",
    role: "Produtor de TV",
    company: "Canal Bahia",
    text: "Profissionais de primeira linha. Sempre entregam além das expectativas.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5
  }
];

export function TestimonialsMarquee() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            O QUE DIZEM SOBRE NÓS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Depoimentos de clientes que confiaram na 40grausbahia para seus projetos.
          </p>
        </motion.div>

        {/* Marquee de Depoimentos */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-80 mx-4"
              >
                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  {/* Avatar e Informações */}
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-xs text-primary font-medium">{testimonial.company}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Depoimento */}
                  <p className="text-gray-700 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {testimonials.slice(0, 3).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-3 h-3 bg-primary rounded-full"
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </section>
  );
}
