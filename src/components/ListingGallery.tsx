"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { withBasePath } from "@/lib/paths";

export function ListingGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const count = images.length;
  const current = images[index] ?? images[0];

  const go = useCallback(
    (direction: -1 | 1) => {
      setIndex((value) => (value + direction + count) % count);
    },
    [count],
  );

  const openAt = useCallback((nextIndex: number) => {
    setIndex(nextIndex);
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "ArrowLeft") go(-1);
      if (event.key === "ArrowRight") go(1);
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, go]);

  function onTouchStart(clientX: number) {
    touchStartX.current = clientX;
  }

  function onTouchEnd(clientX: number) {
    if (touchStartX.current === null) return;
    const delta = clientX - touchStartX.current;
    touchStartX.current = null;
    if (delta > 40) go(-1);
    if (delta < -40) go(1);
  }

  if (!current) return null;

  const src = withBasePath(current);

  const lightbox =
    open && typeof document !== "undefined"
      ? createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${alt} photo gallery`}
            className="fixed inset-0 z-[80] flex flex-col bg-forest-deep/96"
            onClick={() => setOpen(false)}
            onTouchStart={(event) => onTouchStart(event.touches[0].clientX)}
            onTouchEnd={(event) => onTouchEnd(event.changedTouches[0].clientX)}
          >
            <div
              className="flex items-center justify-between px-4 py-3 text-cream sm:px-6"
              onClick={(event) => event.stopPropagation()}
            >
              <p className="text-sm font-medium">
                {index + 1} of {count}
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full px-3 py-1 text-sm text-cream/80 hover:bg-white/10 hover:text-cream"
              >
                Close
              </button>
            </div>
            <div
              className="relative flex min-h-0 flex-1 items-center justify-center px-14 py-4"
              onClick={(event) => event.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`${alt} — photo ${index + 1} of ${count}`}
                className="max-h-full max-w-full object-contain"
              />
              {count > 1 ? (
                <>
                  <NavButton
                    label="Previous photo"
                    side="left"
                    onClick={() => go(-1)}
                    inverted
                  />
                  <NavButton
                    label="Next photo"
                    side="right"
                    onClick={() => go(1)}
                    inverted
                  />
                </>
              ) : null}
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <div>
      <div
        className="relative overflow-hidden rounded-xl bg-white"
        onTouchStart={(event) => onTouchStart(event.touches[0].clientX)}
        onTouchEnd={(event) => onTouchEnd(event.changedTouches[0].clientX)}
      >
        <button
          type="button"
          onClick={() => openAt(index)}
          className="block aspect-[4/3] w-full cursor-zoom-in overflow-hidden"
          aria-label={`Open photo ${index + 1} of ${count} full screen`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} className="h-full w-full object-cover" />
        </button>
        <p className="pointer-events-none absolute bottom-3 right-3 z-[2] rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-forest">
          {index + 1} of {count}
        </p>
        {count > 1 ? (
          <>
            <NavButton
              label="Previous photo"
              side="left"
              onClick={() => go(-1)}
            />
            <NavButton
              label="Next photo"
              side="right"
              onClick={() => go(1)}
            />
          </>
        ) : null}
      </div>

      <div className="mt-3 flex items-center justify-between gap-3">
        <div className="flex min-w-0 flex-1 gap-2 overflow-x-auto pb-1">
          {images.map((image, photoIndex) => {
            const selected = photoIndex === index;
            return (
              <button
                key={image}
                type="button"
                onClick={() => openAt(photoIndex)}
                className={`h-16 w-[4.5rem] shrink-0 overflow-hidden rounded-md bg-white sm:h-20 sm:w-24 ${
                  selected ? "ring-2 ring-forest" : "ring-1 ring-forest/10"
                }`}
                aria-label={`Open photo ${photoIndex + 1} of ${count}`}
                aria-current={selected}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={withBasePath(image)}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </button>
            );
          })}
        </div>
      </div>
      {lightbox}
    </div>
  );
}

function NavButton({
  label,
  side,
  onClick,
  inverted = false,
}: {
  label: string;
  side: "left" | "right";
  onClick: () => void;
  inverted?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        onClick();
      }}
      className={`absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-xl ${
        inverted
          ? "bg-white/15 text-cream hover:bg-white/25"
          : "bg-white/90 text-forest hover:bg-white"
      } ${side === "left" ? "left-3" : "right-3"}`}
    >
      {side === "left" ? "‹" : "›"}
    </button>
  );
}
