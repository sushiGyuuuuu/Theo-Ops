import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useActiveSection } from "../hooks/useActiveSection";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

const sectionIds = links.map((link) => link.href.slice(1));

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#08090c]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="group inline-block text-lg font-bold tracking-tight transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:scale-105"
        >
          <span className="text-white transition-colors duration-300 group-hover:text-indigo-400">
            THEO
          </span>
          <span className="text-indigo-400 transition-colors duration-300 group-hover:text-white">
            .OPS
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`group relative py-2 text-sm transition-colors duration-300 hover:text-indigo-400 ${
                  isActive ? "text-indigo-400" : "text-zinc-400"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </a>
            );
          })}
        </div>

        <a
          href="#contact"
          className="group hidden items-center rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-indigo-400 hover:shadow-xl hover:shadow-indigo-500/30 active:translate-y-0 md:inline-flex"
        >
          Let&apos;s Automate
          <ArrowUpRight
            aria-hidden="true"
            className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>

        <button
          type="button"
          className="rounded-md p-1 text-white md:hidden"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-[#08090c] px-6 py-6 md:hidden"
        >
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-zinc-300 transition hover:text-indigo-400"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-indigo-500 px-5 py-3 text-center font-semibold text-white transition-colors duration-300 hover:bg-indigo-400"
            >
              Let&apos;s Automate
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}