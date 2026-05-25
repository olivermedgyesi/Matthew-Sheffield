"use client";

import { useEffect, useState } from "react";

export function HeroHeadline() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Match Tailwind's md: breakpoint (768px). Mobile keeps the headline up.
    const isDesktop =
      typeof window !== "undefined" &&
      window.matchMedia("(min-width: 768px)").matches;
    if (!isDesktop) return;

    const timer = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="flex min-h-0 flex-1 items-center justify-center py-6 md:py-16"
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 1200ms ease-out",
        pointerEvents: visible ? "auto" : "none",
        willChange: "opacity",
      }}
      aria-hidden={!visible}
    >
      <h1
        className="font-pixel px-2 text-center text-xs uppercase text-ink md:text-3xl lg:text-4xl"
        style={{ lineHeight: 1.5 }}
      >
        Creating <span className="text-amber">high-retention</span>
        <br />
        content for modern
        <br />
        media brands.
      </h1>
    </div>
  );
}
