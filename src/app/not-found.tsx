import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-moss">
        404
      </p>
      <h1 className="display mt-3 text-5xl text-forest">That listing is gone.</h1>
      <p className="mt-4 text-muted">
        The van may have sold, or the link is out of date.
      </p>
      <Link
        href="/inventory"
        className="mt-8 inline-flex rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream"
      >
        Back to inventory
      </Link>
    </div>
  );
}
