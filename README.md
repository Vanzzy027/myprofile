# Evanson Kariuki - Portfolio

Personal site of Evanson Kariuki: fullstack software engineer, HFCB personal banking DSR and co-founder of Brivemarc Technologies.
Live at **https://ekariuki.britech.co.ke** (Vercel).

> **Stack:** React 19 · TypeScript · Vite 8 · React Router 7 · Tailwind CSS 3 · daisyUI 5 · lucide-react · react-hook-form · Zod · Resend · Vercel

## Editing content

**All personal data lives in [`src/data/site.ts`](src/data/site.ts)**: profile, experience, services,
personal banking copy, skills, education, projects, events, pictorials and blog listings. Edit it and redeploy;
pages, SEO tags, JSON-LD, `sitemap.xml` and `llms.txt` all update from it.

- **Blog posts:** add an entry to `blogs` in `site.ts` and a Markdown file at `src/content/blogs/<id>.md`.
- **Images:** put web-ready files in `public/assets/` (WebP, max ~1280px wide) and reference them as `/assets/...`.
  Originals and unused photos are kept in `archive/` (not deployed).
- **Search `TODO`** in `src/` for content still to confirm (HFCB wording, dates, screenshots, CV).

## How it renders

The site is prerendered at build time so every page ships complete HTML (content, title, meta tags, JSON-LD)
that search engines and AI crawlers can read without JavaScript. React then hydrates it in the browser.

`pnpm build` runs:

1. `tsc -b` - type check
2. `vite build` - client bundle into `dist/`
3. `vite build --ssr scripts/prerender.ts` - bundles the prerenderer with the app
4. `node dist-server/prerender.js` - writes `dist/<route>.html` for every route, `404.html`, `sitemap.xml`,
   `robots.txt`, `llms.txt` and the IndexNow key file. It fails the build if a title exceeds 60 characters,
   a description exceeds 160, or a page doesn't have exactly one `<h1>`.

| File | Role |
|---|---|
| `src/seo/meta.ts` | Per-route titles, descriptions, Open Graph/Twitter tags, canonical URLs and JSON-LD |
| `src/seo/files.ts` | Generators for `sitemap.xml`, `robots.txt`, `llms.txt` |
| `src/entry-server.tsx` | Server render entry used by the prerenderer |
| `src/components/Seo/HeadManager.tsx` | Updates `<head>` on client-side navigation |
| `scripts/prerender.ts` | Build-time prerenderer |
| `src/seo/indexnow.ts` | IndexNow key and submit helper |
| `.github/workflows/indexnow.yml` | Pings IndexNow (Bing) after every Vercel production deploy |
| `vercel.json` | Clean URLs (`/about` serves `about.html`) and redirects |
| `scripts/indexnow.ts` | Manual IndexNow ping (`pnpm indexnow [urls...]`) |

New routes must be added to both `src/App.tsx` and `getAllRoutes()` / `baseMeta()` in `src/seo/meta.ts`.

## Environment variables

See `.env.example`. Set these in Vercel (Project -> Settings -> Environment Variables).

| Variable | Needed | Purpose |
|---|---|---|
| `VITE_GOOGLE_SITE_VERIFICATION` | optional | Overrides the Google code set in `src/seo/meta.ts` |
| `VITE_BING_SITE_VERIFICATION` | optional | Bing `msvalidate.01` value (not needed if Bing imports from Google) |
| `RESEND_API_KEY` | required | Resend API key for the contact form |
| `CONTACT_EMAIL` | optional | Inbox that receives form messages (default `mathengevan@gmail.com`) |
| `CONTACT_FROM` | optional | Sender address on a Resend-verified domain (default `ekariuki@britech.co.ke`) |

## Running locally

```bash
pnpm install
pnpm dev        # dev server (client-rendered, no prerendering)
pnpm build      # production build with prerendering
pnpm preview    # serve dist/ at http://localhost:4173
pnpm lint
```

Requires Node 20+ and pnpm (`npm install -g pnpm`).

## After deploying

- **Google Search Console / Bing Webmaster Tools:** submit `https://ekariuki.britech.co.ke/sitemap.xml`.
- **IndexNow (Bing):** automatic after every production deploy. To resubmit by hand: `pnpm indexnow`
  (all sitemap URLs) or `pnpm indexnow https://ekariuki.britech.co.ke/about` (specific URLs).

## Theme

Brand colours are CSS variables in `src/index.css` (daisyUI 5 reads `--color-*`; its built-in themes are disabled
in `tailwind.config.ts`). Coral is darker in light mode so text meets WCAG AA. Tailwind 3's preflight sits in a
native `@layer preflight` so it doesn't override daisyUI 5's layered component styles.

## Contact form

`src/components/Contact/ContactForm.tsx` validates input with zod and POSTs it to
`api/sendEmail.ts` (a Vercel function), which sends it through Resend from `CONTACT_FROM` to `CONTACT_EMAIL`,
with the visitor's address as Reply-To. The function escapes all input and caps field lengths.

To test it locally, run `vercel dev` (the plain Vite dev server doesn't run functions).

## Maintainer

**Evanson Kariuki** - Nyeri, Kenya

- Email: ekariuki@britech.co.ke
- GitHub: https://github.com/Vanzzy027
- LinkedIn: https://www.linkedin.com/in/evanson-kariuki-252545350
