import { Button, StyledWord } from "@/components";
import Heading from "@/components/heading";
import { FacebookIcon, InstagramIcon, XIcon } from "@/components/icons";
import { Container, Section } from "@/components/layout";

export default function Banner() {
  return (
    <Section className="[background-image:url(/images/hero-pattern.png)] bg-cover pt-52 pb-50">
      <Container>
        <div className="max-w-5.5xl">
          <Heading as="h1" size="h1">
            Trusted&nbsp;<StyledWord>Partner</StyledWord>&nbsp;for Your
            Website&nbsp;<StyledWord>Develop.</StyledWord>
          </Heading>
          <div className="flex flex-col lg:flex-row gap-10 mt-14">
            <div className="lg:order-2 lg:flex-1 space-y-6 lg:space-y-11">
              <p>
                Building the worlds best marketing websites for over a decade.
                Your trusted partner for strategy, design, and dev.
              </p>
              <Button variant={"primary"}>Schedule a Call</Button>
            </div>
            <div className="lg:order-1 lg:basis-[360px] shrink lg:mt-5">
              <div className="relative inline-block lg:rotate-[-90deg] lg:origin-[50%_100%]">
                @williamrey
                <div className="flex gap-5 items-center mt-4">
                  <span className="w-12 h-0.5 bg-grey-900 inline-block"></span>
                  <FacebookIcon />
                  <InstagramIcon />
                  <XIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
