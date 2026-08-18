const pillars = [
  {
    title: "NSW stock",
    body: "Every motorhome listed here sits at our Bennetts Green, NSW yard. Same vans, ready for delivery when you are.",
    icon: "inspect",
  },
  {
    title: "Brisbane delivery",
    body: "Send your name and we will quote delivery into Brisbane and across Australia. No yard visit required to start.",
    icon: "check",
  },
  {
    title: "People",
    body: "Australian Motor Homes Pty Ltd, covering Queensland buyers who want NSW range without the drive down first.",
    icon: "people",
  },
  {
    title: "Five-star service",
    body: "Clear kilometres, honest specs, drive-away prices and a handover we would be proud to put our name on.",
    icon: "stars",
  },
] as const;

function Icon({ name }: { name: (typeof pillars)[number]["icon"] }) {
  return (
    <span className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border-[2.5px] border-moss text-forest">
      {name === "inspect" ? (
        <span className="text-center leading-none">
          <span className="display block text-2xl">NSW</span>
          <span className="text-[0.65rem] font-semibold uppercase tracking-wider">
            Yard
          </span>
        </span>
      ) : null}
      {name === "check" ? (
        <svg viewBox="0 0 32 32" className="h-9 w-9" aria-hidden>
          <path
            d="M8 16.5 13.2 22 24 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
      {name === "people" ? (
        <svg viewBox="0 0 32 32" className="h-9 w-9" aria-hidden>
          <circle cx="16" cy="10" r="3.2" fill="currentColor" />
          <circle cx="8.5" cy="12" r="2.4" fill="currentColor" />
          <circle cx="23.5" cy="12" r="2.4" fill="currentColor" />
          <path
            d="M7 24c.4-3.2 3.2-5 9-5s8.6 1.8 9 5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ) : null}
      {name === "stars" ? (
        <span className="text-lg tracking-tight text-copper" aria-hidden>
          ★★★★★
        </span>
      ) : null}
    </span>
  );
}

export function WhyUs() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="display text-center text-4xl text-forest sm:text-5xl">
          Why Commercial Motorhomes?
        </h2>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item) => (
            <div key={item.title} className="text-center">
              <Icon name={item.icon} />
              <h3 className="text-lg font-bold text-forest">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
