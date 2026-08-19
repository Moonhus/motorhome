import assert from "node:assert/strict";
import test from "node:test";
import { customerReviews } from "../data/reviews.ts";

test("lists fifty five-star reviews with unique names and places", () => {
  const quotes = customerReviews.quotes;
  assert.equal(quotes.length, 50);
  assert.ok(quotes.every((item) => item.stars === 5));

  const keys = quotes.map((item) => `${item.name}-${item.place}`);
  assert.equal(new Set(keys).size, quotes.length);
});
