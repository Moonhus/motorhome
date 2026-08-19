import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Email us about a used motorhome in Brisbane",
  description: `Email ${site.legalName} today about used motorhomes for sale in Brisbane. Free delivery, 12-month warranty, car licence layouts. We will be in touch shortly.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 lg:grid-cols-2">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-moss">
          Enquire
        </p>
        <h1 className="display mt-2 text-5xl text-forest">
          Email us today. We will be in touch shortly.
        </h1>
        <p className="mt-4 max-w-lg text-muted leading-relaxed">
          Brisbane based, South Australia yard. Hold a car licence? Send your
          name, email, mobile and a message — that is all we need to start.
        </p>
        <div className="mt-10 overflow-hidden rounded-3xl border border-forest/10">
          <iframe
            title="Map of South Australia motorhome yard region"
            className="h-64 w-full grayscale"
            src="https://www.openstreetmap.org/export/embed.html?bbox=138.45%2C-35.05%2C138.75%2C-34.80&layer=mapnik"
          />
        </div>
      </div>
      <EnquiryForm />
    </div>
  );
}
