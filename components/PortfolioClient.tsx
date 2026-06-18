"use client";

import { useState } from "react";
import { About } from "@/components/sections/About";
import { Achievements } from "@/components/sections/Achievements";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { Spotlight } from "@/components/effects/Spotlight";
import { NoiseOverlay } from "@/components/effects/NoiseOverlay";
import { ScrollProgress } from "@/components/effects/ScrollProgress";

export function PortfolioClient() {
  const [selectedServiceRequest, setSelectedServiceRequest] = useState({
    service: "",
    requestId: 0,
  });

  const handleBookService = (service: string) => {
    setSelectedServiceRequest((current) => ({
      service,
      requestId: current.requestId + 1,
    }));
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="relative min-h-screen">
      <ScrollProgress />
      <CustomCursor />
      <AuroraBackground />
      <Spotlight />
      <NoiseOverlay />

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services onBookService={handleBookService} />
      <Skills />
      <Certifications />
      <Achievements />
      <Experience />
      <Contact selectedServiceRequest={selectedServiceRequest} />
      <Footer />
    </main>
  );
}
