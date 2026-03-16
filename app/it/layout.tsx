import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import CSMJumpstartSection from "./jumpstart";
import WhatWeBuild from "./build";
import ResultsClientsSee from "./icon";
import BangmetricWay from "./way";
import Organizations from "./organization";
import CustomerServiceBanner from "./cust";
import BangmetricThinking from "./lines";


export default function CompanyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <CSMJumpstartSection/>
      <BangmetricThinking/>
      <WhatWeBuild/>
      <ResultsClientsSee/>
      <BangmetricWay/>
      <Organizations/>
      <CustomerServiceBanner/>
      <Footer />
    </>
  );
}
