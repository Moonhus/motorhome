import assert from "node:assert/strict";
import test from "node:test";
import { driveAway, driveAway25, motorhomes } from "../data/motorhomes.ts";
import { filterMotorhomes } from "./inventory.ts";

test("filters by brand", () => {
  const result = filterMotorhomes(motorhomes, {
    query: "",
    brand: "Avida",
    licence: "",
    range: "",
    sort: "newest",
  });
  assert.equal(result.length, 7);
  assert.ok(result.every((item) => item.brand === "Avida"));
});

test("filters by search query across title and stock number", () => {
  const byModel = filterMotorhomes(motorhomes, {
    query: "ovation",
    brand: "",
    licence: "",
    range: "",
    sort: "newest",
  });
  assert.equal(byModel.length, 2);
  assert.ok(byModel.every((item) => item.brand === "Avan"));

  const byStock = filterMotorhomes(motorhomes, {
    query: "10783",
    brand: "",
    licence: "",
    range: "",
    sort: "newest",
  });
  assert.equal(byStock[0].slug, "2021-kea-river-m721");
});

test("sorts by price ascending", () => {
  const result = filterMotorhomes(motorhomes, {
    query: "",
    brand: "",
    licence: "",
    range: "",
    sort: "price-asc",
  });
  const prices = result.map((item) => item.price);
  assert.deepEqual(
    prices,
    [...prices].sort((a, b) => a - b),
  );
  assert.equal(result[0].slug, "2007-suncamper-2-berth");
});

test("filters car licence motorhomes", () => {
  const result = filterMotorhomes(motorhomes, {
    query: "",
    brand: "",
    licence: "Car",
    range: "",
    sort: "newest",
  });
  assert.ok(result.length >= 5);
  assert.ok(result.every((item) => item.licence === "Car"));
});

test("cuts every drive-away price by 30 percent", () => {
  const kea = motorhomes.find((item) => item.slug === "2021-kea-river-m721");
  assert.equal(kea?.price, driveAway(134990));
  assert.equal(kea?.price, 94490);

  const navian = motorhomes.find((item) => item.slug === "2025-sunliner-navian-n541g");
  assert.equal(navian?.price, driveAway(259990));
});

test("cuts the added listings by 25 percent", () => {
  const suncamper = motorhomes.find((item) => item.slug === "2007-suncamper-2-berth");
  assert.equal(suncamper?.price, driveAway25(69990));
  assert.equal(suncamper?.price, 52490);

  const monteCarlo = motorhomes.find(
    (item) => item.slug === "2022-sunliner-monte-carlo-mc73",
  );
  assert.equal(monteCarlo?.price, driveAway25(379990));
  assert.equal(monteCarlo?.price, 284990);
  assert.equal(monteCarlo?.licence, "Medium Rigid");
});

test("groups compact, family and luxury motorhomes without overlap", () => {
  const compact = filterMotorhomes(motorhomes, {
    query: "",
    brand: "",
    licence: "",
    range: "compact",
    sort: "newest",
  });
  const family = filterMotorhomes(motorhomes, {
    query: "",
    brand: "",
    licence: "",
    range: "family",
    sort: "newest",
  });
  const luxury = filterMotorhomes(motorhomes, {
    query: "",
    brand: "",
    licence: "",
    range: "luxury",
    sort: "newest",
  });

  const slugs = new Set(
    [...compact, ...family, ...luxury].map((item) => item.slug),
  );
  assert.equal(compact.length + family.length + luxury.length, motorhomes.length);
  assert.equal(slugs.size, motorhomes.length);
  assert.ok(compact.some((item) => item.slug === "2016-avida-esperance-b7922-sl"));
  assert.ok(family.some((item) => item.slug === "2021-kea-river-m721"));
  assert.ok(luxury.some((item) => item.slug === "2025-sunliner-navian-n541g"));
  assert.ok(luxury.some((item) => item.slug === "2022-sunliner-monte-carlo-mc73"));
});
