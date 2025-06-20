export interface WorkProcess {
  id: string;
  badge: "Strategy" | "Discovery" | "Design" | "Build";
  description: string;
  href: string;
}

export const workProcessData: WorkProcess[] = [
  {
    id: "1",
    badge: "Discovery",
    description:
      "We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.",
    href: "#",
  },
  {
    id: "2",
    badge: "Strategy",
    description:
      "Every end-to-end project of ours begins with a tEspoke pre-build strateu. From brand ID consultation to in-depth ccxle reviews we're here to set the stage for success.",
    href: "#",
  },
  {
    id: "3",
    badge: "Design",
    description:
      "After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page or will be designed, reviewed, and given your stamp of approval.",
    href: "#",
  },
  {
    id: "4",
    badge: "Build",
    description:
      "Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.",
    href: "#",
  },
];
