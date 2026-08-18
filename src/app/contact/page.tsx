import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Enquire with ${site.legalName} about NSW stock delivered to Brisbane.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 lg:grid-cols-2">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-moss">
          Enquire
        </p>
        <h1 className="display mt-2 text-5xl text-forest">
          Send your name. We will take it from there.
        </h1>
        <p className="mt-4 max-w-lg text-muted leading-relaxed">
          Stock is at Bennetts Green, NSW. We deliver into Brisbane and
          nationwide. Leave your name and the van you like — no yard visit
          needed to start.
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
            title="Map of Bennetts Green, NSW"
            className="h-64 w-full grayscale"
            src="https://www.openstreetmap.org/export/embed.html?bbox=151.64%2C-33.04%2C151.75%2C-32.96&layer=mapnik"
          />
        </div>
      </div>
      <EnquiryForm />
    </div>
  );
}
