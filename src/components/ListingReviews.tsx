import { ReviewList } from "@/components/ReviewList";
import { customerReviews } from "@/data/reviews";

export function ListingReviews() {
  return (
    <section className="mt-16">
      <h2 className="display text-2xl text-forest">Reviews</h2>
      <p className="mt-2 text-sm text-muted">
        {customerReviews.rating} on {customerReviews.source}
        <span className="mx-2 text-forest/15">·</span>
        {customerReviews.sold} sold
      </p>
      <ReviewList compact />
    </section>
  );
}
