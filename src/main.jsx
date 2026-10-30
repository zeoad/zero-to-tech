import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";

import "./styles/variables.css";
import "./styles/global.css";
import "./styles/layout.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error('Missing root element: add <div id="root"></div> to index.html');
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
