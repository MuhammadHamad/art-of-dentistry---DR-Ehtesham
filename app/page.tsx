import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { FloatingCta } from "@/components/layout/floating-cta";
import { Hero } from "@/components/sections/hero";
import { Philosophy } from "@/components/sections/philosophy";
import { WhyUs } from "@/components/sections/why-us";
import { Treatments } from "@/components/sections/treatments";
import { Technology } from "@/components/sections/technology";
import { Journey } from "@/components/sections/journey";
import { Gallery } from "@/components/sections/gallery";
import { Doctors } from "@/components/sections/doctors";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { Booking } from "@/components/sections/booking";
import { Location } from "@/components/sections/location";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <WhyUs />
        <Treatments />
        <Technology />
        <Journey />
        <Gallery />
        <Doctors />
        <Testimonials />
        <Pricing />
        <Faq />
        <Booking />
        <Location />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
