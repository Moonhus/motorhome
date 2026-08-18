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
          Brisbane based, South Australia yard. Free delivery to Brisbane and a
          12-month warranty on every used motorhome. Hold a car licence? Send
          your name, email, mobile and a message — that is all we need to start.
        </p>
        <dl className="mt-8 space-y-4 text-sm">
          <div>
            <dt className="font-semibold text-forest">Business</dt>
            <dd className="text-muted">{site.legalName}</dd>
          </div>
          <div>
            <dt className="font-semibold text-forest">Based</dt>
            <dd className="text-muted">{site.location}</dd>
          </div>
          <div>
            <dt className="font-semibold text-forest">Yard</dt>
            <dd className="text-muted">{site.yard}</dd>
          </div>
          <div>
            <dt className="font-semibold text-forest">Delivery</dt>
            <dd className="text-muted">{site.delivery}</dd>
          </div>
          <div>
            <dt className="font-semibold text-forest">Warranty</dt>
            <dd className="text-muted">{site.warranty} on every motorhome</dd>
          </div>
          <div>
            <dt className="font-semibold text-forest">Email</dt>
            <dd>
              <a className="text-copper underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </dd>
          </div>
        </dl>
        <div className="mt-8 overflow-hidden rounded-3xl border border-forest/10">
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
