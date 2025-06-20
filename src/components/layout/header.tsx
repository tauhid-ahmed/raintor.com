import Link from "next/link";
import { IconPlaceholder, LogoIcon, RightArrowIcon } from "../icons";
import Container from "./container";
import Button from "../button";

const navData = [
  {
    id: "1",
    name: "Home",
    href: "#",
  },
  {
    id: "2",
    name: "About",
    href: "#",
  },
  {
    id: "3",
    name: "Portfolio",
    href: "#",
  },
  {
    id: "4",
    name: "Blog",
    href: "#",
  },
];

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 backdrop-blur z-50 bg-color-100/50">
      <Container>
        <div className="flex justify-between items-center py-8">
          <LogoIcon />
          <nav className="flex items-center gap-8">
            <ul className="flex">
              {navData.map((item) => (
                <li key={item.id}>
                  <Link className="p-4 inline-block text-base" href={item.href}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button
              text="Start Project"
              className="gap-3"
              icon={
                <IconPlaceholder variant="secondary" size="sm">
                  <RightArrowIcon />
                </IconPlaceholder>
              }
            />
          </nav>
        </div>
      </Container>
    </header>
  );
}
