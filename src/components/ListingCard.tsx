import Image from "next/image";
import Link from "next/link";
import type { Motorhome } from "@/data/motorhomes";
import { formatKilometres, formatPrice } from "@/lib/format";
import { withBasePath } from "@/lib/paths";

export function ListingCard({ motorhome }: { motorhome: Motorhome }) {
  return (
    <article className="min-w-0">
      <Link href={`/inventory/${motorhome.slug}`} className="group block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white">
          <Image
            src={withBasePath(motorhome.image)}
            alt={`${motorhome.year} ${motorhome.brand} ${motorhome.model}`}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.02]"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>
        <div className="mt-3">
          <p className="text-xs tracking-wide text-muted">
            {motorhome.year} {motorhome.brand}
          </p>
          <h3 className="display mt-0.5 text-xl leading-tight text-forest group-hover:text-copper">
            {motorhome.model}
          </h3>
          <p className="display mt-1.5 text-base leading-snug text-forest">
            {formatPrice(motorhome.price)}
            <span className="mx-1.5 font-sans text-forest/25">·</span>
            {formatKilometres(motorhome.kilometres)}
          </p>
        </div>
      </Link>
    </article>
  );
}
