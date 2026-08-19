import assert from "node:assert/strict";
import test from "node:test";
import { getMotorhome } from "../data/motorhomes.ts";
import { listingBenefits, listingFeatureNotes } from "./listing-benefits.ts";
import { listingFaqs } from "./listing-faqs.ts";

test("lists only applicable key benefits for the KEA River", () => {
  const van = getMotorhome("2021-kea-river-m721");
  assert.ok(van);
  const labels = listingBenefits(van).map((chip) => chip.label);

  assert.deepEqual(
    ["Sleeps 6", "Seats 6", "Automatic", "Diesel", "Car licence"].every((item) =>
      labels.includes(item),
    ),
    true,
  );
  assert.ok(labels.includes("Kitchen"));
  assert.ok(labels.includes("Bathroom"));
  assert.ok(labels.includes("Shower"));
  assert.ok(labels.includes("Toilet"));
  assert.ok(labels.includes("Air conditioning"));
  assert.ok(labels.includes("Fridge"));
  assert.ok(labels.includes("Awning"));
  assert.equal(labels.includes("Slide-out"), false);
  assert.equal(labels.includes("Light Rigid"), false);
});

test("does not mark a non-slide-out Esperance as a slide-out", () => {
  const van = getMotorhome("2018-avida-esperance-c7944");
  assert.ok(van);
  const labels = listingBenefits(van).map((chip) => chip.label);
  assert.equal(labels.includes("Slide-out"), false);
  assert.ok(labels.includes("Car licence"));
});

test("marks Light Rigid and garage storage on the Navian", () => {
  const van = getMotorhome("2025-sunliner-navian-n541g");
  assert.ok(van);
  const labels = listingBenefits(van).map((chip) => chip.label);
  assert.ok(labels.includes("Light Rigid"));
  assert.ok(labels.includes("Storage"));
  assert.ok(labels.includes("Solar"));
  assert.ok(labels.includes("Slide-out"));
  assert.equal(labels.includes("Car licence"), false);
});

test("feature notes omit GVM and licence lines", () => {
  const van = getMotorhome("2021-kea-river-m721");
  assert.ok(van);
  const notes = listingFeatureNotes(van).join(" ");
  assert.equal(/GVM|car licence/i.test(notes), false);
});

test("listing FAQs stay concise and skip warranty or delivery copy", () => {
  const van = getMotorhome("2021-kea-river-m721");
  assert.ok(van);
  const faqs = listingFaqs(van);
  const questions = faqs.map((item) => item.question);
  assert.ok(questions.includes("Can I inspect the motorhome?"));
  assert.ok(questions.includes("What licence do I need?"));
  const blob = faqs.map((item) => `${item.question} ${item.answer}`).join(" ");
  assert.equal(/warranty/i.test(blob), false);
  assert.equal(/delivery today|free Brisbane delivery/i.test(blob), false);
});
