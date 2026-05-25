import {
  MetricRow,
  SectionHeader,
  SectionShell,
  VerticalVideo,
} from "./shared";

export function KyleKellerSection() {
  return (
    <SectionShell>
      <SectionHeader index="Stage 04" label="Kyle Keller" />

      <div className="mt-8 grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div className="flex flex-col gap-5">
          <h2 className="font-pixel text-2xl uppercase leading-tight text-ink md:text-4xl lg:text-5xl">
            Kyle Keller
          </h2>
          <p className="font-terminal text-xl leading-snug text-ink-soft text-pretty md:text-2xl">
            &gt; Filmed creator-focused social content for viral creator Kyle
            Keller — large-scale public challenge videos and branded campaign
            work for short-form social platforms.
          </p>
          <div className="mt-2 border-t border-line pt-4">
            <div className="label mb-3 text-olive">Role</div>
            <ul className="label flex flex-wrap gap-x-5 gap-y-2 text-ink-soft">
              <li>Videography</li>
              <li>Production</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col border-2 border-olive/60 p-5 md:p-6">
          <div className="label mb-4 text-olive">High Scores</div>
          <ul className="flex flex-col gap-3">
            <MetricRow value="150M+" label="Heavy Money series views" />
            <MetricRow value="5M+" label="Series likes" />
            <MetricRow value="Einstein Bros." label="Brand campaign" />
            <MetricRow value="Top-performer" label="On Kyle's channel" />
          </ul>
        </div>
      </div>

      <div className="mt-14 md:mt-28">
        <div className="flex items-center gap-3">
          <span className="label text-amber">Featured Series</span>
          <span className="h-px flex-1 bg-line" />
          <span className="label text-ink-mute">02 Campaigns</span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 md:mt-14 md:grid-cols-2 md:gap-14">
          <VerticalVideo
            src="/videos/kyle-heavy-money.mp4"
            title="Heavy Money Experiment"
            platform="IG · TikTok · YT"
            views="150M+"
            likes="5M+"
            note="Public social-experiment-style series built around large-scale audience interaction and viral storytelling."
            channel="CH 01"
          />
          <VerticalVideo
            src="/videos/kyle-einstein.mp4"
            title="Einstein Bros. Campaign"
            platform="IG · TikTok · YT"
            views="350K+"
            likes="5K+"
            note="Branded creator campaign filmed for Einstein Bros. Bagels across short-form social platforms."
            channel="CH 02"
          />
        </div>
      </div>
    </SectionShell>
  );
}
