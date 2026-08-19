"use client";

import { FormEvent, useState } from "react";
import { EnquiryMarks } from "@/components/EnquiryMarks";
import { site } from "@/lib/site";

export function EnquiryForm({
  listingTitle,
  variant = "default",
}: {
  listingTitle?: string;
  variant?: "default" | "compact";
}) {
  const [sent, setSent] = useState(false);
  const compact = variant === "compact";

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
    ]
      .filter((line) => line !== null)
      .join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className={compact ? "pt-2 text-forest" : "rounded-2xl border border-moss/30 bg-white p-6 text-forest"}>
        <p className="display text-2xl">Thanks — we will be in touch shortly.</p>
        <p className="mt-2 text-sm text-muted">
          Your mail app should have opened. If it did not, email{" "}
          <a className="underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>{" "}
          with your name and mobile.
        </p>
      </div>
    );
  }

  const fieldClass = compact
    ? "mt-1 w-full border-0 border-b border-forest/15 bg-transparent px-0 py-2 outline-none ring-0 focus:border-copper"
    : "mt-1 w-full rounded-lg border border-forest/15 bg-cream px-3 py-2 outline-none ring-copper/40 focus:ring-2";

  return (
    <form
      id="enquire"
      onSubmit={handleSubmit}
      className={compact ? "grid gap-3" : "grid gap-4 rounded-2xl border border-forest/10 bg-white p-6"}
    >
      <div>
        <h2 className={`display text-forest ${compact ? "text-xl" : "text-2xl"}`}>
          {listingTitle
            ? "Enquire about this motorhome"
            : "Enquire about a motorhome"}
        </h2>
        <p className="mt-1 text-sm text-muted">
          {compact
            ? "Interested? Send us your details and we’ll be in touch shortly."
            : "Hold a car licence? Email us today. Name, email and mobile are required — add a message with anything else you want us to know."}
        </p>
      </div>
      <label className="text-sm">
        Name
        <input
          required
          name="name"
          autoComplete="name"
          className={fieldClass}
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
          className={fieldClass}
        />
      </label>
      <label className="text-sm">
        Mobile
        <input
          required
          type="tel"
          name="sms"
          autoComplete="tel"
          inputMode="tel"
          minLength={8}
          placeholder="04xx xxx xxx"
          className={fieldClass}
        />
      </label>
      <label className="text-sm">
        Message <span className="text-muted">(optional)</span>
        <textarea
          name="message"
          rows={compact ? 2 : 4}
          className={fieldClass}
        />
      </label>
      <button
        type="submit"
        className={`rounded-full bg-copper px-5 text-sm font-semibold text-white transition-colors hover:bg-copper-dark ${
          compact ? "mt-1 py-3.5" : "py-3"
        }`}
      >
        {compact ? "Enquire Now" : "Email us today"}
      </button>
      <div className={compact ? "mt-5 border-t border-forest/10 pt-4" : "mt-6 border-t border-forest/10 pt-5"}>
        <EnquiryMarks compact={compact} />
      </div>
    </form>
  );
}
