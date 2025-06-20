import { cn } from "@/lib/utils";
import Heading from "../heading";
import { DownArrowIcon } from "../icons";

type ContainerProps = {} & React.ComponentProps<"div">;

export default function Section({ className, children }: ContainerProps) {
  return <section className={cn("", className)}>{children}</section>;
}

export function SectionHeader({ children, className }: ContainerProps) {
  return <div className={cn("relative", className)}>{children}</div>;
}

type SectionNameProps = {
  name: string;
} & React.ComponentProps<"div">;
export function SectionName({ name }: SectionNameProps) {
  return (
    <div className="inline-flex">
      <span className="border rounded-full size-11 border-grey-900 flex items-center justify-center">
        <DownArrowIcon />
      </span>
      <Heading
        className="rounded-full h-11 inline-flex items-center border border-grey-900 text-grey-900 p-1 px-4 text-center leading-none"
        as="h2"
        size="h6"
      >
        {name}
      </Heading>
    </div>
  );
}

export function SectionTitle() {}
