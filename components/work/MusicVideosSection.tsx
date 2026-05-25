import { SectionHeader, SectionShell } from "./shared";
import { YouTubeCard } from "./YouTubeCard";

// Replace each `url` with the YouTube link for that track.
// Thumbnails auto-pull from YouTube — no files to drop in.

type Track = {
  artist: string;
  title: string;
  url: string;
};

const tracks: Track[] = [
  {
    artist: "Nightlands",
    title: "Stare Into The Sun",
    url: "https://www.youtube.com/watch?v=uKd9vCvbxQQ",
  },
  {
    artist: "Pulgas",
    title: "My Home Is Made of Tin",
    url: "https://www.youtube.com/watch?v=TTDaU-v0Nn8",
  },
  {
    artist: "Flanafi & Ape School",
    title: "Gjuijar",
    url: "https://www.youtube.com/watch?v=6mwfDFklNe8",
  },
  {
    artist: "Pulgas",
    title: "Going At It Again",
    url: "https://www.youtube.com/watch?v=CSo6jn2mNjw",
  },
  {
    artist: "Rest Ashore",
    title: "Anti-Sex League",
    url: "https://www.youtube.com/watch?v=CblnDAZ8QKw",
  },
  {
    artist: "Pulgas",
    title: "Can't Think Of Anything Else At The Moment",
    url: "https://www.youtube.com/watch?v=3RxXgBNDSg0",
  },
];

export function MusicVideosSection() {
  return (
    <SectionShell>
      <SectionHeader index="Stage 05" label="Music Videos / Artist Work" />

      <div className="mt-8 grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div className="flex flex-col gap-5">
          <h2 className="font-pixel text-2xl uppercase leading-tight text-ink md:text-4xl lg:text-5xl">
            Music Videos
          </h2>
          <p className="font-terminal text-xl leading-snug text-ink-soft text-pretty md:text-2xl">
            &gt; Filmed and edited music videos and visual content for
            independent artists across alternative, experimental, and
            underground music scenes. Cinematic visuals, atmosphere, and
            artist-driven storytelling.
          </p>
          <div className="mt-2 border-t border-line pt-4">
            <div className="label mb-3 text-olive">Role</div>
            <ul className="label flex flex-wrap gap-x-5 gap-y-2 text-ink-soft">
              <li>Editing</li>
              <li>Videography</li>
              <li>Direction</li>
              <li>Production</li>
              <li>Ideation</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col border-2 border-olive/60 p-5 md:p-6">
          <div className="label mb-4 text-olive">Catalog</div>
          <ul className="flex flex-col gap-2 font-terminal text-lg leading-snug text-ink-soft md:text-xl">
            {tracks.map((t) => (
              <li
                key={`${t.artist}-${t.title}`}
                className="flex items-baseline gap-3"
              >
                <span className="text-amber">▸</span>
                <span>
                  <span className="text-ink">{t.artist}</span>{" "}
                  <span className="text-ink-mute">—</span>{" "}
                  <span className="italic">{t.title}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14 md:mt-28">
        <div className="flex items-center gap-3">
          <span className="label text-amber">Selected Videos</span>
          <span className="h-px flex-1 bg-line" />
          <span className="label text-ink-mute">
            {String(tracks.length).padStart(2, "0")} Tracks
          </span>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-10 md:mt-14 md:grid-cols-2 md:gap-14">
          {tracks.map((t) => (
            <YouTubeCard
              key={`${t.artist}-${t.title}`}
              url={t.url}
              artist={t.artist}
              title={t.title}
            />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
