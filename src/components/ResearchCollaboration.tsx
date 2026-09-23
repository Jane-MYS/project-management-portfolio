import { Link } from "react-router-dom";
import { researchCollab } from "@/data/site";

const ResearchCollaboration = () => (
  <section className="py-20 md:py-28 px-6 md:px-10 bg-secondary/50">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-medium mb-4">{researchCollab.title}</h2>
      <p className="text-xl md:text-2xl font-medium mb-8 text-balance">
        {researchCollab.kicker}
      </p>
      <p className="text-muted-foreground leading-relaxed mb-6">{researchCollab.body}</p>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Potential collaborations could include{" "}
        <span className="text-foreground font-medium">{researchCollab.potentialFocus}</span>{" "}
        involving:
      </p>
      <p className="text-sm text-muted-foreground mb-10">{researchCollab.topics}</p>
      <Link to="/contact" className="text-sm font-medium hover:underline">
        {researchCollab.cta}
      </Link>
    </div>
  </section>
);

export default ResearchCollaboration;
