import { howIWork } from "@/data/site";

const HowIWork = () => (
  <section className="py-20 md:py-28 px-6 md:px-10 bg-secondary/50">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-medium mb-4">How I Work</h2>
      <p className="text-muted-foreground max-w-2xl mb-12">
        The same operating loop shows up across programs, launches, and systems work.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {howIWork.map((step, index) => (
          <div key={step.n} className="relative">
            <p className="text-xs font-medium tracking-wider text-muted-foreground mb-2">
              {step.n}
              {index < howIWork.length - 1 ? " →" : ""}
            </p>
            <h3 className="text-lg font-medium mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowIWork;
