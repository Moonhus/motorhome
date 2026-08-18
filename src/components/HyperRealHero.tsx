"use client";

import Image from "next/image";
import { useRef, useState, type PointerEvent as ReactPointerEvent, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { lightFromPointer, tiltFromPointer } from "@/lib/inspect";
import { withBasePath } from "@/lib/paths";

export function HyperRealHero({
  src,
  alt,
  children,
}: {
  src: string;
  alt: string;
  children: ReactNode;
}) {
  const stageRef = useRef<HTMLElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const [shift, setShift] = useState({ x: 0, y: 0, lightX: 62, lightY: 34 });

  function track(event: ReactPointerEvent<HTMLElement>) {
    if (reducedMotion) return;
    const rect = stageRef.current?.getBoundingClientRect();
    if (!rect) return;
    const tilt = tiltFromPointer(event.clientX, event.clientY, rect, 0.55);
    const light = lightFromPointer(event.clientX, event.clientY, rect);
    setShift({
      x: tilt.rotateY * 1.6,
      y: tilt.rotateX * -1.8,
      lightX: light.x,
      lightY: light.y,
    });
  }

  return (
    <section
      ref={stageRef}
      className="relative isolate min-h-[82vh] overflow-hidden"
      onPointerMove={track}
      onPointerLeave={() => setShift({ x: 0, y: 0, lightX: 62, lightY: 34 })}
    >
      <div
        className="absolute inset-[-6%] will-change-transform"
        style={{
          transform: reducedMotion
            ? "scale(1.06)"
            : `translate3d(${shift.x}px, ${shift.y}px, 0) scale(1.08)`,
        }}
      >
        <Image
          src={withBasePath(src)}
          alt={alt}
          fill
          priority
          className="filmic-photo object-cover"
          sizes="100vw"
        />
        <div
          className="hyper-specular"
          style={{
            background: `radial-gradient(700px circle at ${shift.lightX}% ${shift.lightY}%, rgba(255,214,150,0.28), transparent 55%)`,
          }}
          aria-hidden
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/90 via-forest/68 to-forest/20" />
      <div className="hyper-rays opacity-70" aria-hidden />
      <div className="hyper-haze opacity-50" aria-hidden />
      <div className="hyper-grain" aria-hidden />
      <div className="hyper-vignette" aria-hidden />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
