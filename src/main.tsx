import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeContextProvider } from "./utils/ThemeContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeContextProvider>
);
