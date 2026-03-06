import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import JoinPage from "./description";
import ApplyJobPage from "./job";
import EducationSection from "./education";
import TermsSection from "./terms";



export default function CompanyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <JoinPage/>
      <ApplyJobPage/>
      <EducationSection/>
      <TermsSection/>
      <Footer />
    </>
  );
}
