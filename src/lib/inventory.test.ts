import assert from "node:assert/strict";
import test from "node:test";
import { driveAway, motorhomes } from "../data/motorhomes.ts";
import { filterMotorhomes } from "./inventory.ts";

test("filters by brand", () => {
  const result = filterMotorhomes(motorhomes, {
    query: "",
    brand: "Avida",
    sort: "newest",
  });
  assert.equal(result.length, 5);
  assert.ok(result.every((item) => item.brand === "Avida"));
});

test("filters by search query across title and stock number", () => {
  const byModel = filterMotorhomes(motorhomes, {
    query: "ovation",
    brand: "",
    sort: "newest",
  });
  assert.equal(byModel.length, 1);
  assert.equal(byModel[0].brand, "Avan");

  const byStock = filterMotorhomes(motorhomes, {
    query: "10783",
    brand: "",
    sort: "newest",
  });
  assert.equal(byStock[0].slug, "2021-kea-river-m721");
});

test("sorts by price ascending", () => {
  const result = filterMotorhomes(motorhomes, {
    query: "",
    brand: "",
    sort: "price-asc",
  });
  const prices = result.map((item) => item.price);
  assert.deepEqual(
    prices,
    [...prices].sort((a, b) => a - b),
  );
  assert.equal(result[0].slug, "2021-kea-river-m721");
});

test("cuts every drive-away price by 30 percent", () => {
  const kea = motorhomes.find((item) => item.slug === "2021-kea-river-m721");
  assert.equal(kea?.price, driveAway(134990));
  assert.equal(kea?.price, 94490);

  const navian = motorhomes.find((item) => item.slug === "2025-sunliner-navian-n541g");
  assert.equal(navian?.price, driveAway(259990));
});
