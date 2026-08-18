import type { Metadata } from "next";
import { InventoryBrowser } from "@/components/InventoryBrowser";
import { getBrands, motorhomes } from "@/data/motorhomes";
import { formatPrice } from "@/lib/format";

const lowest = [...motorhomes].sort((a, b) => a.price - b.price)[0];

export const metadata: Metadata = {
  title: "Used motorhomes for sale in Brisbane",
  description: `Used motorhomes for sale in Brisbane — Avida, Sunliner, Avan and KEA from our South Australia yard. From ${formatPrice(lowest.price)} drive away. Free delivery, 12-month warranty, car licence layouts.`,
};

export default function InventoryPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-moss">
        Brisbane · free delivery · 12-month warranty
      </p>
      <h1 className="display mt-2 text-5xl text-forest">
        Used motorhomes for sale in Brisbane
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        Compare price and kilometres first. Avida, Sunliner, Avan and KEA at
        our South Australia yard, with free delivery to Brisbane. Most
        motorhomes are car licence. Email us today and we will be in touch
        shortly.
      </p>
      <div className="mt-10">
        <InventoryBrowser motorhomes={motorhomes} brands={getBrands()} />
      </div>
    </div>
  );
}
