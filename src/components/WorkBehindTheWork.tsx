import { workBehind } from "@/data/site";

const WorkBehindTheWork = () => (
  <section className="py-20 md:py-28 px-6 md:px-10 bg-secondary/50">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-medium mb-8">{workBehind.title}</h2>
      <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
        {workBehind.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>
      <p className="text-lg font-medium mb-6">{workBehind.emphasis}</p>
      <p className="text-muted-foreground leading-relaxed mb-12">{workBehind.close}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {workBehind.pillars.map((pillar) => (
          <div key={pillar.title}>
            <h3 className="text-xs font-medium uppercase tracking-wider mb-2">
              {pillar.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{pillar.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WorkBehindTheWork;
