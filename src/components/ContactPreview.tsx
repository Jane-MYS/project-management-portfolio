import { Link } from "react-router-dom";
import { contact } from "@/data/site";

const ContactPreview = () => (
  <section className="py-20 md:py-28 px-6 md:px-10 bg-gradient-to-b from-background to-secondary/20">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-medium mb-6">{contact.title}</h2>
      <p className="text-muted-foreground leading-relaxed mb-6">
        I'm interested in conversations around{" "}
        <span className="text-foreground font-medium">
          program management, operations, learning support, educational technology,
          systems implementation, and research collaboration
        </span>
        .
      </p>
      <p className="text-muted-foreground leading-relaxed mb-10">
        I'm also available for select project-based work involving{" "}
        <span className="text-foreground font-medium">
          operations and workflow design, Google Workspace implementation, educational
          programs, and process improvement
        </span>
        .
      </p>
      <Link
        to="/contact"
        className="inline-flex items-center justify-center h-11 px-6 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
      >
        Get in Touch →
      </Link>
    </div>
  </section>
);

export default ContactPreview;
