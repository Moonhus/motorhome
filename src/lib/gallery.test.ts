import assert from "node:assert/strict";
import test from "node:test";
import { listingShots } from "./gallery.ts";

test("listingShots labels exterior, living and sleeping in order", () => {
  const shots = listingShots({
    title: "2019 Jayco Conquest DX IV.25.5",
    gallery: ["/a.jpg", "/b.jpg", "/c.jpg"],
  });
  assert.deepEqual(
    shots.map((shot) => shot.label),
    ["Exterior", "Living", "Sleeping"],
  );
  assert.equal(shots[0].alt, "2019 Jayco Conquest DX IV.25.5 — exterior");
});

test("listingShots falls back to numbered labels past three frames", () => {
  const shots = listingShots({
    title: "Test van",
    gallery: ["/a.jpg", "/b.jpg", "/c.jpg", "/d.jpg"],
  });
  assert.equal(shots[3].label, "Photo 4");
});
