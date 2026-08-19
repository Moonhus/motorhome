import { customerReviews } from "@/data/reviews";

export function ListingReviews() {
  return (
    <section className="mt-16">
      <h2 className="display text-2xl text-forest">Reviews</h2>
      <p className="mt-2 text-sm text-muted">
        {customerReviews.rating} on {customerReviews.source}
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
