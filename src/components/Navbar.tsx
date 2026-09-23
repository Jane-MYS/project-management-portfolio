import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/data/site";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  const isActive = (to: string) => {
    if (to === "/#work") {
      return location.pathname.startsWith("/work") || location.hash === "#work";
    }
    if (to === "/research") {
      return location.pathname === "/research" || location.hash === "#research";
    }
    return location.pathname === to;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-10 ${
        isScrolled || mobileMenuOpen
          ? "py-4 bg-background/95 glass-effect border-b border-border/40"
          : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-sm font-semibold tracking-[0.2em] uppercase">
          {site.name}
        </Link>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-primary after:transition-all ${
                isActive(link.to)
                  ? "text-foreground after:w-full"
                  : "text-muted-foreground hover:text-primary after:w-0 hover:after:w-full"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[calc(4rem-1px)] bg-background z-40 p-6 flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="py-3 text-lg font-medium border-b border-border/50 text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
