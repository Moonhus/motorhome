import type { Metadata } from "next";
import { InventoryBrowser } from "@/components/InventoryBrowser";
import { getBrands, motorhomes } from "@/data/motorhomes";

export const metadata: Metadata = {
  title: "Inventory",
  description:
    "Current second-hand motorhome stock in NSW, with delivery to Brisbane: KEA, Avida, Avan and Sunliner.",
};

export default function InventoryPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-moss">
        NSW stock
      </p>
      <h1 className="display mt-2 text-5xl text-forest">Inventory</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Motorhomes at Bennetts Green, NSW, with delivery into Brisbane and
        nationwide. Filter by brand or search a model. Prices are in AUD, drive
        away.
      </p>
      <div className="mt-10">
        <InventoryBrowser motorhomes={motorhomes} brands={getBrands()} />
      </div>
    </div>
  );
}
