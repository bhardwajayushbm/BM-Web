import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { ClientTesti } from '@/components/ClientTesti';
import { MetricsSection } from '@/components/metrics-section';
import { CustomerSuccessSection } from '@/components/customer-success-section';
import { LookingForSection } from '@/components/looking-for-section';
import AreYouLookingForCard from '@/components/are-You-looking-card';

import { MarqueeSection } from '@/components/marquee-section';
// import {Sponsors} from '@/components/Sponsors';
import {Event} from '@/components/Event';
import { TestimonialsSection } from '@/components/testimonials-section';
import { Footer } from '@/components/footer';
import Nav from '@/components/nav';
import Hero_ from '@/components/Hero_';
import GetInTouch from '@/components/Getintouch';
import Philosophy from '@/components/philosphy';
import Jumpstart_ from '@/components/JumpStart_';
export default function Home() {
  return (
    <main className="min-h-screen">


     <Navigation />
      <Hero_ />
   
      <MetricsSection />
      {/* <LookingForSection /> */}
       <Philosophy/>
      <AreYouLookingForCard/>
      <MarqueeSection />
      <CustomerSuccessSection />
      <ClientTesti />
      <Event/>
      {/* <Sponsors/> */}
      <GetInTouch/>
      <Footer />
    </main>
  );
}
