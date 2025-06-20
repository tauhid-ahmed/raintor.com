import { footerData } from "@/data/my-information";
import Heading from "../heading";
import Container from "./container";
import Section from "./section";

export default function Footer() {
  return (
    <footer className="px-3.75">
      <Section className="bg-color-900 text-color-100 rounded-3.5xl py-24">
        <Container>
          <div className="flex gap-10 justify-between">
            <div className="flex-1 max-w-md">
              <h2>devlop.me</h2>
            </div>
            <div className="flex-1 space-y-20">
              <Heading size="h2" as="h2">
                As you can
              </Heading>
              <FooterInformation />
            </div>
          </div>
        </Container>
      </Section>
    </footer>
  );
}

function FooterInformation() {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {footerData.map(({ key, title, items }) => (
          <div key={key}>
            <h4 className="text-color-500">{title}</h4>
            <div className="mt-5 space-y-2">
              {items.map((item, i) => (
                <p key={i} className="uppercase text-base">
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
