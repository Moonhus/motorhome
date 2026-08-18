import { site } from "@/lib/site";

export function TrustBar({ onDark = false }: { onDark?: boolean }) {
  const muted = onDark ? "text-sand/80" : "text-muted";
  const strong = onDark ? "text-cream" : "text-forest";

  return (
    <div className={`flex flex-wrap items-center gap-x-6 gap-y-2 text-sm ${muted}`}>
      <p className={`inline-flex items-center gap-1 font-semibold ${strong}`}>
        <span className="text-copper" aria-hidden>
          ★★★★★
        </span>
        {site.rating} on Google
      </p>
      <p>
        <span className={`font-semibold ${strong}`}>{site.sold}</span> motorhomes
        sold
      </p>
      <p>Mostly five-star reviews</p>
    </div>
  );
}
