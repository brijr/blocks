"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
  {
    name: "Home",
    href: "/",
  },
];

export const DynamicNav = () => {
  const pathname = usePathname();

  return (
    <nav className="uppercase">
      <section className="border flex justify-between items-center bg-accent/30 backdrop-blur-md">
        <div className="flex divide-x border-r">
          {pages.map((page) => {
            const isActive = pathname === page.href;
            return (
              <Link
                className={`p-3 text-sm transition-colors ${
                  isActive
                    ? "bg-accent font-medium cursor-default"
                    : "hover:bg-accent/50"
                }`}
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
