import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EnquiryForm } from "@/components/EnquiryForm";
import { ListingGallery } from "@/components/ListingGallery";
import { getMotorhome, motorhomes } from "@/data/motorhomes";
import { listingShots } from "@/lib/gallery";
import { formatKilometres, formatPrice } from "@/lib/format";

export function generateStaticParams() {
  return motorhomes.map((item) => ({ slug: item.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const van = getMotorhome(slug);
  if (!van) return { title: "Listing" };
  return {
    title: van.title,
    description: van.summary,
  };
}

export default async function ListingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const van = getMotorhome(slug);
  if (!van) notFound();

  const shots = listingShots(van);

  return (
    <article className="pb-20">
      <ListingGallery shots={shots} title={van.title}>
        <Link
          href="/inventory"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-sand/80 hover:text-cream"
        >
          ← Inventory
        </Link>
        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-sand">
          {van.stockNumber} · {van.year} · {van.brand}
        </p>
        <h1 className="display mt-2 max-w-3xl text-4xl text-cream [text-shadow:0_10px_28px_rgba(0,0,0,0.55)] sm:text-6xl">
          {van.model}
        </h1>
        <p className="mt-3 display text-4xl text-sand [text-shadow:0_10px_28px_rgba(0,0,0,0.55)]">
          {formatPrice(van.price)}
        </p>
      </ListingGallery>

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="text-lg leading-relaxed text-ink/90">{van.description}</p>
          <p className="mt-4 text-sm text-muted">
            Open inspect for a driveway-close look — fullscreen, scroll to zoom,
            drag to pan. Keyboard: F, arrows, Esc.
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-4 rounded-2xl bg-white p-6 sm:grid-cols-4">
            <Spec label="Kilometres" value={formatKilometres(van.kilometres)} />
            <Spec label="Berths" value={`${van.berths}`} />
            <Spec label="Length" value={`${van.lengthMetres} m`} />
            <Spec label="Licence" value={van.licence} />
            <Spec label="Chassis" value={van.chassis} />
            <Spec label="Engine" value={van.engine} />
            <Spec label="Transmission" value={van.transmission} />
            <Spec label="GVM" value={`${van.gvmKg.toLocaleString("en-AU")} kg`} />
          </dl>

          <h2 className="display mt-12 text-3xl text-forest">Features</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {van.features.map((feature) => (
              <li
                key={feature}
                className="rounded-xl border border-forest/10 bg-white px-4 py-3 text-sm text-forest"
              >
                {feature}
              </li>
            ))}
          </ul>

          <h2 className="display mt-12 text-3xl text-forest">Specifications</h2>
          <table className="mt-4 w-full overflow-hidden rounded-2xl bg-white text-sm">
            <tbody>
              {van.specs.map((row) => (
                <tr key={row.label} className="border-b border-sand last:border-0">
                  <th className="px-4 py-3 text-left font-medium text-muted">
                    {row.label}
                  </th>
                  <td className="px-4 py-3 text-forest">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <EnquiryForm listingTitle={van.title} />
        </aside>
      </div>
    </article>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wider text-muted">{label}</dt>
      <dd className="mt-1 font-semibold text-forest">{value}</dd>
    </div>
  );
}
