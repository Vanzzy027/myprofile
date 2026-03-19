import { Calendar, Award, Users } from "lucide-react";
import eventsData from "../data/events.json";
import pictorialsData from "../data/pictorials.json";
import SectionHeader from "../components/Shared/SectionHeader";
import type { Event, Pictorial } from "../types";

const events = eventsData as Event[];
const pictorials = pictorialsData as Pictorial[];

export default function Events() {
  return (
    <div className="section-padding">
      <div className="container-max">
        <SectionHeader title="Events & Leadership" subtitle="Workshops facilitated, communities led, impact made." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {events.map((event) => (
            <div key={event.id} className="card bg-base-200 border border-base-300 p-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 rounded-lg bg-brand-coral/10">
                  {event.type === "workshop" ? <Users size={20} className="text-brand-coral" /> : <Award size={20} className="text-brand-ocean" />}
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight">{event.title}</h3>
                  <p className="text-sm text-brand-coral font-medium">{event.role}</p>
                  <p className="text-xs text-base-content/40 flex items-center gap-1 mt-0.5"><Calendar size={11} /> {event.date}</p>
                </div>
              </div>
              <p className="text-sm text-base-content/70 mb-3">{event.description}</p>
              <ul className="space-y-1">
                {event.outcomes.map((o) => (
                  <li key={o} className="text-xs text-base-content/50 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-brand-coral shrink-0" /> {o}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pictorials */}
        <SectionHeader title="Event Pictorials" subtitle="Moments captured from workshops and tech events." />
        {pictorials.map((group) => (
          <div key={group.id} className="mb-10">
            <h3 className="font-semibold text-lg mb-1">{group.event}</h3>
            <p className="text-sm text-base-content/40 mb-4">{group.date} — {group.description}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {group.images.map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden h-40 border border-base-300 bg-base-200">
                  <img src={img} alt={`${group.event} ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}