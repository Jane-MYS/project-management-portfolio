import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import { research } from "@/data/site";

const Research = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [lead, , close] = research.paragraphs;

  return (
    <PageShell>
      <section className="pt-32 pb-24 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight mb-10">
            {research.title}
          </h1>
          <div className="space-y-5 text-muted-foreground leading-relaxed mb-12">
            <p>{lead}</p>
            <p>
              My research interests sit at the intersection of{" "}
              <span className="text-foreground font-medium">{research.focus}</span>, with a
              particular interest in translating research into practical improvements for
              institutions and the students they serve.
            </p>
            <p>{close}</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center h-11 px-6 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Discuss a Collaboration →
          </Link>
        </div>
      </section>
    </PageShell>
  );
};

export default Research;
