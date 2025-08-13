import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Analytics from "./analytics";
import Schema from "./schema";
import { AnimatedHeader } from "@/components/layout/AnimatedHeader";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://40graus.com.br"),
  title: {
    default: "40 Graus Bahia - Agência de Modelos Premium no Brasil",
    template: "%s | 40 Graus Bahia",
  },
  description:
    "A agência de modelos mais confiável do Brasil. Oferecemos modelos profissionais para fotografia, desfiles, eventos e campanhas publicitárias. Contrate modelos experientes para seu projeto.",
  keywords: [
    "agência de modelos",
    "modelos profissionais",
    "modelos para fotografia",
    "modelos para desfiles",
    "modelos para eventos",
    "modelos masculinos",
    "modelos femininos",
    "agência de modelos Bahia",
    "modelos para campanhas",
    "casting de modelos",
  ],
  authors: [{ name: "40 Graus Bahia" }],
  creator: "40 Graus Bahia",
  publisher: "40 Graus Bahia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://40graus.com.br",
    siteName: "40 Graus Bahia",
    title: "40 Graus Bahia - Agência de Modelos Premium no Brasil",
    description:
      "A agência de modelos mais confiável do Brasil. Oferecemos modelos profissionais para fotografia, desfiles, eventos e campanhas publicitárias.",
    images: [
      {
        url: "/40graus_Logo.jpg",
        width: 1200,
        height: 630,
        alt: "40 Graus Bahia - Agência de Modelos Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "40 Graus Bahia - Agência de Modelos Premium no Brasil",
    description:
      "A agência de modelos mais confiável do Brasil. Oferecemos modelos profissionais para fotografia, desfiles, eventos e campanhas publicitárias.",
    images: ["/40graus_Logo.jpg"],
    creator: "@40grausbahia",
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
    google: "seu-codigo-google-verification",
    yandex: "seu-codigo-yandex",
    yahoo: "seu-codigo-yahoo",
  },
  alternates: {
    canonical: "https://luxmodels.com.br",
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#D4AF37" />
        <meta name="msapplication-TileColor" content="#D4AF37" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <Schema />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <AnimatedHeader />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
