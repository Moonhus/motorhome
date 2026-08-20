import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { ListingBenefits } from "@/components/ListingBenefits";
import { ListingGallery } from "@/components/ListingGallery";
import { ListingMobileCta } from "@/components/ListingMobileCta";
import { ListingReviews } from "@/components/ListingReviews";
import { getMotorhome, motorhomes, type Motorhome } from "@/data/motorhomes";
import { formatKilometres, formatPrice } from "@/lib/format";
import {
  faqJsonLd,
  listingFaqs,
  listingHeadline,
  vehicleJsonLd,
} from "@/lib/seo";

export function generateStaticParams() {
  return motorhomes.map((item) => ({ slug: item.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const van = getMotorhome(slug);
  if (!van) return { title: "Used motorhome listing" };
  const title = listingHeadline(van);
  return {
    title,
    description: van.summary,
    openGraph: {
      title,
      description: van.summary,
      type: "website",
    },
    alternates: {
      canonical: `/inventory/${van.slug}/`,
    },
  };
}

function ListingSummary({ van }: { van: Motorhome }) {
  const licence = van.licence === "Car" ? "Car licence" : van.licence;
  const facts = [
    `Sleeps ${van.berths}`,
    `Seats ${van.seatbelts}`,
    licence,
    `${van.lengthMetres} m`,
  ];

  return (
    <div>
      <h1 className="display text-[1.55rem] leading-[1.15] break-words text-forest sm:text-3xl">
        {van.title}
      </h1>
      <p className="display mt-2 text-3xl text-forest sm:mt-3 sm:text-[2.5rem]">
        {formatPrice(van.price)}
      </p>
      <p className="mt-1 text-sm text-muted sm:text-base">
        {formatKilometres(van.kilometres)}
        <span className="mx-1.5 text-forest/20">·</span>
        drive away
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {facts.map((fact, index) => (
          <span key={fact}>
            {index > 0 ? (
              <span className="mx-1.5 text-forest/20">·</span>
            ) : null}
            {fact}
          </span>
        ))}
      </p>
    </div>
  );
}

export default async function ListingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const van = getMotorhome(slug);
  if (!van) notFound();
  const faqs = listingFaqs(van);

  return (
    <article className="bg-cream pb-28 lg:pb-20">
      <JsonLd data={vehicleJsonLd(van)} />
      <JsonLd data={faqJsonLd(faqs)} />

      <div className="mx-auto max-w-6xl px-4 pt-4 sm:px-5 sm:pt-6">
        <Link
          href="/#catalogue"
          className="text-sm text-muted transition-colors hover:text-forest"
        >
          ← Used motorhomes
        </Link>
      </div>

      <div className="mx-auto mt-4 grid max-w-6xl items-start lg:mt-6 lg:grid-cols-[minmax(0,1.7fr)_minmax(260px,19.5rem)] lg:gap-12 lg:px-5">
        <div className="min-w-0">
          <ListingGallery images={van.gallery} alt={van.title} />
        </div>

        <aside className="min-w-0 px-4 pt-5 sm:px-5 lg:sticky lg:top-6 lg:self-start lg:px-0 lg:pt-0">
          <ListingSummary van={van} />
          <div className="mt-6 hidden border-t border-forest/10 pt-5 lg:block">
            <EnquiryForm
              listingTitle={van.title}
              variant="compact"
              formId="enquire-desktop"
            />
          </div>
        </aside>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <ListingBenefits motorhome={van} />
        <div
          id="listing-enquire"
          className="mt-10 border-t border-forest/10 pt-8 lg:hidden"
        >
          <EnquiryForm listingTitle={van.title} variant="compact" />
        </div>
        <ListingReviews />
        <Faq items={faqs} title="Frequently asked questions" />
      </div>

      <ListingMobileCta title={van.title} price={formatPrice(van.price)} />
    </article>
  );
}
