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
          className="h-3 w-3 fill-current"
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
          ? "mt-6 max-h-[22rem] overflow-y-auto overscroll-contain pr-1 sm:mt-8 sm:max-h-[28rem]"
          : "mt-8 max-h-[36rem] overflow-y-auto overscroll-contain pr-1"
      }
    >
      <ul className="space-y-6">
        {customerReviews.quotes.map((review) => (
          <li
            key={`${review.name}-${review.place}`}
            className="flex gap-3 border-b border-forest/8 pb-6 last:border-b-0 last:pb-0"
          >
            <Image
              src={withBasePath(review.photo)}
              alt=""
              width={40}
              height={40}
              className="mt-0.5 h-9 w-9 shrink-0 rounded-full object-cover"
            />
            <div className="min-w-0">
              <Stars />
              <p className="mt-1.5 text-sm leading-relaxed text-ink/75">
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
