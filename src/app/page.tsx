import Image from "next/image";
import Link from "next/link";
import { BrandStrip } from "@/components/BrandStrip";
import { CustomerStories, TrustFacts } from "@/components/CustomerStories";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { ListingCard } from "@/components/ListingCard";
import { motorhomes } from "@/data/motorhomes";
import { withBasePath } from "@/lib/paths";
import { faqJsonLd, siteFaqs } from "@/lib/seo";

export default function Home() {
  const featured = motorhomes.slice(0, 3);

  return (
    <>
      <JsonLd data={faqJsonLd(siteFaqs)} />

      <section className="relative isolate min-h-[70vh] overflow-hidden">
        <Image
          src={withBasePath("/images/hero-brisbane.jpg")}
          alt="Motorhome on the open road"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/88 via-forest/65 to-forest/20" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-20">
          <h1 className="display max-w-3xl text-5xl leading-[1.05] text-cream sm:text-7xl">
            Your Home on the Open Road
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-sand/90">
            Premium used motorhomes, chosen for comfort and the long road
            ahead.
          </p>
          <Link
            href="/inventory"
            className="mt-8 inline-flex w-fit rounded-full bg-copper px-6 py-3 text-sm font-semibold text-white hover:bg-copper-dark"
          >
            Browse Available Stock
          </Link>
        </div>
      </section>

      <TrustFacts />
      <BrandStrip />

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

      <div className="bg-white">
        <CustomerStories />
      </div>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <Faq items={siteFaqs} title="Questions" />
      </section>
    </>
  );
}
