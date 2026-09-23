import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PageShell from "@/components/PageShell";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <PageShell>
      <div className="pt-32 pb-24 px-6 text-center">
        <h1 className="text-4xl font-medium mb-4">Page not found</h1>
        <Link to="/" className="text-sm font-medium hover:underline">
          Return home
        </Link>
      </div>
    </PageShell>
  );
};

export default NotFound;
