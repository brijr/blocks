"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const pages = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Heros",
    href: "/hero",
  },
];

export const DynamicNav = () => {
  const pathname = usePathname();

  return (
    <nav className="uppercase">
      <section className="border flex justify-between items-center bg-accent">
        <div className="flex divide-x border-r">
          {pages.map((page) => {
            const isActive = pathname === page.href;
            return (
              <Link
                className={cn(
                  "p-3 text-sm transition-colors",
                  isActive
                    ? "bg-background font-medium cursor-default"
                    : "hover:bg-background/50"
                )}
                key={page.href}
                href={page.href}
              >
                {page.name}
              </Link>
            );
          })}
        </div>
      </section>
    </nav>
  );
};
