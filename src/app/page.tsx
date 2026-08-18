import Image from "next/image";
import Link from "next/link";
import { Faq } from "@/components/Faq";
import { InventoryBrowser } from "@/components/InventoryBrowser";
import { JsonLd } from "@/components/JsonLd";
import { TrustBar } from "@/components/TrustBar";
import { WhyUs } from "@/components/WhyUs";
import { getBrands, motorhomes } from "@/data/motorhomes";
import { formatPrice } from "@/lib/format";
import { withBasePath } from "@/lib/paths";
import { faqJsonLd, siteFaqs } from "@/lib/seo";
import { site } from "@/lib/site";

const lowest = [...motorhomes].sort((a, b) => a.price - b.price)[0];

export default function Home() {
  return (
    <>
      <JsonLd data={faqJsonLd(siteFaqs)} />
      <section className="relative isolate min-h-[58vh] overflow-hidden">
        <Image
          src={withBasePath("/images/hero-brisbane.jpg")}
          alt="Used motorhomes for sale in Brisbane with free delivery"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/88 via-forest/70 to-forest/25" />
        <div className="relative mx-auto flex min-h-[58vh] max-w-6xl flex-col justify-end px-5 pb-12 pt-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sand">
            Used motorhomes for sale Brisbane · {site.delivery}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-[1.1] text-cream sm:text-6xl">
            Browse used motorhomes for sale in Brisbane.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-sand/90">
            Avida, Sunliner, Avan and KEA from our South Australia yard. Free
            delivery to Brisbane. 12-month warranty. From{" "}
            {formatPrice(lowest.price)} drive away.
          </p>
          <div className="mt-6">
            <TrustBar onDark />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#browse"
              className="rounded-md bg-copper px-6 py-3 text-sm font-semibold text-white hover:bg-copper-dark"
            >
              Browse motorhomes
            </a>
            <Link
              href="/contact"
              className="rounded-md border border-cream/40 px-6 py-3 text-sm font-semibold text-cream hover:bg-white/10"
            >
              Make Enquiry
            </Link>
          </div>
        </div>
      </section>

      <section id="browse" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
          {site.sold} sold · {site.rating} Google rating
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-forest">
          Browse motorhomes
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          Price first, kilometres second. Filter by brand or car licence, then
          open a listing for photos, benefits and a Make Enquiry form.
        </p>
        <div className="mt-8">
          <InventoryBrowser motorhomes={motorhomes} brands={getBrands()} />
        </div>
      </section>

      <WhyUs />

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <Faq items={siteFaqs} />
      </section>
    </>
  );
}
