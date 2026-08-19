export function Faq({
  items,
  title = "Common questions",
}: {
  items: readonly { question: string; answer: string }[];
  title?: string;
}) {
  return (
    <section className="mt-14 sm:mt-16">
      <h2 className="display text-2xl text-forest sm:text-3xl">{title}</h2>
      <div className="mt-5 divide-y divide-forest/10 border-y border-forest/10 sm:mt-6">
        {items.map((item) => (
          <details key={item.question} className="group">
            <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-3.5 text-left text-[15px] font-medium text-forest marker:content-none sm:gap-6 sm:py-4 sm:text-base [&::-webkit-details-marker]:hidden">
              <span>{item.question}</span>
              <span
                aria-hidden="true"
                className="shrink-0 text-lg font-light leading-none text-muted transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="pb-4 pr-8 text-sm leading-relaxed text-muted sm:pr-10">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
