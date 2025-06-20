import { Footer } from "@/components/layout";
import AboutMe from "./_component/about-me";
import Banner from "./_component/banner";
import Contact from "./_component/contact";
import MySkills from "./_component/my-skills";
import MyWorkProcess from "./_component/my-work-process";

export default function PortfolioPage() {
  return (
    <>
      <Banner />
      <MySkills />
      <AboutMe />
      <MyWorkProcess />
      <Contact />
      <Footer />
    </>
  );
}
