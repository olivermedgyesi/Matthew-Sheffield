import {
  MetricRow,
  SectionHeader,
  SectionShell,
  VerticalVideo,
} from "./shared";

// TODO: drop these files in public/videos/ and (optional) add /logos/local-godz.png
// - local-godz-rebecca.mp4
// - local-godz-david-so.mp4
// - local-godz-pixar-hoppers.mp4
// Source URLs for the three reels are not provided yet — add `href` props once known.

export function LocalGodzSection() {
  return (
    <SectionShell>
      <SectionHeader index="Stage 02" label="Local Godz" />

      <div className="mt-8 grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div className="flex flex-col gap-5">
          <h2 className="font-pixel text-2xl uppercase leading-tight text-ink md:text-4xl lg:text-5xl">
            Local Godz
          </h2>
          <p className="font-terminal text-xl leading-snug text-ink-soft text-pretty md:text-2xl">
            &gt; Edited and developed short-form content for a rapidly growing
            podcast and media platform centered around Asian American
            celebrities, creatives, and internet personalities across music,
            fashion, film, food, and culture.
          </p>
          <div className="mt-2 border-t border-line pt-4">
            <div className="label mb-3 text-olive">Role</div>
            <ul className="label flex flex-wrap gap-x-5 gap-y-2 text-ink-soft">
              <li>Editing</li>
              <li>Social Content Strategy</li>
              <li>Visual Identity Development</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col border-2 border-olive/60 p-5 md:p-6">
          <div className="label mb-4 text-olive">High Scores</div>
          <ul className="flex flex-col gap-3">
            <MetricRow value="0 → 13K" label="Instagram growth" />
            <MetricRow value="13M+" label="Cumulative reel views" />
            <MetricRow value="Multiple" label="Reels past 1M views" />
            <MetricRow value="3.8M" label="Top-performing reel" />
          </ul>
        </div>
      </div>

      <div className="mt-14 md:mt-28">
        <div className="flex items-center gap-3">
          <span className="label text-amber">Featured</span>
          <span className="h-px flex-1 bg-line" />
          <span className="label text-ink-mute">03 Clips</span>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-12 md:mt-14 md:grid-cols-3 md:gap-10">
          <VerticalVideo
            src="/videos/local-godz-rebecca.mp4"
            href="https://www.instagram.com/localgodz/reel/DLQD52lJMVu/"
            title="Rebecca Benedict"
            platform="Instagram"
            views="4M"
            note="Actress and model Rebecca Benedict recounts her unconventional life story — one of Local Godz's most viral interview clips."
            channel="CH 01"
          />
          <VerticalVideo
            src="/videos/local-godz-david-so.mp4"
            href="https://www.instagram.com/localgodz/reel/DSp85ryjwBu/"
            title="Must Eat LA Spots"
            platform="Instagram"
            views="1.5M"
            note="Comedian David So breaks down some of his favorite food spots in Los Angeles."
            channel="CH 02"
          />
          <VerticalVideo
            src="/videos/local-godz-pixar-hoppers.mp4"
            href="https://www.instagram.com/localgodz/reel/DVeSmt4Ev0r/"
            title="The Making of Pixar's Hoppers"
            platform="Instagram"
            views="500K"
            note="Animator and director Daniel Chong discusses the making of his directorial debut, Hoppers."
            channel="CH 03"
          />
        </div>
      </div>
    </SectionShell>
  );
}
