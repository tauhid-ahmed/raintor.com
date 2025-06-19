import localFont from "next/font/local";

export const sportingGrotesque = localFont({
  src: [
    {
      path: "../../public/fonts/sporting-grotesque/400.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/sporting-grotesque/700.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sporting-grotesque",
  display: "swap",
});
