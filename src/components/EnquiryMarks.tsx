function PeopleMark() {
  return (
    <svg viewBox="0 0 72 72" className="h-10 w-10 sm:h-12 sm:w-12" aria-hidden>
      <rect width="72" height="72" rx="14" fill="#16362c" />
      <g fill="#f4efe6">
        <circle cx="36" cy="22" r="6" />
        <path d="M24 41c0-6.8 5.2-11 12-11s12 4.2 12 11v2H24v-2Z" />
        <circle cx="18" cy="26" r="4.6" />
        <path d="M10 42c0-5.2 3.8-8.4 8.2-8.4S26.4 36.8 26.4 42v1.6H10V42Z" />
        <circle cx="54" cy="26" r="4.6" />
        <path d="M45.6 42c0-5.2 3.8-8.4 8.2-8.4S62 36.8 62 42v1.6H45.6V42Z" />
      </g>
      <g fill="#c45c2d">
        {[18, 27, 36, 45, 54].map((x) => (
          <path
            key={x}
            d={`M${x} 52.2l1.15 2.35 2.6.22-2 1.7.62 2.52L${x} 57.5l-2.37 1.49.62-2.52-2-1.7 2.6-.22z`}
          />
        ))}
      </g>
    </svg>
  );
}

function TruckMark() {
  return (
    <svg viewBox="0 0 72 72" className="h-10 w-10 sm:h-12 sm:w-12" aria-hidden>
      <rect width="72" height="72" rx="14" fill="#16362c" />
      <g fill="none" stroke="#f4efe6" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round">
        <path d="M10 42V26h30v16" />
        <path d="M40 30h12l8 9v9H40V30Z" />
        <path d="M14 34h22" />
      </g>
      <circle cx="22" cy="47" r="4.4" fill="#f4efe6" />
      <circle cx="52" cy="47" r="4.4" fill="#f4efe6" />
      <circle cx="22" cy="47" r="1.7" fill="#16362c" />
      <circle cx="52" cy="47" r="1.7" fill="#16362c" />
    </svg>
  );
}

function WarrantyMark() {
  return (
    <svg viewBox="0 0 72 72" className="h-10 w-10 sm:h-12 sm:w-12" aria-hidden>
      <polygon
        fill="#16362c"
        points="36,2 40,10 49,6 50,16 60,16 56,24 66,30 58,36 66,42 56,48 60,56 50,56 49,66 40,62 36,70 32,62 23,66 22,56 12,56 16,48 6,42 14,36 6,30 16,24 12,16 22,16 23,6 32,10"
      />
      <circle cx="36" cy="36" r="20" fill="none" stroke="#e7dcc8" strokeWidth="1.4" />
      <rect x="12" y="32" width="48" height="10" rx="1" fill="#c45c2d" />
      <path
        d="M36 16.5 38.1 21.8 44 22.4 39.8 26.2 41.1 32 36 28.8 30.9 32 32.2 26.2 28 22.4 33.9 21.8Z"
        fill="#f4efe6"
      />
    </svg>
  );
}

const marks = [
  { label: "Satisfaction guaranteed", Icon: PeopleMark },
  { label: "Free delivery", Icon: TruckMark },
  { label: "12-month warranty", Icon: WarrantyMark },
];

export function EnquiryMarks({ compact = false }: { compact?: boolean }) {
  return (
    <ul
      className={`grid grid-cols-3 ${compact ? "gap-2" : "gap-5"}`}
      aria-label="Satisfaction, free delivery and 12-month warranty"
    >
      {marks.map(({ label, Icon }) => (
        <li key={label} className="flex flex-col items-center text-center">
          <Icon />
          <p
            className={`mt-2 font-medium leading-snug text-forest ${
              compact ? "text-[0.65rem]" : "text-xs"
            }`}
          >
            {label}
          </p>
        </li>
      ))}
    </ul>
  );
}
