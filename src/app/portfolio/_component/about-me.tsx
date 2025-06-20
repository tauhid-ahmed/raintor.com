import { Heading, StyledWord } from "@/components";
import { Container, Section, SectionName } from "@/components/layout";

export default function AboutMe() {
  return (
    <Section className="[background-image:url(/images/section-bg.png)] [background-size:100%_auto] [background-position-y:-4rem] pt-16 lg:pt-20 xl:pt-32 space-y-32">
      <Container>
        <div className="space-y-10">
          <div className="text-right w-full space-y-10 max-w-5.5xl">
            <SectionName name="About" iconVariant="secondary" />
            <Heading as="h3" size="h1">
              I&apos;ve been&nbsp;<StyledWord>Developing</StyledWord>
              &nbsp;Websites since&nbsp;<StyledWord>2013</StyledWord>
            </Heading>
          </div>
          <p className="text-center max-w-5xl lg:pr-32 mx-auto">
            We start every new client interaction with an in-depth discovery
            call where we get to know each other and recommend the best course
            of action.
          </p>
        </div>
      </Container>
      <MyClients />
    </Section>
  );
}

function MyClients() {
  return (
    <Container>
      <div className="flex gap-20">
        <div className="flex">
          <Heading as="h3" size="h4">
            PREVIOUSLY <br />
            WORKED ON
          </Heading>
        </div>
        <div className="flex-1">
          <span className="inline-block py-4 px-8 rounded-full border border-red-500">
            Instagram
          </span>
        </div>
      </div>
    </Container>
  );
}
