import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  className?: string;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
  text?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      text,
      icon,
      variant = "primary",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(
          "cursor-pointer inline-flex items-center justify-center rounded-md text-lg font-medium transition-colors",
          "disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap",
          "rounded-full border py-1.5 px-5 gap-8",
          variant === "primary" && "text-color-900 border-color-900",
          variant === "secondary" && "text-color-100 border-color-100",
          className
        )}
        ref={ref}
        {...props}
      >
        {icon && <span className="-ml-5">{icon}</span>}
        {/* issue with text line height whitespace so to look even spaced shrinks down negative 4px */}
        {text && <span className="-mb-1">{text}</span>}
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";
export default Button;
