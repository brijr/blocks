// React and Next.js imports
import Link from "next/link";
import Balancer from "react-wrap-balancer";

// Local component imports
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

export const HeroTwo = (props: HeroProps) => {
  return (
    <Section>
      <Container className="space-y-6 md:space-y-12">
        <img
          src="https://img.logoipsum.com/286.svg"
          width="128"
          height="23.48"
          alt="logo"
          className="mx-auto dark:invert"
        />
        <Craft className="space-y-3 text-center">
          <h1>
            <Balancer>{props.title}</Balancer>
          </h1>
          <h3 className="text-muted-foreground">
            <Balancer>{props.subtitle}</Balancer>
          </h3>
        </Craft>
        <div className="flex justify-center gap-3">
          <Button asChild>
            <Link href={props.button.link}>{props.button.text}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};
