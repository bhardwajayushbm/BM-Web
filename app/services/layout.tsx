import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import AreYouLookingForCard from "./are-you-looking-for-card";
import LookingForCard from "./looking-for-card";
// import {Sponsors} from '@/components/Sponsors';
import Sales from "./sales";
import JumpstartSection from "./jumpstart";
import JumpstartOfferings from "./jumpstartOffering";

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <JumpstartOfferings />
      <AreYouLookingForCard />
       <LookingForCard />
       <JumpstartSection />
       <Sales />
       {/* <Sponsors/> */}
      <Footer />
    </>
  );
}
