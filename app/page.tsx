import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { ClientTesti } from '@/components/ClientTesti';
import { MetricsSection } from '@/components/metrics-section';
import { CustomerSuccessSection } from '@/components/customer-success-section';
import { LookingForSection } from '@/components/looking-for-section';
import { MarqueeSection } from '@/components/marquee-section';
import { Getintouch } from '@/components/Getintouch';
import { TestimonialsSection } from '@/components/testimonials-section';
import { Footer } from '@/components/footer';
import Nav from '@/components/nav';
import Hero_ from '@/components/Hero_';
import Jumpstart_ from '@/components/JumpStart_';
export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />

      <Hero_ />
      <Jumpstart_ />
      <MetricsSection />
      <CustomerSuccessSection />
      <LookingForSection />
      <MarqueeSection />

      <ClientTesti />
      <Getintouch />
      <Footer />
    </main>
  );
}
