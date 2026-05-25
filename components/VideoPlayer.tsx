"use client";

import { useRef, useState } from "react";

type Props = {
  src: string;
  title: string;
  channel: string;
  platform: string;
  aspect: "vertical" | "horizontal";
};

export function VideoPlayer({ src, title, channel, platform, aspect }: Props) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const aspectClass =
    aspect === "vertical" ? "aspect-[9/16]" : "aspect-video";

  function handlePlay() {
    setPlaying(true);
    requestAnimationFrame(() => {
      videoRef.current?.play().catch(() => {});
    });
  }

  return (
    <div
      className={`relative ${aspectClass} w-full border-2 border-ink-soft bg-black`}
    >
      {/* Frame decoration */}
      <div className="pointer-events-none absolute inset-2 z-10 border border-line" />
      <span className="pointer-events-none absolute left-1 top-1 z-10 h-2 w-2 bg-amber" />
      <span className="pointer-events-none absolute right-1 top-1 z-10 h-2 w-2 bg-amber" />
      <span className="pointer-events-none absolute bottom-1 left-1 z-10 h-2 w-2 bg-amber" />
      <span className="pointer-events-none absolute bottom-1 right-1 z-10 h-2 w-2 bg-amber" />

      {/* Video — first frame shows as poster (via #t=0.1 media fragment) */}
      <video
        ref={videoRef}
        src={`${src}#t=0.1`}
        controls={playing}
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full bg-black object-cover"
      />

      {/* Play overlay — disappears once the user hits play */}
      {!playing && (
        <button
          type="button"
          onClick={handlePlay}
          aria-label={`Play ${title}`}
          className="group absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-black/30 transition-colors hover:bg-black/20 focus:outline-none"
        >
          <div className="font-pixel text-3xl uppercase text-amber drop-shadow-[0_0_6px_rgba(0,0,0,0.8)] transition-transform group-hover:scale-110 md:text-5xl">
            ▶
          </div>
          <div className="label absolute bottom-3 left-3 text-ink-soft drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
            {channel} · {platform}
          </div>
        </button>
      )}
    </div>
  );
}
