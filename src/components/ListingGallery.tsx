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
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const swiped = useRef(false);
  const count = images.length;
  const current = images[index] ?? images[0];

  const go = useCallback(
    (direction: -1 | 1) => {
      setIndex((value) => (value + direction + count) % count);
    },
    [count],
  );

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

  function onTouchStart(clientX: number, clientY: number) {
    touchStart.current = { x: clientX, y: clientY };
    swiped.current = false;
  }

  function onTouchEnd(clientX: number, clientY: number) {
    if (touchStart.current === null) return;
    const deltaX = clientX - touchStart.current.x;
    const deltaY = clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(deltaX) < 40 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
    swiped.current = true;
    if (deltaX > 0) go(-1);
    else go(1);
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
            className="fixed inset-0 z-50 flex flex-col bg-forest-deep"
            onClick={() => {
              if (!swiped.current) setOpen(false);
              swiped.current = false;
            }}
            onTouchStart={(event) =>
              onTouchStart(event.touches[0].clientX, event.touches[0].clientY)
            }
            onTouchEnd={(event) =>
              onTouchEnd(
                event.changedTouches[0].clientX,
                event.changedTouches[0].clientY,
              )
            }
          >
            <div
              className="flex items-center justify-between px-4 pt-[max(0.75rem,env(safe-area-inset-top))] pb-3 text-cream"
              onClick={(event) => event.stopPropagation()}
            >
              <p className="text-sm font-medium">
                {index + 1} of {count}
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-sm text-cream/80"
              >
                Close
              </button>
            </div>
            <div
              className="relative flex min-h-0 min-w-0 flex-1 items-center justify-center px-3 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-16"
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
    <div className="min-w-0">
      <div
        className="relative overflow-hidden bg-forest-deep/5 lg:rounded-xl"
        onTouchStart={(event) =>
          onTouchStart(event.touches[0].clientX, event.touches[0].clientY)
        }
        onTouchEnd={(event) =>
          onTouchEnd(
            event.changedTouches[0].clientX,
            event.changedTouches[0].clientY,
          )
        }
      >
        <button
          type="button"
          onClick={() => {
            if (swiped.current) {
              swiped.current = false;
              return;
            }
            setOpen(true);
          }}
          className="block aspect-[4/3] w-full overflow-hidden"
          aria-label={`Open photo ${index + 1} of ${count} full screen`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className="h-full w-full max-w-full object-cover"
          />
        </button>
        <p className="pointer-events-none absolute bottom-3 left-1/2 z-[2] -translate-x-1/2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-forest">
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

      <div className="mt-3 min-w-0 px-4 sm:px-5 lg:px-0">
        <div className="flex gap-2 overflow-x-auto overscroll-x-contain pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {images.map((image, photoIndex) => {
            const selected = photoIndex === index;
            return (
              <button
                key={image}
                type="button"
                onClick={() => setIndex(photoIndex)}
                className={`h-14 w-16 shrink-0 overflow-hidden rounded-md bg-white ${
                  selected ? "ring-2 ring-forest" : "ring-1 ring-forest/10"
                }`}
                aria-label={`Show photo ${photoIndex + 1} of ${count}`}
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
      className={`absolute top-1/2 z-10 h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-xl ${
        inverted
          ? "flex bg-white/15 text-cream"
          : "hidden bg-white/90 text-forest sm:flex"
      } ${side === "left" ? "left-2 sm:left-3" : "right-2 sm:right-3"}`}
    >
      {side === "left" ? "‹" : "›"}
    </button>
  );
}
