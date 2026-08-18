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
    title: "NSW stock you can buy today",
    body: "Avida, Sunliner, Avan and KEA motorhomes sit at Bennetts Green. What you see listed is what we can deliver.",
  },
  {
    title: "Brisbane and nationwide delivery",
    body: "Send your email and mobile. We quote the van, the drive-away price and delivery into Queensland or your state.",
  },
  {
    title: "More van for the money",
    body: "Island beds, slide-outs, ensuites, lithium and solar — late-model Australian coachbuilts at used drive-away prices.",
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
          alt="Used motorhome for sale, ready for delivery to Brisbane"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/88 via-forest/70 to-forest/25" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sand">
            Used motorhomes for sale · {site.market}
          </p>
          <h1 className="display mt-3 max-w-3xl text-5xl leading-[1.05] text-cream sm:text-7xl">
            Used motorhomes for sale, delivered to Brisbane.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-sand/90">
            Avida, Sunliner, Avan and KEA from our NSW yard. Drive-away prices
            from {formatPrice(lowest.price)}. Send your email and mobile — we
            come back with the van and a delivery quote.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/inventory"
              className="rounded-full bg-copper px-6 py-3 text-sm font-semibold text-white hover:bg-copper-dark"
            >
              Browse used motorhomes
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-cream/40 px-6 py-3 text-sm font-semibold text-cream hover:bg-white/10"
            >
              Enquire
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-forest/10 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-8 sm:grid-cols-3">
          <Stat value={`${motorhomes.length}`} label="Used motorhomes in stock" />
          <Stat value={formatPrice(lowest.price)} label="From (drive away)" />
          <Stat value="QLD" label="Delivery to Brisbane" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-moss">
              Current stock
            </p>
            <h2 className="display mt-2 text-4xl text-forest">
              Motorhomes ready to deliver
            </h2>
          </div>
          <Link
            href="/inventory"
            className="text-sm font-medium text-forest underline decoration-copper/70 underline-offset-4"
          >
            See all {motorhomes.length} used motorhomes
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
              Highest-value used motorhomes
            </p>
            <h2 className="display mt-3 text-4xl">
              Late-model Australian coachbuilts. Used prices. Brisbane delivery.
            </h2>
            <p className="mt-4 max-w-lg text-sand/85 leading-relaxed">
              Island beds, slide-outs, ensuites, lithium and solar — the spec
              people pay new-van money for, listed drive away from Bennetts
              Green. Queensland buyers start with an email and SMS. We handle
              the rest.
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
            alt="Used motorhome interior with dinette and timber cabinetry"
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
            Pick a van. Send email and SMS.
          </h2>
          <ol className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
            <li>
              <span className="font-semibold text-forest">1. Choose a listing.</span>{" "}
              Year, chassis, berths, kilometres and a drive-away price are on
              every card.
            </li>
            <li>
              <span className="font-semibold text-forest">2. Enquire with email and mobile.</span>{" "}
              Name, email and SMS are required. We reply with the van and
              delivery into Brisbane or your state.
            </li>
            <li>
              <span className="font-semibold text-forest">3. We deliver.</span>{" "}
              Stock leaves Bennetts Green, NSW. Paperwork travels with the van.
            </li>
          </ol>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream hover:bg-forest-deep"
          >
            Send an enquiry
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <Faq items={siteFaqs} title="Used motorhomes — common questions" />
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
