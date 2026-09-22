import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";
import { site } from "@/data/site";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 md:py-16 px-6 md:px-10 border-t border-border/60">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-muted-foreground">
          © {currentYear} {site.name}
        </p>
        <div className="flex items-center space-x-2">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${site.email}`}
            className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <Link
            to="/resume"
            className="text-sm text-muted-foreground hover:text-primary px-2"
          >
            Resume
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
