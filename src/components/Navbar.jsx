import { Link, useLocation } from "react-router-dom";
import { BookOpen, LayoutDashboard, BrainCircuit } from "lucide-react";

const navLinks = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Subjects", path: "/subject/pai", icon: BookOpen },
  { name: "Quiz", path: "/quiz", icon: BrainCircuit },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-[var(--bg-card)]/80 backdrop-blur-lg border-b border-[var(--border-card)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center group no-underline">
          <span className="text-xl font-black bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-indigo)] bg-clip-text text-transparent">
            Formz Study
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive =
              location.pathname === link.path ||
              (link.path !== "/" &&
                location.pathname.startsWith(
                  link.path.split("/").slice(0, -1).join("/"),
                ));
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 no-underline ${
                  isActive
                    ? "bg-[var(--accent-blue-soft)] text-[var(--accent-blue)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-alternate)]"
                }`}
              >
                <Icon size={16} />
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu */}
        <button className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl hover:bg-[var(--bg-alternate)] transition-colors border-0 bg-transparent cursor-pointer">
          <svg
            className="w-5 h-5 text-[var(--text-main)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
