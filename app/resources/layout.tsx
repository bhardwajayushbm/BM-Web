import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import CardSection from "./card";
import TabsPage from "./tab";



export default function CompanyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <CardSection/>
      <TabsPage/>
      <Footer />
    </>
  );
}
