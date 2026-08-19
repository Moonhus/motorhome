import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BrandStrip } from "@/components/BrandStrip";
import { withBasePath } from "@/lib/paths";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About us",
  description: `${site.name} has been helping people into Avida, Sunliner, Avan and KEA motorhomes since ${site.established}.`,
};

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-5 py-14">
        <p className="text-xs tracking-[0.2em] text-muted uppercase">
          Est. {site.established}
        </p>
        <h1 className="display mt-3 max-w-3xl text-5xl text-forest">
          About Commercial Motorhomes
        </h1>
        <div className="mt-10 grid items-start gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src={withBasePath("/images/hero-brisbane.jpg")}
              alt="Commercial Motorhomes"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted">
            <p>
              We have been helping people into motorhomes since {site.established}.
              Browse current stock, read the kilometres, then send a short
              enquiry.
            </p>
            <p>
              {site.legalName} lists late-model Avida, Sunliner, Avan and KEA
              motorhomes. Most layouts drive on a car licence. If Light Rigid
              is needed, the listing says so.
            </p>
            <p>
              Yard: {site.address}. We work with Brisbane buyers every week.
            </p>
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-cream hover:bg-forest-deep"
            >
              Enquire
            </Link>
          </div>
        </div>
      </div>
      <BrandStrip />
    </>
  );
}
