// Manually notifies IndexNow. Netlify already does this after every production deploy
// (netlify/functions/deploy-succeeded.ts); use this to resubmit or to submit specific URLs:
//   pnpm indexnow
//   pnpm indexnow https://ekariuki.britech.co.ke/about

import { submitToIndexNow } from "../src/seo/indexnow";

const { ok, status, count } = await submitToIndexNow(process.argv.slice(2));
console.log(`IndexNow responded ${status} for ${count} URLs`);
if (!ok) process.exit(1);
