import { Download, MapPin, Mail, Phone, Github, Linkedin, Wifi } from "lucide-react";
import SectionHeader from "../components/Shared/SectionHeader";
import Tag from "../components/Shared/Tag";
import AboutFacts from "../components/About/AboutFacts";
import ExperienceList from "../components/About/ExperienceList";
import { education, person, skills } from "../data/site";

export default function About() {
  return (
    <div className="section-padding">
      <div className="container-max">
        <SectionHeader as="h1" title="About Evanson Kariuki" subtitle="Engineer, builder and personal banking adviser in Nyeri, Kenya." />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left */}
          <aside className="flex flex-col items-center lg:items-start gap-4">
            <div className="w-48 h-52 rounded-2xl overflow-hidden border-4 border-brand-coral/30 shadow-xl">
              <img src={person.photo} alt={person.photoAlt} width={570} height={640} className="w-full h-full object-cover" />
            </div>

            <div className="text-center lg:text-left">
              <p className="text-2xl font-bold">{person.name}</p>
              <p className="text-base-content/70 text-sm">{person.shortTitle}</p>
            </div>

            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2 text-base-content/70"><MapPin size={14} /> {person.location.city}, {person.location.country}</p>
              <p className="flex items-center gap-2 text-base-content/70"><Wifi size={14} /> Available remotely</p>
              <a href={`mailto:${person.email}`} className="flex items-center gap-2 text-brand-coral hover:underline">
                <Mail size={14} /> {person.email}
              </a>
              <a href={`tel:${person.phoneE164}`} className="flex items-center gap-2 text-base-content/70 hover:text-brand-coral">
                <Phone size={14} /> {person.phone}
              </a>
            </div>

            <div className="flex gap-3">
              <a href={person.social.github} target="_blank" rel="noopener" className="btn btn-ghost btn-sm gap-1">
                <Github size={15} /> GitHub
              </a>
              <a href={person.social.linkedin} target="_blank" rel="noopener" className="btn btn-ghost btn-sm gap-1">
                <Linkedin size={15} /> LinkedIn
              </a>
            </div>

            <a href={person.cvUrl} download className="btn btn-primary btn-sm gap-2 w-full">
              <Download size={15} /> Download CV
            </a>
          </aside>

          {/* Right */}
          <div className="lg:col-span-2 space-y-12">
            <AboutFacts />

            <section aria-labelledby="experience-heading">
              <h2 id="experience-heading" className="text-2xl font-bold mb-6">Experience</h2>
              <ExperienceList />
            </section>

            <section aria-labelledby="skills-heading">
              <h2 id="skills-heading" className="text-2xl font-bold mb-4">Technical Skills</h2>
              <div className="space-y-4">
                {skills.map((group) => (
                  <div key={group.category}>
                    <h3 className="text-sm font-semibold text-brand-coral mb-2">{group.category}</h3>
                    <ul className="flex flex-wrap gap-2">
                      {group.items.map((item) => <li key={item}><Tag label={item} size="md" /></li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section aria-labelledby="education-heading">
              <h2 id="education-heading" className="text-2xl font-bold mb-4">Education &amp; Certifications</h2>
              <ul className="space-y-4">
                {education.map((edu) => (
                  <li key={`${edu.institution}-${edu.credential}`} className="card bg-base-200 border border-base-300 p-4">
                    <h3 className="font-semibold">{edu.credential}{edu.field && edu.field !== edu.credential ? `, ${edu.field}` : ""}</h3>
                    <p className="text-sm text-base-content/80">{edu.institution}</p>
                    <div className="flex justify-between text-xs text-base-content/70 mt-1">
                      <span>{edu.year}</span>
                      {edu.grade && <span>{edu.grade}</span>}
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="community-heading">
              <h2 id="community-heading" className="text-2xl font-bold mb-2">Community</h2>
              <p className="text-base-content/80">
                Former IoT &amp; Robotics Organizer at Google Developer Groups on Campus (GDGoC), University of Embu, running
                hands-on ESP32, sensor and robotics sessions for students.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
