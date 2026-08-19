import type { Metadata } from "next";
import { Suspense } from "react";
import { InventoryBrowser } from "@/components/InventoryBrowser";
import { motorhomes } from "@/data/motorhomes";

export const metadata: Metadata = {
  title: "Available motorhomes",
  description:
    "Browse current Avida, Sunliner, Avan and KEA motorhomes. Compare layouts, then enquire.",
};

export default function InventoryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-5 sm:py-14">
      <h1 className="display text-4xl text-forest sm:text-5xl">Available stock</h1>
      <p className="mt-3 max-w-xl text-muted">
        Current motorhomes, ready to view.
      </p>
      <div className="mt-10">
        <Suspense>
          <InventoryBrowser motorhomes={motorhomes} />
        </Suspense>
      </div>
    </div>
  );
}
