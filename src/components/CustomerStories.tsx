import { customerReviews } from "@/data/reviews";
import { site } from "@/lib/site";

export function TrustFacts() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-3">
        <div>
          <p className="display text-3xl text-forest">Est. {site.established}</p>
          <p className="mt-1 text-sm text-muted">Australian motorhomes</p>
        </div>
        <div>
          <p className="display text-3xl text-forest">{customerReviews.sold}</p>
          <p className="mt-1 text-sm text-muted">Happy customers</p>
        </div>
        <div>
          <p className="display text-3xl text-forest">{customerReviews.rating}</p>
          <p className="mt-1 text-sm text-muted">Google rating</p>
        </div>
      </div>
    </section>
  );
}

export function CustomerStories() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <h2 className="display text-3xl text-forest sm:text-4xl">
        What our customers say
      </h2>
      <p className="mt-3 max-w-xl text-sm text-muted">
        ★★★★★ {customerReviews.rating} on {customerReviews.source}. Thousands of
        happy customers since {site.established}, with written reviews from
        real buyers.
      </p>
      <ul className="mt-10 grid gap-10 md:grid-cols-3">
        {customerReviews.quotes.map((review) => (
          <li key={review.name}>
            <p className="text-sm leading-relaxed text-ink/80">
              “{review.quote}”
            </p>
            <p className="mt-3 text-xs tracking-wide text-muted">
              {review.name}, {review.place}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
