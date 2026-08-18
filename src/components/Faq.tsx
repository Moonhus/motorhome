export function Faq({
  items,
  title = "Frequently Asked Questions",
}: {
  items: readonly { question: string; answer: string }[];
  title?: string;
}) {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-copper">{title}</h2>
      <dl className="mt-8 grid gap-8">
        {items.map((item) => (
          <div key={item.question}>
            <dt className="font-semibold text-ink">
              <span className="text-copper">Q: </span>
              {item.question}
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-ink/80">
              <span className="font-semibold">A: </span>
              {item.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
