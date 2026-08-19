import assert from "node:assert/strict";
import test from "node:test";
import { customerReviews } from "../data/reviews.ts";

test("lists twenty five-star reviews with unique photos", () => {
  const quotes = customerReviews.quotes;
  assert.equal(quotes.length, 20);
  assert.ok(quotes.every((item) => item.stars === 5));

  const keys = quotes.map((item) => `${item.name}-${item.place}`);
  assert.equal(new Set(keys).size, quotes.length);

  const photos = quotes.map((item) => item.photo);
  assert.equal(new Set(photos).size, quotes.length);
  assert.ok(photos.every((photo) => photo.startsWith("/images/reviews/")));
});
