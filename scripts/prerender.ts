/// <reference types="node" />
// Prerenders every route to static HTML after `vite build`, so titles, meta tags,
// JSON-LD and page content are readable without JavaScript. Also writes
// sitemap.xml, robots.txt, llms.txt, 404.html and the IndexNow key file.
//
// Bundled with `vite build --ssr` and run by `pnpm build` (see package.json).

import fs from "node:fs/promises";
import path from "node:path";
import {
  buildHeadTags,
  buildLlmsTxt,
  buildRobots,
  buildSitemap,
  getAllRoutes,
  getRouteMeta,
  render,
  renderHeadTags,
} from "../src/entry-server";
import { INDEXNOW_KEY } from "../src/seo/indexnow";

const root = process.cwd();
const dist = path.join(root, "dist");
const serverDir = path.join(root, "dist-server");

const template = await fs.readFile(path.join(dist, "index.html"), "utf8");

if (!template.includes("<!--app-head-->") || !template.includes("<!--app-html-->")) {
  throw new Error("index.html is missing the <!--app-head--> or <!--app-html--> placeholder");
}

// Netlify serves /about from about.html, which avoids trailing-slash redirects.
const outFile = (route: string) =>
  route === "/" ? "index.html" : route === "/404" ? "404.html" : `${route.slice(1)}.html`;

const problems: string[] = [];

for (const route of [...getAllRoutes(), "/404"]) {
  const meta = getRouteMeta(route);

  if (route !== "/404") {
    if (meta.noindex) problems.push(`${route}: resolved to the not-found page`);
    if (meta.title.length > 60) problems.push(`${route}: title is ${meta.title.length} chars (max 60)`);
    if (meta.description.length > 160) problems.push(`${route}: description is ${meta.description.length} chars (max 160)`);
  }

  const appHtml = await render(route);
  const h1Count = (appHtml.match(/<h1[\s>]/g) ?? []).length;
  if (h1Count !== 1) problems.push(`${route}: has ${h1Count} <h1> elements (expected 1)`);

  const html = template
    .replace("<!--app-head-->", renderHeadTags(buildHeadTags(meta)))
    .replace("<!--app-html-->", appHtml);

  const file = path.join(dist, outFile(route));
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, html);
  console.log(`  prerendered ${route} -> ${outFile(route)}`);
}

if (problems.length) {
  throw new Error(`SEO checks failed:\n  ${problems.join("\n  ")}`);
}

const buildDate = new Date().toISOString().slice(0, 10);
await fs.writeFile(path.join(dist, "sitemap.xml"), buildSitemap(buildDate));
await fs.writeFile(path.join(dist, "robots.txt"), buildRobots());
await fs.writeFile(path.join(dist, "llms.txt"), buildLlmsTxt());

// IndexNow (Bing, Yandex, etc.) verifies ownership via /<key>.txt containing the key.
await fs.writeFile(path.join(dist, `${INDEXNOW_KEY}.txt`), INDEXNOW_KEY);

await fs.rm(serverDir, { recursive: true, force: true });
console.log(`  wrote sitemap.xml, robots.txt, llms.txt, ${INDEXNOW_KEY}.txt`);
