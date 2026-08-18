import { BrandMark } from "@/components/BrandMark";
import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-forest-deep text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <BrandMark compact onDark />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand/80">
            Pre-owned motorhomes from Bennetts Green, NSW, with delivery into
            Brisbane and across Australia. Send your name to enquire.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand/60">
            Visit
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/inventory" className="hover:text-sand">
                Used motorhomes
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-sand">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-sand">
                Enquire
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand/60">
            Yard & delivery
          </p>
          <p className="mt-3 text-sm leading-relaxed text-sand/80">
            {site.address}
            <br />
            Delivery to {site.market}
          </p>
          <p className="mt-3 text-sm text-sand">★★★★★ Five-star handover standard</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-3 inline-block text-sm text-sand underline decoration-copper/70 underline-offset-4 hover:text-cream"
          >
            {site.email}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-4 text-center text-xs text-sand/50">
        © {new Date().getFullYear()} {site.legalName}. All prices in AUD, drive
        away unless stated. Specifications as listed.
      </div>
    </footer>
  );
}
