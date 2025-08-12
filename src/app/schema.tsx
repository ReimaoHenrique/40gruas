export default function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lux Models",
    alternateName: "40grausbahia",
    description:
      "A agência de modelos mais confiável do Brasil. Oferecemos modelos profissionais para fotografia, desfiles, eventos e campanhas publicitárias.",
    url: "https://luxmodels.com.br",
    logo: "https://luxmodels.com.br/40graus_Logo.jpg",
    image: "https://luxmodels.com.br/40graus_Logo.jpg",
    sameAs: [
      "https://www.instagram.com/luxmodels",
      "https://www.facebook.com/luxmodels",
      "https://www.linkedin.com/company/luxmodels",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55-11-99999-9999",
      contactType: "customer service",
      areaServed: "BR",
      availableLanguage: "Portuguese",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua das Flores, 123",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      postalCode: "01234-567",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -23.5505,
      longitude: -46.6333,
    },
    openingHours: "Mo-Fr 09:00-18:00, Sa 09:00-14:00",
    priceRange: "$$",
    currenciesAccepted: "BRL",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    areaServed: {
      "@type": "Country",
      name: "Brazil",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de Modelos",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Modelos para Fotografia",
            description: "Modelos profissionais para sessões fotográficas",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Modelos para Desfiles",
            description: "Modelos para desfiles de moda e eventos",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Modelos para Campanhas",
            description: "Modelos para campanhas publicitárias",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
