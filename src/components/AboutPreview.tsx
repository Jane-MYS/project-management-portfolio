import { Link } from "react-router-dom";
import { about } from "@/data/site";

const AboutPreview = () => (
  <section className="py-20 md:py-28 px-6 md:px-10">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-medium mb-8">{about.title}</h2>
      <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
        {about.paragraphs.slice(0, 3).map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>
      <Link to="/about" className="text-sm font-medium hover:underline">
        More about me →
      </Link>
    </div>
  </section>
);

export default AboutPreview;
