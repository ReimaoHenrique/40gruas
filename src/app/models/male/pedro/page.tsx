import { Button } from "@/components";
import { PixelImage } from "@/components/magicui/pixel-image";
import { Model } from "@/types/models";
import modelsData from "@/data/models.json";
import Image from "next/image";

export default function PedroPage() {
  // Busca os dados do Pedro no JSON
  const pedroData = modelsData.find((model) => model.id === "pedro") as
    | Model
    | undefined;

  // Se não encontrar os dados, mostra uma mensagem de erro
  if (!pedroData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Modelo não encontrado
          </h1>
          <p className="text-gray-600 mb-6">
            Não foi possível carregar as informações do modelo.
          </p>
          <Button href="/models" variant="primary">
            Voltar aos Modelos
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-6">
                {pedroData.name}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {pedroData.description}
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
            <div className="flex justify-center items-center">
              <div className="w-80 h-96">
                <PixelImage
                  src={pedroData.imagePerfil}
                  grid="8x8"
                  grayscaleAnimation={true}
                  pixelFadeInDuration={800}
                  maxAnimationDelay={1500}
                  colorRevealDelay={2000}
                />
              </div>
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Altura
                  </h3>
                  <p className="text-gray-600">1,88m</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Peso
                  </h3>
                  <p className="text-gray-600">82kg</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Tamanho
                  </h3>
                  <p className="text-gray-600">L</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Calçado
                  </h3>
                  <p className="text-gray-600">43</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Cabelo
                  </h3>
                  <p className="text-gray-600">Preto</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Olhos
                  </h3>
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Desfiles
                  </h3>
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Campanhas Publicitárias
                  </h3>
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Fotografia
                  </h3>
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
            Book de Fotos
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {pedroData.imageBook.map((image, index) => (
              <div
                key={index}
                className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={image}
                  alt={`${pedroData.name} - Foto ${index + 1}`}
                  width={300}
                  height={400}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            Interessado em Trabalhar com {pedroData.name}?
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
    </div>
  );
}
