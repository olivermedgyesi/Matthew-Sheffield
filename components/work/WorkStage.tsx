import Link from "next/link";

import { Nav } from "@/components/Nav";
import {
  WORK_SECTIONS,
  getWorkNeighbors,
  getWorkSection,
} from "@/lib/work-sections";

export function WorkStage({ slug }: { slug: string }) {
  const section = getWorkSection(slug);
  if (!section) return null;
  const { prev, next } = getWorkNeighbors(slug);
  const Section = section.Component;
  const index = WORK_SECTIONS.findIndex((s) => s.slug === slug);
  const total = WORK_SECTIONS.length;

  return (
    <>
      <section className="relative mx-auto max-w-site px-6 pt-8 md:px-10 md:pt-10">
        <Nav active="work" rightLabel="Stage Select" />
      </section>

      <Section />

      <StageNav prev={prev} next={next} current={index + 1} total={total} />
      <ContactCTA />
    </>
  );
}

function StageNav({
  prev,
  next,
  current,
  total,
}: {
  prev: { slug: string; label: string } | null;
  next: { slug: string; label: string } | null;
  current: number;
  total: number;
}) {
  return (
    <section className="relative mx-auto max-w-site border-t border-line px-6 py-10 md:px-10 md:py-14">
      <div className="flex items-center gap-3">
        <span className="label text-amber">
          Stage {String(current).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <span className="h-px flex-1 bg-line" />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
        <StageNavLink
          direction="prev"
          target={prev}
          fallbackLabel="Title Screen"
          fallbackHref="/"
          fallbackCue="Back to Title Screen"
        />
        <StageNavLink
          direction="next"
          target={next}
          fallbackLabel="Title Screen"
          fallbackHref="/"
          fallbackCue="Back to Title Screen"
        />
      </div>
    </section>
  );
}

function StageNavLink({
  direction,
  target,
  fallbackLabel,
  fallbackHref,
  fallbackCue,
}: {
  direction: "prev" | "next";
  target: { slug: string; label: string } | null;
  fallbackLabel: string;
  fallbackHref: string;
  fallbackCue: string;
}) {
  const isNext = direction === "next";
  const href = target ? `/work/${target.slug}` : fallbackHref;
  const heading = target ? target.label : fallbackLabel;
  const cue = target ? (isNext ? "Next Stage" : "Previous Stage") : fallbackCue;

  return (
    <Link
      href={href}
      className={`group flex flex-col gap-1 border-2 border-line p-4 transition-colors hover:border-amber md:p-5 ${
        isNext ? "md:text-right" : ""
      }`}
    >
      <span className="label flex items-center gap-2 text-ink-mute group-hover:text-amber">
        {isNext ? (
          <>
            <span className="md:order-2 md:ml-auto">→</span>
            <span>{cue}</span>
          </>
        ) : (
          <>
            <span>←</span>
            <span>{cue}</span>
          </>
        )}
      </span>
      <span className="font-pixel text-base uppercase text-ink group-hover:text-amber md:text-lg">
        {heading}
      </span>
    </Link>
  );
}

function ContactCTA() {
  return (
    <section className="relative mx-auto max-w-site border-t border-line px-6 py-12 md:px-10 md:py-14">
      <div className="flex flex-col gap-4 border-2 border-olive/60 p-5 md:flex-row md:items-center md:justify-between md:p-6">
        <div className="flex flex-col gap-1">
          <span className="label text-olive">Continue?</span>
          <span className="font-terminal text-xl text-ink md:text-2xl">
            Got a project in mind? Let&apos;s talk.
          </span>
        </div>
        <a
          href="mailto:mattcsheffield@gmail.com"
          className="label inline-flex self-start border-2 border-amber px-4 py-2 text-ink-soft transition-colors hover:bg-amber hover:text-bg md:self-auto"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
