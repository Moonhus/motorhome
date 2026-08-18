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

export function listingHeadline(motorhome: Motorhome) {
  return `${motorhome.year} ${motorhome.brand} ${motorhome.model} motorhome for sale Brisbane`;
}

export const siteFaqs = [
  {
    question: "Where can I buy a used motorhome in Brisbane?",
    answer:
      "Commercial Motorhomes is Brisbane based. Stock sits at our South Australia yard and we offer free delivery to Brisbane. Browse price and kilometres on every listing, then email us today — we will be in touch shortly.",
  },
  {
    question: "Is delivery to Brisbane really free?",
    answer:
      "Yes. Used motorhomes for sale here include free delivery to Brisbane, plus a 12-month warranty. Drive-away prices are in AUD as listed.",
  },
  {
    question: "Do I need more than a car licence?",
    answer:
      "Most motorhomes we list are car licence (under 4.5 t GVM). If a motorhome needs Light Rigid, the listing says so clearly. If you hold a standard car licence, email us today and we will point you to the right motorhome.",
  },
  {
    question: "What is included when I enquire?",
    answer:
      "Send your name, email, mobile and a message with any extra details. We confirm the motorhome, kilometres, free Brisbane delivery and the 12-month warranty, then we are in touch shortly.",
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
      addressLocality: "Brisbane",
      addressRegion: "QLD",
      addressCountry: "AU",
    },
    areaServed: ["Brisbane", "Queensland", "South Australia", "Australia"],
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

export function vehicleJsonLd(motorhome: Motorhome) {
  return {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: listingHeadline(motorhome),
    brand: motorhome.brand,
    model: motorhome.model,
    vehicleModelDate: String(motorhome.year),
    mileageFromOdometer: {
      "@type": "QuantitativeValue",
      value: motorhome.kilometres,
      unitCode: "KMT",
    },
    vehicleEngine: motorhome.engine,
    vehicleTransmission: motorhome.transmission,
    fuelType: motorhome.fuel,
    seatingCapacity: motorhome.seatbelts,
    description: motorhome.summary,
    image: motorhome.gallery.map((src) => absoluteUrl(src)),
    sku: motorhome.stockNumber,
    offers: {
      "@type": "Offer",
      url: absoluteUrl(listingPath(motorhome.slug)),
      priceCurrency: "AUD",
      price: motorhome.price,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/UsedCondition",
      seller: {
        "@type": "AutoDealer",
        name: site.name,
      },
    },
  };
}

export function listingFaqs(motorhome: Motorhome) {
  return [
    {
      question: `What licence do I need for the ${motorhome.year} ${motorhome.brand} ${motorhome.model}?`,
      answer:
        motorhome.licence === "Car"
          ? `A standard Australian car licence is enough. This used motorhome is ${motorhome.gvmKg.toLocaleString("en-AU")} kg GVM. Email us today and we will be in touch shortly.`
          : `This motorhome is ${motorhome.gvmKg.toLocaleString("en-AU")} kg GVM, so it needs a Light Rigid (LR) licence. Prefer car licence? Browse our other used motorhomes for sale in Brisbane or email us today.`,
    },
    {
      question: `Is delivery to Brisbane free for this ${motorhome.brand} motorhome?`,
      answer: `Yes. Stock ${motorhome.stockNumber} is at our South Australia yard with free delivery to Brisbane and a 12-month warranty. Email us today.`,
    },
    {
      question: `How many kilometres has the ${motorhome.model} done?`,
      answer: `It has travelled ${motorhome.kilometres.toLocaleString("en-AU")} km and sleeps ${motorhome.berths}. Price, kilometres and photos are on this page.`,
    },
  ];
}
