import { AnimatedHeader } from "@/components/layout/AnimatedHeader";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

export default function PedroPage() {
  return (
    <div className="min-h-screen bg-white">
      <AnimatedHeader />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-6">
                Pedro
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Especialista em desfiles e campanhas publicitárias. 
                Modelo versátil com presença marcante e estilo único.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" variant="primary">
                  Solicitar Orçamento
                </Button>
                <Button href="/models" variant="outline">
                  Ver Outros Modelos
                </Button>
              </div>
            </div>
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src="/model-placeholder.svg"
                alt="Pedro"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Specifications */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
                Especificações
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Altura</h3>
                  <p className="text-gray-600">1,88m</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Peso</h3>
                  <p className="text-gray-600">82kg</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Tamanho</h3>
                  <p className="text-gray-600">L</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Calçado</h3>
                  <p className="text-gray-600">43</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Cabelo</h3>
                  <p className="text-gray-600">Preto</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Olhos</h3>
                  <p className="text-gray-600">Verdes</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
                Experiência e Especialidades
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Desfiles</h3>
                  <p className="text-gray-600 mb-4">
                    Pedro é especialista em desfiles de moda e apresentações:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Desfiles de alta costura</li>
                    <li>Shows de moda masculina</li>
                    <li>Apresentações de coleções</li>
                    <li>Eventos fashion internacionais</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Campanhas Publicitárias</h3>
                  <p className="text-gray-600 mb-4">
                    Experiência sólida em campanhas publicitárias:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Campanhas de moda</li>
                    <li>Publicidade de produtos</li>
                    <li>Editoriais de revistas</li>
                    <li>Comerciais de TV</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Fotografia</h3>
                  <p className="text-gray-600 mb-4">
                    Vasta experiência em fotografia profissional:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Fotografia editorial</li>
                    <li>Retratos artísticos</li>
                    <li>Fotografia de moda</li>
                    <li>Sessões comerciais</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-12">
            Portfólio
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="aspect-[3/4] bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Foto {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            Interessado em Trabalhar com Pedro?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para solicitar um orçamento personalizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary">
              Solicitar Orçamento
            </Button>
            <Button href="/models" variant="outline">
              Ver Outros Modelos
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
