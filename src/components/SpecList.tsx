import type { Motorhome } from "@/data/motorhomes";
import { formatKilometres } from "@/lib/format";

function specValue(motorhome: Motorhome, label: string) {
  return motorhome.specs.find((row) => row.label === label)?.value;
}

function Icon({ name }: { name: string }) {
  const common = "h-5 w-5 shrink-0 text-white/90";
  if (name === "licence") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden>
        <rect x="3" y="6" width="18" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="8.5" cy="12" r="1.6" fill="currentColor" />
        <path d="M12.5 11h6M12.5 14h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "chassis") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden>
        <path d="M4 14h16M6 14v3M18 14v3M7 10h10l2 4H5l2-4Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="8" cy="17.5" r="1.4" fill="currentColor" />
        <circle cx="16" cy="17.5" r="1.4" fill="currentColor" />
      </svg>
    );
  }
  if (name === "calendar") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden>
        <rect x="4" y="5" width="16" height="15" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4 9h16M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "km") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden>
        <circle cx="12" cy="13" r="7" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 13 16 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "gear") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden>
        <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 8v5l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={common} aria-hidden>
      <circle cx="9" cy="8" r="2" fill="currentColor" />
      <circle cx="15" cy="8" r="2" fill="currentColor" />
      <path d="M6 17c.4-2.4 2.4-3.6 6-3.6s5.6 1.2 6 3.6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function SpecList({ motorhome }: { motorhome: Motorhome }) {
  const rows = [
    {
      icon: "licence",
      label: motorhome.licence === "Car" ? "Car licence" : "Light Rigid licence",
    },
    { icon: "chassis", label: motorhome.chassis },
    { icon: "calendar", label: specValue(motorhome, "Build") ?? String(motorhome.year) },
    { icon: "km", label: formatKilometres(motorhome.kilometres) },
    { icon: "gear", label: motorhome.transmission },
    {
      icon: "people",
      label: `Seats ${motorhome.seatbelts} – Sleeps ${motorhome.berths}`,
    },
  ];

  return (
    <ul className="grid gap-4 rounded-2xl bg-[#2b3038] px-6 py-6 text-white">
      {rows.map((row) => (
        <li key={row.label} className="flex items-center gap-3 text-sm">
          <Icon name={row.icon} />
          <span>{row.label}</span>
        </li>
      ))}
    </ul>
  );
}
