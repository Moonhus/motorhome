import Image from "next/image";
import Link from "next/link";
import type { Motorhome } from "@/data/motorhomes";
import { formatKilometres, formatPrice } from "@/lib/format";
import { withBasePath } from "@/lib/paths";

export function ListingCard({
  motorhome,
  featured = false,
}: {
  motorhome: Motorhome;
  featured?: boolean;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-[0_18px_40px_-28px_rgba(22,54,44,0.55)]">
      <Link href={`/inventory/${motorhome.slug}`} className="relative block">
        <div className={`relative ${featured ? "aspect-[16/10]" : "aspect-[16/11]"}`}>
          <Image
            src={withBasePath(motorhome.image)}
            alt={`${motorhome.year} ${motorhome.brand} ${motorhome.model} used motorhome for sale Brisbane`}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>
        <span className="absolute left-3 top-3 rounded-full bg-cream/95 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-forest">
          {motorhome.stockNumber}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-forest/90 px-3 py-1 text-xs font-semibold text-cream">
          {motorhome.licence === "Car" ? "Car licence" : "LR licence"}
        </span>
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-moss">
          {motorhome.year} · {motorhome.brand} motorhome
        </p>
        <h3 className="display text-2xl leading-tight text-forest">
          <Link href={`/inventory/${motorhome.slug}`} className="hover:text-copper">
            {motorhome.model}
          </Link>
        </h3>
        <div className="grid grid-cols-2 gap-3 rounded-xl bg-cream px-4 py-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Price
            </p>
            <p className="display text-2xl text-copper sm:text-3xl">
              {formatPrice(motorhome.price)}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Kilometres
            </p>
            <p className="display text-2xl text-forest sm:text-3xl">
              {formatKilometres(motorhome.kilometres)}
            </p>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-muted">{motorhome.summary}</p>
        <p className="text-xs font-medium text-moss">
          Free Brisbane delivery · 12-month warranty · {motorhome.berths} berth
        </p>
        <Link
          href={`/inventory/${motorhome.slug}`}
          className="mt-auto text-sm font-medium text-forest underline decoration-copper/60 underline-offset-4"
        >
          View this motorhome
        </Link>
      </div>
    </article>
  );
}
