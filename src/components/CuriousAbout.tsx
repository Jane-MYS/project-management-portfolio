import { curious } from "@/data/site";

const CuriousAbout = () => (
  <section className="py-20 md:py-28 px-6 md:px-10">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-medium mb-4">{curious.title}</h2>
      <p className="text-xl md:text-2xl font-medium mb-8 text-balance">{curious.kicker}</p>
      <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
        {curious.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>
      <p className="text-muted-foreground mb-8">{curious.intro}</p>
      <div className="space-y-8">
        {curious.topics.map((topic) => (
          <div key={topic.title}>
            <h3 className="font-medium mb-2">{topic.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{topic.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CuriousAbout;
