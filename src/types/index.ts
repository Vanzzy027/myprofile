export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  shortDescription: string;
  longDescription: string;
  role: string;
  year: number;
  liveUrl: string | null;
  repoUrl: string | null;
  images: string[];
  featured: boolean;
  blogId?: string;
}

export interface AboutData {
  name: string;
  title: string;
  location: string;
  summary: string;
  email: string;
  phone: string;
  social: { github: string; linkedin: string };
  photo: string;
  cvUrl: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Education {
  institution: string;
  degree: string;
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
  file: string; // path to .md file in /public/blogs/
}

export interface Event {
  id: string;
  title: string;
  date: string;
  role: string;
  description: string;
  outcomes: string[];
  images?: string[];
  type: "workshop" | "leadership" | "conference";
}

export interface Pictorial {
  id: string;
  event: string;
  date: string;
  images: string[];
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}