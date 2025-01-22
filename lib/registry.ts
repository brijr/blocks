// Utility Imports
import { readFileSync } from "fs";
import { join } from "path";

// Component Imports
import { HeroOne } from "@/components/blocks/heros/hero-one";
import { HeroTwo } from "@/components/blocks/heros/hero-two";

// Code Imports
const HeroOneCode = readFileSync(
  join(process.cwd(), "components/blocks/heros/hero-one.tsx"),
  "utf8"
);
const HeroTwoCode = readFileSync(
  join(process.cwd(), "components/blocks/heros/hero-two.tsx"),
  "utf8"
);

// Block Registry

// Hero Blocks
export const heroComponents = [
  {
    component: HeroOne,
    name: "Hero One",
    type: "Hero",
    code: HeroOneCode,
  },
  {
    component: HeroTwo,
    name: "Hero Two",
    type: "Hero",
    code: HeroTwoCode,
  },
];
