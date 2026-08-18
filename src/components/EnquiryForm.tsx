"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

export function EnquiryForm({ listingTitle }: { listingTitle?: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const sms = String(data.get("sms") ?? "").trim();

    if (!name || !email || !sms) {
      return;
    }

    const subject = listingTitle
      ? `Enquiry: ${listingTitle}`
      : "Used motorhome enquiry";
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `SMS / mobile: ${sms}`,
      listingTitle ? `Listing: ${listingTitle}` : null,
      "Please send the van details, drive-away price and delivery options through to Brisbane / my location.",
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-moss/30 bg-white p-6 text-forest">
        <p className="display text-2xl">Thanks — we have your details.</p>
        <p className="mt-2 text-sm text-muted">
          Your mail app should have opened with your name, email and mobile. If
          it did not, write to{" "}
          <a className="underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>{" "}
          with the same three details.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-2xl border border-forest/10 bg-white p-6"
    >
      <div>
        <h2 className="display text-2xl text-forest">
          {listingTitle ? "Lock in this van" : "Enquire about a motorhome"}
        </h2>
        <p className="mt-1 text-sm text-muted">
          Name, email and mobile are required. We SMS and email you the
          drive-away price plus delivery into Brisbane or your state.
        </p>
      </div>
      <label className="text-sm">
        Name
        <input
          required
          name="name"
          autoComplete="name"
          className="mt-1 w-full rounded-lg border border-forest/15 bg-cream px-3 py-2 outline-none ring-copper/40 focus:ring-2"
        />
      </label>
      <label className="text-sm">
        Email
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          className="mt-1 w-full rounded-lg border border-forest/15 bg-cream px-3 py-2 outline-none ring-copper/40 focus:ring-2"
        />
      </label>
      <label className="text-sm">
        Mobile (SMS)
        <input
          required
          type="tel"
          name="sms"
          autoComplete="tel"
          inputMode="tel"
          minLength={8}
          placeholder="04xx xxx xxx"
          className="mt-1 w-full rounded-lg border border-forest/15 bg-cream px-3 py-2 outline-none ring-copper/40 focus:ring-2"
        />
      </label>
      <button
        type="submit"
        className="rounded-full bg-copper px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-copper-dark"
      >
        Send enquiry
      </button>
    </form>
  );
}
