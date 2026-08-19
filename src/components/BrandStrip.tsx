const makers = [
  { name: "Avida", note: "Motorhomes" },
  { name: "Sunliner", note: "Motorhomes" },
  { name: "Avan", note: "Ovation" },
  { name: "KEA", note: "Motorhomes" },
];

export function BrandStrip() {
  return (
    <section className="border-y border-forest/10 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <p className="text-center text-xs tracking-[0.2em] text-muted uppercase">
          Australian makers we stock
        </p>
        <ul className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {makers.map((maker) => (
            <li key={maker.name} className="text-center">
              <p className="display text-2xl text-forest sm:text-3xl">{maker.name}</p>
              <p className="mt-1 text-[11px] tracking-[0.18em] text-muted uppercase">
                {maker.note}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
