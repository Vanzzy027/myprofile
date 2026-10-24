// IndexNow (used by Bing, Yandex, Seznam, Naver) lets the site announce changed URLs.
// The key is public by design: the build publishes it at /<key>.txt to prove ownership.

import { SITE_URL } from "../data/site";

export const INDEXNOW_KEY = "419b4a662196d15db3352a42f6bb3faa";

// Submits the given URLs, or every URL in the live sitemap. 200 = accepted, 202 = key validation pending.
export async function submitToIndexNow(urlList: string[] = []) {
  if (urlList.length === 0) {
    const sitemap = await (await fetch(`${SITE_URL}/sitemap.xml`)).text();
    urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  }

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: new URL(SITE_URL).host,
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList,
    }),
  });
  return { ok: res.ok, status: res.status, count: urlList.length };
}
