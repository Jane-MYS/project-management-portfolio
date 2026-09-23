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
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
            {about.title}
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-10 text-balance">
            {about.kicker}
          </p>
          <div className="space-y-5 text-muted-foreground leading-relaxed mb-6">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            I hold an{" "}
            <span className="text-foreground font-medium">
              Ed.D. in Higher Education Administration and Organizational Leadership
            </span>{" "}
            and an{" "}
            <span className="text-foreground font-medium">MAT in TESOL</span>, and I
            approach many operational problems with the same mindset I bring to research:
          </p>
          <p className="font-medium mb-6">{about.questions}</p>
          <p className="text-muted-foreground leading-relaxed">
            That combination—
            <span className="text-foreground font-medium">operator and researcher</span>
            —shapes the kind of work I'm interested in doing next.
          </p>
        </div>
      </section>
    </PageShell>
  );
};

export default About;
