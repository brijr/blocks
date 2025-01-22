"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ComponentWrapperProps {
  component: React.ReactNode;
  code: string;
}

export const ComponentWrapper = ({
  component,
  code,
}: ComponentWrapperProps) => {
  const [view, setView] = useState<"preview" | "code">("preview");

  return (
    <div className="h-full flex flex-col">
      <div className="border-b p-2 flex gap-2">
        <Button
          size="sm"
          variant={view === "preview" ? "default" : "ghost"}
          onClick={() => setView("preview")}
        >
          Preview
        </Button>
        <Button
          size="sm"
          variant={view === "code" ? "default" : "ghost"}
          onClick={() => setView("code")}
        >
          Code
        </Button>
      </div>
      <div className="flex-1 overflow-auto">
        <div
          className={cn(
            "h-full w-full",
            view === "preview" ? "block" : "hidden"
          )}
        >
          {component}
        </div>
        <div
          className={cn(
            "h-full w-full font-mono p-4 bg-muted/30",
            view === "code" ? "block" : "hidden"
          )}
        >
          <pre className="whitespace-pre-wrap">{code}</pre>
        </div>
      </div>
    </div>
  );
};
