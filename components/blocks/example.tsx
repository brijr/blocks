import { Section, Container } from "@/components/craft";
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
      <Container>
        <Button asChild className="mb-6 w-fit" size={"sm"} variant={"outline"}>
          <a href={props.button.link}>{props.button.text} &rarr;</a>
        </Button>
        <h1>{props.title}</h1>
        <h3 className="text-muted-foreground">{props.subtitle}</h3>
        <div className="not-prose my-8 h-96 w-full overflow-hidden rounded-lg border md:h-[480px] md:rounded-xl">
          <img
            className="h-full w-full object-cover object-center"
            src={props.image}
            width={props.imageWidth}
            height={720}
            alt="hero image"
          />
        </div>
      </Container>
    </Section>
  );
};
