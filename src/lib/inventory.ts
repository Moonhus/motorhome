import type { Motorhome } from "@/data/motorhomes";

export type InventoryRange = "compact" | "family" | "luxury";

export type InventoryFilters = {
  query: string;
  brand: string;
  licence: "" | "Car" | "Light Rigid" | "Medium Rigid";
  range: "" | InventoryRange;
  sort: "newest" | "price-asc" | "price-desc" | "km";
};

export function motorhomeRange(item: Motorhome): InventoryRange {
  if (item.licence !== "Car" || item.price >= 145000) {
    return "luxury";
  }
  if (
    item.berths <= 2 ||
    (item.lengthMetres <= 7.5 && item.berths <= 4 && item.price < 130000)
  ) {
    return "compact";
  }
  return "family";
}

export function filterMotorhomes(
  items: Motorhome[],
  filters: InventoryFilters,
): Motorhome[] {
  const query = filters.query.trim().toLowerCase();

  const filtered = items.filter((item) => {
    const matchesBrand = !filters.brand || item.brand === filters.brand;
    const matchesLicence = !filters.licence || item.licence === filters.licence;
    const matchesRange = !filters.range || motorhomeRange(item) === filters.range;
    const haystack = `${item.title} ${item.brand} ${item.model} ${item.chassis} ${item.stockNumber}`.toLowerCase();
    const matchesQuery = !query || haystack.includes(query);
    return matchesBrand && matchesLicence && matchesRange && matchesQuery;
  });

  const sorted = [...filtered];
  switch (filters.sort) {
    case "price-asc":
      sorted.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      sorted.sort((a, b) => b.price - a.price);
      break;
    case "km":
      sorted.sort((a, b) => a.kilometres - b.kilometres);
      break;
    default:
      sorted.sort((a, b) => b.year - a.year || a.price - b.price);
  }

  return sorted;
}
