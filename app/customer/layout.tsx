import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import CSMJumpstartSection from "./jumpstart";
import HowBangmetricThinks from "./think";
import WhatWeBuild from "./build";
import ResultsClientsSee from "./icon";
import BangmetricWay from "./way";
import Organizations from "./Organisations";
import CustomerServiceBanner from "./cust";

export default function CompanyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <CSMJumpstartSection/>
      <HowBangmetricThinks/>
      <WhatWeBuild/>
      <ResultsClientsSee/>
      <BangmetricWay/>
      <Organizations/>
      <CustomerServiceBanner/>
      <Footer />
    </>
  );
}
