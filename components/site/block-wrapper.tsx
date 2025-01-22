import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ComponentWrapper } from "./component-wrapper";

interface BlockWrapperProps {
  component: React.ReactNode;
  name: string;
  type: string;
  code: string;
}

export const BlockWrapper = ({
  component,
  name,
  type,
  code,
}: BlockWrapperProps) => {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={20} minSize={15}>
        <div className="p-3 h-full bg-accent/30">
          <h3>{name}</h3>
          <p className="text-muted-foreground">{type}</p>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={80} minSize={30}>
        <ComponentWrapper component={component} code={code} />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
