import { Link } from "react-router-dom";
import { ArrowRight, Download, MapPin, Wifi, Landmark, Code2 } from "lucide-react";
import { useProjects } from "../hooks/useProjects";
import ProjectCard from "../components/Projects/ProjectsCard";
import Tag from "../components/Shared/Tag";
import AboutFacts from "../components/About/AboutFacts";
import { brivemarc, person, services, skills } from "../data/site";

export default function Home() {
  const { featured } = useProjects();

  return (
    <>
      {/* HERO */}
      <section className="section-padding bg-gradient-to-br from-base-100 via-base-200 to-base-100 min-h-[85vh] flex items-center">
        <div className="container-max w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-base-content/70 mb-4">
                <span className="flex items-center gap-1"><MapPin size={14} /> {person.location.city}, {person.location.country}</span>
                <span className="flex items-center gap-1"><Wifi size={14} /> Available remotely</span>
              </p>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
                <span className="gradient-text">{person.name}</span>
              </h1>
              <p className="text-xl text-base-content/80 mb-4 font-medium">
                Fullstack Software Engineer &amp; Personal Banking DSR at HFCB
              </p>
              <p className="text-base-content/80 leading-relaxed mb-8 max-w-lg">{person.summary}</p>

              <div className="flex flex-wrap gap-3">
                <Link to="/projects" className="btn btn-primary gap-2">
                  View Projects <ArrowRight size={16} />
                </Link>
                <Link to="/personal-banking" className="btn btn-outline gap-2">
                  Personal Banking
                </Link>
                <a href={person.cvUrl} download className="btn btn-ghost gap-2">
                  <Download size={16} /> Download CV
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-64 h-72 md:w-72 md:h-80 rounded-3xl overflow-hidden border-4 border-brand-coral/30 shadow-2xl">
                  <img
                    src={person.photo}
                    alt={person.photoAlt}
                    width={570}
                    height={640}
                    fetchPriority="high"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div aria-hidden="true" className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-brand-coral/10 blur-xl" />
                <div aria-hidden="true" className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-brand-ocean/10 blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TWO ROLES */}
      <section className="section-padding" aria-labelledby="what-i-do">
        <div className="container-max">
          <h2 id="what-i-do" className="text-3xl font-bold gradient-text mb-2">What I do</h2>
          <p className="text-base-content/70 mb-8 max-w-2xl">
            Software and finance, side by side. Knowing how credit works from the inside makes me a sharper fintech engineer.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card bg-base-200 border border-base-300 p-6">
              <Landmark className="text-brand-coral mb-3" size={28} />
              <h3 className="text-xl font-bold mb-2">Personal banking at HFCB</h3>
              <p className="text-base-content/80 mb-4">
                I help Kenyans access personal loans, property financing, insurance and personal accounts, and I guide
                each application from enquiry to disbursement.
              </p>
              <Link to="/personal-banking" className="btn btn-primary btn-sm self-start gap-1">
                Talk about a loan or account <ArrowRight size={14} />
              </Link>
            </div>
            <div className="card bg-base-200 border border-base-300 p-6">
              <Code2 className="text-brand-coral mb-3" size={28} />
              <h3 className="text-xl font-bold mb-2">Software at {brivemarc.name}</h3>
              <p className="text-base-content/80 mb-4">
                As co-founder, I build websites, web and mobile apps, POS systems and IoT solutions for businesses
                in Embu, Nairobi and across Kenya.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link to="/services" className="btn btn-primary btn-sm gap-1">
                  See services <ArrowRight size={14} />
                </Link>
                <a href={brivemarc.url} target="_blank" rel="noopener" className="btn btn-ghost btn-sm">
                  britech.co.ke
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS STRIP */}
      <section className="section-padding py-12 bg-base-200" aria-labelledby="skills-heading">
        <div className="container-max">
          <h2 id="skills-heading" className="sr-only">Core skills</h2>
          <ul className="flex flex-wrap gap-2 justify-center">
            {skills.flatMap((s) => s.items).slice(0, 20).map((skill) => (
              <li key={skill}><Tag label={skill} size="md" /></li>
            ))}
          </ul>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section-padding" aria-labelledby="featured-heading">
        <div className="container-max">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 id="featured-heading" className="text-3xl font-bold gradient-text">Featured Projects</h2>
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

      {/* SERVICES */}
      <section className="section-padding bg-base-200" aria-labelledby="services-heading">
        <div className="container-max">
          <div className="flex justify-between items-end mb-8 gap-4">
            <div>
              <h2 id="services-heading" className="text-3xl font-bold gradient-text">Services</h2>
              <p className="text-base-content/70 mt-2">Delivered through {brivemarc.name}, a website development company in Kenya.</p>
            </div>
            <Link to="/services" className="btn btn-ghost btn-sm gap-1 shrink-0">
              All Services <ArrowRight size={14} />
            </Link>
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {services.map((s) => (
              <li key={s.name} className="rounded-xl bg-base-100 border border-base-300 p-4 text-sm font-medium">{s.name}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ABOUT FACTS */}
      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <AboutFacts />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-16 bg-gradient-to-r from-brand-forest to-brand-deep text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">Let's build something great together</h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            A web app, an IoT system, a mobile product or a question about HFCB personal banking. Get in touch.
          </p>
          <Link to="/contact" className="btn bg-brand-coral border-brand-coral text-on-coral hover:bg-brand-coral/90 gap-2">
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
