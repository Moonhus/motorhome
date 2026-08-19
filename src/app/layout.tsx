import type { Metadata, Viewport } from "next";
import { Figtree, Fraunces } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { dealerJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Used motorhomes for sale in Brisbane | ${site.name}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "used motorhomes for sale Brisbane",
    "motorhomes for sale Brisbane",
    "car licence motorhome",
    "free motorhome delivery Brisbane",
    "12 month warranty motorhome",
    "Avida motorhomes",
    "Sunliner motorhomes",
    "KEA motorhome",
    "Avan Ovation",
    "South Australia motorhomes",
  ],
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  openGraph: {
    title: `Used motorhomes for sale in Brisbane | Free delivery`,
    description: site.description,
    locale: "en_AU",
    type: "website",
    siteName: site.name,
    url: site.url,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-AU"
      className={`${figtree.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <JsonLd data={dealerJsonLd()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
