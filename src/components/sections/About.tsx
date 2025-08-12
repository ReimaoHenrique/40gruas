import { Button } from "../ui/Button";

export function About() {
  return (
    <section id="about" className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
                         <h2 className="text-4xl font-serif font-bold text-yellow-500 mb-6">
               SOBRE NÓS
             </h2>
            <p className="text-lg text-gray-600 mb-6">
              A 40grausbahia é uma das agências de modelos mais confiáveis da
              Bahia.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Fornecemos aos nossos clientes os melhores modelos e modelos que
              têm habilidades suficientes para implementar qualquer uma de suas
              ideias e participar de qualquer projeto na região.
            </p>
            <Button href="/models" variant="glass">
              Ver Modelos
            </Button>
          </div>
          <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg aspect-video flex items-center justify-center">
            <span className="text-gray-500">Imagem da Agência</span>
          </div>
        </div>
      </div>
    </section>
  );
}
