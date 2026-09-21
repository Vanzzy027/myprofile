import { Link } from "react-router-dom";

interface Crumb { name: string; path: string; }

// Visible counterpart to the BreadcrumbList JSON-LD emitted for the page.
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs text-sm text-base-content/70 mb-6">
      <ul>
        {items.map((c, i) =>
          i === items.length - 1 ? (
            <li key={c.path} aria-current="page">{c.name}</li>
          ) : (
            <li key={c.path}><Link to={c.path} className="hover:text-brand-coral">{c.name}</Link></li>
          ),
        )}
      </ul>
    </nav>
  );
}
