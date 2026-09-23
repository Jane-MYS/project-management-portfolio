import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import MetricsStrip from "@/components/MetricsStrip";
import WhatIDo from "@/components/WhatIDo";
import FeaturedWork from "@/components/FeaturedWork";
import HowIWork from "@/components/HowIWork";
import AboutPreview from "@/components/AboutPreview";
import ResearchCollaboration from "@/components/ResearchCollaboration";
import ContactPreview from "@/components/ContactPreview";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  return (
    <PageShell>
      <Hero />
      <MetricsStrip />
      <WhatIDo />
      <FeaturedWork />
      <HowIWork />
      <AboutPreview />
      <ResearchCollaboration />
      <ContactPreview />
    </PageShell>
  );
};

export default Index;
