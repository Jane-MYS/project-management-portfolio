import { Link } from "react-router-dom";
import { contact, site } from "@/data/site";

const ContactPreview = () => (
  <section className="py-20 md:py-28 px-6 md:px-10 bg-gradient-to-b from-background to-secondary/20">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-medium mb-4">{contact.title}</h2>
      <p className="text-muted-foreground leading-relaxed mb-6">{contact.body}</p>
      <p className="text-sm text-muted-foreground mb-8">{contact.aside}</p>
      <div className="flex flex-wrap gap-6 text-sm font-medium">
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
          LinkedIn
        </a>
        <a href={`mailto:${site.email}`} className="hover:underline">
          Email
        </a>
        <Link to="/resume" className="hover:underline">
          Resume
        </Link>
      </div>
    </div>
  </section>
);

export default ContactPreview;
