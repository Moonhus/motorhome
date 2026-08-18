import type { Motorhome } from "@/data/motorhomes";

export type GalleryShot = {
  src: string;
  label: string;
  alt: string;
};

const DEFAULT_LABELS = ["Exterior", "Living", "Sleeping"] as const;

export function listingShots(van: Pick<Motorhome, "title" | "gallery">): GalleryShot[] {
  return van.gallery.map((src, index) => {
    const label = DEFAULT_LABELS[index] ?? `Photo ${index + 1}`;
    return {
      src,
      label,
      alt: `${van.title} — ${label.toLowerCase()}`,
    };
  });
}
