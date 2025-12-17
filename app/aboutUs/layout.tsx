import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import WhoWeArePage from "./who-we-are";
import CoreValuesPage from "./values";
import CapabilityPage from "./capacity";
import CapabilitiesPage from "./our-capabilities";
import LeadershipPage  from "./testimonials";




export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <WhoWeArePage/>
      <CoreValuesPage/>
      <CapabilityPage/>
      <LeadershipPage/>
      <CapabilitiesPage/>
      <Footer />
    </>
  );
}
