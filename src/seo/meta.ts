// Per-route <head> metadata and JSON-LD, shared by the prerenderer (build time)
// and HeadManager (client-side navigation).

import {
  OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  blogs,
  brivemarc,
  education,
  hfcb,
  person,
  projects,
  services,
  skills,
} from "../data/site";

type JsonLd = Record<string, unknown>;

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  image: string;
  type: "website" | "article" | "profile";
  noindex?: boolean;
  preloadImage?: string;
  breadcrumbs: { name: string; path: string }[];
  jsonLd: JsonLd[];
}

export interface HeadTag {
  tag: "title" | "meta" | "link" | "script";
  attrs: Record<string, string>;
  content?: string;
}

const PERSON_ID = `${SITE_URL}/#person`;
const ORG_ID = `${SITE_URL}/#brivemarc`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export const absoluteUrl = (path: string) => (path.startsWith("http") ? path : `${SITE_URL}${path}`);

const withName = (title: string) => {
  const full = `${title} | ${SITE_NAME}`;
  return full.length <= 60 ? full : title;
};

const personLd: JsonLd = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: person.name,
  alternateName: person.alternateNames,
  url: SITE_URL,
  image: absoluteUrl(person.photo),
  email: `mailto:${person.email}`,
  telephone: person.phoneE164,
  jobTitle: ["Fullstack Software Engineer", "Direct Sales Representative, Personal Banking"],
  description: person.summary,
  worksFor: [{ "@type": "BankOrCreditUnion", name: hfcb.name, description: hfcb.description }, { "@id": ORG_ID }],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "University of Embu" },
    { "@type": "EducationalOrganization", name: "Teach2Give" },
  ],
  hasCredential: education
    .filter((e) => e.grade === "Certified")
    .map((e) => ({
      "@type": "EducationalOccupationalCredential",
      name: e.credential === e.field || !e.field ? e.credential : `${e.credential}: ${e.field}`,
      recognizedBy: { "@type": "Organization", name: e.institution },
    })),
  knowsAbout: [
    ...new Set([...skills.flatMap((s) => s.items), "Fintech", "Personal banking", "Credit", "Web development", "IoT"]),
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: person.location.city,
    addressRegion: person.location.region,
    addressCountry: person.location.countryCode,
  },
  sameAs: [person.social.linkedin, person.social.github, person.social.company],
};

const orgLd: JsonLd = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: brivemarc.name,
  url: brivemarc.url,
  description: brivemarc.description,
  founder: { "@id": PERSON_ID },
  areaServed: { "@type": "Country", name: "Kenya" },
  makesOffer: services.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.name, description: s.description },
  })),
};

const websiteLd: JsonLd = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: "en",
  publisher: { "@id": PERSON_ID },
};

const breadcrumbLd = (crumbs: RouteMeta["breadcrumbs"], url: string): JsonLd => ({
  "@type": "BreadcrumbList",
  "@id": `${url}#breadcrumb`,
  itemListElement: crumbs.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: absoluteUrl(c.path),
  })),
});

const pageLd = (meta: Omit<RouteMeta, "jsonLd">, pageType = "WebPage", extra: JsonLd = {}): JsonLd => {
  const url = absoluteUrl(meta.path);
  return {
    "@type": pageType,
    "@id": `${url}#webpage`,
    url,
    name: meta.title,
    description: meta.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": PERSON_ID },
    ...(meta.breadcrumbs.length > 1 ? { breadcrumb: { "@id": `${url}#breadcrumb` } } : {}),
    ...extra,
  };
};

const HOME = { name: "Home", path: "/" };
const OG_IMAGE_ALT = `${person.name}, fullstack software engineer, HFCB personal banking DSR and Brivemarc Technologies co-founder`;

function baseMeta(path: string): Omit<RouteMeta, "jsonLd"> | null {
  const page = (title: string, description: string, crumb?: string): Omit<RouteMeta, "jsonLd"> => ({
    path,
    title,
    description,
    image: OG_IMAGE,
    type: "website",
    breadcrumbs: crumb ? [HOME, { name: crumb, path }] : [HOME],
  });

  switch (path) {
    case "/":
      return {
        ...page(
          "Evanson Kariuki | Fullstack Software Engineer, Kenya",
          "Evanson Kariuki: fullstack software engineer in Embu, Kenya (React, TypeScript, Node.js, IoT), HFCB personal banking DSR and Brivemarc Technologies co-founder.",
        ),
        preloadImage: person.photo,
      };
    case "/about":
      return {
        ...page(
          "About Evanson Kariuki | Software Engineer in Embu, Kenya",
          "Who Evanson (Evans) Kariuki is: fullstack and IoT engineer, HFCB personal banking DSR, Brivemarc co-founder and BSc IT graduate based in Embu, Kenya.",
          "About",
        ),
        type: "profile",
      };
    case "/projects":
      return page(
        "Projects | React, IoT & Fintech Work | Evanson Kariuki",
        "Web, mobile, IoT and business software projects by Evanson Kariuki, including a vehicle booking platform, ESP32 systems and client websites in Kenya.",
        "Projects",
      );
    case "/services":
      return page(
        "Web & Software Development Services, Kenya | Evanson Kariuki",
        "Web, mobile, SaaS, database and IoT development from Brivemarc Technologies, a website development company in Kenya serving Embu, Nairobi and beyond.",
        "Services",
      );
    case "/personal-banking":
      return page(
        "HFCB Personal Loans, Property & Insurance | Evanson Kariuki",
        "Get guided help with HFCB personal loans, property financing, insurance and personal accounts in Kenya, from enquiry to disbursement. Talk to Evanson Kariuki.",
        "Personal Banking",
      );
    case "/blogs":
      return page(
        "Blog: IoT, React & Engineering Notes | Evanson Kariuki",
        "Practical write-ups on ESP32, MQTT, Firebase dashboards and React from Evanson Kariuki, a fullstack and IoT engineer in Kenya.",
        "Blog",
      );
    case "/events":
      return page(
        "Events & Tech Leadership | Evanson Kariuki",
        "IoT and robotics workshops, GDGoC University of Embu organising and tech community leadership by Evanson Kariuki.",
        "Events",
      );
    case "/contact":
      return page(
        "Contact Evanson Kariuki | Hire a Developer in Kenya",
        "Contact Evanson Kariuki about web, mobile or IoT projects, collaborations, or HFCB personal banking enquiries. Based in Embu, Kenya and available remotely.",
        "Contact",
      );
  }

  const projectMatch = path.match(/^\/projects\/([^/]+)$/);
  if (projectMatch) {
    const p = projects.find((x) => x.id === projectMatch[1]);
    if (!p) return null;
    return {
      path,
      title: withName(p.title),
      description: p.shortDescription,
      image: p.images[0] ?? OG_IMAGE,
      type: "website",
      breadcrumbs: [HOME, { name: "Projects", path: "/projects" }, { name: p.title, path }],
    };
  }

  const blogMatch = path.match(/^\/blogs\/([^/]+)$/);
  if (blogMatch) {
    const b = blogs.find((x) => x.id === blogMatch[1]);
    if (!b) return null;
    return {
      path,
      title: withName(b.title),
      description: b.excerpt,
      image: b.coverImage ?? OG_IMAGE,
      type: "article",
      breadcrumbs: [HOME, { name: "Blog", path: "/blogs" }, { name: b.title, path }],
    };
  }

  return null;
}

export const normalizePath = (pathname: string) => (pathname.length > 1 ? pathname.replace(/\/+$/, "") : "/");

export function getRouteMeta(pathname: string): RouteMeta {
  const path = normalizePath(pathname);
  const meta = baseMeta(path);

  if (!meta) {
    return {
      path,
      title: `Page Not Found | ${SITE_NAME}`,
      description: "The page you're looking for doesn't exist or has been moved.",
      image: OG_IMAGE,
      type: "website",
      noindex: true,
      breadcrumbs: [HOME],
      jsonLd: [],
    };
  }

  const graph: JsonLd[] = [websiteLd, personLd, orgLd];
  const url = absoluteUrl(path);

  if (path === "/about") {
    graph.push(pageLd(meta, "ProfilePage", { mainEntity: { "@id": PERSON_ID } }));
  } else if (path.startsWith("/blogs/")) {
    const b = blogs.find((x) => `/blogs/${x.id}` === path)!;
    graph.push(pageLd(meta));
    graph.push({
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      headline: b.title,
      description: b.excerpt,
      datePublished: b.date,
      image: absoluteUrl(meta.image),
      author: { "@id": PERSON_ID },
      publisher: { "@id": PERSON_ID },
      mainEntityOfPage: { "@id": `${url}#webpage` },
      keywords: b.tags.join(", "),
    });
  } else {
    graph.push(pageLd(meta));
  }

  if (meta.breadcrumbs.length > 1) graph.push(breadcrumbLd(meta.breadcrumbs, url));

  return { ...meta, jsonLd: [{ "@context": "https://schema.org", "@graph": graph }] };
}

export function getAllRoutes(): string[] {
  return [
    "/",
    "/about",
    "/projects",
    ...projects.map((p) => `/projects/${p.id}`),
    "/services",
    "/personal-banking",
    "/blogs",
    ...blogs.map((b) => `/blogs/${b.id}`),
    "/events",
    "/contact",
  ];
}

export function buildHeadTags(meta: RouteMeta): HeadTag[] {
  const url = absoluteUrl(meta.path);
  const image = absoluteUrl(meta.image);
  const m = (attrs: Record<string, string>): HeadTag => ({ tag: "meta", attrs });

  const tags: HeadTag[] = [
    { tag: "title", attrs: {}, content: meta.title },
    m({ name: "description", content: meta.description }),
    m({ name: "robots", content: meta.noindex ? "noindex, follow" : "index, follow, max-image-preview:large" }),
    m({ property: "og:site_name", content: SITE_NAME }),
    m({ property: "og:locale", content: "en_KE" }),
    m({ property: "og:type", content: meta.type }),
    m({ property: "og:title", content: meta.title }),
    m({ property: "og:description", content: meta.description }),
    m({ property: "og:image", content: image }),
    m({ property: "og:image:alt", content: meta.image === OG_IMAGE ? OG_IMAGE_ALT : meta.title }),
    m({ name: "twitter:card", content: "summary_large_image" }),
    m({ name: "twitter:title", content: meta.title }),
    m({ name: "twitter:description", content: meta.description }),
    m({ name: "twitter:image", content: image }),
  ];

  if (meta.image === OG_IMAGE) {
    tags.push(m({ property: "og:image:width", content: "1200" }), m({ property: "og:image:height", content: "630" }));
  }

  if (!meta.noindex) {
    tags.push(
      { tag: "link", attrs: { rel: "canonical", href: url } },
      m({ property: "og:url", content: url }),
    );
  }

  if (meta.preloadImage) {
    tags.push({
      tag: "link",
      attrs: { rel: "preload", as: "image", href: meta.preloadImage, fetchpriority: "high" },
    });
  }

  // Search engine verification codes come from Netlify environment variables.
  const google = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION;
  const bing = import.meta.env.VITE_BING_SITE_VERIFICATION;
  if (google) tags.push(m({ name: "google-site-verification", content: google }));
  if (bing) tags.push(m({ name: "msvalidate.01", content: bing }));

  for (const ld of meta.jsonLd) {
    tags.push({ tag: "script", attrs: { type: "application/ld+json" }, content: JSON.stringify(ld) });
  }

  return tags;
}

const escapeAttr = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function renderHeadTags(tags: HeadTag[]): string {
  return tags
    .map(({ tag, attrs, content }) => {
      const a = Object.entries({ ...attrs, "data-seo": "" })
        .map(([k, v]) => (v === "" ? ` ${k}` : ` ${k}="${escapeAttr(v)}"`))
        .join("");
      if (tag === "meta" || tag === "link") return `<${tag}${a}>`;
      const body = tag === "script" ? (content ?? "").replace(/</g, "\\u003c") : escapeAttr(content ?? "");
      return `<${tag}${a}>${body}</${tag}>`;
    })
    .join("\n    ");
}
