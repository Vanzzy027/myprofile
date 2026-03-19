import { useMemo, useState } from "react";
import projectsDataJson from "../data/projects.json";
import type { Project } from "../types";

// Validate imported JSON
const projects: Project[] = Array.isArray(projectsDataJson) ? projectsDataJson : [];

export function useProjects() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchCat = category === "All" || p.category === category;
      const matchSearch =
        search === "" ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase())) ||
        p.shortDescription.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [search, category]);

  const getById = (id: string) => projects.find((p) => p.id === id);
  const featured = projects.filter((p) => p.featured);

  return {
    projects: filtered,
    all: projects,
    categories,
    search,
    setSearch,
    category,
    setCategory,
    getById,
    featured,
  };
}