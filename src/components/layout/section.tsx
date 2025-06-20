import { cn } from "@/lib/utils";
import Heading from "../heading";
import { DownArrowIcon, IconPlaceholder } from "../icons";

type ContainerProps = {} & React.ComponentProps<"div">;

export default function Section({ className, children }: ContainerProps) {
  return <section className={cn("", className)}>{children}</section>;
}

export function SectionHeader({ children, className }: ContainerProps) {
  return <div className={cn("relative", className)}>{children}</div>;
}

type SectionNameProps = {
  name: string;
  iconVariant?: "primary" | "secondary";
} & React.ComponentProps<"div">;
export function SectionName({ name, iconVariant }: SectionNameProps) {
  return (
    <div className="inline-flex">
      <IconPlaceholder size="sm" borderWeight="bold" variant={iconVariant}>
        <DownArrowIcon />
      </IconPlaceholder>
      <Heading
        className="rounded-full h-11 inline-flex items-center border-2 border-grey-900 text-grey-900 p-1 px-4 text-center leading-none"
        as="h2"
        size="h6"
      >
        <span className="-mb-0.5">{name}</span>
      </Heading>
    </div>
  );
}

export function SectionTitle() {}
