import { Link } from "react-router-dom";
import { about } from "@/data/site";

const AboutPreview = () => (
  <section className="py-20 md:py-28 px-6 md:px-10">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-medium mb-4">{about.title}</h2>
      <p className="text-xl md:text-2xl font-medium mb-8 text-balance">{about.kicker}</p>
      <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>
      <p className="text-muted-foreground leading-relaxed mb-6">
        I hold an{" "}
        <span className="text-foreground font-medium">
          Ed.D. in Higher Education Administration and Organizational Leadership
        </span>{" "}
        and an{" "}
        <span className="text-foreground font-medium">MAT in TESOL</span>, and I approach
        many operational problems with the same mindset I bring to research:
      </p>
      <p className="font-medium mb-6">{about.questions}</p>
      <p className="text-muted-foreground leading-relaxed mb-8">
        That combination—
        <span className="text-foreground font-medium">operator and researcher</span>
        —shapes the kind of work I'm interested in doing next.
      </p>
      <Link to="/about" className="text-sm font-medium hover:underline">
        More about me →
      </Link>
    </div>
  </section>
);

export default AboutPreview;
