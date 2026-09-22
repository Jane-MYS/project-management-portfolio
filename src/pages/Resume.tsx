import { useEffect } from "react";
import { Download } from "lucide-react";
import PageShell from "@/components/PageShell";
import { resume, site } from "@/data/site";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageShell>
      <section className="pt-32 pb-24 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <h1 className="text-3xl md:text-5xl font-medium tracking-tight mb-3">
                Resume
              </h1>
              <p className="text-muted-foreground">{site.positioning}</p>
            </div>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 print:hidden"
            >
              Download Resume
              <Download className="h-4 w-4" />
            </button>
          </div>

          <section className="mb-12">
            <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
              Experience
            </h2>
            <div className="space-y-8">
              {resume.experience.map((job) => (
                <div key={job.org}>
                  <h3 className="text-xl font-medium">{job.org}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{job.role}</p>
                  <p className="text-muted-foreground leading-relaxed">{job.summary}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
              Education
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              {resume.education.map((item) => (
                <li key={item.credential}>{item.credential}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
              Additional training
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              {resume.certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </PageShell>
  );
};

export default Resume;
