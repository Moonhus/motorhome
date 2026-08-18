import Image from "next/image";
import Link from "next/link";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { ListingCard } from "@/components/ListingCard";
import { WhyUs } from "@/components/WhyUs";
import { motorhomes } from "@/data/motorhomes";
import { formatPrice } from "@/lib/format";
import { withBasePath } from "@/lib/paths";
import { faqJsonLd, siteFaqs } from "@/lib/seo";
import { site } from "@/lib/site";

const highlights = [
  {
    title: "Car licence motorhomes",
    body: "Most layouts here drive on a standard car licence. Price and kilometres sit up front on every motorhome card.",
  },
  {
    title: "Free delivery to Brisbane",
    body: "We are Brisbane based. Stock leaves our South Australia yard with free delivery to Brisbane included.",
  },
  {
    title: "12-month warranty",
    body: "Every used motorhome for sale includes a 12-month warranty. Email us today — we will be in touch shortly.",
  },
];

export default function Home() {
  const featured = motorhomes.slice(0, 3);
  const lowest = [...motorhomes].sort((a, b) => a.price - b.price)[0];

  return (
    <>
      <JsonLd data={faqJsonLd(siteFaqs)} />
      <section className="relative isolate min-h-[78vh] overflow-hidden">
        <Image
          src={withBasePath("/images/hero-brisbane.jpg")}
          alt="Used motorhomes for sale in Brisbane with free delivery"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/88 via-forest/70 to-forest/25" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sand">
            Used motorhomes for sale Brisbane · {site.delivery}
          </p>
          <h1 className="display mt-3 max-w-3xl text-5xl leading-[1.05] text-cream sm:text-7xl">
            Used motorhomes for sale in Brisbane.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-sand/90">
            Avida, Sunliner, Avan and KEA from our South Australia yard. Free
            delivery to Brisbane. 12-month warranty. Hold a car licence? Email
            us today — we will be in touch shortly. From{" "}
            {formatPrice(lowest.price)} drive away.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/inventory"
              className="rounded-full bg-copper px-6 py-3 text-sm font-semibold text-white hover:bg-copper-dark"
            >
              Browse motorhomes
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-cream/40 px-6 py-3 text-sm font-semibold text-cream hover:bg-white/10"
            >
              Email us today
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-forest/10 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-8 sm:grid-cols-4">
          <Stat value={`${motorhomes.length}`} label="Motorhomes in stock" />
          <Stat value={formatPrice(lowest.price)} label="From (drive away)" />
          <Stat value="Free" label="Delivery to Brisbane" />
          <Stat value="12 mo" label="Warranty included" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-moss">
              Easy browsing · price and kilometres first
            </p>
            <h2 className="display mt-2 text-4xl text-forest">
              Used motorhomes ready for Brisbane
            </h2>
          </div>
          <Link
            href="/inventory"
            className="text-sm font-medium text-forest underline decoration-copper/70 underline-offset-4"
          >
            See all {motorhomes.length} motorhomes
          </Link>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featured.map((motorhome) => (
            <ListingCard key={motorhome.slug} motorhome={motorhome} featured />
          ))}
        </div>
      </section>

      <WhyUs />

      <section className="bg-forest text-cream">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sand/70">
              Car licence · free delivery · 12-month warranty
            </p>
            <h2 className="display mt-3 text-4xl">
              Brisbane buyers. South Australia stock. Email us today.
            </h2>
            <p className="mt-4 max-w-lg text-sand/85 leading-relaxed">
              Island beds, slide-outs, ensuites, lithium and solar — late-model
              Australian motorhomes at used drive-away prices. If you hold a
              car licence, email us today and we will be in touch shortly.
            </p>
          </div>
          <div className="grid gap-6">
            {highlights.map((item) => (
              <div key={item.title} className="border-l-2 border-copper pl-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-sand/75">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <Image
            src={withBasePath("/images/interior-living.jpg")}
            alt="Used motorhome for sale Brisbane — living area and dinette"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-moss">
            How it works
          </p>
          <h2 className="display mt-3 text-4xl text-forest">
            Pick a motorhome. Email us today.
          </h2>
          <ol className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
            <li>
              <span className="font-semibold text-forest">1. Browse price and kilometres.</span>{" "}
              Every motorhome card leads with drive-away price and km so it is
              easy to compare.
            </li>
            <li>
              <span className="font-semibold text-forest">2. Email us today.</span>{" "}
              Name, email, mobile and a message. If you hold a car licence, we
              will be in touch shortly.
            </li>
            <li>
              <span className="font-semibold text-forest">3. Free delivery to Brisbane.</span>{" "}
              The motorhome leaves our South Australia yard with a 12-month
              warranty and paperwork.
            </li>
          </ol>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream hover:bg-forest-deep"
          >
            Email us today
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <Faq items={siteFaqs} title="Used motorhomes for sale Brisbane — FAQs" />
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="display text-3xl text-forest">{value}</p>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </div>
  );
}
