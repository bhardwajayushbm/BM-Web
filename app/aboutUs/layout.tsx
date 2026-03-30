import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import WhoWeArePage from "./who-we-are";
import Core from "./core";
// import CoreValuesPage from "./values";
import CapabilityPage from "./capacity";
import CapabilitiesPage from "./our-capabilities";
import LeadershipPage from "./testimonials";
import OurOfficesPage from "./offices";

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <WhoWeArePage />
      <Core/>
      {/* <CoreValuesPage /> */}
      <LeadershipPage />
      <CapabilityPage />
      <CapabilitiesPage />
      <OurOfficesPage />
      <Footer />
    </>
  );
}
