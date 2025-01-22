// React and Next.js imports
import Link from "next/link";

// Third-party imports
import { ArrowRight } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

export const Example = () => {
  return (
    <Section>
      <Container>
        <div>
          <Button
            asChild
            className="mb-6 w-fit"
            size={"sm"}
            variant={"outline"}
          >
            <Link className="not-prose" href="https://9d8.dev">
              Lorem ipsum dolor sit amet <ArrowRight className="w-4" />
            </Link>
          </Button>
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
          <h3 className="text-muted-foreground">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h3>
          <div className="not-prose my-8 h-96 w-full overflow-hidden rounded-lg border md:h-[480px] md:rounded-xl">
            <img
              className="h-full w-full object-cover object-center"
              src="https://ui.shadcn.com/placeholder.svg"
              width={1280}
              height={720}
              alt="hero image"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};
