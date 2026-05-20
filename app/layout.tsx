import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";

const pixel = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pixel",
  display: "swap",
});

const terminal = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-terminal",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Matt Sheffield — Editor & Videographer",
    template: "%s — Matt Sheffield",
  },
  description:
    "Los Angeles-based editor and videographer creating high-retention social content, documentaries, and internet-native storytelling for modern media brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pixel.variable} ${terminal.variable}`}>
        {children}
      </body>
    </html>
  );
}
