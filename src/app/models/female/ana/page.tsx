import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ana - Modelo Feminina Profissional",
  description:
    "Ana é uma modelo feminina experiente especializada em fotografia de moda, desfiles e campanhas publicitárias. Altura 1,70m, medidas perfeitas para alta costura.",
  keywords: [
    "modelo feminina Ana",
    "modelo para fotografia",
    "modelo para desfiles",
    "modelo São Paulo",
    "casting de modelos",
  ],
  openGraph: {
    title: "Ana - Modelo Feminina Profissional | Lux Models",
    description:
      "Ana é uma modelo feminina experiente especializada em fotografia de moda, desfiles e campanhas publicitárias.",
    url: "https://luxmodels.com.br/models/female/ana",
    images: [
      {
        url: "/model-placeholder.svg",
        width: 800,
        height: 1200,
        alt: "Ana - Modelo Feminina Profissional",
      },
    ],
  },
};

export default function AnaPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section
          className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white"
          aria-label="Perfil da Modelo Ana"
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-6">
                  Ana
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Modelo feminina experiente em fotografia de moda e desfiles.
                  Especialista em criar poses elegantes e expressões naturais.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors duration-300 text-center"
                    aria-label="Solicitar orçamento para Ana"
                  >
                    Solicitar Orçamento
                  </Link>
                  <Link
                    href="/models"
                    className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-colors duration-300 text-center"
                    aria-label="Ver outros modelos"
                  >
                    Ver Outros Modelos
                  </Link>
                </div>
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Foto da Ana</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section
          className="py-16 bg-white"
          aria-label="Especificações e Experiência"
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Specifications */}
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
                  Especificações
                </h2>
                <dl className="space-y-6">
                  <div>
                    <dt className="text-lg font-semibold text-gray-900 mb-2">
                      Altura
                    </dt>
                    <dd className="text-gray-600">1,70m</dd>
                  </div>
                  <div>
                    <dt className="text-lg font-semibold text-gray-900 mb-2">
                      Peso
                    </dt>
                    <dd className="text-gray-600">55kg</dd>
                  </div>
                  <div>
                    <dt className="text-lg font-semibold text-gray-900 mb-2">
                      Tamanho
                    </dt>
                    <dd className="text-gray-600">P</dd>
                  </div>
                  <div>
                    <dt className="text-lg font-semibold text-gray-900 mb-2">
                      Calçado
                    </dt>
                    <dd className="text-gray-600">37</dd>
                  </div>
                  <div>
                    <dt className="text-lg font-semibold text-gray-900 mb-2">
                      Cabelo
                    </dt>
                    <dd className="text-gray-600">Loiro</dd>
                  </div>
                  <div>
                    <dt className="text-lg font-semibold text-gray-900 mb-2">
                      Olhos
                    </dt>
                    <dd className="text-gray-600">Azuis</dd>
                  </div>
                </dl>
              </div>

              {/* Experience */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
                  Experiência e Especialidades
                </h2>
                <div className="space-y-8">
                  <article>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Fotografia
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Ana possui vasta experiência em sessões fotográficas,
                      incluindo:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Fotografia de moda e editorial</li>
                      <li>Campanhas publicitárias</li>
                      <li>Fotografia comercial</li>
                      <li>Retratos profissionais</li>
                    </ul>
                  </article>

                  <article>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Desfiles
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Experiência em desfiles de moda e eventos:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Desfiles de alta costura</li>
                      <li>Shows de moda</li>
                      <li>Apresentações de marcas</li>
                      <li>Eventos corporativos</li>
                    </ul>
                  </article>

                  <article>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Posando
                    </h3>
                    <p className="text-gray-600">
                      Ana é especialista em criar poses naturais e elegantes,
                      adaptando-se rapidamente ao estilo e conceito de cada
                      projeto.
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-16 bg-gray-50" aria-label="Portfólio de Fotos">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-12">
              Portfólio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center"
                >
                  <span className="text-gray-500">Foto {item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
