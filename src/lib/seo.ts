import type { Motorhome } from "@/data/motorhomes";
import { site } from "@/lib/site";
import { withBasePath } from "@/lib/paths";

const siteOrigin = "https://moonhus.github.io";

export function absoluteUrl(path = "/") {
  const normalised = path.startsWith("/") ? path : `/${path}`;
  return `${siteOrigin}${withBasePath(normalised)}`;
}

export function listingPath(slug: string) {
  return `/inventory/${slug}/`;
}

export function listingHeadline(van: Motorhome) {
  return `${van.year} ${van.brand} ${van.model} motorhome for sale`;
}

export const siteFaqs = [
  {
    question: "Where are these used motorhomes for sale?",
    answer:
      "Every van listed sits at our Bennetts Green, NSW yard. Commercial Motorhomes is the Brisbane-facing site of Australian Motor Homes Pty Ltd. We quote delivery into Brisbane, Queensland and the rest of Australia.",
  },
  {
    question: "Are the prices drive away?",
    answer:
      "Yes. Listed prices are in AUD, drive away, unless a listing says otherwise. Send your email and mobile and we confirm the van, kilometres and a delivery quote.",
  },
  {
    question: "What licence do I need to drive a motorhome in Australia?",
    answer:
      "Car-licence vans sit at or under 4.5 tonne GVM. Light Rigid (LR) vans sit above that. Each listing shows the licence, GVM, berths and chassis so you can match the van to your licence before you enquire.",
  },
  {
    question: "How do I enquire about a motorhome?",
    answer:
      "Open the listing you want and send your name, email and mobile number for SMS. We reply with the van, the drive-away price and delivery into Brisbane or your state. No yard visit is required to start.",
  },
] as const;

export function dealerJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    email: site.email,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "31 Pacific Hwy",
      addressLocality: "Bennetts Green",
      addressRegion: "NSW",
      postalCode: "2290",
      addressCountry: "AU",
    },
    areaServed: ["Brisbane", "Queensland", "Australia"],
    brand: ["Avida", "Sunliner", "Avan", "KEA"],
  };
}

export function faqJsonLd(faqs: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function vehicleJsonLd(van: Motorhome) {
  return {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: listingHeadline(van),
    brand: van.brand,
    model: van.model,
    vehicleModelDate: String(van.year),
    mileageFromOdometer: {
      "@type": "QuantitativeValue",
      value: van.kilometres,
      unitCode: "KMT",
    },
    vehicleEngine: van.engine,
    vehicleTransmission: van.transmission,
    fuelType: van.fuel,
    seatingCapacity: van.seatbelts,
    description: van.summary,
    image: van.gallery.map((src) => absoluteUrl(src)),
    sku: van.stockNumber,
    offers: {
      "@type": "Offer",
      url: absoluteUrl(listingPath(van.slug)),
      priceCurrency: "AUD",
      price: van.price,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/UsedCondition",
      seller: {
        "@type": "AutoDealer",
        name: site.name,
      },
    },
  };
}

export function listingFaqs(van: Motorhome) {
  return [
    {
      question: `What licence do I need for the ${van.year} ${van.brand} ${van.model}?`,
      answer:
        van.licence === "Car"
          ? `This used motorhome is ${van.gvmKg.toLocaleString("en-AU")} kg GVM, so it can be driven on a standard Australian car licence.`
          : `This used motorhome is ${van.gvmKg.toLocaleString("en-AU")} kg GVM and needs a Light Rigid (LR) truck licence.`,
    },
    {
      question: `Can you deliver this ${van.brand} motorhome to Brisbane?`,
      answer: `Yes. Stock ${van.stockNumber} is at Bennetts Green, NSW. Send your email and mobile and we quote delivery into Brisbane and nationwide.`,
    },
    {
      question: `How many people does the ${van.model} sleep?`,
      answer: `It sleeps ${van.berths} and has ${van.seatbelts} seatbelts. Layout, ensuite and touring gear are listed on this page.`,
    },
  ];
}
