import { metrics } from "@/data/site";

const MetricsStrip = () => (
  <section className="px-6 md:px-10 pb-8">
    <div className="max-w-7xl mx-auto border-y border-border/60 py-8 md:py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {metrics.map((item) => (
          <div key={item.label}>
            <p className="text-2xl md:text-3xl font-medium tracking-tight mb-1">
              {item.figure}
            </p>
            <p className="text-sm text-muted-foreground">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MetricsStrip;
