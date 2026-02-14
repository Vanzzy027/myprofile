import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import ContactForm from "../components/Contact/ContactForm";
import SectionHeader from "../components/Shared/SectionHeader";
import aboutData from "../data/about.json";

export default function Contact() {
  const about = aboutData;
  return (
    <div className="section-padding">
      <div className="container-max">
        <SectionHeader title="Get In Touch" subtitle="I'm currently open to new opportunities and collaborations." />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-base-content/70 leading-relaxed">
              Whether you have a project idea, a job opportunity, or just want to connect - don't hesitate to reach out. I'll respond within 24 hours.
            </p>

            <div className="space-y-4">
              <a href={`mailto:${about.email}`} className="flex items-center gap-3 group">
                <div className="p-3 rounded-xl bg-brand-coral/10 group-hover:bg-brand-coral/20 transition-colors">
                  <Mail size={18} className="text-brand-coral" />
                </div>
                <div>
                  <p className="text-xs text-base-content/40 uppercase tracking-wider">Email</p>
                  <p className="text-sm font-medium group-hover:text-brand-coral transition-colors">{about.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-brand-ocean/10">
                  <Phone size={18} className="text-brand-ocean" />
                </div>
                <div>
                  <p className="text-xs text-base-content/40 uppercase tracking-wider">Phone</p>
                  <p className="text-sm font-medium">{about.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-brand-sage/10">
                  <MapPin size={18} className="text-brand-sage" />
                </div>
                <div>
                  <p className="text-xs text-base-content/40 uppercase tracking-wider">Location</p>
                  <p className="text-sm font-medium">{about.location}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <a href={about.social.github} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm gap-2 hover:border-brand-coral hover:text-brand-coral">
                <Github size={15} /> GitHub
              </a>
              <a href={about.social.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm gap-2 hover:border-brand-ocean hover:text-brand-ocean">
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