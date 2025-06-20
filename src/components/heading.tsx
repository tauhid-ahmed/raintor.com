import { cn } from "@/lib/utils";

interface HeadingProps extends React.HtmlHTMLAttributes<HTMLHeadingElement> {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

// font size range h1 is larger...h4 is smaller
const sizesClassNames = {
  h1: "text-h3 md:text-h2 lg:text-h1 tracking-tighter",
  h2: "text-h2",
  h3: "text-3xl md:text-4xl lg:text-h3",
  h4: "text-h4",
  h5: "text-xl",
  h6: "text-base",
};

export default function Heading({
  className,
  children,
  as = "h2",
  size,
}: HeadingProps) {
  const Comp = as;
  return (
    <Comp
      className={cn(
        "font-sans leading-relaxed font-bold",
        sizesClassNames[size],
        className
      )}
    >
      {children}
    </Comp>
  );
}
