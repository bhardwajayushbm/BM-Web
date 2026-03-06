import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import CSMJumpstartSection from "./jumpstart";


export default function CompanyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <CSMJumpstartSection/>
      <Footer />
    </>
  );
}
