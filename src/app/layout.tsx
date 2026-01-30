import type { Metadata } from "next";
import { Oswald, Share_Tech_Mono } from "next/font/google"; // Corrected font import
import "./globals.css";
import { SmoothScroll } from "@/app/components/features/SmoothScroll";
import { CustomCursor } from "@/app/components/layout/CustomCursor";
import { HUD } from "@/app/components/layout/HUD";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap"
});

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-share-tech-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: "$SMO - THE DOMINATOR",
  description: "The Only Official Token of International Sumo League",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${oswald.variable} ${shareTechMono.variable} bg-pitch-black text-white antialiased overflow-x-hidden cursor-none selection:bg-neon-cyan selection:text-black`}>
        <SmoothScroll>
          <CustomCursor />
          <HUD />
          <div className="fixed inset-0 pointer-events-none z-[9998] opacity-40 mix-blend-overlay scanlines-global" aria-hidden="true" />

          {/* Global SVG Filters */}
          <svg style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }} version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="heat">
                <feTurbulence type="fractalNoise" baseFrequency="0.01 0.02" numOctaves="1" result="warp" />
                <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="20" in="SourceGraphic" in2="warp" />
              </filter>
            </defs>
          </svg>

          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
