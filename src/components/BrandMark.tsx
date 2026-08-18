import Link from "next/link";
import { site } from "@/lib/site";

export function BrandMark({
  compact = false,
  onDark = false,
}: {
  compact?: boolean;
  onDark?: boolean;
}) {
  return (
    <Link href="/" className="min-w-0">
      <span
        className={`display block font-bold leading-none ${compact ? "text-2xl sm:text-[1.7rem]" : "text-3xl"} ${onDark ? "text-cream" : "text-forest"}`}
      >
        {site.name}
      </span>
    </Link>
  );
}
