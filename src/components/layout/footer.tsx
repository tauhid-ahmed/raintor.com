import { footerData } from "@/data/my-information";
import Heading from "../heading";
import Container from "./container";
import Section from "./section";

export default function Footer() {
  return (
    <footer className="px-3.75">
      <Section className="bg-color-900 text-color-100 rounded-3.5xl py-18">
        <Container>
          <div className="flex flex-col lg:flex-row gap-10 justify-between">
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
          <div className="flex flex-wrap gap-10 pt-20">
            <div className="flex-1 max-w-md">
              <span>BESNIK</span>
            </div>
            <div className="flex-1 flex justify-between gap-2 text-color-500">
              &copy;develop.me
              {new Date().getFullYear()}
            </div>
            <div className=" text-color-500">Privacy&nbsp;-&nbsp;Terms</div>
          </div>
        </Container>
      </Section>
    </footer>
  );
}

function FooterInformation() {
  return (
    <>
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"> */}
      <div className="flex flex-wrap justify-between gap-10">
        {footerData.map(({ key, title, items }) => (
          <div className="basis-1/4" key={key}>
            <h4 className="text-color-500">{title}</h4>
            <div className="mt-5 space-y-2">
              {items.map((item, i) => (
                <p key={i} className="uppercase text-base text-color-200">
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
