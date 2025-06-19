import { cn } from "@/lib/utils";

type ContainerProps = {} & React.ComponentProps<"div">;

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("max-w-8xl w-full mx-auto px-6", className)}>
      {children}
    </div>
  );
}
