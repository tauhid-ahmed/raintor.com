import { cn } from "@/lib/utils";
import Image from "next/image";

export { default as xIcon } from "@/images/icons/x.svg";
export { default as downArrowIcon } from "@/images/icons/down-arrow.svg";
export { default as downArrowIconBlack } from "@/images/icons/down-arrow-black.svg";
export { default as facebookIcon } from "@/images/icons/facebook.svg";
export { default as instagramIcon } from "@/images/icons/instagram.svg";
export { default as leftArrowIcon } from "@/images/icons/left-arrow.svg";
export { default as phoneIcon } from "@/images/icons/phone.svg";
export { default as reactIcon } from "@/images/icons/react.svg";
export { default as rightArrowIcon } from "@/images/icons/right-arrow.svg";

type IconProps = React.ComponentProps<"img">;

export function Icon({ src, alt, className }: IconProps) {
  return (
    <Image
      className={cn("size-6", className)}
      src={src as string}
      alt={alt as string}
    />
  );
}

export function RightArrowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={37}
      height={24}
      viewBox="0 0 37 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 12h36m0 0c-3.943-.727-11.829-4.145-11.829-12M36 12c-3.943.727-11.829 4.145-11.829 12"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </svg>
  );
}
