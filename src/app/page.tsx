import Hero from "@/components/home/Hero";
import Trust from "@/components/home/Trust";
import ERPSolutions from "@/components/home/ERPSolutions";
import Testimonials from "@/components/home/Testimonials";
import Services from "@/components/home/Services";
import WhyUs from "@/components/home/WhyUs";
import Industries from "@/components/home/Industries";
import Process from "@/components/home/Process";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Trust />
      <Services />
      <WhyUs />
      <ERPSolutions />
      <Process />
      <Industries />
      <Testimonials />
      <CTA />
    </main>
  );
}
