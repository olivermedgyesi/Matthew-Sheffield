import Image from "next/image";
import Link from "next/link";
import { VideoPlayer } from "@/components/VideoPlayer";

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

function BidstitchSection() {
  return (
    <section className="relative mx-auto max-w-site border-t border-line px-6 py-16 md:px-10 md:py-20 mt-10 md:mt-14">
      <SectionHeader index="Stage 01" label="Bidstitch" />

      {/* Compact project meta — info is intentionally smaller than the videos */}
      <div className="mt-10 grid grid-cols-1 gap-10 md:mt-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div className="flex flex-col gap-5">
          <h1 className="font-pixel text-2xl uppercase text-ink md:text-4xl lg:text-5xl">
            Bidstitch
          </h1>
          <p className="font-terminal text-xl leading-snug text-ink-soft text-pretty md:text-2xl">
            &gt; Full in-house video production and creative direction for a
            modern vintage fashion platform — long-form YouTube, short-form
            social, and brand storytelling across fashion, internet culture,
            and collectibles.
          </p>

          <div className="mt-2 border-t border-line pt-4">
            <div className="label mb-3 text-olive">Role</div>
            <ul className="label flex flex-wrap gap-x-4 gap-y-2 text-ink-soft">
              <li>Videography</li>
              <li>·</li>
              <li>Editing</li>
              <li>·</li>
              <li>Creative Direction</li>
              <li>·</li>
              <li>Social Media Strategy</li>
            </ul>
          </div>
        </div>

        {/* Key metrics — compact scoreboard */}
        <div className="flex flex-col border-2 border-olive/60 p-5 md:p-6">
          <div className="label mb-4 text-olive">High Scores</div>
          <ul className="flex flex-col gap-3">
            <MetricRow value="200M+" label="All-time views" />
            <MetricRow value="30K → 130K" label="Instagram growth" />
            <MetricRow value="Levi's · StockX" label="Brand collabs" />
            <MetricRow value="Dozens" label="Videos past 1M views" />
          </ul>
          <div className="mt-6 flex items-center justify-center border-t border-line pt-5">
            <Image
              src="/logos/bidstitch.png"
              alt="Bidstitch"
              width={2048}
              height={2048}
              className="h-20 w-auto md:h-24"
            />
          </div>
        </div>
      </div>

      {/* FEATURED VIDEOS — the visual centerpiece. Big. */}
      <div className="mt-20 md:mt-28">
        <div className="flex items-center gap-3">
          <span className="label text-amber">Featured</span>
          <span className="h-px flex-1 bg-line" />
          <span className="label text-ink-mute">03 Clips</span>
        </div>

        {/* Two verticals side-by-side */}
        <div className="mt-10 grid grid-cols-1 gap-10 md:mt-14 md:grid-cols-2 md:gap-14">
          <VerticalVideo
            src="/videos/bidstitch-levis.mp4"
            href="https://www.tiktok.com/@bidstitch/video/7576659547075431710"
            title="Levi's TikTok Collab"
            platform="TikTok"
            views="2M"
            likes="200K"
            note="Official collaboration centered on one of the rarest pieces from the Levi's archive. Filmed at Levi's HQ with head archivist Tracy Panek."
            channel="CH 01"
          />
          <VerticalVideo
            src="/videos/bidstitch-afterhood.mp4"
            href="https://www.instagram.com/reels/DChoH0PA4Ly/"
            title="The $2,500 Afterhood"
            platform="Instagram"
            views="10M"
            likes="150K"
            note="One of Bidstitch's most viral reels — built around the cultural obsession surrounding rare vintage clothing."
            channel="CH 02"
          />
        </div>

        {/* Long-form doc — full width horizontal */}
        <div className="mt-16 md:mt-24">
          <HorizontalVideo
            src="/videos/bidstitch-bandos.mp4"
            href="https://www.youtube.com/watch?v=XiOzqN4y6OE"
            title="Bandos Documentary"
            platform="YouTube"
            views="325K"
            note="Long-form documentary exploring the underground world of vintage 'bando' picking and the broader resale market surrounding rare American garments and historical clothing."
            channel="CH 03"
          />
        </div>
      </div>

      {/* Footer back-link */}
      <div className="mt-20 flex flex-col gap-3 border-t border-line pt-6 md:flex-row md:items-center md:justify-between">
        <span className="label text-ink-mute">End of Stage 01</span>
        <Link
          href="/work"
          className="label flex items-center gap-2 text-ink-soft hover:text-amber"
        >
          <span>Next Stage</span>
          <span className="text-amber">→</span>
        </Link>
      </div>
    </section>
  );
}

function MetricRow({ value, label }: { value: string; label: string }) {
  return (
    <li className="flex items-baseline justify-between gap-4 border-b border-line/60 pb-2 last:border-0 last:pb-0">
      <span className="font-terminal text-xl text-amber md:text-2xl">
        {value}
      </span>
      <span className="label text-right text-ink-soft">{label}</span>
    </li>
  );
}

function VerticalVideo({
  src,
  href,
  title,
  platform,
  views,
  likes,
  note,
  channel,
}: {
  src: string;
  href: string;
  title: string;
  platform: string;
  views: string;
  likes: string;
  note: string;
  channel: string;
}) {
  return (
    <figure className="mx-auto flex w-full max-w-md flex-col gap-8 md:gap-10">
      <VideoPlayer
        src={src}
        title={title}
        channel={channel}
        platform={platform}
        aspect="vertical"
      />

      <figcaption className="flex flex-col gap-3 px-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="font-pixel text-sm uppercase text-ink md:text-base">
            {title}
          </h3>
          <span className="label text-olive">{platform}</span>
        </div>
        <div className="label flex items-center gap-4 text-ink-soft">
          <span>
            Views <span className="text-amber">{views}</span>
          </span>
          <span className="text-ink-mute">|</span>
          <span>
            Likes <span className="text-amber">{likes}</span>
          </span>
        </div>
        <p className="font-terminal text-lg leading-snug text-ink-soft text-pretty md:text-xl">
          &gt; {note}
        </p>
        <SourceLink href={href} platform={platform} />
      </figcaption>
    </figure>
  );
}

function HorizontalVideo({
  src,
  href,
  title,
  platform,
  views,
  note,
  channel,
}: {
  src: string;
  href: string;
  title: string;
  platform: string;
  views: string;
  note: string;
  channel: string;
}) {
  return (
    <figure className="flex flex-col gap-8 md:gap-10">
      <VideoPlayer
        src={src}
        title={title}
        channel={channel}
        platform={platform}
        aspect="horizontal"
      />

      <figcaption className="flex flex-col gap-3 md:grid md:grid-cols-[1fr_1.5fr] md:items-start md:gap-10">
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-pixel text-base uppercase text-ink md:text-lg">
              {title}
            </h3>
            <span className="label text-olive">{platform}</span>
          </div>
          <div className="label flex items-center gap-4 text-ink-soft">
            <span>
              Views <span className="text-amber">{views}</span>
            </span>
          </div>
          <SourceLink href={href} platform={platform} />
        </div>
        <p className="font-terminal text-xl leading-snug text-ink-soft text-pretty md:text-2xl">
          &gt; {note}
        </p>
      </figcaption>
    </figure>
  );
}

function SourceLink({ href, platform }: { href: string; platform: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="label group inline-flex items-center gap-2 text-ink-soft hover:text-amber"
    >
      <span className="text-amber">►</span>
      <span>View on {platform}</span>
      <span className="text-ink-mute transition-transform group-hover:translate-x-0.5">↗</span>
    </a>
  );
}

function SectionHeader({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className="label text-amber">{index}</span>
        <span className="label text-ink-soft">{label}</span>
      </div>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}
