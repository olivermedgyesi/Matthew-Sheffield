import Link from "next/link";

import { BidstitchSection } from "@/components/work/BidstitchSection";
import { EzzeSection } from "@/components/work/EzzeSection";
import { KyleKellerSection } from "@/components/work/KyleKellerSection";
import { LocalGodzSection } from "@/components/work/LocalGodzSection";
import { MusicVideosSection } from "@/components/work/MusicVideosSection";

export const metadata = {
  title: "Work",
};

export default function WorkPage() {
  return (
    <>
      <div
        className="scanlines crt pointer-events-none fixed inset-0 z-50"
        aria-hidden
      />

      <main className="relative">
        <WorkNav />
        <BidstitchSection />
        <LocalGodzSection />
        <EzzeSection />
        <KyleKellerSection />
        <MusicVideosSection />
        <WorkFooter />
      </main>
    </>
  );
}

function WorkNav() {
  return (
    <section className="relative mx-auto max-w-site px-6 pt-8 md:px-10 md:pt-10">
      <nav className="label flex items-center justify-between text-ink-soft">
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 md:gap-x-7">
          <li>
            <Link href="/" className="hover:text-amber">
              Home
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <span className="cursor-blink text-amber">►</span>
            <Link href="/work" className="text-amber">
              Work
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-amber">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-amber">
              Contact
            </Link>
          </li>
        </ul>
        <span className="hidden text-olive md:inline">Stage Select</span>
      </nav>
    </section>
  );
}

function WorkFooter() {
  return (
    <section className="relative mx-auto max-w-site border-t border-line px-6 py-12 md:px-10 md:py-16">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <span className="label text-ink-mute">End of File</span>
        <Link
          href="/contact"
          className="label flex items-center gap-2 text-ink-soft hover:text-amber"
        >
          <span className="text-amber">►</span>
          <span>Continue — Get in touch</span>
        </Link>
      </div>
    </section>
  );
}
