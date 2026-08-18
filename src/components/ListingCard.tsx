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
            alt={`${motorhome.year} ${motorhome.brand} ${motorhome.model} motorhome for sale`}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>
        <span className="absolute left-3 top-3 rounded-full bg-cream/95 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-forest">
          {motorhome.stockNumber}
        </span>
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-moss">
            {motorhome.year} · {motorhome.brand}
          </p>
          <h3 className="display mt-1 text-2xl leading-tight text-forest">
            <Link href={`/inventory/${motorhome.slug}`} className="hover:text-copper">
              {motorhome.model}
            </Link>
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-muted">{motorhome.summary}</p>
        <dl className="mt-auto grid grid-cols-3 gap-2 border-t border-sand pt-4 text-xs text-forest">
          <div>
            <dt className="text-muted">Berths</dt>
            <dd className="font-semibold">{motorhome.berths}</dd>
          </div>
          <div>
            <dt className="text-muted">Length</dt>
            <dd className="font-semibold">{motorhome.lengthMetres} m</dd>
          </div>
          <div>
            <dt className="text-muted">Odometer</dt>
            <dd className="font-semibold">{formatKilometres(motorhome.kilometres)}</dd>
          </div>
        </dl>
        <div className="flex items-end justify-between gap-3">
          <p className="display text-3xl text-copper">{formatPrice(motorhome.price)}</p>
          <Link
            href={`/inventory/${motorhome.slug}`}
            className="text-sm font-medium text-forest underline decoration-copper/60 underline-offset-4"
          >
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}
