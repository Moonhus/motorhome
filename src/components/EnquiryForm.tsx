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
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = listingTitle
      ? `Enquiry: ${listingTitle}`
      : "Motorhome enquiry";
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      listingTitle ? `Listing: ${listingTitle}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-moss/30 bg-white p-6 text-forest">
        <p className="display text-2xl">Thanks — we will be in touch.</p>
        <p className="mt-2 text-sm text-muted">
          Your mail app should have opened. If it did not, write to{" "}
          <a className="underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
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
        <h2 className="display text-2xl text-forest">Enquire about this van</h2>
        <p className="mt-1 text-sm text-muted">
          Viewings at our Brisbane yard are by appointment.
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
          className="mt-1 w-full rounded-lg border border-forest/15 bg-cream px-3 py-2 outline-none ring-copper/40 focus:ring-2"
        />
      </label>
      <label className="text-sm">
        Phone
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          className="mt-1 w-full rounded-lg border border-forest/15 bg-cream px-3 py-2 outline-none ring-copper/40 focus:ring-2"
        />
      </label>
      <label className="text-sm">
        Message
        <textarea
          required
          name="message"
          rows={4}
          defaultValue={
            listingTitle
              ? `Hi, I would like to book a viewing of the ${listingTitle}.`
              : "Hi, I would like to book a yard viewing."
          }
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
