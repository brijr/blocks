import { Section, Container, Craft } from "@/components/craft";
import { Button } from "@/components/ui/button";

type HeroProps = {
  title: string;
  subtitle: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  button: {
    text: string;
    link: string;
  };
};

export const Example = (props: HeroProps) => {
  return (
    <Section>
      <Container className="space-y-6 md:space-y-12">
        <Button asChild size={"sm"} variant={"outline"}>
          <a href={props.button.link}>{props.button.text}</a>
        </Button>
        <Craft className="space-y-3">
          <h1>{props.title}</h1>
          <h3 className="text-muted-foreground">{props.subtitle}</h3>
        </Craft>
        <div className="relative h-[480px] w-full overflow-hidden rounded-lg border">
          <img
            src={props.image}
            width={props.imageWidth}
            height={props.imageHeight}
            alt="hero image"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </Container>
    </Section>
  );
};
