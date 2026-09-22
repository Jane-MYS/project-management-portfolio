import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

const FeaturedWork = () => (
  <section id="work" className="py-20 md:py-28 px-6 md:px-10 scroll-mt-24">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-medium mb-4">Featured Work</h2>
      <p className="text-muted-foreground max-w-2xl mb-12">
        Four case studies: running an operation, launching a program, implementing infrastructure, and formal project planning in a different sector.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {caseStudies.map((study) => (
          <Link
            key={study.slug}
            to={`/work/${study.slug}`}
            className="group block bg-background rounded-lg p-8 portfolio-card-shadow portfolio-hover"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
              Case Study {study.number}
            </p>
            <h3 className="text-2xl font-medium mb-3 group-hover:text-primary transition-colors">
              {study.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {study.organization}
              {study.year ? ` | ${study.year}` : ""}
            </p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              {study.tags.join(" · ")}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {study.summary}
            </p>
            <span className="inline-flex items-center gap-1 text-sm font-medium">
              View Case Study
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedWork;
