import Image from "next/image";
import { withBasePath } from "@/lib/paths";

const copy =
  "Every motorhome we sell is professionally detailed, thoroughly inspected and serviced, then stored securely indoors to protect it from the elements. We maintain every vehicle to a high mechanical and cosmetic standard, so it’s clean, road-ready and prepared for a smooth, hassle-free handover.";

export function WhyChooseUs() {
  return (
    <section className="grid overflow-hidden lg:grid-cols-2">
      <div className="relative isolate min-h-[22rem] overflow-hidden sm:min-h-[28rem]">
        <Image
          src={withBasePath("/images/why-choose-us.jpg")}
          alt="Avida Birdsville motorhome in the yard"
          fill
          className="object-cover object-[center_45%]"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/92 via-forest/82 to-forest/55" />
        <div className="relative flex h-full flex-col justify-center px-5 py-16 sm:px-10 lg:px-14">
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
      </div>
      <div className="relative min-h-[20rem] overflow-hidden sm:min-h-[28rem]">
        <Image
          src={withBasePath("/images/why-choose-advisor.jpg")}
          alt="Advisor with an Avida Birdsville in the yard"
          fill
          className="object-cover object-[center_20%]"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
    </section>
  );
}
