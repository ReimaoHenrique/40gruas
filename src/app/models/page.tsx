import { AnimatedHeader } from "@/components/layout/AnimatedHeader";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

interface Model {
  id: string;
  name: string;
  category: "male" | "female";
  image: string;
  description: string;
}

const models: Model[] = [
  {
    id: "henrique",
    name: "Henrique",
    category: "male",
    image: "/model-placeholder.svg",
    description: "Modelo masculino experiente em fotografia e eventos.",
  },
  {
    id: "pedro",
    name: "Pedro",
    category: "male",
    image: "/model-placeholder.svg",
    description: "Especialista em desfiles e campanhas publicitárias.",
  },
  {
    id: "ana",
    name: "Ana",
    category: "female",
    image: "/model-placeholder.svg",
    description: "Modelo feminina versátil para diversos tipos de projeto.",
  },
  {
    id: "maria",
    name: "Maria",
    category: "female",
    image: "/model-placeholder.svg",
    description: "Especialista em fotografia de moda e editoriais.",
  },
  {
    id: "carlos",
    name: "Carlos",
    category: "male",
    image: "/model-placeholder.svg",
    description: "Modelo masculino para eventos corporativos.",
  },
  {
    id: "julia",
    name: "Júlia",
    category: "female",
    image: "/model-placeholder.svg",
    description: "Modelo feminina para desfiles e apresentações.",
  },
];

export default function ModelsPage() {
  const maleModels = models.filter((model) => model.category === "male");
  const femaleModels = models.filter((model) => model.category === "female");

  return (
    <div className="min-h-screen bg-white">
      <AnimatedHeader />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-6">
            Nossos Modelos
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Conheça nossos talentos profissionais, prontos para dar vida aos
            seus projetos.
          </p>
        </div>
      </section>

      {/* Male Models */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-12">
            MODELOS MASCULINOS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {maleModels.map((model) => (
              <ModelCard key={model.id} model={model} category="male" />
            ))}
          </div>
        </div>
      </section>

      {/* Female Models */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-12">
            MODELOS FEMININAS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {femaleModels.map((model) => (
              <ModelCard key={model.id} model={model} category="female" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            Interessado em Nossos Serviços?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para solicitar um orçamento personalizado.
          </p>
          <Button href="/contact" variant="primary">
            Solicitar Orçamento
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ModelCard({
  model,
  category,
}: {
  model: Model;
  category: "male" | "female";
}) {
  return (
    <Link href={`/models/${category}/${model.id}`} className="group">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={model.image}
            alt={model.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-semibold">Ver Perfil</span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {model.name}
          </h3>
          <p className="text-gray-600">{model.description}</p>
        </div>
      </div>
    </Link>
  );
}
