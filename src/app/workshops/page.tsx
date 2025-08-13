"use client";

import { AnimatedHeader } from "@/components/layout/AnimatedHeader";
import { Footer } from "@/components/layout/Footer";
import { Workshops } from "@/components/sections/Workshops";
import { UpcomingWorkshop } from "@/types/models";
import workshopsData from "@/data/workshops.json";

const upcomingWorkshops: UpcomingWorkshop[] = (
  workshopsData as { upcoming: UpcomingWorkshop[] }
).upcoming;

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen bg-white">
      <AnimatedHeader />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-yellow-500 mb-6">
            Workshops Profissionais
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Desenvolva suas habilidades com nossos workshops especializados em
            modelagem. Aprenda com profissionais experientes da 40grausbahia.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Certificado Profissional
            </span>
            <span className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Instrutores Experientes
            </span>
            <span className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Salvador, Bahia
            </span>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <Workshops />

      {/* Informações Adicionais */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Por que escolher nossos workshops?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Metodologia Comprovada
                    </h3>
                    <p className="text-gray-600">
                      Nossa metodologia já formou centenas de modelos
                      profissionais.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Networking Profissional
                    </h3>
                    <p className="text-gray-600">
                      Conecte-se com outros modelos e profissionais da área.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Suporte Pós-Workshop
                    </h3>
                    <p className="text-gray-600">
                      Acompanhamento e orientação após a conclusão do curso.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                Próximos Workshops
              </h3>
              <div className="space-y-4">
                {upcomingWorkshops.map((workshop) => {
                  const getStatusColor = (status: string) => {
                    switch (status) {
                      case "available":
                        return "bg-green-100 text-green-800";
                      case "limited":
                        return "bg-yellow-100 text-yellow-800";
                      case "almost-full":
                        return "bg-red-100 text-red-800";
                      default:
                        return "bg-gray-100 text-gray-800";
                    }
                  };

                  return (
                    <div
                      key={workshop.id}
                      className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
                    >
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {workshop.title}
                        </h4>
                        <p className="text-sm text-gray-600">{workshop.date}</p>
                      </div>
                      <span
                        className={`px-3 py-1 ${getStatusColor(
                          workshop.status
                        )} text-sm rounded-full`}
                      >
                        {workshop.available} vagas
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
