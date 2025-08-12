"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Workshop } from "@/types/models";
import workshopsData from "@/data/workshops.json";

const workshops: Workshop[] = (workshopsData as any).workshops;

const categories = [
  { id: "todos", name: "Todos", color: "bg-gray-500" },
  { id: "fotografia", name: "Fotografia", color: "bg-gray-500" },
  { id: "desfile", name: "Desfile", color: "bg-gray-500" },
  { id: "posando", name: "Posando", color: "bg-gray-500" },
];

const levels = [
  { id: "todos", name: "Todos", color: "bg-gray-500" },
  { id: "iniciante", name: "Iniciante", color: "bg-green-500" },
  { id: "intermediario", name: "Intermediário", color: "bg-yellow-500" },
  { id: "avancado", name: "Avançado", color: "bg-red-500" },
];

export function Workshops() {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [selectedLevel, setSelectedLevel] = useState("todos");
  const [filteredWorkshops, setFilteredWorkshops] = useState(workshops);

  useEffect(() => {
    let filtered = workshops;

    if (selectedCategory !== "todos") {
      filtered = filtered.filter(
        (workshop) => workshop.category === selectedCategory
      );
    }

    if (selectedLevel !== "todos") {
      filtered = filtered.filter(
        (workshop) => workshop.level === selectedLevel
      );
    }

    setFilteredWorkshops(filtered);
  }, [selectedCategory, selectedLevel]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-yellow-500 mb-6">
            WORKSHOPS PROFISSIONAIS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Desenvolva suas habilidades com nossos workshops especializados em
            modelagem. Aprenda com profissionais experientes da 40grausbahia.
          </p>

          {/* Filtros */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex flex-wrap justify-center gap-2">
                <span className="text-sm font-semibold text-white mr-2">
                  Categoria:
                </span>
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium text-white transition-all duration-200 ${
                      selectedCategory === category.id
                        ? `${category.color} shadow-lg`
                        : "bg-gray-600 hover:bg-gray-500 text-white"
                    }`}
                  >
                    {category.name}
                  </motion.button>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                <span className="text-sm font-semibold text-white mr-2">
                  Nível:
                </span>
                {levels.map((level) => (
                  <motion.button
                    key={level.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedLevel(level.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium text-white transition-all duration-200 ${
                      selectedLevel === level.id
                        ? `${level.color} shadow-lg`
                        : "bg-gray-600 hover:bg-gray-500 text-white"
                    }`}
                  >
                    {level.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Workshops Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredWorkshops.map((workshop) => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 mb-6">
            Não encontrou o workshop ideal? Entre em contato conosco!
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all duration-300 hover:scale-105 shadow-lg"
          >
            FALE CONOSCO
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

interface WorkshopCardProps {
  workshop: Workshop;
  index?: number;
}

function WorkshopCard({ workshop, index }: WorkshopCardProps) {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
  };

  const getCategoryColor = (category: string) => {
    const categoryMap = {
      fotografia: "bg-gray-600",
      desfile: "bg-gray-600",
      posando: "bg-gray-600",
      maquiagem: "bg-gray-600",
      estilo: "bg-gray-600",
    };
    return categoryMap[category as keyof typeof categoryMap] || "bg-gray-600";
  };

  const getLevelColor = (level: string) => {
    const levelMap = {
      iniciante: "bg-gray-500",
      intermediario: "bg-gray-600",
      avancado: "bg-gray-700",
    };
    return levelMap[level as keyof typeof levelMap] || "bg-gray-600";
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="group cursor-pointer"
    >
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
        {/* Imagem */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={workshop.image}
            alt={workshop.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Overlay com informações */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold text-white ${getCategoryColor(
                workshop.category
              )}`}
            >
              {workshop.category.charAt(0).toUpperCase() +
                workshop.category.slice(1)}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold text-white ${getLevelColor(
                workshop.level
              )}`}
            >
              {workshop.level.charAt(0).toUpperCase() + workshop.level.slice(1)}
            </span>
          </div>

          {/* Vagas disponíveis */}
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-green-500">
              {workshop.available} vagas
            </span>
          </div>

          {/* Preço */}
          <div className="absolute bottom-3 right-3">
            <span className="px-4 py-2 rounded-full text-lg font-bold text-white bg-primary">
              {workshop.price}
            </span>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
            {workshop.title}
          </h3>

          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {workshop.description}
          </p>

          {/* Informações do workshop */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-500">
              <svg
                className="w-4 h-4 mr-2"
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
              {workshop.instructor}
            </div>

            <div className="flex items-center text-sm text-gray-500">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {workshop.date} • {workshop.duration}
            </div>

            <div className="flex items-center text-sm text-gray-500">
              <svg
                className="w-4 h-4 mr-2"
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
              {workshop.location}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {workshop.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Botão de inscrição */}
          <button className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-300 group-hover:shadow-lg">
            INSCREVER-SE
          </button>
        </div>
      </div>
    </motion.div>
  );
}
