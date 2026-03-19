import { useParams, Link, useNavigate } from "react-router-dom";
import { useProjects } from "../hooks/useProjects";
import { ArrowLeft, ExternalLink, Github, Calendar, User } from "lucide-react";
import Tag from "../components/Shared/Tag";

export default function ProjectPage() {
  const { id } = useParams();
  const { getById } = useProjects();
  const navigate = useNavigate();
  const project = getById(id ?? "");

  if (!project) return (
    <div className="section-padding container-max text-center py-32">
      <p className="text-2xl font-bold text-base-content/40">Project not found</p>
      <Link to="/projects" className="btn btn-primary mt-6 gap-2"><ArrowLeft size={15} /> Back to Projects</Link>
    </div>
  );

  return (
    <div className="section-padding">
      <div className="container-max max-w-4xl">
        <button onClick={() => navigate(-1)} className="btn btn-ghost btn-sm gap-2 mb-6">
          <ArrowLeft size={15} /> Back
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="badge bg-brand-ocean text-white border-0">{project.category}</span>
            {project.featured && <span className="badge bg-brand-coral text-white border-0">Featured</span>}
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">{project.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-base-content/50">
            <span className="flex items-center gap-1"><User size={13} /> {project.role}</span>
            <span className="flex items-center gap-1"><Calendar size={13} /> {project.year}</span>
          </div>
        </div>

        {/* Main image */}
        {project.images[0] && (
          <div className="rounded-2xl overflow-hidden mb-8 border border-base-300 shadow-lg max-h-96">
            <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" />
          </div>
        )}

        {/* Links */}
        <div className="flex gap-3 mb-8">
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm gap-2">
              <Github size={15} /> View Code
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm gap-2">
              <ExternalLink size={15} /> Live Demo
            </a>
          )}
        </div>

        {/* Description */}
        <div className="prose prose-lg max-w-none text-base-content/80 mb-8">
          <p>{project.longDescription}</p>
        </div>

        {/* Tags */}
        <div>
          <p className="text-sm font-semibold text-base-content/50 uppercase tracking-wider mb-3">Technologies</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => <Tag key={t} label={t} size="md" />)}
          </div>
        </div>

        {/* Image gallery */}
        {project.images.length > 1 && (
          <div className="mt-10">
            <p className="text-sm font-semibold text-base-content/50 uppercase tracking-wider mb-3">Gallery</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.images.slice(1).map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-base-300 h-48">
                  <img src={img} alt={`${project.title} screenshot ${i + 2}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}