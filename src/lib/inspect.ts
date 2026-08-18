export const MIN_ZOOM = 1;
export const MAX_ZOOM = 4.5;
export const ZOOM_STEP = 0.18;

export type Pan = { x: number; y: number };
export type Tilt = { rotateX: number; rotateY: number };

export function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function wrapIndex(index: number, length: number) {
  if (length <= 0) return 0;
  return ((index % length) + length) % length;
}

export function zoomFromWheelDelta(current: number, deltaY: number) {
  const direction = deltaY < 0 ? 1 : -1;
  return clamp(
    Number((current + direction * ZOOM_STEP).toFixed(3)),
    MIN_ZOOM,
    MAX_ZOOM,
  );
}

export function clampPan(pan: Pan, zoom: number, maxTravel = 420): Pan {
  if (zoom <= MIN_ZOOM) return { x: 0, y: 0 };
  const limit = (zoom - 1) * maxTravel;
  return {
    x: clamp(pan.x, -limit, limit),
    y: clamp(pan.y, -limit, limit),
  };
}

export function tiltFromPointer(
  clientX: number,
  clientY: number,
  rect: { left: number; top: number; width: number; height: number },
  intensity = 1,
): Tilt {
  if (rect.width === 0 || rect.height === 0) {
    return { rotateX: 0, rotateY: 0 };
  }
  const nx = (clientX - rect.left) / rect.width - 0.5;
  const ny = (clientY - rect.top) / rect.height - 0.5;
  return {
    rotateX: clamp(-ny * 7 * intensity, -8, 8) + 0,
    rotateY: clamp(nx * 11 * intensity, -12, 12) + 0,
  };
}

export function lightFromPointer(
  clientX: number,
  clientY: number,
  rect: { left: number; top: number; width: number; height: number },
) {
  if (rect.width === 0 || rect.height === 0) {
    return { x: 50, y: 42 };
  }
  return {
    x: clamp(((clientX - rect.left) / rect.width) * 100, 0, 100),
    y: clamp(((clientY - rect.top) / rect.height) * 100, 0, 100),
  };
}
