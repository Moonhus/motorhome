import Image from "next/image";
import Link from "next/link";
import type { Motorhome } from "@/data/motorhomes";
import { formatKilometres, formatPrice } from "@/lib/format";
import { withBasePath } from "@/lib/paths";

export function ListingCard({ motorhome }: { motorhome: Motorhome }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_-24px_rgba(22,54,44,0.5)]">
      <Link href={`/inventory/${motorhome.slug}`} className="relative block">
        <div className="relative aspect-[16/11]">
          <Image
            src={withBasePath(motorhome.image)}
            alt={`${motorhome.year} ${motorhome.brand} ${motorhome.model} used motorhome for sale Brisbane`}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.02]"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted">
          {motorhome.year} · {motorhome.brand}
        </p>
        <h3 className="mt-1 text-lg font-semibold leading-snug text-forest">
          <Link href={`/inventory/${motorhome.slug}`} className="hover:text-copper">
            {motorhome.model} motorhome
          </Link>
        </h3>
        <p className="mt-3 text-2xl font-semibold tracking-tight text-forest">
          {formatPrice(motorhome.price)}
        </p>
        <p className="mt-1 text-sm text-muted">
          {formatKilometres(motorhome.kilometres)} ·{" "}
          {motorhome.licence === "Car" ? "Car licence" : "LR licence"}
        </p>
        <Link
          href={`/inventory/${motorhome.slug}#enquire`}
          className="mt-4 inline-flex items-center justify-center rounded-md bg-copper px-4 py-2.5 text-sm font-semibold text-white hover:bg-copper-dark"
        >
          Make Enquiry
        </Link>
      </div>
    </article>
  );
}
