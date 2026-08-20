"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Motorhome } from "@/data/motorhomes";
import { ListingCard } from "@/components/ListingCard";
import {
  filterMotorhomes,
  type InventoryFilters,
  type InventoryRange,
} from "@/lib/inventory";

const rangeLabels: Record<InventoryRange, string> = {
  compact: "Compact",
  family: "Family Class C",
  luxury: "Luxury touring",
};

function isRange(value: string | null): value is InventoryRange {
  return value === "compact" || value === "family" || value === "luxury";
}

export function InventoryBrowser({
  motorhomes,
}: {
  motorhomes: Motorhome[];
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const rangeFromUrl = searchParams.get("range");
  const range = isRange(rangeFromUrl) ? rangeFromUrl : "";

  const [filters, setFilters] = useState<Pick<InventoryFilters, "query" | "sort">>({
    query: "",
    sort: "newest",
  });

  const results = useMemo(
    () =>
      filterMotorhomes(motorhomes, {
        query: filters.query,
        brand: "",
        licence: "",
        range,
        sort: filters.sort,
      }),
    [motorhomes, filters, range],
  );

  return (
    <div>
      <form
        className="mb-8 grid gap-4 sm:max-w-xl sm:grid-cols-2"
        onSubmit={(event) => event.preventDefault()}
      >
        <label className="block text-sm">
          <span className="mb-1 block text-xs tracking-wide text-muted">
            Search
          </span>
          <input
            type="search"
            value={filters.query}
            onChange={(event) =>
              setFilters((current) => ({ ...current, query: event.target.value }))
            }
            placeholder="Model or stock no."
            className="w-full border-0 border-b border-forest/15 bg-transparent px-0 py-2 text-base text-forest outline-none focus:border-copper"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block text-xs tracking-wide text-muted">
            Sort
          </span>
          <select
            value={filters.sort}
            onChange={(event) =>
              setFilters((current) => ({
                ...current,
                sort: event.target.value as InventoryFilters["sort"],
              }))
            }
            className="w-full border-0 border-b border-forest/15 bg-transparent px-0 py-2 text-base text-forest outline-none focus:border-copper"
          >
            <option value="newest">Newest first</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
            <option value="km">Lowest kilometres</option>
          </select>
        </label>
      </form>

      <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-muted">
        <p>
          {results.length} motorhome{results.length === 1 ? "" : "s"}
        </p>
        {range ? (
          <button
            type="button"
            onClick={() => router.replace(pathname)}
            className="rounded-full border border-forest/15 px-3 py-1 text-forest"
          >
            {rangeLabels[range]} ×
          </button>
        ) : null}
      </div>

      {results.length === 0 ? (
        <p className="py-12 text-center text-muted">
          Nothing matches those filters.
        </p>
      ) : (
        <div className="grid min-w-0 gap-10 sm:grid-cols-2 xl:grid-cols-3">
          {results.map((motorhome) => (
            <ListingCard key={motorhome.slug} motorhome={motorhome} />
          ))}
        </div>
      )}
    </div>
  );
}
