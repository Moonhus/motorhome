"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "/inventory", label: "Inventory" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-forest/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
        <Link href="/" className="group min-w-0" onClick={() => setOpen(false)}>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-moss">
            {site.legalName}
          </p>
          <p className="display text-xl leading-none text-forest sm:text-2xl">
            Commercial Motorhomes
          </p>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-forest md:flex">
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
            href="/inventory"
            className="rounded-full bg-forest px-4 py-2 text-cream transition-colors hover:bg-forest-deep"
          >
            View stock
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-forest/20 text-forest md:hidden"
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
        </nav>
      ) : null}
    </header>
  );
}
