import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { getMotorhome, motorhomes } from "@/data/motorhomes";
import { formatKilometres, formatPrice } from "@/lib/format";
import { withBasePath } from "@/lib/paths";
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
  const headline = listingHeadline(van);
  const faqs = listingFaqs(van);

  return (
    <article className="pb-20">
      <JsonLd data={vehicleJsonLd(van)} />
      <JsonLd data={faqJsonLd(faqs)} />
      <div className="relative h-[52vh] min-h-[320px] w-full">
        <Image
          src={withBasePath(van.image)}
          alt={headline}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-black/20" />
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-6xl px-5 pb-8 text-cream">
          <Link
            href="/inventory"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-sand/80 hover:text-cream"
          >
            ← Used motorhomes for sale
          </Link>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-sand">
            {van.stockNumber} · {van.year} · {van.brand} · {van.licence} licence
          </p>
          <h1 className="display mt-2 max-w-3xl text-4xl sm:text-6xl">{headline}</h1>
          <p className="mt-3 display text-4xl text-sand">{formatPrice(van.price)} drive away</p>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="space-y-4 text-lg leading-relaxed text-ink/90">
            {van.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <h2 className="display mt-12 text-3xl text-forest">Why this van is the better buy</h2>
          <ul className="mt-4 grid gap-2">
            {van.benefits.map((benefit) => (
              <li
                key={benefit}
                className="rounded-xl border border-copper/20 bg-white px-4 py-3 text-sm font-medium text-forest"
              >
                {benefit}
              </li>
            ))}
          </ul>

          <dl className="mt-8 grid grid-cols-2 gap-4 rounded-2xl bg-white p-6 sm:grid-cols-4">
            <Spec label="Kilometres" value={formatKilometres(van.kilometres)} />
            <Spec label="Berths" value={`${van.berths}`} />
            <Spec label="Length" value={`${van.lengthMetres} m`} />
            <Spec label="Licence" value={van.licence} />
            <Spec label="Chassis" value={van.chassis} />
            <Spec label="Engine" value={van.engine} />
            <Spec label="Transmission" value={van.transmission} />
            <Spec label="GVM" value={`${van.gvmKg.toLocaleString("en-AU")} kg`} />
          </dl>

          <h2 className="display mt-12 text-3xl text-forest">Features</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {van.features.map((feature) => (
              <li
                key={feature}
                className="rounded-xl border border-forest/10 bg-white px-4 py-3 text-sm text-forest"
              >
                {feature}
              </li>
            ))}
          </ul>

          <h2 className="display mt-12 text-3xl text-forest">Specifications</h2>
          <table className="mt-4 w-full overflow-hidden rounded-2xl bg-white text-sm">
            <tbody>
              {van.specs.map((row) => (
                <tr key={row.label} className="border-b border-sand last:border-0">
                  <th className="px-4 py-3 text-left font-medium text-muted">
                    {row.label}
                  </th>
                  <td className="px-4 py-3 text-forest">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <Faq items={faqs} title="Buying this motorhome" />

          <h2 className="display mt-12 text-3xl text-forest">Photos</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {van.gallery.slice(1).map((src, index) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={withBasePath(src)}
                  alt={`${headline} photo ${index + 2}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 40vw, 100vw"
                />
              </div>
            ))}
          </div>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <EnquiryForm listingTitle={van.title} />
        </aside>
      </div>
    </article>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wider text-muted">{label}</dt>
      <dd className="mt-1 font-semibold text-forest">{value}</dd>
    </div>
  );
}
