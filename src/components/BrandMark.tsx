import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/paths";
import { site } from "@/lib/site";

export function BrandMark({
  compact = false,
  onDark = false,
}: {
  compact?: boolean;
  onDark?: boolean;
}) {
  return (
    <Link
      href="/"
      className="inline-flex min-w-0 items-center gap-3 sm:gap-4"
      aria-label={site.name}
    >
      <Image
        src={withBasePath("/images/logo-australia.png")}
        alt=""
        width={512}
        height={471}
        className={`w-auto shrink-0 object-contain ${
          compact ? "h-12 sm:h-16" : "h-12 sm:h-[4.5rem] md:h-24 lg:h-28"
        } ${onDark ? "brightness-0 invert" : ""}`}
        priority
      />
      <span
        className={`display min-w-0 font-semibold leading-[0.92] tracking-[-0.02em] ${
          compact
            ? "text-lg sm:text-2xl"
            : "text-[1.35rem] sm:text-[1.65rem] md:text-4xl lg:text-5xl"
        } ${onDark ? "text-cream" : "text-forest"}`}
      >
        <span className="block">Commercial</span>
        <span className="block">Motorhomes</span>
      </span>
    </Link>
  );
}
