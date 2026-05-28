import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { WorkStage } from "@/components/work/WorkStage";
import { WORK_SECTIONS, getWorkSection } from "@/lib/work-sections";

export function generateStaticParams() {
  return WORK_SECTIONS.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const section = getWorkSection(params.slug);
  if (!section) return { title: "Work" };
  return { title: section.label };
}

export default function WorkSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const section = getWorkSection(params.slug);
  if (!section) notFound();

  return (
    <>
      <div
        className="scanlines crt pointer-events-none fixed inset-0 z-50"
        aria-hidden
      />
      <main className="relative">
        <WorkStage slug={params.slug} />
      </main>
    </>
  );
}
