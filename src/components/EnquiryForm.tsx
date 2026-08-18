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
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !sms) {
      return;
    }

    const subject = listingTitle
      ? `Motorhome enquiry: ${listingTitle}`
      : "Used motorhome enquiry — Brisbane";
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `SMS / mobile: ${sms}`,
      listingTitle ? `Motorhome: ${listingTitle}` : null,
      message ? `Message:\n${message}` : "Message: (none)",
      "",
      "Please confirm this motorhome, kilometres, free Brisbane delivery and the 12-month warranty. I hold / can drive on a car licence unless noted on the listing.",
    ]
      .filter((line) => line !== null)
      .join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-moss/30 bg-white p-6 text-forest">
        <p className="display text-2xl">Thanks — we will be in touch shortly.</p>
        <p className="mt-2 text-sm text-muted">
          Your mail app should have opened. If it did not, email{" "}
          <a className="underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>{" "}
          today with your name, mobile and a short message. We reply soon.
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
          {listingTitle
            ? "Enquire about this motorhome"
            : "Enquire about a motorhome"}
        </h2>
        <p className="mt-1 text-sm text-muted">
          Hold a car licence? Email us today. Name, email and mobile are
          required — add a message with anything else you want us to know. We
          will be in touch shortly about free Brisbane delivery and the
          12-month warranty.
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
      <label className="text-sm">
        Message
        <textarea
          name="message"
          rows={4}
          placeholder="Questions, timing, extras you want on the motorhome…"
          className="mt-1 w-full resize-y rounded-lg border border-forest/15 bg-cream px-3 py-2 outline-none ring-copper/40 focus:ring-2"
        />
      </label>
      <button
        type="submit"
        className="rounded-full bg-copper px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-copper-dark"
      >
        Email us today
      </button>
    </form>
  );
}
