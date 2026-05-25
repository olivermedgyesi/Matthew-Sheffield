type Props = {
  url: string;
  artist: string;
  title: string;
};

function getYouTubeId(url: string): string | null {
  // Matches youtu.be/ID, youtube.com/watch?v=ID, /embed/ID, /shorts/ID
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{11})/,
  );
  return match ? match[1] : null;
}

export function YouTubeCard({ url, artist, title }: Props) {
  const id = getYouTubeId(url);
  // hqdefault is the most reliable thumbnail — always exists. It's 480x360 (4:3)
  // with letterbox bars, but object-cover on a 16:9 container crops them out exactly.
  const thumbnail = id
    ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
    : null;

  return (
    <figure className="flex flex-col gap-6 md:gap-7">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Watch ${artist} — ${title} on YouTube`}
        className="group relative block aspect-video w-full overflow-hidden border-2 border-ink-soft bg-black"
      >
        <div className="pointer-events-none absolute inset-2 z-10 border border-line" />
        <span className="pointer-events-none absolute left-1 top-1 z-10 h-2 w-2 bg-amber" />
        <span className="pointer-events-none absolute right-1 top-1 z-10 h-2 w-2 bg-amber" />
        <span className="pointer-events-none absolute bottom-1 left-1 z-10 h-2 w-2 bg-amber" />
        <span className="pointer-events-none absolute bottom-1 right-1 z-10 h-2 w-2 bg-amber" />

        {thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumbnail}
            alt=""
            className="absolute inset-0 h-full w-full bg-black object-cover"
            loading="lazy"
          />
        ) : null}

        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/20">
          <svg
            viewBox="0 0 24 24"
            aria-hidden
            className="h-5 w-5 fill-amber drop-shadow-[0_0_6px_rgba(0,0,0,0.8)] transition-transform group-hover:scale-110 md:h-8 md:w-8"
          >
            <polygon points="6,4 6,20 18,12" />
          </svg>
        </div>

        <div className="label absolute bottom-3 left-3 z-20 text-ink-soft drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
          YouTube
        </div>
      </a>

      <figcaption className="flex flex-col gap-1 px-1">
        <div className="label text-olive">{artist}</div>
        <h3 className="font-pixel text-sm uppercase text-ink md:text-base">
          {title}
        </h3>
      </figcaption>
    </figure>
  );
}
