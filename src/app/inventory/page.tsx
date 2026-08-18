import type { Metadata } from "next";
import { InventoryBrowser } from "@/components/InventoryBrowser";
import { getBrands, motorhomes } from "@/data/motorhomes";
import { formatPrice } from "@/lib/format";
import { site } from "@/lib/site";

const lowest = [...motorhomes].sort((a, b) => a.price - b.price)[0];

export const metadata: Metadata = {
  title: "Browse used motorhomes for sale in Brisbane",
  description: `Browse used motorhomes for sale in Brisbane — Avida, Sunliner, Avan and KEA from ${formatPrice(lowest.price)} drive away. Free delivery, 12-month warranty.`,
};

export default function InventoryPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
        {site.delivery} · {site.warranty}
      </p>
      <h1 className="mt-2 text-4xl font-semibold text-forest">
        Browse motorhomes
      </h1>
      <p className="mt-3 max-w-2xl text-sm text-muted">
        Compare price and kilometres. Most motorhomes are car licence. Email us
        today and we will be in touch shortly.
      </p>
      <div className="mt-8">
        <InventoryBrowser motorhomes={motorhomes} brands={getBrands()} />
      </div>
    </div>
  );
}
