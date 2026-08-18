import assert from "node:assert/strict";
import test from "node:test";
import {
  clamp,
  clampPan,
  lightFromPointer,
  tiltFromPointer,
  wrapIndex,
  zoomFromWheelDelta,
  MIN_ZOOM,
  MAX_ZOOM,
} from "./inspect.ts";

test("wrapIndex loops in both directions", () => {
  assert.equal(wrapIndex(3, 3), 0);
  assert.equal(wrapIndex(-1, 3), 2);
  assert.equal(wrapIndex(0, 0), 0);
});

test("zoomFromWheelDelta steps and clamps", () => {
  assert.equal(zoomFromWheelDelta(1, -120), 1.18);
  assert.equal(zoomFromWheelDelta(1, 120), MIN_ZOOM);
  assert.equal(zoomFromWheelDelta(4.4, -120), MAX_ZOOM);
});

test("clampPan resets when idle and limits travel when zoomed", () => {
  assert.deepEqual(clampPan({ x: 80, y: -40 }, 1), { x: 0, y: 0 });
  const zoomed = clampPan({ x: 5000, y: -5000 }, 2, 100);
  assert.equal(zoomed.x, 100);
  assert.equal(zoomed.y, -100);
});

test("tiltFromPointer maps cursor into a shallow studio angle", () => {
  const rect = { left: 0, top: 0, width: 100, height: 100 };
  const centre = tiltFromPointer(50, 50, rect);
  assert.equal(centre.rotateX, 0);
  assert.equal(centre.rotateY, 0);

  const corner = tiltFromPointer(100, 0, rect);
  assert.ok(corner.rotateY > 0);
  assert.ok(corner.rotateX > 0);
});

test("lightFromPointer tracks the studio key light", () => {
  const rect = { left: 10, top: 10, width: 100, height: 100 };
  assert.deepEqual(lightFromPointer(60, 30, rect), { x: 50, y: 20 });
  assert.equal(clamp(120, 0, 100), 100);
});
