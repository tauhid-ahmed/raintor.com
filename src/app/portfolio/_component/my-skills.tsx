import { Button, Heading } from "@/components";
import { LeftArrowIcon, RightArrowIcon } from "@/components/icons";
import { Container, Section, SectionName } from "@/components/layout";
import { type Skill, skillsData } from "@/data/skills";

export default function MySkills() {
  return (
    <div className="px-3.75 -mt-16">
      <Section className="bg-color-900 text-color-100 rounded-xl py-15">
        <Container>
          <div className="space-y-9">
            <div className="flex flex-col xl:flex-row gap-10 items-end">
              <div className="flex-1 space-y-7 lg:space-y-10">
                <SkillHeader />
              </div>
              <div className="max-w-lg flex-1 space-y-8">
                <SkillTextSlider />
                <SliderNavigation />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {skillsData.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

function SkillHeader() {
  return (
    <div className="xl:max-w-xl space-y-8 py-6">
      <SectionName name="Why Choose Me" />
      <Heading as="h3" size="h3">
        My Extensive List of Skills
      </Heading>
    </div>
  );
}

function SkillTextSlider() {
  return (
    <div className="xl:text-right">
      <div className="border-b border-color-600 pb-2">
        <p>
          Building the worlds best marketing Your trusted partner for strategy,
          design, and dev.
        </p>
      </div>
    </div>
  );
}

function SliderNavigation() {
  return (
    <div className="flex gap-4 justify-end">
      <Button className="size-15 p-0" variant="secondary">
        <LeftArrowIcon className="h-6 w-9" />
      </Button>
      <Button className="size-15 p-0" variant="secondary">
        <RightArrowIcon width="36px" />
      </Button>
    </div>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="bg-color-800 rounded-3_5xl overflow-hidden px-9 py-12 hover:rotate-[10deg] duration-300 transition-transform">
      {skill.icon}
      <Heading as="h3" size="h5" className="mt-9">
        {skill.title}
      </Heading>
      <p className="mt-5 text-color-300">{skill.description}</p>
    </div>
  );
}
