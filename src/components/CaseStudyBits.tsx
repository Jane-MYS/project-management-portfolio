import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Workflow } from "@/data/caseStudies";

export const ScopeBox = ({ items }: { items: string[] }) => (
  <aside className="bg-secondary/50 rounded-lg p-6 border border-border/50">
    <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Scope</h3>
    <ul className="space-y-2 text-sm text-muted-foreground">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </aside>
);

export const ApproachList = ({
  steps,
}: {
  steps: { n: string; title: string; body: string }[];
}) => (
  <ol className="space-y-6">
    {steps.map((step, index) => (
      <li key={step.n} className="flex gap-4">
        <div className="flex flex-col items-center">
          <span className="text-xs font-medium tracking-wider text-muted-foreground">
            {step.n}
          </span>
          {index < steps.length - 1 && (
            <span className="flex-grow w-px bg-border mt-2" aria-hidden />
          )}
        </div>
        <div className="pb-2">
          <h3 className="font-medium mb-1">{step.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
        </div>
      </li>
    ))}
  </ol>
);

export const WorkflowRow = ({ workflow }: { workflow: Workflow }) => (
  <div>
    <h3 className="font-medium mb-3">{workflow.title}</h3>
    <div className="flex flex-wrap items-center gap-2">
      {workflow.steps.map((step, index) => (
        <span key={step} className="inline-flex items-center gap-2">
          <span className="text-sm bg-secondary rounded-md px-3 py-1.5">{step}</span>
          {index < workflow.steps.length - 1 && (
            <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
          )}
        </span>
      ))}
    </div>
  </div>
);

export const ImpactGrid = ({
  items,
}: {
  items: { figure: string; label: string }[];
}) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
    {items.map((item) => (
      <div key={item.label}>
        <p className="text-3xl font-medium tracking-tight mb-2">{item.figure}</p>
        <p className="text-sm text-muted-foreground">{item.label}</p>
      </div>
    ))}
  </div>
);

export const DeliverableList = ({ items }: { items: string[] }) => (
  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {items.map((item) => (
      <li
        key={item}
        className="text-sm border border-border/60 rounded-md px-4 py-3 bg-background"
      >
        {item}
      </li>
    ))}
  </ul>
);

export const BackToWork = () => (
  <Link
    to="/#work"
    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground mb-10"
  >
    ← Back to Work
  </Link>
);
