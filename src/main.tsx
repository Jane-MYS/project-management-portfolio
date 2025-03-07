import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css"; // ✅ Import global CSS

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/project-management-portfolio/"> {/* ✅ Add `basename` */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
