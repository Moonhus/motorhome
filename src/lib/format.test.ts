import assert from "node:assert/strict";
import test from "node:test";
import { formatPrice } from "./format.ts";

test("rounds prices to the nearest thousand in full dollars", () => {
  assert.equal(formatPrice(48235), "$48,000");
  assert.equal(formatPrice(1500), "$2,000");
  assert.equal(formatPrice(52490), "$52,000");
  assert.equal(formatPrice(284990), "$285,000");
});
