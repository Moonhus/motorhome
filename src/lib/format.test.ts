import assert from "node:assert/strict";
import test from "node:test";
import { formatPrice } from "./format.ts";

test("rounds prices to the nearest thousand as k", () => {
  assert.equal(formatPrice(48235), "$48k");
  assert.equal(formatPrice(1500), "$2k");
  assert.equal(formatPrice(52490), "$52k");
  assert.equal(formatPrice(284990), "$285k");
});
