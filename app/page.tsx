import BackgroundEffects from "@/components/BackgroundEffects";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <CTA />
      <Services />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
