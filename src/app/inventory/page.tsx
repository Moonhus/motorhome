import type { Metadata } from "next";
import { Suspense } from "react";
import { InventoryBrowser } from "@/components/InventoryBrowser";
import { getBrands, motorhomes } from "@/data/motorhomes";

export const metadata: Metadata = {
  title: "Available motorhomes",
  description:
    "Browse current Avida, Sunliner, Avan and KEA motorhomes. Compare layouts, then enquire.",
};

export default function InventoryPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <h1 className="display text-5xl text-forest">Available stock</h1>
      <p className="mt-3 max-w-xl text-muted">
        Current motorhomes, ready to view.
      </p>
      <div className="mt-10">
        <Suspense>
          <InventoryBrowser motorhomes={motorhomes} brands={getBrands()} />
        </Suspense>
      </div>
    </div>
  );
}
