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
    <Link href="/" className="flex min-w-0 items-center gap-3">
      <Image
        src={withBasePath("/images/logo-heart.png")}
        alt=""
        width={compact ? 44 : 56}
        height={compact ? 44 : 56}
        className="h-11 w-11 shrink-0 object-contain sm:h-14 sm:w-14"
        priority
      />
      <span className="min-w-0">
        <span
          className={`block text-[0.62rem] font-semibold uppercase tracking-[0.22em] ${onDark ? "text-sand/70" : "text-moss"}`}
        >
          {site.legalName}
        </span>
        <span
          className={`display block text-xl leading-none sm:text-2xl ${onDark ? "text-cream" : "text-forest"}`}
        >
          {site.name}
        </span>
        {compact ? null : (
          <span className={`mt-1 hidden text-xs sm:block ${onDark ? "text-sand/70" : "text-muted"}`}>
            {site.tagline}
          </span>
        )}
      </span>
    </Link>
  );
}
