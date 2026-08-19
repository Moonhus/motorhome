import type { Motorhome } from "@/data/motorhomes";
import {
  listingBenefits,
  listingFeatureNotes,
} from "@/lib/listing-benefits";

export function ListingBenefits({ motorhome }: { motorhome: Motorhome }) {
  const chips = listingBenefits(motorhome);
  const notes = listingFeatureNotes(motorhome);

  return (
    <section className="mt-10 sm:mt-14">
      <h2 className="display text-2xl text-forest sm:text-3xl">Key benefits</h2>
      <ul className="mt-5 flex flex-wrap gap-2">
        {chips.map((chip) => (
          <li
            key={chip.id}
            className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2"
          >
            <BenefitIcon id={chip.id} />
            <span className="text-sm font-medium text-forest">{chip.label}</span>
          </li>
        ))}
      </ul>

      {notes.length > 0 ? (
        <div className="mt-10">
          <h3 className="display text-2xl text-forest">Features</h3>
          <ul className="mt-5 grid gap-2.5 sm:grid-cols-2 sm:gap-x-8">
            {notes.map((note) => (
              <li key={note} className="text-sm leading-relaxed text-muted">
                {note}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}

function BenefitIcon({ id }: { id: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-5 w-5 shrink-0 text-moss",
    "aria-hidden": true,
  };

  switch (id) {
    case "sleeps":
      return (
        <svg {...common}>
          <path d="M3 18v-5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v5" />
          <path d="M3 18h18" />
          <path d="M16 10V8a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v10" />
        </svg>
      );
    case "seats":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3" />
          <path d="M5 19a7 7 0 0 1 14 0" />
        </svg>
      );
    case "transmission":
      return (
        <svg {...common}>
          <circle cx="8" cy="8" r="2" />
          <circle cx="16" cy="8" r="2" />
          <circle cx="12" cy="16" r="2" />
          <path d="M8 10v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2" />
        </svg>
      );
    case "fuel":
      return (
        <svg {...common}>
          <path d="M7 21V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v15" />
          <path d="M7 21h10" />
          <path d="M15 10h2a2 2 0 0 1 2 2v3a1.5 1.5 0 0 0 3 0V9l-2-2" />
        </svg>
      );
    case "kitchen":
      return (
        <svg {...common}>
          <path d="M4 10h16" />
          <path d="M6 10V5" />
          <path d="M10 10V5" />
          <path d="M5 10v9h14v-9" />
        </svg>
      );
    case "bathroom":
    case "shower":
      return (
        <svg {...common}>
          <path d="M8 4h8" />
          <path d="M12 4v3" />
          <path d="M8 10h8" />
          <path d="M9 13v5" />
          <path d="M12 13v6" />
          <path d="M15 13v5" />
        </svg>
      );
    case "toilet":
      return (
        <svg {...common}>
          <path d="M8 4h5a3 3 0 0 1 3 3v3H8V4Z" />
          <path d="M6 10h12a4 4 0 0 1-4 6H10a4 4 0 0 1-4-6Z" />
          <path d="M10 16v3" />
        </svg>
      );
    case "solar":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3v2" />
          <path d="M12 19v2" />
          <path d="M5 12H3" />
          <path d="M21 12h-2" />
          <path d="m6.3 6.3 1.4 1.4" />
          <path d="m16.3 16.3 1.4 1.4" />
          <path d="m16.3 6.3-1.4 1.4" />
          <path d="m6.3 17.7 1.4-1.4" />
        </svg>
      );
    case "ac":
      return (
        <svg {...common}>
          <path d="M12 4v16" />
          <path d="M8 8h8" />
          <path d="M6 12h12" />
          <path d="M8 16h8" />
        </svg>
      );
    case "fridge":
      return (
        <svg {...common}>
          <rect x="7" y="3" width="10" height="18" rx="1.5" />
          <path d="M7 10h10" />
          <path d="M10 6v2" />
          <path d="M10 13v2" />
        </svg>
      );
    case "awning":
      return (
        <svg {...common}>
          <path d="M4 8h16" />
          <path d="M4 8c2 3 4 3 6 0" />
          <path d="M10 8c2 3 4 3 6 0" />
          <path d="M16 8c1.5 3 3 3 4 0" />
          <path d="M6 8v10" />
          <path d="M18 8v10" />
        </svg>
      );
    case "storage":
      return (
        <svg {...common}>
          <rect x="4" y="7" width="16" height="12" rx="1.5" />
          <path d="M4 11h16" />
          <path d="M9 7V5h6v2" />
        </svg>
      );
    case "washing":
      return (
        <svg {...common}>
          <rect x="5" y="4" width="14" height="16" rx="2" />
          <circle cx="12" cy="13" r="4" />
          <path d="M8 7h2" />
        </svg>
      );
    case "slideout":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="12" height="10" rx="1" />
          <path d="M15 9h5v6h-5" />
          <path d="M18 12h4" />
        </svg>
      );
    case "lithium":
      return (
        <svg {...common}>
          <rect x="7" y="6" width="10" height="14" rx="2" />
          <path d="M10 6V4h4v2" />
          <path d="m11 14 2-4v4h2l-2 4v-4h-2Z" />
        </svg>
      );
    case "heater":
      return (
        <svg {...common}>
          <path d="M8 18c0-4 8-4 8 0" />
          <path d="M9 10c1-3 5-3 6 0" />
          <path d="M12 4v3" />
          <path d="M8 21h8" />
        </svg>
      );
    case "island":
      return (
        <svg {...common}>
          <rect x="4" y="10" width="16" height="8" rx="2" />
          <path d="M8 10V8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      );
    case "inverter":
      return (
        <svg {...common}>
          <rect x="4" y="8" width="16" height="10" rx="1.5" />
          <path d="m9 13 2-3v3h2l-2 3v-3H9Z" />
        </svg>
      );
    case "licence":
      return (
        <svg {...common}>
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <circle cx="8.5" cy="12" r="1.5" />
          <path d="M13 11h5" />
          <path d="M13 14h3" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="7" />
        </svg>
      );
  }
}
