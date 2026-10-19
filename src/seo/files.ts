// Build-time generators for sitemap.xml, robots.txt and llms.txt.

import {
  SITE_URL,
  bankingDisclaimer,
  bankingProducts,
  blogs,
  brivemarc,
  education,
  experience,
  person,
  projects,
  services,
  skills,
} from "../data/site";
import { absoluteUrl, getAllRoutes } from "./meta";

export function buildSitemap(buildDate: string): string {
  const lastmod = (route: string) => blogs.find((b) => `/blogs/${b.id}` === route)?.date ?? buildDate;
  const urls = getAllRoutes()
    .map((r) => `  <url>\n    <loc>${absoluteUrl(r)}</loc>\n    <lastmod>${lastmod(r)}</lastmod>\n  </url>`)
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function buildRobots(): string {
  return `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;
}

export function buildLlmsTxt(): string {
  const roles = experience
    .map((e) => `- ${e.title}, ${e.organization} (${e.start.slice(0, 7)} to ${e.end ? e.end.slice(0, 7) : "present"}): ${e.summary}`)
    .join("\n");
  const work = projects
    .map((p) => `- [${p.title}](${absoluteUrl(`/projects/${p.id}`)}): ${p.shortDescription}${p.liveUrl ? ` Live: ${p.liveUrl}` : ""}`)
    .join("\n");
  const edu = education
    .filter((e) => e.grade !== "C+ Plain")
    .map((e) => `- ${e.credential}${e.field && e.field !== e.credential ? `, ${e.field}` : ""}: ${e.institution}${e.year ? ` (${e.year})` : ""}`)
    .join("\n");

  return `# ${person.name}

> ${person.name} (also known as ${person.alternateNames[0]}) is a fullstack software engineer based in ${person.location.city}, ${person.location.country}, available remotely. He is a Personal Banking Direct Sales Representative at HFCB (the bank formerly known as HFC) and co-founder of ${brivemarc.name}.

${person.summary}

## Roles

${roles}

## Personal banking at HFCB

${person.name} helps Kenyans access HFCB personal banking products and guides clients from enquiry to disbursement:
${bankingProducts.map((b) => `- ${b.name}`).join("\n")}

${bankingDisclaimer} Details: ${absoluteUrl("/personal-banking")}

## Services (via ${brivemarc.name}, ${brivemarc.url})

${services.map((s) => `- ${s.name}: ${s.description}`).join("\n")}

## Projects

${work}

## Skills

${skills.map((s) => `- ${s.category}: ${s.items.join(", ")}`).join("\n")}

## Education and certifications

${edu}

## Community

- Former IoT & Robotics Organizer, Google Developer Groups on Campus (GDGoC), University of Embu

## Contact

- Website: ${SITE_URL}
- Email: ${person.email}
- Phone: ${person.phone}
- LinkedIn: ${person.social.linkedin}
- GitHub: ${person.social.github}
- Company: ${brivemarc.url}
`;
}
