import type { Metadata } from "next";
import { IBM_Plex_Sans, Newsreader } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { themeInitScript } from "@/components/layout/theme";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { siteIdentity } from "@/components/shared/site-brand";
import { siteConfig } from "@/content/site-config";

import "./globals.css";

const bodyFont = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const displayFont = Newsreader({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webhubde.com"),
  title: {
    default: `${siteIdentity.brandName} | Websites, landing pages, and web apps`,
    template: `%s | ${siteIdentity.brandName}`,
  },
  description: siteConfig.siteDescription,
  openGraph: {
    title: `${siteIdentity.brandName} | Websites, landing pages, and web apps`,
    description: siteConfig.siteDescription,
    siteName: siteIdentity.brandName,
    type: "website",
    url: "https://webhubde.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <div className="site-shell">
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <Header />
          <div id="main-content" className="site-main">
            {children}
          </div>
          <Footer />
          <ThemeToggle />
        </div>
      </body>
    </html>
  );
}
