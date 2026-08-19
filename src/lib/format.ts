const aud = new Intl.NumberFormat("en-AU", {
  style: "currency",
  currency: "AUD",
  maximumFractionDigits: 0,
});

const km = new Intl.NumberFormat("en-AU");

/** Exact dollars, for structured data. */
export function formatPriceExact(value: number) {
  return aud.format(value);
}

/** Nearest thousand as full dollars, e.g. 52,490 → $52,000. */
export function formatPrice(value: number) {
  const rounded = Math.round(value / 1000) * 1000;
  return aud.format(rounded);
}

export function formatKilometres(value: number) {
  return `${km.format(value)} km`;
}
