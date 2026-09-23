import { Link } from "react-router-dom";
import { research } from "@/data/site";

const ResearchCollaboration = () => {
  const [lead, interests, close] = research.paragraphs;

  return (
    <section id="research" className="py-20 md:py-28 px-6 md:px-10 bg-secondary/50 scroll-mt-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium mb-8">{research.title}</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed mb-10">
          <p>{lead}</p>
          <p>
            My research interests sit at the intersection of{" "}
            <span className="text-foreground font-medium">{research.focus}</span>, with a
            particular interest in translating research into practical improvements for
            institutions and the students they serve.
          </p>
          <p>{close}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/research"
            className="inline-flex items-center justify-center h-11 px-6 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Explore My Research →
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center h-11 px-6 rounded-md border border-input bg-background text-sm font-medium hover:bg-accent transition-colors"
          >
            Discuss a Collaboration →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResearchCollaboration;
