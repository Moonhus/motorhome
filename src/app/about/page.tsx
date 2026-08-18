import type { Metadata } from "next";
import Image from "next/image";
import { WhyUs } from "@/components/WhyUs";
import { withBasePath } from "@/lib/paths";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About our NSW motorhome yard",
  description: `${site.legalName} sells used Avida, Sunliner, Avan and KEA motorhomes from Bennetts Green, NSW, with delivery to Brisbane and nationwide.`,
};

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-5 py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-moss">
          {site.legalName}
        </p>
        <h1 className="display mt-2 max-w-3xl text-5xl text-forest">
          Used motorhomes from NSW. Built for Brisbane buyers.
        </h1>
        <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src={withBasePath("/images/hero-brisbane.jpg")}
              alt="Queensland coast — used motorhomes delivered to Brisbane"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted">
            <p>
              Commercial Motorhomes is the Queensland-facing site of{" "}
              {site.legalName}. The fleet lives at {site.address}. Brisbane and
              interstate buyers browse the same used motorhomes without starting
              on a yard visit.
            </p>
            <p>
              We list late-model Avida, Sunliner, Avan and KEA coachbuilts with
              drive-away prices. Island beds, slide-outs, ensuites and off-grid
              kit — the spec that usually sits on dearer vans.
            </p>
            <p>
              Send your name, email and mobile against a listing. We come back
              with the van, kilometres and a delivery quote into Brisbane or
              your state.
            </p>
          </div>
        </div>
      </div>
      <WhyUs />
    </>
  );
}
