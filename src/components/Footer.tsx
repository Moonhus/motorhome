import { BrandMark } from "@/components/BrandMark";
import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-[#1b2430] text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div>
          <BrandMark compact onDark />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            Used motorhomes for sale in Brisbane, from our South Australia yard.
            Free delivery and a 12-month warranty.
          </p>
          <p className="mt-4 text-sm text-copper">
            ★★★★★ {site.rating} Google · {site.sold} sold
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">Shop</p>
          <ul className="mt-3 divide-y divide-white/15 text-sm text-white/80">
            <li className="py-2">
              <Link href="/#browse" className="hover:text-white">
                Used motorhomes for sale
              </Link>
            </li>
            <li className="py-2">
              <Link href="/inventory" className="hover:text-white">
                Browse motorhomes
              </Link>
            </li>
            <li className="py-2">
              <Link href="/about" className="hover:text-white">
                About us
              </Link>
            </li>
            <li className="py-2">
              <Link href="/contact" className="hover:text-white">
                Make enquiry
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Why buy here</p>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>{site.delivery}</li>
            <li>{site.warranty}</li>
            <li>Car licence layouts</li>
            <li>Mostly five-star Google reviews</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Contact us</p>
          <p className="mt-3 text-sm leading-relaxed text-white/80">
            {site.location} based
            <br />
            Yard: {site.yard}
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-3 inline-block text-sm text-white underline decoration-copper/70 underline-offset-4 hover:text-copper"
          >
            {site.email}
          </a>
          <p className="mt-3 text-sm text-white/70">
            Email us today — we will be in touch shortly.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-4 text-center text-xs text-white/45">
        © {new Date().getFullYear()} {site.legalName}. Prices in AUD, drive
        away. Free delivery to Brisbane. 12-month warranty.
      </div>
    </footer>
  );
}
