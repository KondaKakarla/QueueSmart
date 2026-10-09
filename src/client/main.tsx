import React from "react";
import { createRoot } from "react-dom/client";
import "./app.css";
import App from "./app";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("QueueSmart root element not found");
}

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);