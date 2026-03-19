import { Link } from "react-router-dom";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Tag from "../Shared/Tag";
import type { Project } from "../../types";

export default function ProjectCard({ project }: { project: Project }) {
  const { id, title, category, tags, shortDescription, year, liveUrl, repoUrl, images, featured } = project;

  return (
    <div className="card bg-base-200 shadow-md card-hover border border-base-300 overflow-hidden group">
      {/* Image */}
      <figure className="relative overflow-hidden h-44 bg-base-300">
        {images[0] ? (
          <img
            src={images[0]}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-base-content/20 text-5xl font-bold">
            {title[0]}
          </div>
        )}
        {featured && (
          <span className="absolute top-2 right-2 badge badge-sm bg-brand-coral text-white border-0">Featured</span>
        )}
        <span className="absolute top-2 left-2 badge badge-sm bg-brand-ocean/90 text-white border-0">{category}</span>
      </figure>

      <div className="card-body p-4 gap-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="card-title text-base font-semibold leading-tight">{title}</h3>
          <span className="text-xs text-base-content/40 shrink-0">{year}</span>
        </div>

        <p className="text-sm text-base-content/60 line-clamp-2">{shortDescription}</p>

        <div className="flex flex-wrap gap-1 mt-1">
          {tags.slice(0, 4).map((t) => <Tag key={t} label={t} />)}
        </div>

        <div className="card-actions justify-between items-center mt-2 pt-2 border-t border-base-300">
          <div className="flex gap-2">
            {repoUrl && (
              <a href={repoUrl} target="_blank" rel="noreferrer" className="btn btn-ghost btn-xs gap-1">
                <Github size={13} /> Code
              </a>
            )}
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noreferrer" className="btn btn-ghost btn-xs gap-1">
                <ExternalLink size={13} /> Live
              </a>
            )}
          </div>
          <Link to={`/projects/${id}`} className="btn btn-xs btn-primary gap-1">
            Details <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}