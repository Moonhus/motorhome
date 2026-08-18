const pillars = [
  {
    title: "Brisbane based",
    body: "We sell used motorhomes for sale in Brisbane. Hold a car licence, email us today, and we will be in touch shortly.",
    icon: "people" as const,
  },
  {
    title: "South Australia yard",
    body: "Every motorhome listed sits at our South Australia yard. Same stock, ready for free delivery into Brisbane.",
    icon: "inspect" as const,
  },
  {
    title: "Free Brisbane delivery",
    body: "Delivery to Brisbane is included. No extra freight surprise on the drive-away price you see.",
    icon: "check" as const,
  },
  {
    title: "12-month warranty",
    body: "Every used motorhome includes a 12-month warranty, clear kilometres and a five-star handover.",
    icon: "stars" as const,
  },
];

function Icon({ name }: { name: (typeof pillars)[number]["icon"] }) {
  return (
    <span className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border-[2.5px] border-moss text-forest">
      {name === "inspect" ? (
        <span className="text-center leading-none">
          <span className="display block text-2xl">SA</span>
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
        <span className="text-center leading-none">
          <span className="display block text-xl">BNE</span>
          <span className="text-[0.65rem] font-semibold uppercase tracking-wider">
            Based
          </span>
        </span>
      ) : null}
      {name === "stars" ? (
        <span className="text-center leading-none">
          <span className="display block text-xl">12</span>
          <span className="text-[0.65rem] font-semibold uppercase tracking-wider">
            Month
          </span>
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
          Why buy a used motorhome in Brisbane here?
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
