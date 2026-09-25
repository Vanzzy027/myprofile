import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../../types";

interface Props { project: Project; size?: "xs" | "sm"; }

// Repositories are private, so a missing link renders as a greyed, non-interactive button.
export default function ProjectLinks({ project, size = "xs" }: Props) {
  const btn = size === "xs" ? "btn-xs" : "btn-sm";
  const icon = size === "xs" ? 13 : 15;
  const disabled = `btn btn-ghost ${btn} gap-1 btn-disabled`;

  return (
    <div className="flex gap-2">
      {project.repoUrl ? (
        <a href={project.repoUrl} target="_blank" rel="noopener" className={`btn btn-ghost ${btn} gap-1`}>
          <Github size={icon} /> Code
        </a>
      ) : (
        <span className={disabled} aria-disabled="true" title="Source code is private">
          <Github size={icon} /> Code
        </span>
      )}
      {project.liveUrl ? (
        <a href={project.liveUrl} target="_blank" rel="noopener" className={`btn ${size === "xs" ? "btn-ghost" : "btn-primary"} ${btn} gap-1`}>
          <ExternalLink size={icon} /> Live<span className="sr-only"> site for {project.title}</span>
        </a>
      ) : (
        <span className={disabled} aria-disabled="true" title="No public demo">
          <ExternalLink size={icon} /> Live
        </span>
      )}
    </div>
  );
}
