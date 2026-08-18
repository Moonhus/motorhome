export function Faq({
  items,
  title = "Common questions",
}: {
  items: readonly { question: string; answer: string }[];
  title?: string;
}) {
  return (
    <section className="mt-16">
      <h2 className="display text-2xl text-forest sm:text-3xl">{title}</h2>
      <div className="mt-6 divide-y divide-forest/10 border-y border-forest/10">
        {items.map((item) => (
          <details key={item.question} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-left font-medium text-forest marker:content-none [&::-webkit-details-marker]:hidden">
              <span>{item.question}</span>
              <span
                aria-hidden="true"
                className="text-lg font-light leading-none text-muted transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="pb-4 pr-10 text-sm leading-relaxed text-muted">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
