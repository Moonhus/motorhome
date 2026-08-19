"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandMark } from "@/components/BrandMark";

const links = [
  { href: "/inventory", label: "Used Motorhomes" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative border-b border-forest/10 bg-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:gap-6 sm:px-5 sm:py-5">
        <div className="min-w-0" onClick={() => setOpen(false)}>
          <BrandMark />
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-ink md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-copper"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-forest px-4 py-2 text-cream transition-colors hover:bg-forest-deep"
          >
            Enquire
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-forest/20 text-forest md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-4 bg-current" />
            <span className="block h-0.5 w-4 bg-current" />
            <span className="block h-0.5 w-4 bg-current" />
          </span>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="flex flex-col gap-1 border-t border-forest/10 px-5 py-3 md:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-2 py-2 text-forest"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-lg px-2 py-2 font-medium text-forest"
            onClick={() => setOpen(false)}
          >
            Enquire
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
