import { Link } from "react-router-dom";
import { research } from "@/data/site";

const ResearchPreview = () => (
  <section id="research" className="py-20 md:py-28 px-6 md:px-10 bg-secondary/50 scroll-mt-24">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-medium mb-4">{research.title}</h2>
      <p className="text-xl md:text-2xl font-medium mb-8 text-balance">{research.kicker}</p>
      <p className="text-muted-foreground leading-relaxed mb-6">{research.lead}</p>
      <ul className="space-y-3 text-muted-foreground mb-6">
        {research.questions.map((question) => (
          <li key={question}>{question}</li>
        ))}
      </ul>
      <p className="text-muted-foreground leading-relaxed mb-8">
        And now:{" "}
        <span className="text-foreground font-medium">
          What happens when AI becomes another participant in the learning process?
        </span>
      </p>
      <p className="text-muted-foreground leading-relaxed mb-6">
        My doctoral research,{" "}
        <em className="text-foreground">{research.dissertation}</em>, examined how peer
        tutor training could be strengthened within a hybrid community college
        environment.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-10">
        That work now informs a broader research agenda focused on{" "}
        <span className="text-foreground font-medium">{research.agendaFocus}</span>.
      </p>
      <Link to="/research" className="text-sm font-medium hover:underline">
        Explore My Research →
      </Link>
    </div>
  </section>
);

export default ResearchPreview;
