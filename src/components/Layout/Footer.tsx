import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, MapPin, Code2, Globe } from "lucide-react";
import { brivemarc, person } from "../../data/site";
import { NAV } from "./nav";

export default function Footer() {
  return (
    <footer className="bg-base-200 border-t border-base-300 mt-auto">
      <div className="container-max section-padding py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="flex items-center gap-2 font-bold text-lg mb-2">
              <Code2 className="text-brand-coral" size={20} />
              <span className="gradient-text">{person.name}</span>
            </p>
            <p className="text-sm text-base-content/70">{person.shortTitle}</p>
            <p className="text-sm text-base-content/70">
              Co-Founder,{" "}
              <a href={brivemarc.url} target="_blank" rel="noopener" className="hover:text-brand-coral underline-offset-2 hover:underline">
                {brivemarc.name}
              </a>
            </p>
            <p className="text-sm text-base-content/70 flex items-center gap-1 mt-1">
              <MapPin size={13} /> {person.location.city}, {person.location.country}
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="font-semibold mb-3 text-sm uppercase tracking-wider text-base-content/70">Links</p>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {NAV.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-base-content/70 hover:text-brand-coral transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-semibold mb-3 text-sm uppercase tracking-wider text-base-content/70">Connect</p>
            <div className="flex gap-3">
              <a href={person.social.github} target="_blank" rel="noopener" aria-label="GitHub profile" className="btn btn-ghost btn-sm btn-circle hover:text-brand-coral">
                <Github size={18} />
              </a>
              <a href={person.social.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn profile" className="btn btn-ghost btn-sm btn-circle hover:text-brand-coral">
                <Linkedin size={18} />
              </a>
              <a href={brivemarc.url} target="_blank" rel="noopener" aria-label={`${brivemarc.name} website`} className="btn btn-ghost btn-sm btn-circle hover:text-brand-coral">
                <Globe size={18} />
              </a>
              <a href={`mailto:${person.email}`} aria-label={`Email ${person.name}`} className="btn btn-ghost btn-sm btn-circle hover:text-brand-coral">
                <Mail size={18} />
              </a>
            </div>
            <p className="text-xs text-base-content/70 mt-4">
              © {new Date().getFullYear()} {person.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
