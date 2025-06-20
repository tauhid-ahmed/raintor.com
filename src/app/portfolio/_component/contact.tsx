import { Button, Heading, StyledWord } from "@/components";
import { FacebookIcon, InstagramIcon, XIcon } from "@/components/icons";

import Input from "@/components/input";
import { Container, Section, SectionName } from "@/components/layout";

export default function Contact() {
  return (
    <Section className="[background-image:url(/images/contact-bg.png)] [background-size:100%_auto] py-20">
      <Container>
        <div className="flex gap-4">
          <div className="flex-1">
            <SectionName name="Contact" />
            <Heading as="h3" size="h2" className="mt-10">
              Interested in <StyledWord>work</StyledWord> together?
            </Heading>
            <p className="mt-4">
              We start every new client interaction with an in-depth discovery
              call where we get to know each other
            </p>
            <Button className="mt-9" variant="primary">
              Schedule a Call
            </Button>
          </div>
          <div className="flex-1">
            <div className="bg-background-3 text-on-background rounded-lg p-8 [&>*]:block space-y-10 max-w-lg ml-auto">
              <Input placeholder="Enter your name" />
              <Input placeholder="Enter your email address" />
              <Input placeholder="Describe your project" />
              <div className="flex mt-9">
                <Button className="text-lg" variant="primary">
                  Send
                </Button>
                or
                <Button className="text-lg" variant="primary">
                  Contact me
                </Button>
              </div>
              <div className="relative inline-block mt-20">
                @williamrey
                <div className="inline-flex gap-5 items-center mt-4">
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
