import type { Motorhome } from "@/data/motorhomes";

export type InventoryFilters = {
  query: string;
  brand: string;
  licence: "" | "Car" | "Light Rigid";
  sort: "newest" | "price-asc" | "price-desc" | "km";
};

export function filterMotorhomes(
  items: Motorhome[],
  filters: InventoryFilters,
): Motorhome[] {
  const query = filters.query.trim().toLowerCase();

  const filtered = items.filter((item) => {
    const matchesBrand = !filters.brand || item.brand === filters.brand;
    const matchesLicence = !filters.licence || item.licence === filters.licence;
    const haystack = `${item.title} ${item.brand} ${item.model} ${item.chassis} ${item.stockNumber}`.toLowerCase();
    const matchesQuery = !query || haystack.includes(query);
    return matchesBrand && matchesLicence && matchesQuery;
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
