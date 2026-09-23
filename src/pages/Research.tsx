import { useEffect } from "react";
import PageShell from "@/components/PageShell";
import CuriousAbout from "@/components/CuriousAbout";
import ResearchCollaboration from "@/components/ResearchCollaboration";
import { research } from "@/data/site";

const Research = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageShell>
      <section className="pt-32 pb-12 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
            {research.title}
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-10 text-balance">
            {research.kicker}
          </p>
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
            <em className="text-foreground">{research.dissertation}</em>, examined how
            peer tutor training could be strengthened within a hybrid community college
            environment.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            That work now informs a broader research agenda focused on{" "}
            <span className="text-foreground font-medium">{research.agendaFocus}</span>.
          </p>
        </div>
      </section>
      <CuriousAbout />
      <ResearchCollaboration />
    </PageShell>
  );
};

export default Research;
