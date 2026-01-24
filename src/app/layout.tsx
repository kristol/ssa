import "../styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import AppShell from "../components/AppShell";

export const metadata: Metadata = {
  title: "The SSA Project",
  description: "Stay ahead of everyone with The SSA Project.",
  icons: {
    icon: "/images/FAVICON.svg",
    shortcut: "/images/FAVICON.svg",
    apple: "/images/FAVICON.svg",
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        
        {/* SVG filter defs for plasma/glitch edge effect */}
        <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
          <defs>
            <filter id="edge-plasma">
              {/* Organic texture */}
              <feTurbulence type="fractalNoise" baseFrequency="0.009" numOctaves="3" seed="2" result="noise">
                <animate attributeName="baseFrequency" values="0.008;0.012;0.009;0.011;0.008" dur="30s" repeatCount="indefinite" />
                {/* occasional seed jump for glitchy flicker */}
                <animate attributeName="seed" values="2;40;2" dur="7s" repeatCount="indefinite" />
              </feTurbulence>
              {/* Distort element content */}
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="18" xChannelSelector="R" yChannelSelector="G" result="displaced">
                <animate attributeName="scale" values="16;24;16" dur="8s" repeatCount="indefinite" />
              </feDisplacementMap>
              {/* Blue-ish colorization */}
              <feColorMatrix in="displaced" type="matrix"
                values="0.2 0 0 0 0
                        0   0.6 0 0 0
                        0   0   1.4 0 0
                        0   0   0 1 0" result="blueish" />
              {/* Soften */}
              <feGaussianBlur in="blueish" stdDeviation="2" result="blurred" />
              <feBlend in="blurred" in2="SourceGraphic" mode="screen" />
            </filter>
          </defs>
        </svg>

        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
