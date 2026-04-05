import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import  PrivacyContent  from "./description"; 
import GetInTouch from '@/components/Getintouch';

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <PrivacyContent />
        <GetInTouch/>
      <Footer />
    </>
  );
}