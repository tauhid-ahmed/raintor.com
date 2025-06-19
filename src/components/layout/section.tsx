import { cn } from "@/lib/utils";

type ContainerProps = {} & React.ComponentProps<"div">;

export default function Section({ className, children }: ContainerProps) {
  return <section className={cn("", className)}>{children}</section>;
}
