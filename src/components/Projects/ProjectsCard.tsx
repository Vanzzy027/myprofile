import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Tag from "../Shared/Tag";
import ProjectLinks from "./ProjectLinks";
import type { Project } from "../../types";

export default function ProjectCard({ project }: { project: Project }) {
  const { id, title, category, tags, shortDescription, year, images, imageAlts, featured, client } = project;

  return (
    <article className="card bg-base-200 shadow-md card-hover border border-base-300 overflow-hidden group">
      {/* Image */}
      <figure className="relative overflow-hidden h-44 bg-base-300">
        {images[0] ? (
          <img
            src={images[0]}
            alt={imageAlts?.[0] ?? title}
            width={1280}
            height={720}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div aria-hidden="true" className="w-full h-full flex items-center justify-center text-base-content/30 text-5xl font-bold">
            {title[0]}
          </div>
        )}
        {featured && (
          <span className="absolute top-2 right-2 badge badge-sm bg-brand-coral text-on-coral border-0">Featured</span>
        )}
        <span className="absolute top-2 left-2 badge badge-sm bg-brand-ocean text-white border-0">{category}</span>
      </figure>

      <div className="card-body p-4 gap-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="card-title text-base font-semibold leading-tight">{title}</h3>
          <span className="text-xs text-base-content/70 shrink-0">{year}</span>
        </div>
        {client && <p className="text-xs text-base-content/70">via {client}</p>}

        <p className="text-sm text-base-content/70 line-clamp-2">{shortDescription}</p>

        <div className="flex flex-wrap gap-1 mt-1">
          {tags.slice(0, 4).map((t) => <Tag key={t} label={t} />)}
        </div>

        <div className="card-actions justify-between items-center mt-2 pt-2 border-t border-base-300">
          <ProjectLinks project={project} />
          <Link to={`/projects/${id}`} className="btn btn-xs btn-primary gap-1">
            Details <ArrowRight size={13} /><span className="sr-only"> about {title}</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
