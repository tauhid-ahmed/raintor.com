import { Icon, reactIcon } from "@/components/icons";

export interface Skill {
  id: string;
  title: string;
  icon: React.ReactElement;
  description: string;
}

export const skillsData: Skill[] = [
  {
    id: "1",
    title: "HTML & CSS",
    icon: <Icon src={reactIcon} className="size-24" alt="React Icon" />,
    description:
      "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
  },
  {
    id: "2",
    title: "Javascript",
    icon: <Icon src={reactIcon} className="size-24" alt="React Icon" />,
    description:
      "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
  },
  {
    id: "3",
    title: "Webflow",
    icon: <Icon src={reactIcon} className="size-24" alt="React Icon" />,
    description:
      "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
  },
];
