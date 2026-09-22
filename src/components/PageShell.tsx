import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PageShell = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

export default PageShell;
