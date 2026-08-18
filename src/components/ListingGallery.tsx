"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import { InspectOverlay } from "@/components/InspectOverlay";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { GalleryShot } from "@/lib/gallery";
import { lightFromPointer, tiltFromPointer, wrapIndex, type Tilt } from "@/lib/inspect";
import { withBasePath } from "@/lib/paths";

export function ListingGallery({
  shots,
  title,
  children,
}: {
  shots: GalleryShot[];
  title: string;
  children?: ReactNode;
}) {
  const [index, setIndex] = useState(0);
  const [inspecting, setInspecting] = useState(false);
  const shot = shots[index] ?? shots[0];

  const go = useCallback(
    (next: number) => setIndex(wrapIndex(next, shots.length)),
    [shots.length],
  );

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (inspecting) return;
      if (isTypingTarget(event.target)) return;
      if (event.key === "f" || event.key === "F") {
        event.preventDefault();
        setInspecting(true);
      }
      if (event.key === "ArrowRight") go(index + 1);
      if (event.key === "ArrowLeft") go(index - 1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index, inspecting]);

  if (!shot) return null;

  return (
    <div className="relative isolate overflow-hidden bg-forest-deep">
      <HyperRealStage shot={shot} onInspect={() => setInspecting(true)} />

      <div className="relative z-20 bg-forest-deep px-5 pb-6 pt-5 sm:pointer-events-none sm:absolute sm:inset-x-0 sm:bottom-28 sm:bg-gradient-to-t sm:from-black/60 sm:via-black/20 sm:to-transparent sm:pb-8 sm:pt-16">
        <div className="pointer-events-auto mx-auto max-w-6xl">
          <div className="max-w-3xl">{children}</div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-4 px-5 pb-5">
        <div className="flex flex-wrap gap-2">
          {shots.map((item, shotIndex) => (
            <button
              key={`${item.src}-${item.label}`}
              type="button"
              onClick={() => setIndex(shotIndex)}
              className={`overflow-hidden rounded-xl border text-left transition ${
                shotIndex === index
                  ? "border-sand shadow-[0_0_0_1px_rgba(231,220,200,0.4)]"
                  : "border-white/15 opacity-80 hover:opacity-100"
              }`}
            >
              <span className="relative block h-14 w-24">
                <Image
                  src={withBasePath(item.src)}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </span>
              <span className="block bg-forest-deep/85 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-sand">
                {item.label}
              </span>
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setInspecting(true)}
          className="rounded-full border border-cream/30 bg-forest-deep/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cream backdrop-blur hover:bg-forest-deep"
        >
          Inspect · F
        </button>
      </div>

      {inspecting ? (
        <InspectOverlay
          shots={shots}
          startIndex={index}
          title={title}
          onClose={() => setInspecting(false)}
          onIndexChange={setIndex}
        />
      ) : null}
    </div>
  );
}

function HyperRealStage({
  shot,
  onInspect,
}: {
  shot: GalleryShot;
  onInspect: () => void;
}) {
  const stageRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const [tilt, setTilt] = useState<Tilt>({ rotateX: 0, rotateY: 0 });
  const [light, setLight] = useState({ x: 58, y: 28 });
  const [coarse, setCoarse] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: coarse)");
    const update = () => setCoarse(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  function trackPointer(event: ReactPointerEvent<HTMLDivElement>) {
    if (reducedMotion || coarse) return;
    const rect = stageRef.current?.getBoundingClientRect();
    if (!rect) return;
    setTilt(tiltFromPointer(event.clientX, event.clientY, rect));
    setLight(lightFromPointer(event.clientX, event.clientY, rect));
  }

  return (
    <div
      ref={stageRef}
      className="hyper-stage relative min-h-[78vh] overflow-hidden"
      onPointerMove={trackPointer}
      onPointerLeave={() => {
        setTilt({ rotateX: 0, rotateY: 0 });
        setLight({ x: 58, y: 28 });
      }}
    >
      <div className="hyper-sky" aria-hidden />
      <div className="hyper-haze" aria-hidden />
      <div className="hyper-rays" aria-hidden />
      <div className="hyper-dust" aria-hidden />

      <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-5 pb-36 pt-16">
        <div
          className="hyper-rig mx-auto w-full max-w-5xl"
          style={{
            transform: reducedMotion
              ? undefined
              : `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          }}
        >
          <button
            type="button"
            onClick={onInspect}
            className="hyper-plate group relative block w-full overflow-hidden rounded-[1.4rem] text-left"
            aria-label={`Inspect ${shot.alt}`}
          >
            <span className="relative block aspect-[16/10]">
              <Image
                src={withBasePath(shot.src)}
                alt={shot.alt}
                fill
                priority
                className="filmic-photo object-cover"
                sizes="(min-width: 1024px) 960px, 100vw"
              />
              <span
                className="hyper-specular"
                style={{
                  background: `radial-gradient(520px circle at ${light.x}% ${light.y}%, rgba(255,244,220,0.34), transparent 58%)`,
                }}
                aria-hidden
              />
              <span className="hyper-glass" aria-hidden />
            </span>
          </button>
          <div className="hyper-reflection relative" aria-hidden>
            <Image
              src={withBasePath(shot.src)}
              alt=""
              fill
              className="object-cover object-bottom"
              sizes="(min-width: 1024px) 960px, 100vw"
            />
          </div>
        </div>
      </div>

      <div className="hyper-ground" aria-hidden />
      <div className="hyper-grain" aria-hidden />
      <div className="hyper-vignette" aria-hidden />
    </div>
  );
}

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || target.isContentEditable;
}
