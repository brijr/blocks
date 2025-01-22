import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { GitHubLogoIcon } from "@radix-ui/react-icons";

import Link from "next/link";

import { DynamicNav } from "@/components/site/dynamic-nav";
import { Craft } from "@/components/craft";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/site/theme-provider";
import { ThemeToggle } from "@/components/site/theme-toggle";

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
    <html lang="en" className="no-scrollbar">
      <body
        className={`${font.className} antialiased max-w-7xl mx-auto xl:py-3`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <main className="border-x border-b">{children}</main>
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}

const Nav = () => {
  return (
    <nav className="uppercase sticky top-0 z-50">
      <section className="border-x font-medium border-t flex justify-between items-center bg-background">
        <Link className="py-2 px-3 border-r" href="/">
          Blocks.is ◾
        </Link>
        <Craft className="flex h-full border-l text-sm divide-x">
          <a
            className="p-3 hover:bg-accent/50"
            target="_blank"
            href="https://github.com/brijr/blocks"
          >
            <ThemeToggle />
          </a>
          <a
            className="p-3 hover:bg-accent/50"
            target="_blank"
            href="https://github.com/brijr/blocks"
          >
            <GitHubLogoIcon width={20} height={20} />
          </a>
          <a
            className="p-3 hover:bg-accent/50"
            target="_blank"
            href="https://x.com/bridgertower"
          >
            Follow for Updates
          </a>
        </Craft>
      </section>
      <DynamicNav />
    </nav>
  );
};
