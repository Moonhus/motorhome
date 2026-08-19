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

/** Nearest thousand, e.g. 48,235 → $48k. */
export function formatPrice(value: number) {
  const thousands = Math.round(value / 1000);
  return `$${thousands.toLocaleString("en-AU")}k`;
}

export function formatKilometres(value: number) {
  return `${km.format(value)} km`;
}
