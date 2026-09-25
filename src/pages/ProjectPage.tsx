import { useParams } from "react-router-dom";
import { useProjects } from "../hooks/useProjects";
import { Calendar, User, Building2 } from "lucide-react";
import Tag from "../components/Shared/Tag";
import Breadcrumbs from "../components/Shared/Breadcrumbs";
import ProjectLinks from "../components/Projects/ProjectLinks";
import NotFound from "./NotFound";

export default function ProjectPage() {
  const { id } = useParams();
  const { getById } = useProjects();
  const project = getById(id ?? "");

  if (!project) return <NotFound />;

  const alt = (i: number) => project.imageAlts?.[i] ?? `${project.title} screenshot ${i + 1}`;

  return (
    <div className="section-padding">
      <div className="container-max max-w-4xl">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: project.title, path: `/projects/${project.id}` },
          ]}
        />

        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="badge bg-brand-ocean text-white border-0">{project.category}</span>
            {project.featured && <span className="badge bg-brand-coral text-on-coral border-0">Featured</span>}
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">{project.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-base-content/70">
            <span className="flex items-center gap-1"><User size={13} /> {project.role}</span>
            {project.client && <span className="flex items-center gap-1"><Building2 size={13} /> {project.client}</span>}
            <span className="flex items-center gap-1"><Calendar size={13} /> {project.year}</span>
          </div>
        </div>

        {/* Main image */}
        {project.images[0] && (
          <div className="rounded-2xl overflow-hidden mb-8 border border-base-300 shadow-lg aspect-video">
            <img src={project.images[0]} alt={alt(0)} width={1280} height={720} className="w-full h-full object-cover" />
          </div>
        )}

        {/* Links */}
        <div className="mb-8">
          <ProjectLinks project={project} size="sm" />
        </div>

        {/* Description */}
        <div className="prose prose-lg max-w-none text-base-content/80 mb-8">
          <p>{project.longDescription}</p>
        </div>

        {/* Tags */}
        <div>
          <h2 className="text-sm font-semibold text-base-content/70 uppercase tracking-wider mb-3">Technologies</h2>
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((t) => <li key={t}><Tag label={t} size="md" /></li>)}
          </ul>
        </div>

        {/* Image gallery */}
        {project.images.length > 1 && (
          <div className="mt-10">
            <h2 className="text-sm font-semibold text-base-content/70 uppercase tracking-wider mb-3">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.images.slice(1).map((img, i) => (
                <div key={img} className="rounded-xl overflow-hidden border border-base-300 aspect-video">
                  <img src={img} alt={alt(i + 1)} width={1280} height={720} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
