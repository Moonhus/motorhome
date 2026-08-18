import Image from "next/image";
import Link from "next/link";
import { ListingCard } from "@/components/ListingCard";
import { WhyUs } from "@/components/WhyUs";
import { motorhomes } from "@/data/motorhomes";
import { formatPrice } from "@/lib/format";
import { withBasePath } from "@/lib/paths";
import { site } from "@/lib/site";

const highlights = [
  {
    title: "Inspected in Brisbane",
    body: "Every van is checked at our Queensland yard before it goes on the list. What you read is what we saw.",
  },
  {
    title: "Car-licence stock",
    body: "Current inventory is under 4.5 t GVM, so you can collect on a standard Australian car licence.",
  },
  {
    title: "Real touring layouts",
    body: "Alcove bunks, island beds, slide-outs and ensuites — Jayco, Avan, Sunliner and Auto-Trail.",
  },
];

export default function Home() {
  const featured = motorhomes.slice(0, 3);
  const lowest = [...motorhomes].sort((a, b) => a.price - b.price)[0];

  return (
    <>
      <section className="relative isolate min-h-[78vh] overflow-hidden">
        <Image
          src={withBasePath("/images/hero-brisbane.jpg")}
          alt="Motorhome parked above Moreton Bay at golden hour"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/88 via-forest/70 to-forest/25" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sand">
            {site.location}
          </p>
          <h1 className="display mt-3 max-w-3xl text-5xl leading-[1.05] text-cream sm:text-7xl">
            Pre-owned motorhomes, ready for the next lap.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-sand/90">
            {site.legalName} lists inspected second-hand motorhomes from our
            Brisbane yard — the vans you see here are the vans you can walk
            through. Drive-away prices, real kilometres, and time to inspect
            before you buy.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/inventory"
              className="rounded-full bg-copper px-6 py-3 text-sm font-semibold text-white hover:bg-copper-dark"
            >
              Browse inventory
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-cream/40 px-6 py-3 text-sm font-semibold text-cream hover:bg-white/10"
            >
              Book a viewing
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-forest/10 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-8 sm:grid-cols-3">
          <Stat value={`${motorhomes.length}`} label="Vans on the yard" />
          <Stat value={formatPrice(lowest.price)} label="From (drive away)" />
          <Stat value="QLD" label="Inspected in Brisbane" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-moss">
              Current stock
            </p>
            <h2 className="display mt-2 text-4xl text-forest">On the yard this week</h2>
          </div>
          <Link
            href="/inventory"
            className="text-sm font-medium text-forest underline decoration-copper/70 underline-offset-4"
          >
            See all {motorhomes.length} listings
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
              Why buy here
            </p>
            <h2 className="display mt-3 text-4xl">
              A Brisbane yard, not a classifieds page.
            </h2>
            <p className="mt-4 max-w-lg text-sand/85 leading-relaxed">
              We buy and resell late-model Australian and imported coachbuilts.
              Come and walk through them, take them for a run, and leave with
              paperwork that makes sense.
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
            alt="Motorhome living area with timber cabinetry and dinette"
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
            Email us, pick a time, walk through the van.
          </h2>
          <ol className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
            <li>
              <span className="font-semibold text-forest">1. Choose a listing.</span>{" "}
              Every van has year, chassis, berths, kilometres and a drive-away
              price.
            </li>
            <li>
              <span className="font-semibold text-forest">2. Book a viewing.</span>{" "}
              We will confirm a Brisbane appointment and send the yard address.
            </li>
            <li>
              <span className="font-semibold text-forest">3. Inspect and take it.</span>{" "}
              Roadworthy, gas and handover are sorted before it leaves the yard.
            </li>
          </ol>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream hover:bg-forest-deep"
          >
            Make an enquiry
          </Link>
        </div>
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
