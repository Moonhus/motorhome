import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { ListingBenefits } from "@/components/ListingBenefits";
import { ListingGallery } from "@/components/ListingGallery";
import { ListingReviews } from "@/components/ListingReviews";
import { getMotorhome, motorhomes } from "@/data/motorhomes";
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
    <article className="bg-cream pb-20">
      <JsonLd data={vehicleJsonLd(van)} />
      <JsonLd data={faqJsonLd(faqs)} />

      <div className="mx-auto max-w-7xl px-5 pt-6">
        <Link
          href="/inventory"
          className="text-sm text-muted transition-colors hover:text-forest"
        >
          ← Used motorhomes
        </Link>
      </div>

      <div className="mx-auto mt-6 grid max-w-7xl items-start gap-10 px-5 lg:grid-cols-[minmax(0,1.65fr)_minmax(280px,0.35fr)] lg:gap-14">
        <ListingGallery images={van.gallery} alt={van.title} />

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <h1 className="display text-3xl leading-tight text-forest">
            {van.title}
          </h1>
          <p className="display mt-3 text-4xl text-forest sm:text-[2.75rem]">
            {formatPrice(van.price)}
          </p>
          <p className="mt-1 text-base text-muted">
            {formatKilometres(van.kilometres)}
          </p>
          <div className="mt-6 border-t border-forest/10 pt-5">
            <EnquiryForm listingTitle={van.title} variant="compact" />
          </div>
        </aside>
      </div>

      <div className="mx-auto max-w-7xl px-5">
        <ListingBenefits motorhome={van} />
        <ListingReviews />
        <Faq items={faqs} title="Frequently asked questions" />
      </div>
    </article>
  );
}
