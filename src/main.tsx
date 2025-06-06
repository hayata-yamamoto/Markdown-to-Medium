import { createRoot } from "react-dom/client";
import App from "./app";
import "./index.css";
import "./i18n";

// Render the application
const container = document.getElementById("root");
if (!container) {
  throw new Error("Root element not found");
}

const root = createRoot(container);
root.render(<App />);
