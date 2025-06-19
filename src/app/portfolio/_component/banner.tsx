import { StyledWord } from "@/components";
import Heading from "@/components/heading";
import { Container, Section } from "@/components/layout";

export default function Banner() {
  return (
    <Section className="h-screen [background-image:url(/images/hero-pattern.png)] bg-cover">
      <Container>
        <div className="max-w-6xl">
          <Heading as="h1" size="h1">
            Trusted <StyledWord>Partner</StyledWord> for Your Website{" "}
            <StyledWord>Develop.</StyledWord>
          </Heading>
        </div>
      </Container>
    </Section>
  );
}
