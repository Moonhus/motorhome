import type { Metadata } from "next";
import Image from "next/image";
import { WhyUs } from "@/components/WhyUs";
import { withBasePath } from "@/lib/paths";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.legalName} lists NSW motorhome stock with delivery to Brisbane and nationwide.`,
};

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-5 py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-moss">
          {site.legalName}
        </p>
        <h1 className="display mt-2 max-w-3xl text-5xl text-forest">
          A Brisbane-facing site for a NSW yard.
        </h1>
        <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src={withBasePath("/images/hero-brisbane.jpg")}
              alt="Queensland coastline near Brisbane"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted">
            <p>
              Commercial Motorhomes is the Queensland-facing site of{" "}
              {site.legalName}. The fleet lives at {site.address}. We built this
              site so Brisbane and interstate buyers can browse the same stock
              without starting on a yard visit.
            </p>
            <p>
              Send your name against a listing. We come back with the van,
              kilometres, and a delivery quote into Brisbane or your state.
            </p>
            <p>
              KEA, Avida, Avan and Sunliner coachbuilts, listed with drive-away
              prices. Delivery is arranged from NSW.
            </p>
          </div>
        </div>
      </div>
      <WhyUs />
    </>
  );
}
