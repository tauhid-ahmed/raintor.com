import { cn } from "@/lib/utils";

type ContainerProps = { size?: "md" | "lg" } & React.ComponentProps<"div">;

const sizeClasses = {
  md: "max-w-5.5xl",
  lg: "max-w-8xl",
};

export default function Container({
  children,
  className,
  size = "lg",
}: ContainerProps) {
  return (
    <div className={cn(" w-full mx-auto px-6", sizeClasses[size], className)}>
      {children}
    </div>
  );
}
