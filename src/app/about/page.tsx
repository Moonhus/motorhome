import type { Metadata } from "next";
import Image from "next/image";
import { WhyUs } from "@/components/WhyUs";
import { withBasePath } from "@/lib/paths";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About used motorhomes for sale in Brisbane",
  description: `${site.legalName} is Brisbane based with a South Australia yard. Used Avida, Sunliner, Avan and KEA motorhomes, free delivery to Brisbane, 12-month warranty. Email us today.`,
};

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-5 py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-moss">
          {site.legalName} · {site.location}
        </p>
        <h1 className="display mt-2 max-w-3xl text-5xl text-forest">
          Brisbane based. South Australia yard. Free motorhome delivery.
        </h1>
        <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src={withBasePath("/images/hero-brisbane.jpg")}
              alt="Used motorhomes for sale in Brisbane with free delivery from South Australia"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted">
            <p>
              Commercial Motorhomes is Brisbane based. The motorhomes live at
              our South Australia yard. You browse price and kilometres here,
              then we deliver into Brisbane at no extra charge.
            </p>
            <p>
              We list late-model Avida, Sunliner, Avan and KEA motorhomes with
              drive-away prices, a 12-month warranty, and layouts most buyers
              can drive on a standard car licence.
            </p>
            <p>
              Email us today with your name, mobile and a short message. We
              will be in touch shortly with the motorhome, kilometres and
              handover details.
            </p>
          </div>
        </div>
      </div>
      <WhyUs />
    </>
  );
}
