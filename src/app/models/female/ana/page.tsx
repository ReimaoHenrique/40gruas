import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export default function AnaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-6">
                Ana
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Modelo feminina versátil para diversos tipos de projeto.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-pink-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Fotografia</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-pink-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Eventos</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-pink-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Moda</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all duration-300 hover:scale-105 shadow-lg"
              >
                CONTRATAR ANA
              </Link>
            </div>
            <div className="bg-gradient-to-br from-pink-200 to-pink-300 rounded-lg aspect-square flex items-center justify-center">
              <span className="text-pink-600 text-lg">Foto da Ana</span>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-12">
            PORTFÓLIO
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center">
                <span className="text-gray-500">Foto {item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
            Gostou do trabalho da Ana?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Entre em contato conosco para contratar seus serviços.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all duration-300"
            >
              FALAR CONOSCO
            </Link>
            <Link
              href="/models/female"
              className="px-8 py-4 bg-white text-primary font-bold rounded-full border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              VER OUTRAS MODELOS
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
