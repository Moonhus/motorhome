"use client";

import { useMemo, useState } from "react";
import type { Motorhome } from "@/data/motorhomes";
import { ListingCard } from "@/components/ListingCard";
import {
  filterMotorhomes,
  type InventoryFilters,
} from "@/lib/inventory";

export function InventoryBrowser({
  motorhomes,
  brands,
}: {
  motorhomes: Motorhome[];
  brands: string[];
}) {
  const [filters, setFilters] = useState<InventoryFilters>({
    query: "",
    brand: "",
    licence: "",
    sort: "newest",
  });

  const results = useMemo(
    () => filterMotorhomes(motorhomes, filters),
    [motorhomes, filters],
  );

  return (
    <div>
      <form
        className="mb-6 grid gap-4 rounded-[1.6rem] bg-white p-5 sm:grid-cols-2 lg:grid-cols-4"
        onSubmit={(event) => event.preventDefault()}
      >
        <label className="block text-sm">
          <span className="mb-1 block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted">
            Search
          </span>
          <input
            type="search"
            value={filters.query}
            onChange={(event) =>
              setFilters((current) => ({ ...current, query: event.target.value }))
            }
            placeholder="Motorhome, chassis, stock no."
            className="w-full rounded-lg border border-forest/15 bg-cream px-3 py-2 text-forest outline-none ring-copper/40 focus:ring-2"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted">
            Brand
          </span>
          <select
            value={filters.brand}
            onChange={(event) =>
              setFilters((current) => ({ ...current, brand: event.target.value }))
            }
            className="w-full rounded-lg border border-forest/15 bg-cream px-3 py-2 text-forest outline-none ring-copper/40 focus:ring-2"
          >
            <option value="">All brands</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="mb-1 block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted">
            Licence
          </span>
          <select
            value={filters.licence}
            onChange={(event) =>
              setFilters((current) => ({
                ...current,
                licence: event.target.value as InventoryFilters["licence"],
              }))
            }
            className="w-full rounded-lg border border-forest/15 bg-cream px-3 py-2 text-forest outline-none ring-copper/40 focus:ring-2"
          >
            <option value="">All licences</option>
            <option value="Car">Car licence</option>
            <option value="Light Rigid">Light Rigid</option>
          </select>
        </label>
        <label className="block text-sm">
          <span className="mb-1 block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted">
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
            className="w-full rounded-lg border border-forest/15 bg-cream px-3 py-2 text-forest outline-none ring-copper/40 focus:ring-2"
          >
            <option value="newest">Newest first</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
            <option value="km">Lowest kilometres</option>
          </select>
        </label>
      </form>

      <p className="mb-5 text-sm text-muted">
        {results.length} motorhome{results.length === 1 ? "" : "s"} at our South
        Australia yard
      </p>

      {results.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-forest/20 bg-white p-10 text-center text-muted">
          Nothing matches those filters. Try another brand or clear the search.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {results.map((motorhome) => (
            <ListingCard key={motorhome.slug} motorhome={motorhome} />
          ))}
        </div>
      )}
    </div>
  );
}
