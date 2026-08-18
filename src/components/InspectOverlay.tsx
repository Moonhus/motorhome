"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import type { GalleryShot } from "@/lib/gallery";
import {
  clampPan,
  MIN_ZOOM,
  wrapIndex,
  zoomFromWheelDelta,
  type Pan,
} from "@/lib/inspect";
import { withBasePath } from "@/lib/paths";

export function InspectOverlay({
  shots,
  startIndex,
  title,
  onClose,
  onIndexChange,
}: {
  shots: GalleryShot[];
  startIndex: number;
  title: string;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}) {
  const [index, setIndex] = useState(startIndex);
  const [zoom, setZoom] = useState(MIN_ZOOM);
  const [pan, setPan] = useState<Pan>({ x: 0, y: 0 });
  const drag = useRef<{ x: number; y: number; pan: Pan } | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const shot = shots[index] ?? shots[0];

  const show = useCallback(
    (next: number) => {
      const wrapped = wrapIndex(next, shots.length);
      setIndex(wrapped);
      onIndexChange(wrapped);
      setZoom(MIN_ZOOM);
      setPan({ x: 0, y: 0 });
    },
    [onIndexChange, shots.length],
  );

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") show(index + 1);
      if (event.key === "ArrowLeft") show(index - 1);
      if (event.key === "+" || event.key === "=") {
        setZoom((current) => zoomFromWheelDelta(current, -1));
      }
      if (event.key === "-" || event.key === "_") {
        setZoom((current) => {
          const next = zoomFromWheelDelta(current, 1);
          setPan((value) => clampPan(value, next));
          return next;
        });
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, onClose, show]);

  useEffect(() => {
    const node = overlayRef.current;
    if (!node) return;
    function onWheel(event: WheelEvent) {
      event.preventDefault();
      setZoom((current) => {
        const next = zoomFromWheelDelta(current, event.deltaY);
        setPan((value) => clampPan(value, next));
        return next;
      });
    }
    node.addEventListener("wheel", onWheel, { passive: false });
    return () => node.removeEventListener("wheel", onWheel);
  }, []);

  function onPointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (zoom <= MIN_ZOOM) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = { x: event.clientX, y: event.clientY, pan };
  }

  function onPointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (!drag.current) return;
    const dx = event.clientX - drag.current.x;
    const dy = event.clientY - drag.current.y;
    setPan(
      clampPan(
        { x: drag.current.pan.x + dx, y: drag.current.pan.y + dy },
        zoom,
      ),
    );
  }

  function onPointerUp() {
    drag.current = null;
  }

  if (!shot) return null;

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Inspect ${title}`}
      className="fixed inset-0 z-[80] bg-[#070605]"
    >
      <div className="hyper-grain opacity-40" aria-hidden />
      <div
        className="absolute inset-0 flex cursor-grab items-center justify-center active:cursor-grabbing"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onDoubleClick={() => {
          setZoom((current) => (current > MIN_ZOOM ? MIN_ZOOM : 2.4));
          setPan({ x: 0, y: 0 });
        }}
      >
        <div
          className="relative h-[min(88vh,820px)] w-[min(94vw,1280px)] overflow-hidden"
          style={{
            transform: `translate3d(${pan.x}px, ${pan.y}px, 0) scale(${zoom})`,
            transformOrigin: "center center",
          }}
        >
          <Image
            src={withBasePath(shot.src)}
            alt={shot.alt}
            fill
            priority
            className="filmic-photo object-contain"
            sizes="100vw"
            draggable={false}
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between gap-4 p-4 text-cream">
        <p className="pointer-events-auto max-w-xl text-sm">
          <span className="display block text-2xl leading-tight">{title}</span>
          <span className="mt-1 block text-xs uppercase tracking-[0.2em] text-sand/80">
            {shot.label} · {index + 1} / {shots.length}
          </span>
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="pointer-events-auto rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] hover:bg-black/70"
        >
          Close · Esc
        </button>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-center justify-between gap-3 p-4 text-cream">
        <p className="text-[0.7rem] uppercase tracking-[0.18em] text-sand/70">
          Scroll zoom · drag to pan · ← → photos
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => show(index - 1)}
            className="rounded-full border border-white/20 bg-black/40 px-3 py-2 text-xs uppercase tracking-[0.16em] hover:bg-black/70"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={() => show(index + 1)}
            className="rounded-full border border-white/20 bg-black/40 px-3 py-2 text-xs uppercase tracking-[0.16em] hover:bg-black/70"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
