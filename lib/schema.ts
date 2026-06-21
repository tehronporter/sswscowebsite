export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://sswsco.com",
  name: "Silver State Waste Solutions",
  description:
    "Reliable dumpster rental and waste solutions for homeowners, contractors, and businesses across Las Vegas, North Las Vegas, and Henderson, NV.",
  url: "https://sswsco.com",
  telephone: "+17024600726",
  email: "info@sswsco.com",
  priceRange: "$$",
  image: "https://sswsco.com/images/logo.png",
  logo: "https://sswsco.com/images/logo.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Las Vegas" },
    { "@type": "City", name: "North Las Vegas" },
    { "@type": "City", name: "Henderson" },
    { "@type": "Place", name: "Summerlin" },
    { "@type": "Place", name: "Spring Valley" },
    { "@type": "Place", name: "Enterprise" },
    { "@type": "Place", name: "Whitney" },
    { "@type": "Place", name: "Paradise" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Dumpster Rental Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "15 Yard Dumpster Rental" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lowboy Dumpster Rental" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "40 Yard Dumpster Rental" } },
    ],
  },
};
