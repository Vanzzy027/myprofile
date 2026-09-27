import { Briefcase } from "lucide-react";
import { experience } from "../../data/site";

const formatMonth = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { month: "short", year: "numeric", timeZone: "UTC" });

export default function ExperienceList({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <ol className="relative border-l-2 border-base-300 ml-2 space-y-8">
      {experience.map((e) => (
        <li key={e.id} className="pl-6 relative">
          <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-base-100 border-2 border-brand-coral flex items-center justify-center">
            <Briefcase size={10} className="text-brand-coral" />
          </span>
          <Heading className="font-bold text-lg leading-tight">{e.title}</Heading>
          <p className="text-sm font-medium text-brand-coral">
            {e.organizationUrl ? (
              <a href={e.organizationUrl} target="_blank" rel="noopener" className="hover:underline">{e.organization}</a>
            ) : (
              e.organization
            )}
          </p>
          <p className="text-xs text-base-content/70 mt-0.5">
            <time dateTime={e.start}>{formatMonth(e.start)}</time> –{" "}
            {e.end ? <time dateTime={e.end}>{formatMonth(e.end)}</time> : "Present"}
          </p>
          <p className="text-sm text-base-content/80 mt-2">{e.summary}</p>
          <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-base-content/70">
            {e.highlights.map((h) => <li key={h}>{h}</li>)}
          </ul>
        </li>
      ))}
    </ol>
  );
}
