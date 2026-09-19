import { useMemo, useState } from "react";
import { projects } from "../data/site";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export function useProjects() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return projects.filter((p) => {
      const matchCat = category === "All" || p.category === category;
      const matchSearch =
        q === "" ||
        p.title.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.shortDescription.toLowerCase().includes(q);
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
