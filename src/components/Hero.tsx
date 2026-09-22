import { Link } from "react-router-dom";
import { site } from "@/data/site";

const Hero = () => (
  <section id="home" className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-10">
    <div className="max-w-4xl mx-auto">
      <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-6">
        {site.name}
      </p>
      <p className="text-sm md:text-base text-muted-foreground mb-6 tracking-wide">
        {site.positioning}
      </p>
      <h1 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight mb-6 text-balance">
        {site.headline}
      </h1>
      <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed">
        {site.subhead}
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          to="/#work"
          className="inline-flex items-center justify-center h-11 px-6 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          View My Work
        </Link>
        <Link
          to="/about"
          className="inline-flex items-center justify-center h-11 px-6 rounded-md border border-input bg-background text-sm font-medium hover:bg-accent transition-colors"
        >
          About Me
        </Link>
        <Link
          to="/resume"
          className="inline-flex items-center justify-center h-11 px-6 rounded-md border border-input bg-background text-sm font-medium hover:bg-accent transition-colors"
        >
          Resume
        </Link>
      </div>
    </div>
  </section>
);

export default Hero;
