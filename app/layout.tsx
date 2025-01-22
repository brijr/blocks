import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Link from "next/link";

import { DynamicNav } from "@/components/site/dynamic-nav";
import { Craft } from "@/components/craft";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blocks.is / Typescript Components for Websites and User Interfaces",
  description:
    "Collection of Typescript Components for building Websites and User Interfaces by Bridger Tower.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased max-w-7xl mx-auto xl:py-3`}
      >
        <Nav />
        <main className="border-x border-b">{children}</main>
      </body>
    </html>
  );
}

const Nav = () => {
  return (
    <nav className="uppercase sticky top-0 z-50">
      <section className="border-x font-medium border-t p-3 flex justify-between items-center bg-background">
        <Link href="/">Blocks.is ◾</Link>
        <Craft className="flex gap-3 text-sm">
          <a target="_blank" href="https://github.com/brijr/blocks">
            GitHub
          </a>
          <a target="_blank" href="https://x.com/bridgertower">
            Follow for Updates
          </a>
        </Craft>
      </section>
      <DynamicNav />
    </nav>
  );
};
