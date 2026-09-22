import { useEffect } from "react";
import PageShell from "@/components/PageShell";
import { about } from "@/data/site";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageShell>
      <section className="pt-32 pb-24 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight mb-10">
            {about.title}
          </h1>
          <div className="space-y-5 text-muted-foreground leading-relaxed mb-12">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
          <h2 className="text-xl font-medium mb-4">Areas of Interest</h2>
          <p className="text-sm text-muted-foreground tracking-wide">
            {about.interests.join(" · ")}
          </p>
        </div>
      </section>
    </PageShell>
  );
};

export default About;
