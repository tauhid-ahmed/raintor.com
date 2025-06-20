import { Heading, StyledWord } from "@/components";
import { Container, Section, SectionName } from "@/components/layout";
import { cn } from "@/lib/utils";

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
        <div className="flex-1 relative">
          <div className="">
            <TechBadge className="translate-x-10 translate-y-5 rotate-12 origin-bottom-right">
              awwwards.
            </TechBadge>

            <TechBadge className="translate-x-[120%] -translate-y-8">
              facebook
            </TechBadge>
            <TechBadge className="translate-x-3/4 -translate-y-8 rotate-[20deg] origin-bottom-left -ml-2.5">
              CSS<strong>Design</strong>Awards
            </TechBadge>
          </div>
          <div className="space-x-4">
            <TechBadge className="">csvvinner</TechBadge>
            <TechBadge className="font-bold translate-x-7.5 origin-bottom-left translate-y-1.5 -rotate-[10deg]">
              /thoughtworks
            </TechBadge>
            <TechBadge className="font-bold">AUTODESK</TechBadge>
          </div>
        </div>
      </div>
    </Container>
  );
}

function TechBadge({ children, className }: React.ComponentProps<"div">) {
  return (
    <span
      className={cn(
        "inline-block py-4 px-10 rounded-full border text-color-900 hover:text-color-100 hover:bg-color-900 bg-color-100",
        className
      )}
    >
      <div className="-mb-1">{children}</div>
    </span>
  );
}
