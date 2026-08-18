const pillars = [
  {
    title: "Experience",
    body: "Every motorhome on this site is inspected at our Brisbane yard before it is listed. What you read is what is on the ground.",
    icon: "inspect",
  },
  {
    title: "Personalised viewing",
    body: "We work around your timetable. Book a private walkthrough, take the van for a run, and ask the awkward questions with the keys in your hand.",
    icon: "check",
  },
  {
    title: "People",
    body: "Based in Brisbane, Queensland, we look after buyers across South East Queensland and northern NSW who want a real handover, not a classifieds ad.",
    icon: "people",
  },
  {
    title: "Five-star service",
    body: "Clear kilometres, honest specs, drive-away prices and a handover we would be proud to put our name on. That is the standard we hold ourselves to.",
    icon: "stars",
  },
] as const;

function Icon({ name }: { name: (typeof pillars)[number]["icon"] }) {
  return (
    <span className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border-[2.5px] border-moss text-forest">
      {name === "inspect" ? (
        <span className="text-center leading-none">
          <span className="display block text-2xl">QLD</span>
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
