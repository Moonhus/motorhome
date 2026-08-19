import Image from "next/image";
import Link from "next/link";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { ListingCard } from "@/components/ListingCard";
import { customerReviews } from "@/data/reviews";
import { motorhomes } from "@/data/motorhomes";
import { withBasePath } from "@/lib/paths";
import { faqJsonLd, siteFaqs } from "@/lib/seo";

const values = [
  {
    title: "Unmatched Comfort",
    body: "Luxury living spaces engineered for long-term travel.",
  },
  {
    title: "Road-Tested Quality",
    body: "Rigorously inspected new and pre-owned motorhomes.",
  },
  {
    title: "Expert Support",
    body: "Dedicated guidance from your first walkthrough to lifelong maintenance.",
  },
];

const categories = [
  {
    title: "Compact motorhomes",
    body: "Perfect for agile weekend getaways.",
    href: "/inventory?range=compact",
    image: "/images/listings/10662/01.jpg",
  },
  {
    title: "Family Class C",
    body: "Spacious layouts built for group travel.",
    href: "/inventory?range=family",
    image: "/images/listings/10783/01.jpg",
  },
  {
    title: "Luxury touring",
    body: "High-end finishes for full-time living.",
    href: "/inventory?range=luxury",
    image: "/images/listings/10800/01.jpg",
  },
];

export default function Home() {
  const featured = motorhomes.slice(0, 3);

  return (
    <>
      <JsonLd data={faqJsonLd(siteFaqs)} />

      <section className="relative isolate min-h-[78vh] overflow-hidden">
        <Image
          src={withBasePath("/images/hero-brisbane.jpg")}
          alt="Motorhome on the open road"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/88 via-forest/65 to-forest/20" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-5 pb-20 pt-28">
          <h1 className="display max-w-3xl text-5xl leading-[1.05] text-cream sm:text-7xl">
            Your Home on the Open Road
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-sand/90">
            Discover premium used motorhomes built for ultimate comfort,
            freedom, and unforgettable adventures.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/inventory"
              className="rounded-full bg-copper px-6 py-3 text-sm font-semibold text-white hover:bg-copper-dark"
            >
              Browse Available Stock
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-cream/40 px-6 py-3 text-sm font-semibold text-cream hover:bg-white/10"
            >
              Book a Showroom Visit
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:grid-cols-3">
          {values.map((item) => (
            <div key={item.title}>
              <h2 className="display text-2xl text-forest">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8 pt-4">
        <h2 className="display text-4xl text-forest">Find your layout</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {categories.map((item) => (
            <Link key={item.title} href={item.href} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={withBasePath(item.image)}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <h3 className="display mt-4 text-2xl text-forest group-hover:text-copper">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{item.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="display text-4xl text-forest">Available stock</h2>
          <Link
            href="/inventory"
            className="text-sm text-muted transition-colors hover:text-forest"
          >
            View all
          </Link>
        </div>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((motorhome) => (
            <ListingCard key={motorhome.slug} motorhome={motorhome} />
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="text-sm text-muted">
            <span className="text-copper" aria-hidden="true">
              ★★★★★
            </span>{" "}
            <span className="font-medium text-forest">{customerReviews.rating}</span>{" "}
            on {customerReviews.source}
            <span className="mx-2 text-forest/20">·</span>
            {customerReviews.sold} motorhomes sold
          </p>
          <p className="display mt-6 max-w-2xl text-3xl text-forest">
            Flexible finance options available to make your dream ride a reality.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream hover:bg-forest-deep"
          >
            Speak with an RV expert today
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <Faq items={siteFaqs} title="Questions" />
      </section>
    </>
  );
}
