import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import Preloader from "@/components/Preloader";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Manifesto from "@/components/sections/Manifesto";
import Philosophy from "@/components/sections/Philosophy";
import WhatWeBuild from "@/components/sections/WhatWeBuild";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/Portfolio";
import FAQ from "@/components/sections/FAQ";
import FutureVision from "@/components/sections/FutureVision";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";

// ...

export default function Home() {
  return (
    <main className="relative w-full min-h-screen">
      <Preloader />
      <Background />
      <Navbar />
      <Hero />
      <Philosophy />
      <Problem />
      <WhatWeBuild />
      <Solution />
      <Manifesto />
      <Process />
      <Portfolio />
      <FAQ />
      <FutureVision />
      <CTA />
      <Footer />
    </main>
  );
}
