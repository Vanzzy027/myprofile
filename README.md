# Evanson Kariuki - Developer Portfolio

> **Stack:** React 18 · TypeScript · Vite · Tailwind CSS · DaisyUI · lucide-react · react-hook-form · Zod · EmailJS (temporary) · Netlify Functions · Resend (pending)

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Current Status](#2-current-status)
3. [Folder Structure](#3-folder-structure)
4. [Tech Stack & Dependencies](#4-tech-stack--dependencies)
5. [Environment Variables](#5-environment-variables)
6. [Quick Reference - Content Updates](#6-quick-reference--content-updates)
7. [JSON Schema Reference](#7-json-schema-reference)
8. [Pages & Routes](#8-pages--routes)
9. [Component Map](#9-component-map)
10. [Theme & Colors](#10-theme--colors)
11. [Contact Form - Current Setup (EmailJS)](#11-contact-form--current-setup-emailjs)
12. [Contact Form - Migration to Resend + Netlify Functions](#12-contact-form--migration-to-resend--netlify-functions)
13. [EmailJS Template Reference](#13-emailjs-template-reference)
14. [Running Locally](#14-running-locally)
15. [Deployment (Netlify)](#15-deployment-netlify)
16. [Adding Images](#16-adding-images)
17. [Remaining Work & Roadmap](#17-remaining-work--roadmap)
18. [Troubleshooting](#18-troubleshooting)

---

## 1. Project Overview

A production-ready multi-page developer portfolio for **Evanson Mathenge Kariuki** - Software Engineer and IoT Developer based in Embu, Kenya.

All content (projects, blog posts, events, skills, personal info) is driven by JSON files in `src/data/`. Adding or editing content requires **only editing those JSON files** - no component changes needed.

Blog posts are written in **Markdown** (`.md` files in `public/blogs/`) and rendered at runtime using `react-markdown`.

---

## 2. Current Status

### ✅ Done

| Area | Status | Notes |
|---|---|---|
| Project scaffold (Vite + React + TS) | ✅ Complete | |
| Tailwind CSS + DaisyUI setup | ✅ Complete | Custom theme with brand colours |
| Dark / Light mode | ✅ Complete | System preference detection + manual toggle |
| Theme persists across reloads | ✅ Complete | Saved in `localStorage` |
| Layout - Header + Footer | ✅ Complete | Sticky header, mobile hamburger menu |
| Home page (Hero + Featured Projects + CTA) | ✅ Complete | |
| About page (bio, skills, education) | ✅ Complete | |
| Projects page (filter by category + search) | ✅ Complete | |
| Project Detail page (auto-generated from JSON) | ✅ Complete | Route: `/projects/:id` |
| Blogs listing page | ✅ Complete | |
| Blog post detail page (Markdown renderer) | ✅ Complete | Route: `/blogs/:id` |
| Events & Leadership page | ✅ Complete | Workshops + pictorials grid |
| Contact page (layout + info cards) | ✅ Complete | |
| Contact form (react-hook-form + Zod validation) | ✅ Complete | |
| Contact form - EmailJS (temporary) | ✅ Complete | Works without a domain |
| Branded HTML email template | ✅ Complete | Uses brand colours, structured layout |
| JSON data files seeded with CV content | ✅ Complete | |
| Sample blog posts in Markdown | ✅ Complete | 2 sample posts in `public/blogs/` |
| 404 Not Found page | ✅ Complete | |
| Netlify `netlify.toml` config | ✅ Complete | SPA redirect + functions dir set |
| `.env.example` | ✅ Complete | |
| Netlify Functions email endpoint (code written) | ✅ Complete | Awaiting domain to activate |
| TypeScript types (`src/types/index.ts`) | ✅ Complete | |
| Custom hooks (`useProjects`, `useDebounce`, `useTheme`) | ✅ Complete | |

### ⏳ Pending / In Progress

| Area | Status | Blocker | Notes |
|---|---|---|---|
| Switch contact form from EmailJS → Resend | ⏳ Pending | Need a verified domain | See [Section 12](#12-contact-form--migration-to-resend--netlify-functions) |
| Real profile photo | ⏳ Pending | Add `/public/assets/me/profile.jpg` | Placeholder used |
| Real project screenshots | ⏳ Pending | Add images to `/public/assets/projects/` | Placeholder paths in JSON |
| Real CV PDF | ⏳ Pending | Add `/public/assets/evanson-cv.pdf` | Download button wired up |
| Blog post cover images | ⏳ Pending | Add to `/public/assets/blogs/` | |
| Event / pictorial photos | ⏳ Pending | Add to `/public/assets/events/` | |
| SEO meta tags (per-page) | ⏳ Pending | | `react-helmet-async` recommended |
| OG image for social sharing | ⏳ Pending | | |
| Basic component tests | ⏳ Pending | | Vitest recommended |

---

## 3. Folder Structure

```
evanson-portfolio/
│
├── public/
│   ├── assets/
│   │   ├── me/
│   │   │   └── profile.jpg              ← Your profile photo (add this)
│   │   ├── projects/
│   │   │   ├── car-rental-1.png         ← Project screenshots
│   │   │   └── ...
│   │   ├── events/
│   │   │   └── gdsc-iot-1.jpg           ← Event photos
│   │   └── blogs/
│   │       └── esp32-mqtt.jpg           ← Blog cover images
│   ├── blogs/
│   │   ├── getting-started-with-esp32-mqtt.md
│   │   └── building-realtime-dashboards-firebase.md
│   └── assets/
│       └── evanson-cv.pdf               ← Your CV (add this)
│
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Layout.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── Projects/
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ProjectsList.tsx
│   │   │   └── CategoryFilter.tsx
│   │   ├── Blog/                        ← (future: BlogCard component)
│   │   ├── Contact/
│   │   │   └── ContactForm.tsx
│   │   └── Shared/
│   │       ├── Tag.tsx
│   │       └── SectionHeader.tsx
│   │
│   ├── hooks/
│   │   ├── useProjects.ts
│   │   ├── useDebounce.ts
│   │   └── useTheme.ts
│   │
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectPage.tsx
│   │   ├── Blogs.tsx
│   │   ├── BlogPostPage.tsx
│   │   ├── Events.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   │
│   ├── data/                            ← EDIT THESE to update content
│   │   ├── about.json
│   │   ├── skills.json
│   │   ├── education.json
│   │   ├── projects.json
│   │   ├── blogs.json
│   │   ├── events.json
│   │   └── pictorials.json
│   │
│   ├── types/
│   │   └── index.ts                     ← All TypeScript interfaces
│   │
│   ├── styles/
│   │   └── index.css                    ← Tailwind base + custom utilities
│   │
│   ├── App.tsx                          ← Routes + theme initialisation
│   └── main.tsx                         ← React root entry point
│
├── netlify/
│   └── functions/
│       └── sendEmail.ts                 ← Resend serverless function (ready, not yet active)
│
├── .env                                 ← Your secrets (never commit)
├── .env.example                         ← Template for team/deploy
├── .gitignore
├── netlify.toml                         ← Netlify build + redirect config
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

---

## 4. Tech Stack & Dependencies

### Production dependencies

| Package | Purpose |
|---|---|
| `react` + `react-dom` | UI framework |
| `react-router-dom` | Client-side routing |
| `react-hook-form` | Form state management |
| `zod` + `@hookform/resolvers` | Schema validation |
| `lucide-react` | Icon set |
| `react-markdown` | Render Markdown blog posts |
| `remark-gfm` | GitHub-flavoured Markdown (tables, strikethrough) |
| `gray-matter` | Parse Markdown frontmatter (future use) |
| `axios` | HTTP client (available, fetch used for now) |
| `@emailjs/browser` | Temporary email sending (no backend needed) |
| `daisyui` | Component library on top of Tailwind |

### Dev dependencies

| Package | Purpose |
|---|---|
| `tailwindcss` + `postcss` + `autoprefixer` | CSS framework |
| `@types/node` | Node type definitions |
| `@netlify/functions` | Types for Netlify serverless functions |
| `vite` | Build tool + dev server |
| `typescript` | Type checking |

### Install everything from scratch

```bash
pnpm install

# If starting fresh:
pnpm add react-router-dom react-hook-form zod @hookform/resolvers
pnpm add lucide-react daisyui
pnpm add react-markdown remark-gfm gray-matter
pnpm add axios @emailjs/browser
pnpm add -D tailwindcss postcss autoprefixer @types/node @netlify/functions
```

---

## 5. Environment Variables

### `.env` (local - never commit this file)

```bash
# Active now (EmailJS - no backend needed)
VITE_EMAILJS_SERVICE_ID=service_9f8k4b7
VITE_EMAILJS_TEMPLATE_ID=template_iu8zmhc
VITE_EMAILJS_PUBLIC_KEY=lTt7-qCCYfkQmJpzy

# Ready for when you switch to Resend
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=mathengevan@gmail.com
VITE_SITE_URL=http://localhost:5173
```

### `.env.example` (commit this - safe template for others)

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

RESEND_API_KEY=re_your_key_here
CONTACT_EMAIL=your@email.com
VITE_SITE_URL=https://yoursite.netlify.app
```

### Setting variables on Netlify (for deployment)

```bash
netlify env:set RESEND_API_KEY re_your_actual_key
netlify env:set CONTACT_EMAIL mathengevan@gmail.com
```

Or go to: **Netlify Dashboard → Site → Site Configuration → Environment Variables**

---

## 6. Quick Reference - Content Updates

> This is the section you'll use most often. All content lives in `src/data/`.

---

### ➕ Add a new project

1. Open `src/data/projects.json`
2. Add a new object to the array (copy an existing one as a template):

```json
{
  "id": "my-new-project",
  "title": "My New Project",
  "category": "Web",
  "tags": ["React", "Node.js"],
  "shortDescription": "One line summary shown on the card.",
  "longDescription": "Full description shown on the detail page. Can be multiple sentences.",
  "role": "Full-Stack Developer",
  "year": 2025,
  "liveUrl": "https://myproject.com",
  "repoUrl": "https://github.com/Vanzzy027/my-project",
  "images": ["/assets/projects/my-project-1.png"],
  "featured": false
}
```

3. Add the project image to `public/assets/projects/my-project-1.png`
4. Done - the card appears in `/projects` and the detail page is live at `/projects/my-new-project`

**Valid category values** (used for the filter buttons):
`"Web"` · `"Mobile"` · `"IoT"` · `"Software"` · `"PoS"`
> Adding a new category string automatically creates a new filter button.

**`featured: true`** - shows the project in the Home page featured strip.

---

### ✏️ Edit an existing project

Open `src/data/projects.json`, find the object by `"id"`, edit any fields, save.

---

### ➕ Write a new blog post

**Step 1 - Add entry to `src/data/blogs.json`:**

```json
{
  "id": "my-blog-post-slug",
  "title": "My Blog Post Title",
  "date": "2025-06-01",
  "excerpt": "A short one or two sentence summary shown on the blog listing page.",
  "tags": ["IoT", "Tutorial"],
  "coverImage": "/assets/blogs/my-post-cover.jpg",
  "file": "/blogs/my-blog-post-slug.md"
}
```

**Step 2 - Create the Markdown file at `public/blogs/my-blog-post-slug.md`:**

```markdown
---
title: My Blog Post Title
date: 2025-06-01
tags: [IoT, Tutorial]
---

# My Blog Post Title

Your content here. Supports full **Markdown**:
- Lists
- `code blocks`
- Tables (via remark-gfm)
- Images: ![alt text](/assets/blogs/image.png)
```

3. Add cover image to `public/assets/blogs/` (optional)
4. Done - post appears at `/blogs/my-blog-post-slug`

---

### ➕ Add an event or workshop

Open `src/data/events.json` and add:

```json
{
  "id": "event-slug-2025",
  "title": "Workshop or Event Title",
  "date": "2025-07-10",
  "role": "Lead Facilitator",
  "description": "What happened at this event.",
  "outcomes": ["50 students trained", "3 projects built"],
  "images": ["/assets/events/event-2025-1.jpg"],
  "type": "workshop"
}
```

`"type"` options: `"workshop"` · `"leadership"` · `"conference"`

---

### ➕ Add an event pictorial (photo grid)

Open `src/data/pictorials.json` and add:

```json
{
  "id": "event-name-2025",
  "event": "Event Name 2025",
  "date": "2025-07-10",
  "description": "Brief caption shown above the photo grid.",
  "images": [
    "/assets/events/photo1.jpg",
    "/assets/events/photo2.jpg",
    "/assets/events/photo3.jpg"
  ]
}
```

Add photos to `public/assets/events/`.

---

### ✏️ Update personal info (name, bio, email, links)

Edit `src/data/about.json`:

```json
{
  "name": "Evanson Mathenge Kariuki",
  "title": "Software Engineer · IoT Developer",
  "location": "Embu, Kenya",
  "openToRemote": true,
  "summary": "Your professional summary here.",
  "email": "mathengevan@gmail.com",
  "phone": "0112178578",
  "social": {
    "github": "https://github.com/Vanzzy027",
    "linkedin": "https://surl.li/qjbtmd"
  },
  "photo": "/assets/me/profile.jpg",
  "cvUrl": "/assets/evanson-cv.pdf"
}
```

---

### ✏️ Update skills

Edit `src/data/skills.json`. Each object is a skill group:

```json
[
  {
    "category": "Languages",
    "items": ["TypeScript", "JavaScript", "Python", "C/C++", "PHP", "SQL"]
  },
  {
    "category": "Your New Category",
    "items": ["Tool A", "Tool B"]
  }
]
```

Adding a new object = new skill group rendered on the About page.

---

### ✏️ Update education

Edit `src/data/education.json`:

```json
[
  {
    "institution": "University Name",
    "degree": "Bachelor of Science",
    "field": "Your Field",
    "year": "2021 – 2025",
    "grade": "Second Class Honours (Upper Division)"
  }
]
```

---

## 7. JSON Schema Reference

### `projects.json` - full schema

```ts
{
  id: string             // URL slug - must be unique, no spaces (use hyphens)
  title: string          // Display title
  category: string       // Filter category: "Web" | "Mobile" | "IoT" | "Software" | "PoS"
  tags: string[]         // Technology tags shown on card and detail page
  shortDescription: string  // 1–2 sentences, shown on card
  longDescription: string   // Full description shown on detail page
  role: string           // Your role e.g. "Full-Stack Developer"
  year: number           // e.g. 2025
  liveUrl: string | null // Live demo URL or null
  repoUrl: string | null // GitHub URL or null
  images: string[]       // Paths relative to /public e.g. "/assets/projects/img.png"
  featured: boolean      // true = shown on Home page featured strip
  blogId?: string        // Optional: links to a blog post by its id
}
```

### `blogs.json` - full schema

```ts
{
  id: string          // URL slug - must match the .md filename
  title: string
  date: string        // ISO format: "YYYY-MM-DD"
  excerpt: string     // Short summary for listing page
  tags: string[]
  coverImage?: string // Optional: path to cover image in /public
  file: string        // Path to .md file e.g. "/blogs/my-post.md"
}
```

### `events.json` - full schema

```ts
{
  id: string
  title: string
  date: string           // "YYYY-MM-DD"
  role: string           // Your role at the event
  description: string
  outcomes: string[]     // Bullet points of impact/results
  images?: string[]      // Optional event photos
  type: "workshop" | "leadership" | "conference"
}
```

### `pictorials.json` - full schema

```ts
{
  id: string
  event: string       // Event name shown as heading
  date: string        // "YYYY-MM-DD"
  description: string // Caption shown above photo grid
  images: string[]    // Array of image paths in /public
}
```

---

## 8. Pages & Routes

| Route | Page | Source file |
|---|---|---|
| `/` | Home (Hero + Featured Projects + CTA) | `src/pages/Home.tsx` |
| `/about` | About (bio, skills, education) | `src/pages/About.tsx` |
| `/projects` | Projects listing (filter + search) | `src/pages/Projects.tsx` |
| `/projects/:id` | Project detail (auto-generated from JSON) | `src/pages/ProjectPage.tsx` |
| `/blogs` | Blog listing | `src/pages/Blogs.tsx` |
| `/blogs/:id` | Blog post (renders `.md` file) | `src/pages/BlogPostPage.tsx` |
| `/events` | Events, workshops & pictorials | `src/pages/Events.tsx` |
| `/contact` | Contact form + info | `src/pages/Contact.tsx` |
| `*` | 404 Not Found | `src/pages/NotFound.tsx` |

---

## 9. Component Map

```
App.tsx
└── Layout
    ├── Header            (nav links, mobile menu, theme toggle)
    ├── [page content]
    │   ├── Home
    │   │   ├── Hero section (inline)
    │   │   ├── Skills strip (inline, pulls from skills.json)
    │   │   ├── ProjectCard × N  (featured projects)
    │   │   └── CTA section (inline)
    │   ├── About
    │   │   ├── SectionHeader
    │   │   └── Tag × N
    │   ├── Projects
    │   │   ├── SectionHeader
    │   │   └── ProjectsList
    │   │       ├── CategoryFilter
    │   │       └── ProjectCard × N
    │   ├── ProjectPage
    │   │   └── Tag × N
    │   ├── Blogs
    │   │   └── BlogCard (inline in Blogs.tsx)
    │   ├── BlogPostPage
    │   │   ├── Tag × N
    │   │   └── ReactMarkdown
    │   ├── Events
    │   │   └── SectionHeader
    │   └── Contact
    │       └── ContactForm
    │           └── react-hook-form + Zod
    └── Footer
```

### Shared components

| Component | File | Props |
|---|---|---|
| `Tag` | `Shared/Tag.tsx` | `label: string`, `size?: "sm" \| "md"` |
| `SectionHeader` | `Shared/SectionHeader.tsx` | `title: string`, `subtitle?: string` |
| `CategoryFilter` | `Projects/CategoryFilter.tsx` | `categories`, `active`, `onChange` |
| `ProjectCard` | `Projects/ProjectCard.tsx` | `project: Project` |
| `ContactForm` | `Contact/ContactForm.tsx` | none |

---

## 10. Theme & Colors

### Brand colour palette

| Name | Hex | Usage |
|---|---|---|
| `brand-coral` | `#FF8A5B` | Primary CTA buttons, accents, featured badges, links |
| `brand-forest` | `#102C26` | Dark background, header bg in dark mode |
| `brand-slate` | `#404461` | Neutral text, secondary elements |
| `brand-deep` | `#023020` | Deep dark backgrounds, gradient ends |
| `brand-sage` | `#364737` | Success states, secondary accents |
| `brand-sienna` | `#6D483F` | Warm accents, field labels |
| `brand-ocean` | `#2E5A87` | Info/links, category badges, skill tags |

### Using colours in components

```tsx
// Tailwind utility classes
className="text-brand-coral"         // coral text
className="bg-brand-forest"          // forest background
className="border-brand-ocean"       // ocean border
className="bg-brand-coral/10"        // 10% opacity coral background
```

### DaisyUI semantic tokens (auto dark/light)

```tsx
className="bg-base-100"              // page background
className="bg-base-200"              // card/surface background
className="text-base-content"        // primary text
className="text-base-content/60"     // muted text (60% opacity)
className="border-base-300"          // subtle borders
className="btn btn-primary"          // coral in dark, ocean in light
className="btn btn-outline"          // outlined variant
```

### Dark / Light mode

- **Auto-detection:** reads `prefers-color-scheme` on first visit
- **Manual toggle:** Sun/Moon icon button in header
- **Persistence:** saved to `localStorage` key `"theme"`
- **How it works:** `App.tsx` sets `data-theme` attribute on `<html>` and toggles the `dark` class; DaisyUI and Tailwind both respond to these

To change the default theme colours, edit the `daisyui.themes` block in `tailwind.config.js`.

---

## 11. Contact Form - Current Setup (EmailJS)

The form currently uses **EmailJS** - this works immediately without a backend or domain.

### File: `src/components/Contact/ContactForm.tsx`

The active `onSubmit` function calls:

```ts
await emailjs.send(
  "service_9f8k4b7",       // EmailJS Service ID
  "template_iu8zmhc",      // EmailJS Template ID
  {
    name:    data.name,
    email:   data.email,
    subject: `[Portfolio] ${data.subject}`,
    message: data.message,
  },
  "lTt7-qCCYfkQmJpzy"     // EmailJS Public Key
);
```

### EmailJS Dashboard

- **Login:** https://www.emailjs.com
- **Service ID:** `service_9f8k4b7`
- **Template ID:** `template_iu8zmhc`
- **Public Key:** `lTt7-qCCYfkQmJpzy`

### Template variables (used in the HTML email template)

| Variable | Value sent |
|---|---|
| `{{name}}` | Sender's name |
| `{{email}}` | Sender's email address |
| `{{subject}}` | Message subject (prefixed with `[Portfolio]`) |
| `{{message}}` | Message body |

### EmailJS template subject line (set in EmailJS dashboard)

```
[Portfolio] {{subject}} - from {{name}}
```

### EmailJS `Reply-To` field (set in EmailJS dashboard)

```
{{email}}
```

This means when you hit **Reply** in Gmail, it replies to the sender automatically.

---

## 12. Contact Form - Migration to Resend + Netlify Functions

> **Do this when you have a verified domain.**

The Netlify Function is already written and ready at `netlify/functions/sendEmail.ts`. You only need to:

### Step 1 - Get a domain and verify it with Resend

1. Buy a domain (Namecheap, Google Domains, etc.)
2. Go to https://resend.com → **Domains → Add Domain**
3. Add the DNS records Resend gives you (TXT + MX records)
4. Get your API key: **Resend Dashboard → API Keys → Create API Key**

### Step 2 - Set environment variables on Netlify

```bash
netlify env:set RESEND_API_KEY re_your_actual_resend_key
netlify env:set CONTACT_EMAIL mathengevan@gmail.com
```

Or via the Netlify UI: **Site → Site Configuration → Environment Variables**

### Step 3 - Update `ContactForm.tsx`

In `src/components/Contact/ContactForm.tsx`:

**Remove** the EmailJS import at the top:
```ts
// DELETE THIS LINE:
import emailjs from "@emailjs/browser";
```

**Replace** the active `onSubmit` function with the commented-out Netlify version:

```ts
const onSubmit = async (data: ContactFormData) => {
  setStatus("sending");
  try {
    const res = await fetch("/.netlify/functions/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Send failed");
    setStatus("success");
    reset();
  } catch {
    setStatus("error");
  }
};
```

### Step 4 - Update the `from` address in the Netlify Function

In `netlify/functions/sendEmail.ts`, update this line:

```ts
// Change from:
from: "Portfolio Contact <onboarding@resend.dev>",

// To your verified domain:
from: "Evanson Kariuki <contact@yourdomain.com>",
```

### Step 5 - Test locally with Netlify Dev

```bash
netlify dev
```

This runs both the Vite dev server and the Netlify Functions together. Submit the contact form and check your inbox.

### Step 6 - Deploy

```bash
netlify deploy --prod
```

### Step 7 - Optionally uninstall EmailJS

Once Resend is working:

```bash
pnpm remove @emailjs/browser
```

---

## 13. EmailJS Template Reference

The full branded HTML email template is maintained in the **EmailJS Dashboard** under Template `template_iu8zmhc`.

### Template structure

```
┌─────────────────────────────────────┐
│  HEADER  (dark green #102C26)        │
│  [EK avatar]  Evanson Kariuki        │
│               Software Engineer · IoT│
├─────────────────────────────────────┤
│  ACCENT BAR  (coral → ocean → sage) │
├─────────────────────────────────────┤
│  BODY                                │
│  📬 New message from portfolio form  │
│  ┌──────────┬──────────────────────┐ │
│  │  From    │  Email               │ │
│  └──────────┴──────────────────────┘ │
│  ┌─────────────────────────────────┐ │
│  │  Subject                        │ │
│  └─────────────────────────────────┘ │
│  ┌── MESSAGE (coral left border) ──┐ │
│  │  {{message}}                    │ │
│  └─────────────────────────────────┘ │
│  ┌─────────────────────────────────┐ │
│  │  [↩ Reply to {{name}}] (button) │ │
│  └─────────────────────────────────┘ │
├─────────────────────────────────────┤
│  LINKS  GitHub · LinkedIn · Email   │
├─────────────────────────────────────┤
│  FOOTER  (attribution + badge)      │
└─────────────────────────────────────┘
```

---

## 14. Running Locally

### Prerequisites

```bash
node --version    # 18 or higher required
pnpm --version    # any recent version
netlify --version # needed for running functions locally
```

### First time setup

```bash
git clone https://github.com/Vanzzy027/evanson-portfolio
cd evanson-portfolio
pnpm install
cp .env.example .env
# Fill in your values in .env
```

### Start development server

```bash
# Option A - Vite only (faster, but contact form Netlify function won't work)
pnpm dev

# Option B - Netlify Dev (Vite + Functions together, recommended)
netlify dev
```

Visit: http://localhost:5173 (Vite) or http://localhost:8888 (Netlify Dev)

### Build for production

```bash
pnpm build
pnpm preview    # Preview the production build locally
```

---

## 15. Deployment (Netlify)

### First deploy

```bash
# Login
netlify login

# Link or create a new Netlify site
netlify init

# Set environment variables
netlify env:set RESEND_API_KEY re_your_key
netlify env:set CONTACT_EMAIL mathengevan@gmail.com

# Deploy to production
netlify deploy --prod
```

### Subsequent deploys

```bash
netlify deploy --prod
```

Or push to your connected GitHub branch - Netlify auto-deploys on every push to `main`.

### `netlify.toml` (already configured)

```toml
[build]
  command   = "pnpm run build"
  publish   = "dist"
  functions = "netlify/functions"

[[redirects]]
  from   = "/*"
  to     = "/index.html"
  status = 200
```

The `[[redirects]]` rule is critical - it makes React Router work on Netlify (all routes return `index.html` and React Router handles the rest client-side).

---

## 16. Adding Images

All images live inside the `public/` folder and are referenced by their path from `public/` root.

| Image type | Folder | JSON reference example |
|---|---|---|
| Profile photo | `public/assets/me/` | `"/assets/me/profile.jpg"` |
| Project screenshots | `public/assets/projects/` | `"/assets/projects/car-rental-1.png"` |
| Blog cover images | `public/assets/blogs/` | `"/assets/blogs/esp32-mqtt.jpg"` |
| Event / pictorial photos | `public/assets/events/` | `"/assets/events/gdsc-iot-1.jpg"` |
| CV PDF | `public/assets/` | `"/assets/evanson-cv.pdf"` |

### Naming convention

Use kebab-case matching the project/event ID:

```
car-rental-1.png
car-rental-2.png
smart-lighting-1.png
gdsc-iot-workshop-1.jpg
```

### Recommended image sizes

| Type | Recommended size | Format |
|---|---|---|
| Profile photo | 400×400px | JPG or WebP |
| Project screenshots | 1200×800px | PNG or WebP |
| Blog cover | 1200×630px | JPG or WebP |
| Event photos | 1200×800px | JPG |

---

## 17. Remaining Work & Roadmap

### High priority

- [ ] **Add real profile photo** → `public/assets/me/profile.jpg`
- [ ] **Add real CV PDF** → `public/assets/evanson-cv.pdf`
- [ ] **Add project screenshots** → `public/assets/projects/*.png`
- [ ] **Switch to Resend** when domain is ready (see [Section 12](#12-contact-form--migration-to-resend--netlify-functions))

### Medium priority

- [ ] **SEO meta tags** - install `react-helmet-async`, add `<title>` and `<meta description>` per page
- [ ] **Open Graph tags** - for project pages so they render nicely when shared on LinkedIn/Twitter
- [ ] **Blog cover images** - add to `public/assets/blogs/`
- [ ] **Event photos** - add to `public/assets/events/` and update `pictorials.json`

### Nice to have

- [ ] **Page transition animations** - `framer-motion` for smooth route transitions
- [ ] **Project image lightbox** - click to enlarge gallery images
- [ ] **Blog reading time estimate** - calculate from word count
- [ ] **Blog post search** - similar to projects filter
- [ ] **Sitemap.xml** - generate from JSON for better SEO
- [ ] **robots.txt** - in `public/`
- [ ] **PWA / offline support** - `vite-plugin-pwa`
- [ ] **Component tests** - Vitest + React Testing Library
- [ ] **Analytics** - Netlify Analytics or Plausible (privacy-friendly)

---

## 18. Troubleshooting

### Styles not applying / DaisyUI classes not working

```bash
# Make sure Tailwind is watching the right files
# Check tailwind.config.js content array includes:
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]

# Restart dev server after config changes
pnpm dev
```

### Contact form sends but email not received

1. Check spam/junk folder
2. Verify EmailJS service is connected to the correct Gmail account
3. Check the EmailJS dashboard for send logs and errors
4. Make sure `Reply-To` is set to `{{email}}` in the template settings

### React Router 404 on Netlify (pages return 404 on refresh)

Make sure `netlify.toml` has the redirect rule:

```toml
[[redirects]]
  from   = "/*"
  to     = "/index.html"
  status = 200
```

### Images not showing

- Confirm the file exists in the correct `public/assets/...` subfolder
- Confirm the path in JSON starts with `/assets/...` (no `public` prefix)
- File names are case-sensitive on Linux servers - `Profile.jpg` ≠ `profile.jpg`

### TypeScript errors after adding JSON entries

Make sure new JSON fields match the interface in `src/types/index.ts`. If you add an optional field, mark it with `?`:

```ts
blogId?: string;   // optional field
```

### `netlify dev` command not found

```bash
npm install -g netlify-cli
```

### `pnpm` command not found

```bash
npm install -g pnpm
```

---

## Maintainer

**Evanson Mathenge Kariuki**
Software Engineer · IoT Developer · Embu, Kenya

- Email: mathengevan@gmail.com
- GitHub: https://github.com/Vanzzy027
- LinkedIn: https://surl.li/qjbtmd

---

*Last updated: June 2025*