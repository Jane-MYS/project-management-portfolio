import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import { contact, site } from "@/data/site";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageShell>
      <section className="pt-32 pb-24 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
            {contact.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {contact.body}
          </p>
          <p className="text-sm text-muted-foreground mb-12">{contact.aside}</p>
          <div className="flex flex-col gap-4 text-base font-medium">
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
    </PageShell>
  );
};

export default Contact;
