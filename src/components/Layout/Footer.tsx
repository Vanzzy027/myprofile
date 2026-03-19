import { Github, Linkedin, Mail, MapPin, Code2 } from "lucide-react";
import aboutData from "../../data/about.json";

export default function Footer() {
  const about = aboutData;
  return (
    <footer className="bg-base-200 border-t border-base-300 mt-auto">
      <div className="container-max section-padding py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-2">
              <Code2 className="text-brand-coral" size={20} />
              <span className="gradient-text">Evanson Kariuki</span>
            </div>
            <p className="text-sm text-base-content/60">{about.title}</p>
            <p className="text-sm text-base-content/60 flex items-center gap-1 mt-1">
              <MapPin size={13} /> {about.location}
            </p>
          </div>

          <div>
            <p className="font-semibold mb-3 text-sm uppercase tracking-wider text-base-content/50">Links</p>
            <ul className="space-y-2 text-sm">
              {["/about", "/projects", "/blogs", "/events", "/contact"].map((p) => (
                <li key={p}>
                  <a href={p} className="text-base-content/60 hover:text-brand-coral transition-colors capitalize">
                    {p.replace("/", "")}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-3 text-sm uppercase tracking-wider text-base-content/50">Connect</p>
            <div className="flex gap-3">
              <a href={about.social.github}  target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm btn-circle hover:text-brand-coral">
                <Github size={18} />
              </a>
              <a href={about.social.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm btn-circle hover:text-brand-ocean">
                <Linkedin size={18} />
              </a>
              <a href={`mailto:${about.email}`} className="btn btn-ghost btn-sm btn-circle hover:text-brand-coral">
                <Mail size={18} />
              </a>
            </div>
            <p className="text-xs text-base-content/40 mt-4">
              © {new Date().getFullYear()} Evanson Kariuki. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}