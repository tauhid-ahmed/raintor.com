import { cn } from "@/lib/utils";
import Image from "next/image";

export { default as xIcon } from "@/images/icons/x.svg";
export { default as downArrowIcon } from "@/images/icons/down-arrow.svg";
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
