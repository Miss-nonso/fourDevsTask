import Image from "next/image";
import Hero from "@/public/components/sections/Hero";
import About from "@/public/components/sections/About";
import Services from "@/public/components/sections/Services";
import Portfolio from "@/public/components/sections/Portfolio";
import CTA from "@/public/components/sections/CTA";
import Footer from "@/public/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <CTA />
      <Footer />
    </>
  );
}
