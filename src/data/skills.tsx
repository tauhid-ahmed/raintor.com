import { ReactLogoIcon } from "@/components/icons";

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
    icon: (
      <ReactLogoIcon className="size-24 animate-spin [animation-duration:12s]" />
    ),
    description:
      "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
  },
  {
    id: "2",
    title: "Javascript",
    icon: (
      <ReactLogoIcon className="size-24 animate-spin [animation-duration:22s] [animation-direction:reverse]" />
    ),
    description:
      "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
  },
  {
    id: "3",
    title: "Webflow",
    icon: (
      <ReactLogoIcon className="size-24 animate-spin [animation-duration:18s]" />
    ),
    description:
      "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
  },
];
