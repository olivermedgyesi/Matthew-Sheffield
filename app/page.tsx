import Link from "next/link";
import { projects, stats, type Project } from "@/lib/projects";
import { HeroHeadline } from "@/components/HeroHeadline";

export default function Home() {
  return (
    <>
      <div
        className="scanlines crt pointer-events-none fixed inset-0 z-50"
        aria-hidden
      />

      <main className="relative">
        <HeroSection />
        <StatsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative mx-auto flex min-h-screen max-w-site flex-col overflow-hidden px-6 py-8 md:px-10 md:py-10">
      {/* Background video — clipped inside the PixelFrame inner border */}
      <video
        src="/videos/homepage-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
        className="pointer-events-none absolute inset-4 -z-20 h-[calc(100%-2rem)] w-[calc(100%-2rem)] object-cover md:inset-6 md:h-[calc(100%-3rem)] md:w-[calc(100%-3rem)]"
      />
      {/* Slight black overlay so foreground text stays legible */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-4 -z-10 bg-black/55 md:inset-6"
      />

      <PixelFrame />

      <div className="relative z-10 flex flex-1 flex-col px-4 py-6 md:px-10 md:py-10">
        <nav className="label flex items-center justify-between text-ink-soft">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 md:gap-x-7">
            <li className="flex items-center gap-2">
              <span className="cursor-blink text-amber">►</span>
              <Link href="/" className="text-amber">
                Home
              </Link>
            </li>
            <li>
              <Link href="/work" className="hover:text-amber">
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
          <span className="hidden text-olive md:inline">
            Stage 01 — 01 / 04
          </span>
        </nav>

        <div className="mt-10 grid grid-cols-[auto_1fr] items-center gap-x-6 gap-y-0 font-terminal text-2xl leading-[1.1] text-ink-soft md:mt-14 md:gap-x-8">
          <PlayerRow label="Player" value="Matt C. Sheffield" />
          <PlayerRow label="Class" value="Editor / Videographer" />
          <PlayerRow label="Loc" value="Los Angeles, Calif." />
        </div>

        <HeroHeadline />

        <div className="border-2 border-olive/60 p-4 md:p-5">
          <div className="label mb-2 text-olive">Dialog</div>
          <p className="font-terminal text-xl leading-snug text-ink-soft text-pretty md:text-2xl">
            &gt; Social-first storytelling, documentaries, and viral content
            across fashion, music, and internet culture.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-line pt-4 md:flex-row md:items-center md:justify-between md:gap-6">
          <div className="label flex flex-wrap items-center gap-x-4 gap-y-2 text-ink-soft md:gap-x-5">
            <span className="whitespace-nowrap">
              Views <span className="text-amber">10M+</span>
            </span>
            <span className="text-ink-mute">|</span>
            <span className="whitespace-nowrap">
              Reach <HealthBar filled={8} total={10} />
            </span>
            <span className="hidden text-ink-mute md:inline">|</span>
            <span className="hidden whitespace-nowrap md:inline">
              LV. <span className="text-olive">07</span>
            </span>
          </div>
          <div className="label flex items-center gap-2 text-ink-mute">
            <span className="cursor-blink text-amber">▶</span>
            <span>Press Start — Selected Work</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section
      id="stats"
      className="relative mx-auto max-w-site border-t border-line px-6 py-16 md:px-10 md:py-24"
    >
      <SectionHeader index="02 / 04" label="High Scores" />

      <h2 className="mt-8 font-pixel text-base uppercase text-ink md:text-xl">
        Stats
      </h2>

      <ol className="mt-10 divide-y divide-line border-y border-line">
        {stats.map((s) => (
          <li
            key={s.rank}
            className="grid grid-cols-[auto_1fr_auto] items-center gap-x-4 py-5 md:gap-x-8 md:py-6"
          >
            <span className="label text-olive">[{s.rank}]</span>
            <span className="font-terminal text-xl leading-tight text-ink md:text-2xl">
              {s.label}
            </span>
            <span className="font-pixel text-[0.7rem] uppercase text-amber md:text-sm">
              {s.value}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section
      id="work"
      className="relative mx-auto max-w-site border-t border-line px-6 py-16 md:px-10 md:py-24"
    >
      <SectionHeader index="03 / 04" label="Featured Stages" />

      <h2 className="mt-8 font-pixel text-base uppercase text-ink md:text-xl">
        Selected Work
      </h2>

      <div className="mt-12 flex flex-col gap-20 md:mt-20 md:gap-32">
        {projects.map((p, i) => (
          <Stage
            key={p.slug}
            project={p}
            stageNum={String(i + 1).padStart(2, "0")}
            reverse={i % 2 === 1}
          />
        ))}
      </div>

      <div className="mt-16 flex justify-end md:mt-24">
        <Link
          href="/work"
          className="label flex items-center gap-2 text-ink-soft hover:text-amber"
        >
          <span>All Stages</span>
          <span className="text-amber">→</span>
        </Link>
      </div>
    </section>
  );
}

function Stage({
  project,
  stageNum,
  reverse,
}: {
  project: Project;
  stageNum: string;
  reverse: boolean;
}) {
  return (
    <article
      className={`grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <span className="label text-olive">Stage {stageNum}</span>
          <span className="h-px flex-1 bg-line" />
        </div>

        <h3 className="font-pixel text-xl uppercase text-ink md:text-2xl lg:text-3xl">
          {project.name}
        </h3>

        <p className="label text-ink-soft">{project.role}</p>

        <p className="font-terminal text-xl leading-snug text-ink-soft text-pretty md:text-2xl">
          &gt; {project.blurb}
        </p>

        <ul className="label flex flex-wrap gap-x-4 gap-y-2 text-ink-mute">
          {project.tags.map((t) => (
            <li key={t}>#{t}</li>
          ))}
        </ul>

        <div className="mt-2 flex items-center gap-3 border-t border-line pt-4">
          <span className="label text-olive">Key Drop</span>
          <span className="font-terminal text-xl text-amber md:text-2xl">
            {project.metric}
          </span>
        </div>
      </div>

      <VideoFrame name={project.name} />
    </article>
  );
}

function VideoFrame({ name }: { name: string }) {
  return (
    <div className="relative aspect-video w-full border-2 border-ink-soft bg-black">
      <div className="pointer-events-none absolute inset-2 border border-line" />
      <span className="absolute left-1 top-1 h-2 w-2 bg-amber" />
      <span className="absolute right-1 top-1 h-2 w-2 bg-amber" />
      <span className="absolute bottom-1 left-1 h-2 w-2 bg-amber" />
      <span className="absolute bottom-1 right-1 h-2 w-2 bg-amber" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <div className="font-pixel text-xl uppercase text-amber md:text-3xl">
          ▶
        </div>
        <div className="label text-ink-soft">{name}</div>
        <div className="label flex items-center gap-2 text-olive">
          <span className="cursor-blink">●</span>
          <span>Awaiting Signal</span>
        </div>
      </div>

      <div className="label absolute bottom-3 left-3 text-ink-mute">
        CH 01 · HD
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-site px-6 py-16 md:px-10 md:py-24"
    >
      <SectionHeader index="04 / 04" label="Continue?" />

      <div className="mt-10 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-[1.2fr_1fr] md:gap-16">
        <div className="flex flex-col gap-6">
          <h2
            className="font-pixel text-lg uppercase text-ink text-pretty md:text-3xl"
            style={{ lineHeight: 1.7 }}
          >
            <span className="text-amber">Game Over?</span>
            <br />
            Let&apos;s start a new one.
          </h2>

          <p className="font-terminal text-xl leading-snug text-ink-soft text-pretty md:text-2xl">
            &gt; Available for freelance editing, videography, branded content,
            documentaries, and creative collaborations.
          </p>
        </div>

        <div className="border-2 border-olive/60 p-5 md:p-6">
          <div className="label mb-4 text-olive">Select</div>
          <ul className="flex flex-col gap-3 font-terminal text-xl md:text-2xl">
            <li>
              <a
                href="mailto:mattcsheffield@gmail.com"
                className="group flex items-center gap-3 text-ink hover:text-amber"
              >
                <span className="text-amber group-hover:cursor-blink">►</span>
                <span>Yes — Get in touch</span>
              </a>
            </li>
            <li className="flex items-center gap-3 text-ink-soft">
              <span className="text-ink-mute">○</span>
              <a href="#top" className="hover:text-amber">
                No — Back to title screen
              </a>
            </li>
          </ul>

          <div className="mt-5 border-t border-line pt-4">
            <div className="label mb-1 text-olive">Email</div>
            <a
              href="mailto:mattcsheffield@gmail.com"
              className="font-terminal text-xl text-amber hover:underline md:text-2xl"
            >
              mattcsheffield@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-3 border-t border-line pt-6 md:flex-row md:items-center md:justify-between">
        <span className="label text-ink-mute">
          © {new Date().getFullYear()} · Matt Sheffield
        </span>
        <span className="label text-ink-mute">End of File · Press R to Reset</span>
      </div>
    </section>
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

function PlayerRow({ label, value }: { label: string; value: string }) {
  return (
    <>
      <span className="label text-olive">{label}</span>
      <span className="font-terminal text-2xl leading-[1.1] text-ink">
        {value}
      </span>
    </>
  );
}

function HealthBar({ filled, total }: { filled: number; total: number }) {
  return (
    <span className="ml-1 inline-flex align-middle">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`mr-0.5 inline-block h-2 w-2 ${
            i < filled ? "bg-amber" : "bg-ink-mute/40"
          }`}
        />
      ))}
    </span>
  );
}

function PixelFrame() {
  return (
    <>
      <div className="pointer-events-none absolute inset-2 z-0 border-2 border-ink-soft md:inset-4" />
      <div className="pointer-events-none absolute inset-4 z-0 border border-line md:inset-6" />
      <Notch className="left-2 top-2 md:left-4 md:top-4" />
      <Notch className="right-2 top-2 md:right-4 md:top-4" />
      <Notch className="bottom-2 left-2 md:bottom-4 md:left-4" />
      <Notch className="bottom-2 right-2 md:bottom-4 md:right-4" />
    </>
  );
}

function Notch({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute z-[1] h-3 w-3 bg-amber ${className}`}
      aria-hidden
    />
  );
}
