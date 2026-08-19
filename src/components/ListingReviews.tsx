import { customerReviews } from "@/data/reviews";

export function ListingReviews() {
  return (
    <section className="mt-16">
      <h2 className="display text-2xl text-forest sm:text-3xl">
        What our customers say
      </h2>
      <p className="mt-3 text-sm text-muted">
        <span className="text-copper" aria-hidden="true">
          ★★★★★
        </span>{" "}
        <span className="font-medium text-forest">{customerReviews.rating}</span>{" "}
        on {customerReviews.source}
        <span className="mx-2 text-forest/20">·</span>
        {customerReviews.sold} motorhomes sold
      </p>
      <ul className="mt-8 grid gap-8 md:grid-cols-3">
        {customerReviews.quotes.map((review) => (
          <li key={review.name}>
            <p className="text-sm leading-relaxed text-ink/80">
              “{review.quote}”
            </p>
            <p className="mt-3 text-xs font-medium tracking-wide text-muted">
              {review.name}, {review.place}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
