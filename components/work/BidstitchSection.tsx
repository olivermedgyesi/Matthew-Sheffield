import Image from "next/image";
import {
  HorizontalVideo,
  MetricRow,
  SectionHeader,
  SectionShell,
  VerticalVideo,
} from "./shared";

export function BidstitchSection() {
  return (
    <SectionShell noBorder>
      <SectionHeader index="Stage 01" label="Bidstitch" />

      <div className="mt-10 grid grid-cols-1 gap-10 md:mt-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div className="flex flex-col gap-5">
          <h2 className="font-pixel text-2xl uppercase text-ink md:text-4xl lg:text-5xl">
            Bidstitch
          </h2>
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

      <div className="mt-20 md:mt-28">
        <div className="flex items-center gap-3">
          <span className="label text-amber">Featured</span>
          <span className="h-px flex-1 bg-line" />
          <span className="label text-ink-mute">03 Clips</span>
        </div>

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
    </SectionShell>
  );
}
