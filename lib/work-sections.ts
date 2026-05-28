import type { ComponentType } from "react";

import { BidstitchSection } from "@/components/work/BidstitchSection";
import { EzzeSection } from "@/components/work/EzzeSection";
import { KyleKellerSection } from "@/components/work/KyleKellerSection";
import { LocalGodzSection } from "@/components/work/LocalGodzSection";
import { MusicVideosSection } from "@/components/work/MusicVideosSection";

export type WorkSection = {
  slug: string;
  label: string;
  Component: ComponentType;
};

export const WORK_SECTIONS: WorkSection[] = [
  { slug: "bidstitch", label: "Bidstitch", Component: BidstitchSection },
  { slug: "local-godz", label: "Local Godz", Component: LocalGodzSection },
  { slug: "ezze", label: "Ezze", Component: EzzeSection },
  { slug: "kyle-keller", label: "Kyle Keller", Component: KyleKellerSection },
  {
    slug: "music-videos",
    label: "Music Videos",
    Component: MusicVideosSection,
  },
];

export function getWorkSection(slug: string): WorkSection | undefined {
  return WORK_SECTIONS.find((s) => s.slug === slug);
}

export function getWorkNeighbors(slug: string): {
  prev: WorkSection | null;
  next: WorkSection | null;
} {
  const index = WORK_SECTIONS.findIndex((s) => s.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? WORK_SECTIONS[index - 1] : null,
    next: index < WORK_SECTIONS.length - 1 ? WORK_SECTIONS[index + 1] : null,
  };
}
