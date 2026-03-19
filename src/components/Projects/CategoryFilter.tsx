interface Props {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
}

export default function CategoryFilter({ categories, active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`btn btn-sm rounded-full transition-all ${
            active === cat
              ? "bg-brand-coral text-white border-brand-coral hover:bg-brand-coral/90"
              : "btn-outline hover:border-brand-coral hover:text-brand-coral"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}