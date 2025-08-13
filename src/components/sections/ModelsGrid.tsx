"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Model } from "@/types/models";
import modelsData from "@/data/models.json";

// Adicionar especialidades padrão para modelos que não as têm
const models: Model[] = modelsData.map((model) => ({
  ...model,
  category: model.category as "male" | "female",
  specialties: getDefaultSpecialties(model.category as "male" | "female"),
}));

function getDefaultSpecialties(category: "male" | "female"): string[] {
  if (category === "male") {
    return ["Fotografia", "Eventos", "Desfiles"];
  } else {
    return ["Fotografia", "Moda", "Editoriais"];
  }
}

export function ModelsGrid() {
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            NOSSOS ROSTOS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Só os melhores modelos e modelos em nossa agência de modelos.
          </p>
        </motion.div>

        {/* Models Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {models.map((model, index) => (
            <ModelCard key={model.id} model={model} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface ModelCardProps {
  model: Model;
  index: number;
}

function ModelCard({ model, index }: ModelCardProps) {
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

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="group cursor-pointer"
    >
      <Link
        href={`/models/${model.category === "male" ? "male" : "female"}/${
          model.id
        }`}
      >
        <div className="relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
          {/* Imagem */}
          <motion.div
            variants={imageVariants}
            className="relative aspect-[3/4] overflow-hidden"
          >
            <Image
              src={model.imagePerfil}
              alt={model.name}
              fill
              className="object-cover"
            />

            {/* Overlay com informações */}
            <motion.div
              variants={overlayVariants}
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4"
            >
              <motion.div variants={textVariants}>
                <h3 className="text-white font-bold text-xl mb-2">
                  {model.name}
                </h3>
                <p className="text-white/90 text-sm mb-3">
                  {model.description}
                </p>

                {/* Especialidades */}
                <div className="flex flex-wrap gap-2">
                  {model.specialties!.map((specialty, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                      className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full border border-white/30"
                    >
                      {specialty}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Indicador de categoria */}
          <div className="absolute top-3 right-3">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                model.category === "male"
                  ? "bg-blue-500 text-white"
                  : "bg-pink-500 text-white"
              }`}
            >
              {model.category === "male" ? "M" : "F"}
            </motion.div>
          </div>

          {/* Efeito de brilho */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </Link>
    </motion.div>
  );
}
