const aud = new Intl.NumberFormat("en-AU", {
  style: "currency",
  currency: "AUD",
  maximumFractionDigits: 0,
});

const km = new Intl.NumberFormat("en-AU");

export function formatPrice(value: number) {
  return aud.format(value);
}

export function formatKilometres(value: number) {
  return `${km.format(value)} km`;
}
