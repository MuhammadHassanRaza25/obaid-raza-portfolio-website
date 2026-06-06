import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Resume", href: "/resume" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
      <div
        className={`inline-flex items-center rounded-full border border-white/10 bg-surface px-2 py-2 backdrop-blur-md transition-shadow ${
          scrolled ? "shadow-md shadow-black/10" : ""
        }`}
      >
        <button
          type="button"
          onClick={() => scrollToSection("hero")}
          className="group relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-transform hover:scale-110"
          aria-label="Home"
        >
          <span className="absolute inset-0 rounded-full accent-gradient transition-[background] group-hover:[background:linear-gradient(270deg,#89AACC_0%,#4E85BF_100%)]" />
          <span className="relative flex h-[calc(100%-4px)] w-[calc(100%-4px)] items-center justify-center rounded-full bg-bg">
            <span className="font-display text-[13px] italic">JA</span>
          </span>
        </button>

        <div className="mx-1 hidden h-5 w-px bg-stroke sm:block" />

        <div className="flex items-center">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(link.href);

            if (link.href === "/" && location.pathname === "/") {
              return (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => scrollToSection("hero")}
                  className={`rounded-full px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm ${
                    isActive
                      ? "bg-stroke/50 text-text-primary"
                      : "text-muted hover:bg-stroke/50 hover:text-text-primary"
                  }`}
                >
                  {link.label}
                </button>
              );
            }

            return (
              <Link
                key={link.label}
                to={link.href}
                className={`rounded-full px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm ${
                  isActive
                    ? "bg-stroke/50 text-text-primary"
                    : "text-muted hover:bg-stroke/50 hover:text-text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="mx-1 hidden h-5 w-px bg-stroke sm:block" />

        <a
          href="mailto:hello@michaelsmith.com"
          className="group relative rounded-full px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm"
        >
          <span className="absolute inset-[-2px] rounded-full opacity-0 transition-opacity group-hover:opacity-100 accent-gradient" />
          <span className="relative flex items-center gap-1 rounded-full bg-surface px-1 backdrop-blur-md text-text-primary">
            Say hi <span className="text-muted">↗</span>
          </span>
        </a>
      </div>
    </nav>
  );
}
