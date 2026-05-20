import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#ffffff",
        "ink-soft": "#cfcfcf",
        "ink-mute": "#7a7a7a",
        bg: "#000000",
        line: "#2a2a2a",
        amber: "#c9a85a",
        olive: "#8a9572",
      },
      fontFamily: {
        pixel: ["var(--font-pixel)", "monospace"],
        terminal: ["var(--font-terminal)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        site: "78rem",
      },
    },
  },
  plugins: [],
};
export default config;
