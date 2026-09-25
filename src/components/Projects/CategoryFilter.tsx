interface Props {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
}

export default function CategoryFilter({ categories, active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          aria-pressed={active === cat}
          className={`btn btn-sm rounded-full transition-all ${
            active === cat
              ? "bg-brand-coral text-on-coral border-brand-coral hover:bg-brand-coral/90"
              : "btn-outline hover:border-brand-coral hover:text-brand-coral"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
