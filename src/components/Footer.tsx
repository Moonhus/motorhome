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
            Used motorhomes for sale in Brisbane. South Australia yard, free
            delivery, 12-month warranty. Email us today.
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
            {site.location} based
            <br />
            Yard: {site.yard}
            <br />
            {site.delivery}
          </p>
          <p className="mt-3 text-sm text-sand">{site.warranty} on every motorhome</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-3 inline-block text-sm text-sand underline decoration-copper/70 underline-offset-4 hover:text-cream"
          >
            {site.email}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-3 text-center">
        <p className="text-[11px] text-sand/45">
          © {new Date().getFullYear()} {site.legalName}. Prices in AUD, drive
          away.
        </p>
        <p className="mt-1 text-[10px] leading-relaxed tracking-wide text-sand/35">
          {site.address}
          <span className="mx-1.5">·</span>
          ABN {site.abn}
        </p>
      </div>
    </footer>
  );
}
