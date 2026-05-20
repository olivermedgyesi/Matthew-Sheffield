export type Project = {
  slug: string;
  name: string;
  role: string;
  blurb: string;
  tags: string[];
  metric: string;
};

export const projects: Project[] = [
  {
    slug: "bidstitch",
    name: "Bidstitch",
    role: "Editing · Videography · Brand",
    blurb:
      "Long-form YouTube content, short-form social, and brand storytelling for a modern vintage fashion platform. Includes viral content tied to a Levi's TikTok collaboration.",
    tags: ["YouTube", "TikTok", "Instagram"],
    metric: "150K+ subscribers",
  },
  {
    slug: "local-godz",
    name: "Local Godz",
    role: "Social Edit · Visual Identity",
    blurb:
      "Short-form social content for a rapidly growing podcast on Asian American celebrities, creatives, and internet culture. Fast-paced social-first editing — multiple videos surpassing 1M views.",
    tags: ["Instagram", "TikTok"],
    metric: "0 → 13K Instagram",
  },
  {
    slug: "ezze",
    name: "Ezze",
    role: "Promo · Launch · Livestream",
    blurb:
      "Promotional and social-first media for a livestream marketplace platform focused on vintage fashion and collectibles. Branded edits, launch materials, and livestream marketing.",
    tags: ["Livestream", "Social"],
    metric: "Launch campaign",
  },
  {
    slug: "kyle-keller",
    name: "Kyle Keller",
    role: "Videography",
    blurb:
      "Filmed viral social content centered on fast-paced creator storytelling and audience engagement.",
    tags: ["TikTok", "Instagram"],
    metric: "Viral creator content",
  },
  {
    slug: "documentary",
    name: "Documentary Work",
    role: "Direction · Edit",
    blurb:
      "Documentary videos exploring vintage fashion culture, reselling communities, and regional sourcing networks across Mexico, Japan, and France. One film surpassed 300K views on YouTube.",
    tags: ["YouTube", "Long-form"],
    metric: "300K+ views",
  },
  {
    slug: "music-videos",
    name: "Music Videos",
    role: "Direction · Edit · Film",
    blurb:
      "Music videos and visual content for independent artists, including a project connected to David Hartley of The War on Drugs.",
    tags: ["Music", "Visual"],
    metric: "Independent artists",
  },
  {
    slug: "vintage-n-stuff",
    name: "Vintage N' Stuff",
    role: "Podcast Edit · Social",
    blurb:
      "Podcast and social content for a vintage-focused media platform and podcast.",
    tags: ["Podcast", "Social"],
    metric: "Vintage media",
  },
];

export const stats = [
  { rank: "01", label: "Cumulative Views", value: "10,000,000+" },
  { rank: "02", label: "Local Godz IG", value: "0 → 13,000" },
  { rank: "03", label: "Bidstitch Subs", value: "0 → 150,000+" },
  { rank: "04", label: "Levi's TikTok", value: "Collab Featured" },
  { rank: "05", label: "Documentary", value: "300K+ Views" },
];
