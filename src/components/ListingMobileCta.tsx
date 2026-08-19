"use client";

import { useEffect, useState } from "react";

export function ListingMobileCta({
  title,
  price,
}: {
  title: string;
  price: string;
}) {
  const [formInView, setFormInView] = useState(false);

  useEffect(() => {
    const target = document.getElementById("listing-enquire");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFormInView(entry.isIntersecting),
      { threshold: 0, rootMargin: "0px 0px -15% 0px" },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-forest/10 bg-cream/95 px-4 py-3 shadow-[0_-8px_24px_rgba(13,35,28,0.06)] backdrop-blur-md transition duration-200 lg:hidden ${
        formInView
          ? "pointer-events-none translate-y-full opacity-0"
          : "translate-y-0 opacity-100"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-xs text-muted">{title}</p>
          <p className="display text-xl leading-tight text-forest">{price}</p>
        </div>
        <a
          href="#enquire"
          className="inline-flex shrink-0 rounded-full bg-copper px-5 py-2.5 text-sm font-semibold text-white"
        >
          Enquire
        </a>
      </div>
    </div>
  );
}
