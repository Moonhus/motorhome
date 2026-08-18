import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { SpecList } from "@/components/SpecList";
import { TrustBar } from "@/components/TrustBar";
import { getMotorhome, motorhomes } from "@/data/motorhomes";
import { formatKilometres, formatPrice } from "@/lib/format";
import { withBasePath } from "@/lib/paths";
import {
  faqJsonLd,
  listingFaqs,
  listingHeadline,
  vehicleJsonLd,
} from "@/lib/seo";
import { site } from "@/lib/site";

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
  const motorhome = getMotorhome(slug);
  if (!motorhome) return { title: "Used motorhome listing" };
  const title = listingHeadline(motorhome);
  return {
    title,
    description: motorhome.summary,
    openGraph: {
      title,
      description: motorhome.summary,
      type: "website",
    },
    alternates: {
      canonical: `/inventory/${motorhome.slug}/`,
    },
  };
}

export default async function ListingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const motorhome = getMotorhome(slug);
  if (!motorhome) notFound();
  const headline = listingHeadline(motorhome);
  const faqs = listingFaqs(motorhome);

  return (
    <article className="pb-20">
      <JsonLd data={vehicleJsonLd(motorhome)} />
      <JsonLd data={faqJsonLd(faqs)} />

      <div className="relative h-[48vh] min-h-[280px] w-full">
        <Image
          src={withBasePath(motorhome.image)}
          alt={headline}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-6xl px-5 pb-7 text-cream">
          <Link
            href="/#browse"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80 hover:text-white"
          >
            ← Browse motorhomes
          </Link>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold sm:text-5xl">
            {headline}
          </h1>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="space-y-4 text-base leading-relaxed text-ink/90">
            {motorhome.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <h2 className="mt-12 text-2xl font-bold text-forest">
            Benefits and features
          </h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {motorhome.benefits.map((benefit) => (
              <li
                key={benefit}
                className="rounded-lg border border-forest/10 bg-white px-4 py-3 text-sm text-forest"
              >
                {benefit}
              </li>
            ))}
            {motorhome.features.map((feature) => (
              <li
                key={feature}
                className="rounded-lg border border-forest/10 bg-white px-4 py-3 text-sm text-forest"
              >
                {feature}
              </li>
            ))}
          </ul>

          <section className="mt-12 rounded-2xl bg-white p-6">
            <h2 className="text-2xl font-bold text-forest">Why enquire today</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              This {motorhome.year} {motorhome.brand} {motorhome.model} motorhome
              is in stock at our South Australia yard with free delivery to
              Brisbane and a 12-month warranty. Price is{" "}
              {formatPrice(motorhome.price)} drive away, with{" "}
              {formatKilometres(motorhome.kilometres)} on the clock.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-forest">
              <li>Free delivery to Brisbane</li>
              <li>12-month warranty included</li>
              <li>
                {site.sold} motorhomes sold · {site.rating} Google rating · mostly
                five-star reviews
              </li>
              <li>Email us today and we will be in touch shortly</li>
            </ul>
            <div className="mt-5">
              <TrustBar />
            </div>
            <a
              href="#enquire"
              className="mt-5 inline-flex rounded-md bg-copper px-5 py-2.5 text-sm font-semibold text-white hover:bg-copper-dark"
            >
              Make Enquiry
            </a>
          </section>

          <h2 className="mt-12 text-2xl font-bold text-forest">Specifications</h2>
          <table className="mt-4 w-full overflow-hidden rounded-2xl bg-white text-sm">
            <tbody>
              {motorhome.specs.map((row) => (
                <tr key={row.label} className="border-b border-sand last:border-0">
                  <th className="px-4 py-3 text-left font-medium text-muted">
                    {row.label}
                  </th>
                  <td className="px-4 py-3 text-forest">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <Faq items={faqs} />

          <h2 className="mt-12 text-2xl font-bold text-forest">Photos</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {motorhome.gallery.map((src, index) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={withBasePath(src)}
                  alt={`${headline} photo ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 40vw, 100vw"
                />
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl bg-[#eceff3] px-6 py-6 text-center">
            <p className="text-3xl font-semibold tracking-tight text-forest">
              {formatPrice(motorhome.price)}
            </p>
            <p className="mt-1 text-sm text-muted">
              {formatKilometres(motorhome.kilometres)} · drive away
            </p>
            <a
              href="#enquire"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-copper px-5 py-3 text-sm font-semibold text-white hover:bg-copper-dark"
            >
              Make Enquiry
              <span aria-hidden>▾</span>
            </a>
          </div>
          <SpecList motorhome={motorhome} />
          <div id="enquire">
            <EnquiryForm listingTitle={motorhome.title} />
          </div>
        </aside>
      </div>
    </article>
  );
}
