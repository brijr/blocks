// Utility Imports
import { readFileSync } from "fs";
import { join } from "path";

// Component Imports
import { Example } from "@/components/blocks/heros/example";

// Code Imports
const ExampleCode = readFileSync(
  join(process.cwd(), "components/blocks/heros/example.tsx"),
  "utf8"
);

export const heroComponents = [
  {
    component: Example,
    name: "Example",
    type: "Hero",
    code: ExampleCode,
  },
];
