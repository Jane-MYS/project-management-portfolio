import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PageShell from "@/components/PageShell";
import {
  ApproachList,
  BackToWork,
  DeliverableList,
  ImpactGrid,
  ScopeBox,
  WorkflowRow,
} from "@/components/CaseStudyBits";
import { getCaseStudy } from "@/data/caseStudies";

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? getCaseStudy(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!study) {
    return (
      <PageShell>
        <div className="pt-32 pb-24 px-6 text-center">
          <h1 className="text-3xl font-medium mb-4">Case study not found</h1>
          <Link to="/#work" className="text-sm font-medium hover:underline">
            Back to Work
          </Link>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <article className="pt-32 pb-24 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <BackToWork />
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
            Case Study {study.number}
          </p>
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">
            {study.title}
          </h1>
          <p className="text-muted-foreground mb-2">
            {study.organization}
            {study.year ? ` | ${study.year}` : ""}
          </p>
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-16">
            {study.tags.join(" · ")}
          </p>

          <section className="mb-16">
            <h2 className="text-2xl font-medium mb-4">The Challenge</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {study.challenge.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </section>

          {study.objective && (
            <section className="mb-16">
              <h2 className="text-2xl font-medium mb-4">Objective</h2>
              <p className="text-muted-foreground leading-relaxed">{study.objective}</p>
            </section>
          )}

          <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-medium mb-4">My Role</h2>
              <p className="text-muted-foreground mb-8">{study.role}</p>
              <h2 className="text-2xl font-medium mb-4">What I Owned</h2>
              <ul className="space-y-2 text-muted-foreground">
                {study.owned.map((item) => (
                  <li key={item} className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <ScopeBox items={study.scope} />
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-medium mb-6">My Approach</h2>
            <ApproachList steps={study.approach} />
          </section>

          {study.process && (
            <section className="mb-16">
              <h2 className="text-2xl font-medium mb-6">What I Did</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {study.process.map((stage) => (
                  <div
                    key={stage.title}
                    className="rounded-lg p-6 border border-border/60 bg-background"
                  >
                    <h3 className="font-medium mb-3">{stage.title}</h3>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {stage.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {study.workflows && (
            <section className="mb-16">
              <h2 className="text-2xl font-medium mb-6">Systems & Processes Developed</h2>
              <div className="space-y-8">
                {study.workflows.map((workflow) => (
                  <WorkflowRow key={workflow.title} workflow={workflow} />
                ))}
              </div>
            </section>
          )}

          <section className="mb-16">
            <h2 className="text-2xl font-medium mb-6">Impact</h2>
            <ImpactGrid items={study.impact} />
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-6">Selected Deliverables</h2>
            <DeliverableList items={study.deliverables} />
          </section>
        </div>
      </article>
    </PageShell>
  );
};

export default CaseStudy;
