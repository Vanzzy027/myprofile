import { Download, MapPin, Mail, Phone, Github, Linkedin, Wifi } from "lucide-react";
import SectionHeader from "../components/Shared/SectionHeader";
import Tag from "../components/Shared/Tag";

// Types
import type { AboutData, SkillCategory, Education } from "../types";

// JSON imports
import aboutDataJson from "../data/about.json";
import skillsDataJson from "../data/skills.json";
import educationDataJson from "../data/education.json";

const about: AboutData = aboutDataJson;
const skillsData: SkillCategory[] = Array.isArray(skillsDataJson) ? skillsDataJson : [];
const educationData: Education[] = Array.isArray(educationDataJson) ? educationDataJson : [];

export default function About() {
  return (
    <div className="section-padding">
      <div className="container-max">
        <SectionHeader title="About Me" subtitle="Engineer, builder, problem-solver." />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-brand-coral/30 shadow-xl">
              <img src={about.photo} alt={about.name} className="w-full h-full object-cover" />
            </div>

            <div className="text-center lg:text-left">
              <h1 className="text-2xl font-bold">{about.name}</h1>
              <p className="text-base-content/60 text-sm">{about.title}</p>
            </div>

            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2 text-base-content/60"><MapPin size={14} /> {about.location}</p>
              <p className="flex items-center gap-2 text-base-content/60"><Wifi size={14} /> Remote-friendly</p>
              <a href={`mailto:${about.email}`} className="flex items-center gap-2 text-brand-coral hover:underline">
                <Mail size={14} /> {about.email}
              </a>
              <p className="flex items-center gap-2 text-base-content/60"><Phone size={14} /> {about.phone}</p>
            </div>

            <div className="flex gap-3">
              <a href={about.social.github} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm gap-1">
                <Github size={15} /> GitHub
              </a>
              <a href={about.social.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm gap-1">
                <Linkedin size={15} /> LinkedIn
              </a>
            </div>

            <a href={about.cvUrl} download className="btn btn-primary btn-sm gap-2 w-full">
              <Download size={15} /> Download CV
            </a>
          </div>

          {/* Right - Skills & Education */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-xl font-bold mb-4">Technical Skills</h2>
              <div className="space-y-4">
                {skillsData.map((group) => (
                  <div key={group.category}>
                    <p className="text-sm font-semibold text-brand-coral mb-2">{group.category}</p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => <Tag key={item} label={item} size="md" />)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Education</h2>
              <div className="space-y-4">
                {educationData.map((edu) => (
                  <div key={edu.institution} className="card bg-base-200 border border-base-300 p-4">
                    <p className="font-semibold">{edu.institution}</p>
                    <p className="text-sm text-base-content/70">{edu.degree} - {edu.field}</p>
                    <div className="flex justify-between text-xs text-base-content/40 mt-1">
                      <span>{edu.year}</span>
                      {edu.grade && <span>{edu.grade}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}