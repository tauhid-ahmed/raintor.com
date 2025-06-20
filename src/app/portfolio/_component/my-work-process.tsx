import { Heading } from "@/components";
import { RightArrowIcon } from "@/components/icons";
import { Container, Section, SectionName } from "@/components/layout";
import { type WorkProcess, workProcessData } from "@/data/work-process";
import Link from "next/link";

export default function MyWorkProcess() {
  return (
    <div className="px-3.75">
      <Section className="bg-background-2 text-on-background rounded-3.5xl py-20">
        <Container>
          <div className="space-y-18">
            <div className="flex gap-20 items-center">
              <SectionName name="Work Process" />
              <Heading as="h3" size="h3">
                My Work Process
              </Heading>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {workProcessData.map((workProcess) => (
                <WorkProcess key={workProcess.id} workProcess={workProcess} />
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

function WorkProcess({ workProcess }: { workProcess: WorkProcess }) {
  return (
    <div className="bg-card-2 hover:bg-primary rounded-3.5xl group px-8 py-11 space-y-8 hover:rotate-6 origin-bottom-right transition-[transform_colors] duration-300">
      <div className="flex justify-between items-center">
        <WorkProcessBadge badge={workProcess.badge} />
        <Link
          className="group-hover:text-black underline text-base inline-flex items-center gap-2"
          href={workProcess.href}
        >
          <RightArrowIcon className="h-4 w-6" />
          Read More
        </Link>
      </div>
      <p className="text-[#b2b2b2] group-hover:text-black">
        {workProcess.description}
      </p>
    </div>
  );
}

function WorkProcessBadge({ badge }: { badge: string }) {
  return (
    <span className="inline-block text-on-secondary">
      <span className="leading-[0] relative z-10 bg-secondary rounded-full px-9 pt-3 pb-2 text-xl group-hover:bg-card-2 group-hover:text-on-card-1">
        {badge}
      </span>
    </span>
  );
}
