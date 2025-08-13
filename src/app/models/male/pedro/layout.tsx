import { Metadata } from "next";
import modelsData from "@/data/models.json";

export async function generateMetadata(): Promise<Metadata> {
  // Busca os dados do Pedro no JSON
  const pedroData = modelsData.find((model) => model.id === "pedro");

  if (!pedroData) {
    return {
      title: "Modelo não encontrado",
      description: "Não foi possível carregar as informações do modelo.",
    };
  }

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://40grausbahia.vercel.app";
  const imageUrl = `${baseUrl}${pedroData.imagePerfil}`;

  return {
    title: `${pedroData.name} - Modelo Masculino | 40 Graus`,
    description: pedroData.description,
    keywords: [
      "modelo masculino",
      "desfiles",
      "campanhas publicitárias",
      "fotografia de moda",
      "modelo Pedro",
      "40 graus",
      "agência de modelos",
    ],
    authors: [{ name: "40 Graus" }],
    creator: "40 Graus",
    publisher: "40 Graus",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/models/male/pedro`,
    },
    openGraph: {
      title: `${pedroData.name} - Modelo Masculino | 40 Graus`,
      description: pedroData.description,
      url: `${baseUrl}/models/male/pedro`,
      siteName: "40 Graus",
      images: [
        {
          url: imageUrl,
          width: 400,
          height: 500,
          alt: `${pedroData.name} - Modelo Masculino`,
        },
        ...pedroData.imageBook.slice(0, 3).map((image, index) => ({
          url: `${baseUrl}${image}`,
          width: 400,
          height: 500,
          alt: `${pedroData.name} - Foto ${index + 1}`,
        })),
      ],
      locale: "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${pedroData.name} - Modelo Masculino | 40 Graus`,
      description: pedroData.description,
      images: [imageUrl],
      creator: "@40graus",
      site: "@40graus",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code",
      yandex: "your-yandex-verification-code",
      yahoo: "your-yahoo-verification-code",
    },
    category: "modeling",
    classification: "business",
    other: {
      "model-height": "1,88m",
      "model-weight": "82kg",
      "model-size": "L",
      "model-shoes": "43",
      "model-hair": "Preto",
      "model-eyes": "Verdes",
      "model-specialties": "Desfiles, Campanhas Publicitárias, Fotografia",
    },
  };
}

export default function PedroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
