"use client";

import { useEffect, useState } from "react";

export function HeroHeadline() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`flex flex-1 items-center justify-center py-10 transition-opacity duration-1000 ease-out md:py-16 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!visible}
    >
      <h1
        className="font-pixel text-center text-sm uppercase text-ink md:text-3xl lg:text-4xl"
        style={{ lineHeight: 1.7 }}
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
