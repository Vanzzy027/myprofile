import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Sun, Moon, Code2 } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import { NAV } from "./nav";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-base-100/80 backdrop-blur-md border-b border-base-300 shadow-sm">
      <div className="container-max flex items-center justify-between h-16 px-4 md:px-8">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 font-bold text-lg" aria-label="Evanson Kariuki, home">
          <Code2 className="text-brand-coral" size={22} />
          <span className="gradient-text">Evanson</span>
        </NavLink>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden lg:flex items-center gap-5">
          {NAV.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `nav-link ${isActive ? "text-brand-coral after:w-full" : "text-base-content/80 hover:text-base-content"}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Theme toggle: icons swap with the `dark` class so server and client markup match */}
          <button onClick={toggleTheme} className="btn btn-ghost btn-sm btn-circle" aria-label="Toggle colour theme">
            <Sun size={18} className="hidden dark:block" />
            <Moon size={18} className="block dark:hidden" />
          </button>

          {/* Mobile menu button */}
          <button
            className="lg:hidden btn btn-ghost btn-sm btn-circle"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav id="mobile-nav" aria-label="Main" className="lg:hidden bg-base-100 border-t border-base-300 px-4 pb-4">
          {NAV.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-3 text-sm font-medium border-b border-base-200 last:border-0 ${
                  isActive ? "text-brand-coral" : "text-base-content/80"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
