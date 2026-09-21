interface Props { title: string; subtitle?: string; as?: "h1" | "h2"; id?: string; }

export default function SectionHeader({ title, subtitle, as: Heading = "h2", id }: Props) {
  return (
    <div className="mb-10">
      <Heading id={id} className="text-3xl md:text-4xl font-bold gradient-text mb-2">{title}</Heading>
      {subtitle && <p className="text-base-content/70 text-lg">{subtitle}</p>}
      <div className="h-1 w-16 bg-brand-coral rounded-full mt-3" />
    </div>
  );
}
