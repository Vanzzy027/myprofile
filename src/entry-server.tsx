import { StrictMode } from "react";
import { prerender } from "react-dom/static";
import { StaticRouter } from "react-router-dom";
import App from "./App";

export { buildHeadTags, getAllRoutes, getRouteMeta, renderHeadTags } from "./seo/meta";
export { buildLlmsTxt, buildRobots, buildSitemap } from "./seo/files";

// Renders a route to HTML, waiting for lazy-loaded pages to resolve.
export async function render(url: string): Promise<string> {
  const { prelude } = await prerender(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
  return new Response(prelude).text();
}
