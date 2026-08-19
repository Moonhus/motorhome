import { ReviewList } from "@/components/ReviewList";
import { customerReviews } from "@/data/reviews";
import { site } from "@/lib/site";

export function TrustFacts() {
  return (
    <section className="bg-white">
      <p className="mx-auto max-w-6xl px-5 py-8 text-sm text-muted">
        Est. {site.established}
        <span className="mx-2 text-forest/15">·</span>
        {customerReviews.sold} customers
        <span className="mx-2 text-forest/15">·</span>
        {customerReviews.rating} on {customerReviews.source}
      </p>
    </section>
  );
}

export function CustomerStories() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <h2 className="display text-2xl text-forest">Reviews</h2>
      <p className="mt-2 text-sm text-muted">
        {customerReviews.rating} on {customerReviews.source}
      </p>
      <ReviewList />
    </section>
  );
}
