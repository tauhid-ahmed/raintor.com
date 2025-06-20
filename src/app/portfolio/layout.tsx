import { Footer, Header } from "@/components/layout";

export default function PortfolioLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 shrink-0 mt-20">{children}</main>
      <Footer />
    </div>
  );
}
