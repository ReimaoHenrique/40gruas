import { AnimatedHeader } from "@/components/layout/AnimatedHeader";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <AnimatedHeader />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-6">
            Sobre a 40grausbahia
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Conheça nossa história, missão e valores que nos tornam uma das agências mais respeitadas da Bahia.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                Nossa História
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                A 40grausbahia nasceu da paixão pela moda e pela arte da modelagem na Bahia. Desde nossa fundação, 
                temos nos dedicado a descobrir e desenvolver talentos excepcionais, conectando modelos 
                profissionais com as melhores oportunidades do mercado baiano.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Ao longo dos anos, construímos uma reputação sólida baseada na excelência, 
                profissionalismo e compromisso com nossos clientes e modelos da região.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg aspect-video flex items-center justify-center">
              <span className="text-gray-500">História da Agência</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg aspect-video flex items-center justify-center">
              <span className="text-gray-500">Nossa Missão</span>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                Nossa Missão
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Transformar sonhos em realidade através da modelagem profissional. 
                Nosso objetivo é proporcionar experiências únicas e memoráveis, 
                conectando talentos excepcionais com projetos extraordinários.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Acreditamos que cada modelo tem algo especial para oferecer, 
                e nossa missão é ajudar cada um a alcançar seu potencial máximo.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                Nossos Valores
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Excelência</h3>
                  <p className="text-gray-600">Buscamos sempre a perfeição em tudo que fazemos.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Profissionalismo</h3>
                  <p className="text-gray-600">Compromisso total com nossos clientes e modelos.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Inovação</h3>
                  <p className="text-gray-600">Sempre buscando novas formas de surpreender.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Confiança</h3>
                  <p className="text-gray-600">Construindo relacionamentos duradouros baseados na confiança.</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg aspect-video flex items-center justify-center">
              <span className="text-gray-500">Nossos Valores</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            Pronto para Trabalhar Conosco?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar a realizar seu projeto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary">
              Entre em Contato
            </Button>
            <Button href="/models" variant="outline">
              Ver Nossos Modelos
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
