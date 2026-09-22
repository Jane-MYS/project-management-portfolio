import { tools, whatIDo } from "@/data/site";

const WhatIDo = () => (
  <section className="py-20 md:py-28 px-6 md:px-10">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-medium mb-12">What I Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {whatIDo.map((item) => (
          <div
            key={item.title}
            className="bg-background rounded-lg p-8 portfolio-card-shadow"
          >
            <h3 className="text-xl font-medium mb-3">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>
      <p className="text-sm text-muted-foreground tracking-wide">
        {tools.join(" · ")}
      </p>
    </div>
  </section>
);

export default WhatIDo;
