import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Diversity from "./diversity";
import Mindset from "./mindset";
import JoinUs from "./office";
import LearnGrow from "./Life";
import HumansOfBangmetric from "./youtube";



export default function CompanyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
       <HumansOfBangmetric/>
       <Mindset/>
       <Diversity/>
       <LearnGrow />
       <JoinUs />
      <Footer />
    </>
  );
}
