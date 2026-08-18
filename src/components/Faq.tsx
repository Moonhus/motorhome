export function Faq({
  items,
  title = "Common questions",
}: {
  items: readonly { question: string; answer: string }[];
  title?: string;
}) {
  return (
    <section className="mt-14">
      <h2 className="display text-3xl text-forest">{title}</h2>
      <dl className="mt-6 grid gap-4">
        {items.map((item) => (
          <div
            key={item.question}
            className="rounded-2xl border border-forest/10 bg-white p-5"
          >
            <dt className="font-semibold text-forest">{item.question}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted">
              {item.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
