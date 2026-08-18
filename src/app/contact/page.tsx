import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Book a Brisbane yard viewing with ${site.legalName}.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 lg:grid-cols-2">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-moss">
          Brisbane yard
        </p>
        <h1 className="display mt-2 text-5xl text-forest">Come and see the vans.</h1>
        <p className="mt-4 max-w-lg text-muted leading-relaxed">
          Viewings are by appointment. Send an enquiry with the listing you
          want to walk through and we will reply with a time and the yard
          address.
        </p>
        <dl className="mt-8 space-y-4 text-sm">
          <div>
            <dt className="font-semibold text-forest">Business</dt>
            <dd className="text-muted">{site.legalName}</dd>
          </div>
          <div>
            <dt className="font-semibold text-forest">Location</dt>
            <dd className="text-muted">{site.location}, {site.region}</dd>
          </div>
          <div>
            <dt className="font-semibold text-forest">Email</dt>
            <dd>
              <a className="text-copper underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-forest">Hours</dt>
            <dd className="text-muted">
              Tuesday–Saturday, 9am–4pm AEST, by appointment
            </dd>
          </div>
        </dl>
        <div className="mt-8 overflow-hidden rounded-3xl border border-forest/10">
          <iframe
            title="Map of Brisbane, Queensland"
            className="h-64 w-full grayscale"
            src="https://www.openstreetmap.org/export/embed.html?bbox=152.85%2C-27.62%2C153.18%2C-27.35&layer=mapnik"
          />
        </div>
      </div>
      <EnquiryForm />
    </div>
  );
}
