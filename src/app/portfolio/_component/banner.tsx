import { StyledWord } from "@/components";
import Heading from "@/components/heading";
import { Container, Section } from "@/components/layout";

export default function Banner() {
  return (
    <Section className="h-screen [background-image:url(/images/hero-pattern.png)] bg-cover">
      <Container size="md">
        <Heading as="h1" size="h1">
          Trusted&nbsp;<StyledWord>Partner</StyledWord>&nbsp;for Your
          Website&nbsp;<StyledWord>Develop.</StyledWord>
        </Heading>
        <div className="flex">
          <div className="basis-96 shrink-0"></div>
          <p>
            Building the worlds best marketing websites for over a decade. Your
            trusted partner for strategy, design, and dev.
          </p>
        </div>
      </Container>
    </Section>
  );
}
