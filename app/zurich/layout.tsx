import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import CardPage from "./card";
import IntroPage from "./intro";


export default function CompanyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <IntroPage/>
      <CardPage/>
      <Footer />
    </>
  );
}
