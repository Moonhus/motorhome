import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Enquire about a used motorhome",
  description: `Enquire about used motorhomes for sale. ${site.legalName} quotes NSW stock and delivery to Brisbane. Name, email and mobile required.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 lg:grid-cols-2">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-moss">
          Enquire
        </p>
        <h1 className="display mt-2 text-5xl text-forest">
          Email and SMS. We take it from there.
        </h1>
        <p className="mt-4 max-w-lg text-muted leading-relaxed">
          Used motorhomes sit at Bennetts Green, NSW. We deliver into Brisbane
          and nationwide. Name, email and mobile are required so we can reply
          on both channels with the van and a delivery quote.
        </p>
        <dl className="mt-8 space-y-4 text-sm">
          <div>
            <dt className="font-semibold text-forest">Business</dt>
            <dd className="text-muted">{site.legalName}</dd>
          </div>
          <div>
            <dt className="font-semibold text-forest">Yard</dt>
            <dd className="text-muted">{site.address}</dd>
          </div>
          <div>
            <dt className="font-semibold text-forest">Delivery</dt>
            <dd className="text-muted">{site.market}</dd>
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
            title="Map of Bennetts Green, NSW motorhome yard"
            className="h-64 w-full grayscale"
            src="https://www.openstreetmap.org/export/embed.html?bbox=151.64%2C-33.04%2C151.75%2C-32.96&layer=mapnik"
          />
        </div>
      </div>
      <EnquiryForm />
    </div>
  );
}
