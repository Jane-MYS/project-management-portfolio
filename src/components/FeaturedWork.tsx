import { Link } from "react-router-dom";
import { featuredWork } from "@/data/caseStudies";

const FeaturedWork = () => (
  <section id="work" className="py-20 md:py-28 px-6 md:px-10 scroll-mt-24">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-medium mb-16">Selected Work</h2>
      <div className="space-y-20">
        {featuredWork.map((study) => (
          <article key={study.slug}>
            <h3 className="text-2xl md:text-3xl font-medium mb-2">{study.title}</h3>
            <p className="text-sm text-muted-foreground mb-6">{study.organization}</p>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
              {study.homepage.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            {study.emphasis && (
              <p className="font-medium mb-6">{study.emphasis}</p>
            )}
            {study.workOn && (
              <p className="text-sm text-muted-foreground mb-6">
                <span className="font-medium text-foreground">What I work on: </span>
                {study.workOn.join(" · ")}
              </p>
            )}
            <Link to={`/work/${study.slug}`} className="text-sm font-medium hover:underline">
              {study.cta}
            </Link>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedWork;
