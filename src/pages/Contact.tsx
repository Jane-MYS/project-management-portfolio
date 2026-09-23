import { useEffect } from "react";
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
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight mb-8">
            {contact.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm interested in conversations around{" "}
            <span className="text-foreground font-medium">
              program management, operations, learning support, educational technology,
              systems implementation, and research collaboration
            </span>
            .
          </p>
          <p className="text-muted-foreground leading-relaxed mb-12">
            I'm also available for select project-based work involving{" "}
            <span className="text-foreground font-medium">
              operations and workflow design, Google Workspace implementation, educational
              programs, and process improvement
            </span>
            .
          </p>
          <div className="flex flex-col gap-4 text-base font-medium">
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn
            </a>
            <a href={`mailto:${site.email}`} className="hover:underline">
              Email
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Contact;
