import type { Metadata } from "next";
import Image from "next/image";
import { withBasePath } from "@/lib/paths";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.legalName} is a Brisbane motorhome resale yard listing inspected second-hand stock.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-moss">
        {site.legalName}
      </p>
      <h1 className="display mt-2 max-w-3xl text-5xl text-forest">
        A Queensland yard for people who actually want to go touring.
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
            Commercial Motorhomes is the trading face of {site.legalName}. We
            buy, inspect and resell late-model motorhomes from our Brisbane
            yard — Jayco and Avan from the Australian factories, Sunliner
            coachbuilts, and the occasional imported Auto-Trail.
          </p>
          <p>
            The stock on this site is the stock on the ground. Kilometres,
            chassis, berths and drive-away prices are listed up front so you
            can decide whether a trip to the yard is worth it. Viewings are by
            appointment so you get time in the van, not a crowded lot.
          </p>
          <p>
            We are based in Brisbane, Queensland, with easy access for buyers
            across South East Queensland and northern New South Wales. If you
            are flying in, tell us your window and we will have the van ready.
          </p>
        </div>
      </div>
    </div>
  );
}
