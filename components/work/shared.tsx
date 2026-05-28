import { VideoPlayer } from "@/components/VideoPlayer";

export function SectionHeader({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
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

export function MetricRow({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <li className="flex items-baseline justify-between gap-4 border-b border-line/60 pb-2 last:border-0 last:pb-0">
      <span className="font-terminal text-xl text-amber md:text-2xl">
        {value}
      </span>
      <span className="label text-right text-ink-soft">{label}</span>
    </li>
  );
}

export function SourceLink({
  href,
  platform,
}: {
  href: string;
  platform: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="label mt-3 inline-flex self-start border-2 border-amber px-4 py-2 text-ink-soft transition-colors hover:bg-amber hover:text-bg"
    >
      View on {platform}
    </a>
  );
}

export function VerticalVideo({
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
  href?: string;
  title: string;
  platform: string;
  views: string;
  likes?: string;
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
          {likes ? (
            <>
              <span className="text-ink-mute">|</span>
              <span>
                Likes <span className="text-amber">{likes}</span>
              </span>
            </>
          ) : null}
        </div>
        <p className="font-terminal text-lg leading-snug text-ink-soft text-pretty md:text-xl">
          &gt; {note}
        </p>
        {href ? <SourceLink href={href} platform={platform} /> : null}
      </figcaption>
    </figure>
  );
}

export function HorizontalVideo({
  src,
  href,
  title,
  platform,
  views,
  note,
  channel,
}: {
  src: string;
  href?: string;
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
          {href ? <SourceLink href={href} platform={platform} /> : null}
        </div>
        <p className="font-terminal text-xl leading-snug text-ink-soft text-pretty md:text-2xl">
          &gt; {note}
        </p>
      </figcaption>
    </figure>
  );
}

export function SectionShell({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative mx-auto max-w-site px-5 py-12 md:px-10 md:py-20">
      {children}
    </section>
  );
}
