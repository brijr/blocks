"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  CodeIcon,
  CopyIcon,
  EyeOpenIcon,
  CheckIcon,
} from "@radix-ui/react-icons";
import { toast } from "sonner";
import { Highlight, themes } from "prism-react-renderer";
import { useTheme } from "next-themes";

interface ActionButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  label: string;
}

const ActionButton = ({ icon, onClick, label }: ActionButtonProps) => (
  <Button size="icon" variant="outline" onClick={onClick} aria-label={label}>
    {icon}
  </Button>
);

interface CodePreviewProps {
  code: string;
  language: string;
}

const CodePreview = ({ code, language }: CodePreviewProps) => {
  const { resolvedTheme } = useTheme();
  const theme = resolvedTheme === "dark" ? themes.oneDark : themes.oneLight;

  return (
    <Highlight theme={theme} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={cn("overflow-auto p-3", className)} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })} className="table-row">
              <span className="table-cell text-right pr-4 min-w-[2.5rem] select-none text-zinc-500">
                {i + 1}
              </span>
              <span className="table-cell">
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

interface ActionBarProps {
  view: "preview" | "code";
  onToggleView: () => void;
  onCopy: () => void;
  copied: boolean;
}

const ActionBar = ({ view, onToggleView, onCopy, copied }: ActionBarProps) => (
  <div className="absolute top-2 right-2 z-10 flex gap-1">
    <ActionButton
      icon={
        view === "preview" ? (
          <CodeIcon width={24} height={24} />
        ) : (
          <EyeOpenIcon width={24} height={24} />
        )
      }
      onClick={onToggleView}
      label={view === "preview" ? "View code" : "View preview"}
    />
    <ActionButton
      icon={
        copied ? (
          <CheckIcon width={24} height={24} className="text-green-500" />
        ) : (
          <CopyIcon width={24} height={24} />
        )
      }
      onClick={onCopy}
      label="Copy code"
    />
  </div>
);

interface ComponentWrapperProps {
  component: React.ReactNode;
  code: string;
  language?: string;
}

export const ComponentWrapper = ({
  component,
  code,
  language = "tsx",
}: ComponentWrapperProps) => {
  const [view, setView] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("Code copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-full flex flex-col relative">
      <ActionBar
        view={view}
        onToggleView={() => setView(view === "preview" ? "code" : "preview")}
        onCopy={handleCopy}
        copied={copied}
      />
      <div className="flex-1 overflow-auto no-scrollbar">
        <div
          className={cn(
            "h-full w-full overflow-hidden",
            view === "preview" ? "block" : "hidden"
          )}
        >
          {component}
        </div>
        <div
          className={cn(
            "relative h-full w-full font-mono",
            view === "code" ? "block" : "hidden"
          )}
        >
          <CodePreview code={code} language={language} />
        </div>
      </div>
    </div>
  );
};
