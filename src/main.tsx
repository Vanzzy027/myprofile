import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// After a new deploy, a tab that is already open still asks for the old chunk names,
// which now 404. Reload once to pick up the new build; the timestamp prevents a
// reload loop if the chunk is genuinely unavailable.
window.addEventListener("vite:preloadError", () => {
  try {
    const last = Number(sessionStorage.getItem("chunk-reload-at"));
    if (Date.now() - last < 10_000) return;
    sessionStorage.setItem("chunk-reload-at", String(Date.now()));
  } catch {
    return;
  }
  window.location.reload();
});

const container = document.getElementById("root")!;
const app = (
  <StrictMode>
    {/* Without this the old page stays up, with no feedback, while a lazy page loads. */}
    <BrowserRouter unstable_useTransitions={false}>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Production pages are prerendered (scripts/prerender.ts), so hydrate them.
// The dev server serves an empty shell, so render from scratch there.
if (container.firstElementChild) hydrateRoot(container, app);
else createRoot(container).render(app);
