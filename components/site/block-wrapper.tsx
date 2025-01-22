import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export const BlockWrapper = ({
  component,
  name,
  type,
}: {
  component: React.ReactNode;
  name: string;
  type: string;
}) => {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={20}>
        <div className="p-3 h-full bg-accent/30">
          <h3>{name}</h3>
          <p className="text-muted-foreground">{type}</p>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={80}>{component}</ResizablePanel>
    </ResizablePanelGroup>
  );
};
