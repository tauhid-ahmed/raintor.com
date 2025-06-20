import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { Icon } from "./icons";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  className?: string;
  variant?: "primary";
  icon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, icon, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(
          "cursor-pointer inline-flex items-center justify-center rounded-md text-lg font-medium transition-colors",
          "text-white py-1.5",
          "disabled:opacity-50 disabled:pointer-events-none",
          "rounded-full border border-grey-900",
          variant === "primary" && "text-grey-900 pr-3",
          className
        )}
        ref={ref}
        {...props}
      >
        {icon && (
          <span className="flex items-center justify-center rounded-full aspect-square border border-grey-900 size-16 mr-3">
            {icon}
          </span>
        )}
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";
export default Button;
