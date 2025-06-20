import { Button, Heading, StyledWord } from "@/components";
import {
  EnvelopeIcon,
  FacebookIcon,
  IconPlaceholder,
  InstagramIcon,
  PhoneIcon,
  SendIcon,
  XIcon,
} from "@/components/icons";

import Input from "@/components/input";
import { Container, Section, SectionName } from "@/components/layout";

export default function Contact() {
  return (
    <Section className="[background-image:url(/images/contact-bg.png)] [background-size:100%_auto] pt-20 pb-40 -mb-8">
      <Container>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1">
            <SectionName name="Contact" iconVariant="secondary" />
            <Heading as="h3" size="h2" className="mt-10">
              Interested in <StyledWord>work</StyledWord> together?
            </Heading>
            <p className="mt-4">
              We start every new client interaction with an in-depth discovery
              call where we get to know each other
            </p>
            <Button
              className="mt-9"
              variant="primary"
              text=" Schedule a Call"
              icon={
                <IconPlaceholder variant="secondary" borderWeight="light">
                  <PhoneIcon />
                </IconPlaceholder>
              }
            />
          </div>
          <div className="flex-1">
            <div className="bg-color-900 text-color-100 rounded-3.5xl px-8 py-14 space-y-12 lg:max-w-lg ml-auto">
              <div className="flex flex-col gap-12">
                <Input type="text" placeholder="Enter your name" />
                <Input type="email" placeholder="Enter your email address" />
                <Input type="text" placeholder="Describe your project" />
              </div>
              <div className="flex gap-3 items-center">
                <Button
                  className="text-lg gap-2"
                  variant="secondary"
                  text="send"
                  icon={
                    <IconPlaceholder size="xs">
                      <SendIcon />
                    </IconPlaceholder>
                  }
                />
                <span>or</span>
                <Button
                  className="text-lg gap-2"
                  variant="secondary"
                  text="Contact me"
                  icon={
                    <IconPlaceholder size="xs">
                      <EnvelopeIcon />
                    </IconPlaceholder>
                  }
                />
              </div>
              <div className="relative inline-flex items-center gap-8 pt-6 text-color-400">
                @williamrey
                <div className="inline-flex gap-5 items-center text-color-100">
                  <span className="w-12 h-0.5 bg-color-600 inline-block"></span>
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
