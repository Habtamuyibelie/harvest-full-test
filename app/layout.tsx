import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SiteBackground from "@/components/SiteBackground";
import WovenBorder from "@/components/WovenBorder";
import ThemeProvider, { themeInitScript } from "@/components/ThemeProvider";

const fraunces = { variable: "--font-fraunces" };

const source = { variable: "--font-source" };

export const metadata: Metadata = {
  title: "Harvest Church of God Ethiopia — መከር የእግዚአብሔር ቤተ-ክርስቲያን",
  description: "A family of faith in Addis Ababa, Ethiopia — worship, grow, and serve together.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${source.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider>
          <SiteBackground />
          <Navbar />
          <WovenBorder tone="gold" className="opacity-80" />
          <main>{children}</main>
          <WovenBorder tone="gold" className="opacity-80" />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
