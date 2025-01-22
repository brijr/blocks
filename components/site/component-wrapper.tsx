"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CodeIcon, CopyIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";

interface ComponentWrapperProps {
  component: React.ReactNode;
  code: string;
}

export const ComponentWrapper = ({
  component,
  code,
}: ComponentWrapperProps) => {
  const [view, setView] = useState<"preview" | "code">("preview");

  const toggleView = () => {
    setView(view === "preview" ? "code" : "preview");
  };

  return (
    <div className="h-full flex flex-col relative">
      <div className="absolute top-2 right-2 flex gap-1">
        <Button size="icon" variant="outline" onClick={toggleView}>
          {view === "preview" ? (
            <CodeIcon width={24} height={24} />
          ) : (
            <EyeOpenIcon width={24} height={24} />
          )}
        </Button>
        <Button
          size="icon"
          variant="outline"
          onClick={() => {
            navigator.clipboard.writeText(code);
            toast.success("Code copied to clipboard!");
          }}
        >
          <CopyIcon width={24} height={24} />
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
