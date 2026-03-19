import { Search } from "lucide-react";
import { useProjects } from "../../hooks/useProjects";
import { useDebounce } from "../../hooks/useDebounce";
import ProjectCard from "./ProjectsCard";
import CategoryFilter from "./CategoryFilter";

export default function ProjectsList() {
  const { projects, categories, search, setSearch, category, setCategory } = useProjects();
  const debounced = useDebounce(search, 250);

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40" />
          <input
            type="text"
            placeholder="Search projects, tags…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered w-full pl-9 text-sm"
          />
        </div>
        <CategoryFilter categories={categories} active={category} onChange={setCategory} />
      </div>

      {/* Grid */}
      {projects.length === 0 ? (
        <div className="text-center py-20 text-base-content/40">
          <p className="text-xl">No projects found for "<span className="text-brand-coral">{debounced || category}</span>"</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>
      )}
    </div>
  );
}