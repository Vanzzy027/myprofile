export interface Project {
  id: string;
  title: string;
  category: "Web" | "Mobile" | "IoT" | "Software";
  tags: string[];
  shortDescription: string;
  longDescription: string;
  role: string;
  year: number;
  /** Client or company the work was delivered for, if any. */
  client?: string;
  liveUrl: string | null;
  /** Repositories are private; leave null to show a greyed "Code" button. */
  repoUrl: string | null;
  images: string[];
  imageAlts?: string[];
  featured: boolean;
}

export interface Person {
  name: string;
  alternateNames: string[];
  headline: string;
  shortTitle: string;
  location: { city: string; region: string; country: string; countryCode: string };
  summary: string;
  email: string;
  /** Display format. */
  phone: string;
  /** E.164 format for tel: links and structured data. */
  phoneE164: string;
  social: { github: string; linkedin: string; company: string };
  photo: string;
  photoAlt: string;
  cvUrl: string;
}

export interface Experience {
  id: string;
  organization: string;
  organizationUrl?: string;
  title: string;
  start: string;
  end: string | null;
  summary: string;
  highlights: string[];
}

export interface Service {
  name: string;
  description: string;
}

export interface BankingProduct {
  name: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Education {
  institution: string;
  credential: string;
  field: string;
  year: string;
  grade?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  coverImage?: string;
  coverAlt?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  role: string;
  description: string;
  outcomes: string[];
  type: "workshop" | "leadership" | "conference";
}

export interface Pictorial {
  id: string;
  event: string;
  date: string;
  description: string;
  images: { src: string; alt: string }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
