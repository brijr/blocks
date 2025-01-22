// React and Next.js imports
import Link from "next/link";
import Image from "next/image";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { Camera } from "lucide-react";

// Local component imports
import { Section, Container, Craft } from "@/components/craft";
import { Button } from "@/components/ui/button";

type HeroProps = {
  title: string;
  subtitle: string;
  logo: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  primaryButton: {
    text: string;
    link: string;
    icon?: boolean;
  };
  secondaryButton: {
    text: string;
    link: string;
  };
};

export const HeroTwo = ({
  title,
  subtitle,
  logo,
  primaryButton,
  secondaryButton,
}: HeroProps) => {
  return (
    <Section>
      <Container className="space-y-6 md:space-y-12">
        <Image
          src={logo.src}
          width={logo.width}
          height={logo.height}
          alt={logo.alt}
          className="mx-auto dark:invert"
        />
        <Craft className="space-y-3 text-center">
          <h1>
            <Balancer>{title}</Balancer>
          </h1>
          <h3 className="text-muted-foreground">
            <Balancer>{subtitle}</Balancer>
          </h3>
        </Craft>
        <div className="flex justify-center gap-3">
          <Button asChild>
            <Link href={primaryButton.link}>
              {primaryButton.icon && <Camera className="mr-2" />}
              {primaryButton.text}
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href={secondaryButton.link}>
              {secondaryButton.text} {"->"}
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};
