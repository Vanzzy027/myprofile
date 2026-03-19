interface Props { title: string; subtitle?: string; }

export default function SectionHeader({ title, subtitle }: Props) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">{title}</h2>
      {subtitle && <p className="text-base-content/60 text-lg">{subtitle}</p>}
      <div className="h-1 w-16 bg-brand-coral rounded-full mt-3" />
    </div>
  );
}