import { BlockWrapper } from "@/components/site/block-wrapper";

// Blocks
import { Example } from "@/components/blocks/example";

const example = {
  name: "Example",
  type: "Hero",
  component: <Example />,
};

export default function Home() {
  return (
    <>
      <BlockWrapper>
        <Example />
      </BlockWrapper>
    </>
  );
}
