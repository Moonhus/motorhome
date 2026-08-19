import Image from "next/image";
import { withBasePath } from "@/lib/paths";

const copy =
  "Every motorhome we sell is professionally detailed, thoroughly inspected and serviced, then stored securely indoors to protect it from the elements. We maintain every vehicle to a high mechanical and cosmetic standard, so it’s clean, road-ready and prepared for a smooth, hassle-free handover.";

export function WhyChooseUs() {
  return (
    <section className="relative isolate min-h-[28rem] overflow-hidden sm:min-h-[34rem]">
      <Image
        src={withBasePath("/images/why-choose-us.jpg")}
        alt="Advisor with a tablet in front of an Avida motorhome"
        fill
        className="object-cover object-[center_30%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/80 via-forest/50 to-copper/20" />
      <div className="absolute inset-0 bg-gradient-to-tr from-copper/15 via-transparent to-forest/25" />
      <div className="relative mx-auto flex min-h-[28rem] max-w-6xl flex-col justify-end px-5 py-16 sm:min-h-[34rem] sm:px-10 lg:justify-center">
        <h2 className="display max-w-xl text-4xl leading-tight text-cream sm:text-5xl">
          Why Choose Us?
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-sand/90">
          {copy}
        </p>
      </div>
    </section>
  );
}
