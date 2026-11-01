import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import SectionHeader from "../components/Shared/SectionHeader";
import { brivemarc, projects, services } from "../data/site";

export default function Services() {
  const clientWork = projects.filter((p) => p.client === brivemarc.name);

  return (
    <div className="section-padding">
      <div className="container-max">
        <SectionHeader
          as="h1"
          title="Web & Software Development Services in Kenya"
          subtitle={`Built by ${brivemarc.name}, where I'm a co-founder and Fullstack Engineer & IoT Systems Specialist.`}
        />

        <p className="text-base-content/80 leading-relaxed max-w-3xl mb-12">
          {brivemarc.name} is a website development company in Kenya. We build websites, web apps, mobile apps, POS
          systems and custom business software for clients in Nyeri, Nairobi and across the country, from first sketch
          to launch and support.
        </p>

        <section aria-labelledby="what-we-build">
          <h2 id="what-we-build" className="text-2xl font-bold mb-6">What we build</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {services.map((s) => (
              <li key={s.name} className="card bg-base-200 border border-base-300 p-5">
                <h3 className="font-bold text-lg mb-1">{s.name}</h3>
                <p className="text-sm text-base-content/80">{s.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="client-work" className="mb-16">
          <h2 id="client-work" className="text-2xl font-bold mb-6">Recent client work</h2>
          <ul className="space-y-3">
            {clientWork.map((p) => (
              <li key={p.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-base-300 pb-3">
                <div>
                  <Link to={`/projects/${p.id}`} className="font-semibold hover:text-brand-coral">{p.title}</Link>
                  <p className="text-sm text-base-content/70">{p.shortDescription}</p>
                </div>
                {p.liveUrl && (
                  <a href={p.liveUrl} target="_blank" rel="noopener" className="btn btn-ghost btn-sm gap-1 shrink-0">
                    {new URL(p.liveUrl).hostname} <ExternalLink size={13} />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </section>

        <div className="card bg-gradient-to-r from-brand-forest to-brand-deep text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Have a project in mind?</h2>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Tell us what you need and we'll suggest the simplest way to build it.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contact?subject=Project%20enquiry" className="btn bg-brand-coral border-brand-coral text-on-coral hover:bg-brand-coral/90 gap-2">
              Contact me <ArrowRight size={16} />
            </Link>
            <a href={brivemarc.url} target="_blank" rel="noopener" className="btn btn-outline text-white border-white/60 hover:bg-white hover:text-brand-forest gap-2">
              Visit britech.co.ke <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
