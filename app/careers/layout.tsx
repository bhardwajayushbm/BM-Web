import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import WhoWeAre from "./who_we_are";
import WhatYouCanExpect from "./expect";
import JobsPage from "./job";
import  WhyJoinBangmetric from "./bangmetric";



export default function CompanyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      < WhyJoinBangmetric/>
      <WhoWeAre/>
      <WhatYouCanExpect/>
      <JobsPage/>
      <Footer />
    </>
  );
}
