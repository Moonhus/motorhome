import Image from "next/image";
import { withBasePath } from "@/lib/paths";

const copy =
  "Every motorhome we sell is professionally detailed, thoroughly inspected and serviced, then stored securely indoors to protect it from the elements. We maintain every vehicle to a high mechanical and cosmetic standard, so it’s clean, road-ready and prepared for a smooth, hassle-free handover.";

export function WhyChooseUs() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={withBasePath("/images/why-choose-us.jpg")}
          alt="Showroom advisor with a motorhome"
          fill
          className="object-cover object-[center_22%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/92 via-forest/80 to-forest/40" />
      </div>
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.22em] text-sand/70 uppercase">
          Prepared for handover
        </p>
        <h2 className="display mt-3 max-w-xl text-4xl leading-tight text-cream sm:text-5xl">
          Why Choose Us?
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-sand/90">
          {copy}
        </p>
      </div>
    </section>
  );
}
