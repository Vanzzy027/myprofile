// Netlify runs a function named deploy-succeeded after every successful deploy.
// On production deploys it submits the sitemap's URLs to IndexNow so Bing recrawls them.

import { submitToIndexNow } from "../../src/seo/indexnow";

export default async (req: Request) => {
  const { payload } = (await req.json()) as { payload?: { context?: string } };
  if (payload?.context !== "production") return new Response("Skipped: not a production deploy");

  const result = await submitToIndexNow();
  console.log(`IndexNow responded ${result.status} for ${result.count} URLs`);
  return new Response(JSON.stringify(result), { status: result.ok ? 200 : 502 });
};
