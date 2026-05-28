import Image from "next/image";

import { Nav } from "@/components/Nav";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <div
        className="scanlines crt pointer-events-none fixed inset-0 z-50"
        aria-hidden
      />
      <main className="relative">
        <section className="relative mx-auto max-w-site px-6 pt-8 md:px-10 md:pt-10">
          <Nav active="about" rightLabel="Profile — Player Info" />
        </section>

        <section className="relative mx-auto max-w-site px-6 py-12 md:px-10 md:py-16">
          <div className="flex items-center gap-4">
            <span className="label text-amber">Profile / 01</span>
            <span className="label text-ink-soft">About Player</span>
            <span className="h-px flex-1 bg-line" />
          </div>

          <header className="mt-10 flex flex-col gap-3 md:mt-14">
            <span className="label text-olive">Player</span>
            <h1 className="font-pixel text-2xl uppercase leading-tight text-ink md:text-3xl lg:text-4xl">
              Matt C. Sheffield
            </h1>
            <span className="label text-ink-soft">
              Editor · Director · Videographer · Los Angeles, Calif.
            </span>
          </header>

          <div className="mt-8 grid grid-cols-1 items-stretch gap-8 md:mt-10 md:grid-cols-[minmax(0,20rem)_1fr] md:gap-10 lg:grid-cols-[minmax(0,24rem)_1fr] lg:gap-14">
            <Headshot />
            <BioBox />
          </div>

          <StatRow />
        </section>

        <ContactCTA />
      </main>
    </>
  );
}

function BioBox() {
  return (
    <div className="flex h-full flex-col gap-5 border-2 border-olive/60 p-5 md:p-6">
      <div className="label text-olive">Bio</div>
      <p className="font-terminal text-xl leading-snug text-ink-soft text-pretty md:text-2xl">
        &gt; Matt Sheffield is a Los Angeles–based editor, director, and
        videographer who has been making videos since he was old enough to pick
        up a camera, drawn to the idea that every person has a story worth
        telling.
      </p>
      <p className="font-terminal text-xl leading-snug text-ink-soft text-pretty md:text-2xl">
        &gt; Matt has developed a distinct visual style reflected across
        documentaries, music videos, branded content, podcasts, fashion media,
        and viral social media campaigns, blending cinematic storytelling with
        an instinct for what genuinely connects with people.
      </p>
      <p className="font-terminal text-xl leading-snug text-ink-soft text-pretty md:text-2xl">
        &gt; He also loves camping, hiking, playing video games, cooking
        elaborate meals for friends, going to concerts, and doing karaoke at
        home with his fiancée Olive and their cat Zelda.
      </p>
    </div>
  );
}

function Headshot() {
  return (
    <div className="relative mx-auto h-full w-full max-w-sm md:mx-0 md:max-w-none">
      <div className="relative aspect-[4/5] w-full border-2 border-ink-soft bg-black md:aspect-auto md:h-full">
        <div className="pointer-events-none absolute inset-2 z-10 border border-line" />
        <span className="pointer-events-none absolute left-1 top-1 z-10 h-2 w-2 bg-amber" />
        <span className="pointer-events-none absolute right-1 top-1 z-10 h-2 w-2 bg-amber" />
        <span className="pointer-events-none absolute bottom-1 left-1 z-10 h-2 w-2 bg-amber" />
        <span className="pointer-events-none absolute bottom-1 right-1 z-10 h-2 w-2 bg-amber" />

        <Image
          src="/images/headshot.jpg"
          alt="Matt Sheffield"
          fill
          sizes="(min-width: 1024px) 24rem, (min-width: 768px) 20rem, 100vw"
          className="object-cover"
          priority
        />

        <div className="label absolute bottom-3 left-3 z-20 text-ink-soft drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
          CH 01 · Player
        </div>
      </div>
    </div>
  );
}

function StatRow() {
  const stats: { label: string; lines: string[] }[] = [
    { label: "Class", lines: ["Editor / Videographer"] },
    { label: "Loc", lines: ["Los Angeles, Calif."] },
    { label: "Party", lines: ["Olive (fiancée)", "Zelda (cat)"] },
    { label: "Side Quests", lines: ["Camping", "Cooking", "Karaoke"] },
  ];

  return (
    <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 border-t border-line pt-6 sm:grid-cols-2 md:mt-14 md:grid-cols-4">
      {stats.map((s) => (
        <li key={s.label} className="flex flex-col gap-1">
          <span className="label text-olive">{s.label}</span>
          {s.lines.map((line) => (
            <span
              key={line}
              className="font-terminal text-xl leading-tight text-ink md:text-2xl"
            >
              {line}
            </span>
          ))}
        </li>
      ))}
    </ul>
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
