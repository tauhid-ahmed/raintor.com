import { cn } from "@/lib/utils";
import Heading from "../heading";
import { downArrowIcon, downArrowIconBlack, Icon } from "../icons";

type ContainerProps = {} & React.ComponentProps<"div">;

const icons = {
  white: downArrowIcon,
  black: downArrowIconBlack,
};

export default function Section({ className, children }: ContainerProps) {
  return <section className={cn("", className)}>{children}</section>;
}

export function SectionHeader({ children, className }: ContainerProps) {
  return <div className={cn("relative", className)}>{children}</div>;
}

type SectionNameProps = {
  name: string;
  iconVariant?: "black" | "white";
} & React.ComponentProps<"div">;
export function SectionName({ name, iconVariant = "white" }: SectionNameProps) {
  return (
    <div className="inline-flex">
      <span className="border rounded-full size-11 border-grey-900 flex items-center justify-center">
        <Icon
          className="size-3"
          src={icons[iconVariant]}
          alt="Downward Arrow Icon"
        />
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
