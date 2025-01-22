import { BlockWrapper } from "@/components/site/block-wrapper";

// Blocks
import { Example } from "@/components/blocks/example";

const heroContent = {
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  subtitle:
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  image: "https://ui.shadcn.com/placeholder.svg",
  imageWidth: 1280,
  imageHeight: 720,
  button: {
    text: "Lorem ipsum dolor sit amet",
    link: "https://9d8.dev",
  },
};

const example = {
  name: "Example",
  type: "Hero",
  component: <Example {...heroContent} />,
};

export default function Home() {
  return (
    <>
      <BlockWrapper
        name={example.name}
        type={example.type}
        component={example.component}
      />
    </>
  );
}
