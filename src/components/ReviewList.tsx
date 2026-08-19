import Image from "next/image";
import { customerReviews } from "@/data/reviews";
import { withBasePath } from "@/lib/paths";

function Stars() {
  return (
    <p className="flex gap-px text-copper" aria-label="5 stars">
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          className="h-3.5 w-3.5 fill-current"
          aria-hidden="true"
        >
          <path d="M10 1.6 12.4 7l5.9.5-4.5 3.9 1.4 5.8L10 14.6 4.8 17.2l1.4-5.8L1.7 7.5 7.6 7 10 1.6z" />
        </svg>
      ))}
    </p>
  );
}

export function ReviewList({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={
        compact
          ? "mt-8 max-h-[28rem] overflow-y-auto pr-1"
          : "mt-8 max-h-[36rem] overflow-y-auto pr-1"
      }
    >
      <ul className="space-y-7">
        {customerReviews.quotes.map((review) => (
          <li
            key={`${review.name}-${review.place}`}
            className="flex gap-4 border-b border-forest/8 pb-7 last:border-b-0 last:pb-0"
          >
            <Image
              src={withBasePath(review.photo)}
              alt=""
              width={56}
              height={56}
              className="h-14 w-14 shrink-0 rounded-full object-cover"
            />
            <div className="min-w-0">
              <Stars />
              <p className="mt-2 text-sm leading-relaxed text-ink/75">
                “{review.quote}”
              </p>
              <p className="mt-2 text-xs text-muted">
                {review.name}, {review.place}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
