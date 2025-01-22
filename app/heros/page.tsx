import { BlockWrapper } from "@/components/site/block-wrapper";
import { heroComponents } from "@/lib/registry";

const heroContent = {
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  subtitle:
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  image: "https://ui.shadcn.com/placeholder.svg",
  imageWidth: 1280,
  imageHeight: 720,
  button: {
    text: "Lorem ipsum dolor sit amet",
    link: "#",
  },
};

export default function Home() {
  return (
    <>
      {heroComponents.map((component) => (
        <BlockWrapper
          key={component.name}
          name={component.name}
          type={component.type}
          component={<component.component {...heroContent} />}
          code={component.code}
        />
      ))}
    </>
  );
}
