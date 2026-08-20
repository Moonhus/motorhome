import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { BrandStrip } from "@/components/BrandStrip";
import { CustomerStories, TrustFacts } from "@/components/CustomerStories";
import { Faq } from "@/components/Faq";
import { InventoryBrowser } from "@/components/InventoryBrowser";
import { JsonLd } from "@/components/JsonLd";
import { motorhomes } from "@/data/motorhomes";
import { withBasePath } from "@/lib/paths";
import { faqJsonLd, siteFaqs } from "@/lib/seo";

export default function Home() {
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
            href="#catalogue"
            className="mt-8 inline-flex w-full max-w-sm items-center justify-center rounded-full bg-copper px-8 py-4 text-base font-semibold text-white hover:bg-copper-dark sm:w-fit sm:px-10 sm:py-5 sm:text-lg"
          >
            Browse Available Stock
          </Link>
        </div>
      </section>

      <TrustFacts />
      <BrandStrip />

      <section
        id="catalogue"
        className="scroll-mt-6 mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-16"
      >
        <h2 className="display text-4xl text-forest sm:text-5xl">
          Browse the full catalogue
        </h2>
        <p className="mt-3 max-w-xl text-muted">
          Search current motorhomes by model or stock number.
        </p>
        <div className="mt-10">
          <Suspense>
            <InventoryBrowser motorhomes={motorhomes} />
          </Suspense>
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
