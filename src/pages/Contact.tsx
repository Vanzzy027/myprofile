import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import ContactForm from "../components/Contact/ContactForm";
import SectionHeader from "../components/Shared/SectionHeader";
import { person } from "../data/site";

export default function Contact() {
  return (
    <div className="section-padding">
      <div className="container-max">
        <SectionHeader as="h1" title="Contact Evanson Kariuki" subtitle="Software projects, collaborations or HFCB personal banking enquiries." />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-base-content/80 leading-relaxed">
              Have a project idea, a role to discuss, or a question about an HFCB loan, property financing, insurance or an account? Send a message and I'll get back to you.
            </p>

            <div className="space-y-4">
              <a href={`mailto:${person.email}`} className="flex items-center gap-3 group">
                <div className="p-3 rounded-xl bg-brand-coral/10 group-hover:bg-brand-coral/20 transition-colors">
                  <Mail size={18} className="text-brand-coral" />
                </div>
                <div>
                  <p className="text-xs text-base-content/70 uppercase tracking-wider">Email</p>
                  <p className="text-sm font-medium group-hover:text-brand-coral transition-colors">{person.email}</p>
                </div>
              </a>

              <a href={`tel:${person.phoneE164}`} className="flex items-center gap-3 group">
                <div className="p-3 rounded-xl bg-brand-ocean/10">
                  <Phone size={18} className="text-brand-ocean dark:text-sky-300" />
                </div>
                <div>
                  <p className="text-xs text-base-content/70 uppercase tracking-wider">Phone</p>
                  <p className="text-sm font-medium group-hover:text-brand-coral transition-colors">{person.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-brand-sage/10">
                  <MapPin size={18} className="text-brand-sage dark:text-emerald-300" />
                </div>
                <div>
                  <p className="text-xs text-base-content/70 uppercase tracking-wider">Location</p>
                  <p className="text-sm font-medium">{person.location.city}, {person.location.country} · available remotely</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <a href={person.social.github} target="_blank" rel="noopener" className="btn btn-outline btn-sm gap-2 hover:border-brand-coral hover:text-brand-coral">
                <Github size={15} /> GitHub
              </a>
              <a href={person.social.linkedin} target="_blank" rel="noopener" className="btn btn-outline btn-sm gap-2 hover:border-brand-coral hover:text-brand-coral">
                <Linkedin size={15} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 card bg-base-200 border border-base-300 p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}