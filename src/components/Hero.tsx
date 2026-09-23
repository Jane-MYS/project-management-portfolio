import { Link } from "react-router-dom";
import { site } from "@/data/site";

const Hero = () => (
  <section id="home" className="pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-10">
    <div className="max-w-3xl mx-auto">
      <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-8">
        {site.name}
      </p>
      <h1 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight mb-6 text-balance">
        {site.headline}
      </h1>
      <p className="text-sm md:text-base text-muted-foreground mb-8 tracking-wide">
        {site.positioning}
      </p>
      <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
        I work at the intersection of{" "}
        <span className="text-foreground font-medium">{site.intersection}</span>
        —turning complicated operations into structures that are easier to run, easier
        to scale, and easier for people to navigate.
      </p>
      <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
        {site.subhead}
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          to="/#work"
          className="inline-flex items-center justify-center h-11 px-6 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Explore My Work →
        </Link>
        <Link
          to="/research"
          className="inline-flex items-center justify-center h-11 px-6 rounded-md border border-input bg-background text-sm font-medium hover:bg-accent transition-colors"
        >
          Explore My Research →
        </Link>
      </div>
    </div>
  </section>
);

export default Hero;
