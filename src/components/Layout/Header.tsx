import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Sun, Moon, Code2 } from "lucide-react";

const NAV = [
  { to: "/",        label: "Home"      },
  { to: "/about",   label: "About"     },
  { to: "/projects",label: "Projects"  },
  { to: "/blogs",   label: "Blog"      },
  { to: "/events",  label: "Events"    },
  { to: "/contact", label: "Contact"   },
];

interface HeaderProps { theme: "light" | "dark"; toggleTheme: () => void; }

export default function Header({ theme, toggleTheme }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-base-100/80 backdrop-blur-md border-b border-base-300 shadow-sm">
      <div className="container-max flex items-center justify-between h-16 px-4 md:px-8">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 font-bold text-lg">
          <Code2 className="text-brand-coral" size={22} />
          <span className="gradient-text">Evanson</span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `nav-link ${isActive ? "text-brand-coral after:w-full" : "text-base-content/70 hover:text-base-content"}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-sm btn-circle"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden btn btn-ghost btn-sm btn-circle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden bg-base-100 border-t border-base-300 px-4 pb-4">
          {NAV.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-3 text-sm font-medium border-b border-base-200 last:border-0 ${
                  isActive ? "text-brand-coral" : "text-base-content/70"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}