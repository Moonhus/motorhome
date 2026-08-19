import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/paths";
import { site } from "@/lib/site";

export function BrandMark({
  compact = false,
}: {
  compact?: boolean;
  onDark?: boolean;
}) {
  const size = compact ? 56 : 64;

  return (
    <Link href="/" className="inline-flex shrink-0 items-center" aria-label={site.name}>
      <Image
        src={withBasePath("/images/logo-australia.png")}
        alt={site.name}
        width={size}
        height={size}
        className={`rounded-xl object-contain ${compact ? "h-14 w-14" : "h-16 w-16"}`}
        priority
      />
    </Link>
  );
}
