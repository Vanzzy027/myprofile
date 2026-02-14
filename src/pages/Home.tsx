import { Link } from "react-router-dom";
import { ArrowRight, Download, MapPin, Wifi } from "lucide-react";
import { useProjects } from "../hooks/useProjects";
import ProjectCard from "../components/Projects/ProjectsCard";
import Tag from "../components/Shared/Tag";

// Types
import type { AboutData, SkillCategory, Project } from "../types";

// JSON imports
import aboutDataJson from "../data/about.json";
import skillsDataJson from "../data/skills.json";

// Type-safe assignments
const about: AboutData = aboutDataJson;
const skillsData: SkillCategory[] = Array.isArray(skillsDataJson) ? skillsDataJson : [];

export default function Home() {
  const { featured }: { featured: Project[] } = useProjects();

  return (
    <>
      {/* HERO */}
      <section className="section-padding bg-gradient-to-br from-base-100 via-base-200 to-base-100 min-h-[90vh] flex items-center">
        <div className="container-max w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-base-content/50">Open to opportunities</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
                Hi, I'm <span className="gradient-text">{about.name}</span>
              </h1>
              <p className="text-xl text-base-content/60 mb-2 font-medium">{about.title}</p>
              <p className="flex items-center gap-1 text-sm text-base-content/40 mb-6">
                <MapPin size={14} /> {about.location}
                <span className="ml-3 flex items-center gap-1">
                  <Wifi size={14} /> Remote-friendly
                </span>
              </p>
              <p className="text-base-content/70 leading-relaxed mb-8 max-w-lg">{about.summary}</p>

              <div className="flex flex-wrap gap-3">
                <Link to="/projects" className="btn btn-primary gap-2">
                  View Projects <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn btn-outline gap-2">
                  Get In Touch
                </Link>
                <a href={about.cvUrl} download className="btn btn-ghost gap-2">
                  <Download size={16} /> Download CV
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-65 h-65 md:w-70 md:h-70 rounded-3xl overflow-hidden border-4 border-brand-coral/30 shadow-2xl">
                  <img src={about.photo} alt={about.name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-brand-coral/10 blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-brand-ocean/10 blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS STRIP */}
      <section className="section-padding py-12 bg-base-200">
        <div className="container-max">
          <div className="flex flex-wrap gap-2 justify-center">
            {skillsData.flatMap((s) => s.items).slice(0, 18).map((skill) => (
              <Tag key={skill} label={skill} size="md" />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section-padding">
        <div className="container-max">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold gradient-text">Featured Projects</h2>
              <div className="h-1 w-12 bg-brand-coral rounded-full mt-2" />
            </div>
            <Link to="/projects" className="btn btn-ghost btn-sm gap-1">
              All Projects <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-16 bg-gradient-to-r from-brand-forest to-brand-deep text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">Let's build something great together</h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            Whether it's a web app, an IoT system, or a mobile product - I'm always open to exciting collaborations.
          </p>
          <Link to="/contact" className="btn bg-brand-coral border-brand-coral text-white hover:bg-brand-coral/90 gap-2">
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}