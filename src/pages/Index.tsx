import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import WorkBehindTheWork from "@/components/WorkBehindTheWork";
import FeaturedWork from "@/components/FeaturedWork";
import ResearchPreview from "@/components/ResearchPreview";
import CuriousAbout from "@/components/CuriousAbout";
import ResearchCollaboration from "@/components/ResearchCollaboration";
import AboutPreview from "@/components/AboutPreview";
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
      <WorkBehindTheWork />
      <FeaturedWork />
      <ResearchPreview />
      <CuriousAbout />
      <ResearchCollaboration />
      <AboutPreview />
      <ContactPreview />
    </PageShell>
  );
};

export default Index;
