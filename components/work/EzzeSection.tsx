import { VideoPlayer } from "@/components/VideoPlayer";
import { SectionHeader, SectionShell } from "./shared";

const clips: {
  src: string;
  aspect: "vertical" | "horizontal" | "square";
  label?: string;
}[] = [
  { src: "/videos/ezze/ezze-meet-1.mp4", aspect: "vertical", label: "Meet the Seller" },
  { src: "/videos/ezze/ezze-recap-1.mp4", aspect: "vertical", label: "Livestream Recap" },
  { src: "/videos/ezze/ezze-promo-1.mp4", aspect: "vertical", label: "Promo" },
  { src: "/videos/ezze/ezze-recap-2.mp4", aspect: "vertical", label: "Livestream Recap" },
  { src: "/videos/ezze/ezze-meet-2.mp4", aspect: "vertical", label: "Meet the Seller" },
  { src: "/videos/ezze/ezze-promo-2.mp4", aspect: "vertical", label: "Promo" },
];

export function EzzeSection() {
  return (
    <SectionShell>
      <SectionHeader index="Stage 03" label="Ezze" />

      <div className="mt-8 grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div className="flex flex-col gap-5">
          <h2 className="font-pixel text-2xl uppercase leading-tight text-ink md:text-4xl lg:text-5xl">
            Ezze
          </h2>
          <p className="font-terminal text-xl leading-snug text-ink-soft text-pretty md:text-2xl">
            &gt; Creative media production and brand development for a
            livestream marketplace platform centered around vintage fashion,
            collectibles, and online selling culture — promos, event coverage,
            livestream recaps, and motion-based graphic assets for social.
          </p>
          <div className="mt-2 border-t border-line pt-4">
            <div className="label mb-3 text-olive">Role</div>
            <ul className="label flex flex-wrap gap-x-5 gap-y-2 text-ink-soft">
              <li>Editing</li>
              <li>Videography</li>
              <li>Brand Development</li>
              <li>Social Content</li>
              <li>Motion Graphics</li>
              <li>Event Coverage</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col border-2 border-olive/60 p-5 md:p-6">
          <div className="label mb-4 text-olive">Highlights</div>
          <ul className="flex flex-col gap-3 font-terminal text-lg leading-snug text-ink-soft md:text-xl">
            <li>
              <span className="text-amber">▸</span> Helped establish the
              platform&apos;s early visual identity
            </li>
            <li>
              <span className="text-amber">▸</span> Content across accounts
              totaling 150K+ followers
            </li>
            <li>
              <span className="text-amber">▸</span> Grew Ezze Live from launch
              to 18K followers
            </li>
            <li>
              <span className="text-amber">▸</span> Work tied to ThriftCon and
              Sean Wotherspoon
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-14 md:mt-28">
        <div className="flex items-center gap-3">
          <span className="label text-amber">Selected Work</span>
          <span className="h-px flex-1 bg-line" />
          <span className="label text-ink-mute">
            {String(clips.length).padStart(2, "0")} Clips
          </span>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:mt-14 md:grid-cols-3 md:gap-6 lg:gap-8">
          {clips.map((c, i) => (
            <VideoPlayer
              key={i}
              src={c.src}
              title={c.label ?? `Ezze clip ${i + 1}`}
              platform={c.label}
              aspect={c.aspect}
            />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
