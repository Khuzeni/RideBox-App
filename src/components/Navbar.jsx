import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  ["HOME", "/"],
  ["ABOUT", "/about"],
  ["THE KIOSK", "/kiosk"],
  ["SERVICES", "/services"],
  ["TEAM", "/team"],

  ["CONTACT", "/contact"],
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const closeMenuOnScroll = () => setMenuOpen(false);
    window.addEventListener("scroll", closeMenuOnScroll, { passive: true });
    return () => window.removeEventListener("scroll", closeMenuOnScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between py-6 px-8 lg:px-16 border-b border-white/10 bg-bgMain">
      <div className="flex items-center gap-4">
        <Link to="/" className="flex items-center gap-4" title="Home">
          <img
            src="/favicon.ico"
            alt="RideBox Logo"
            title="RideBox Logo"
            width="40"
            height="40"
            className="h-10 w-10 object-contain"
          />
          <span className="font-black text-lg tracking-[0.2em] text-white">
            RIDEBOX
          </span>
        </Link>
      </div>
      <ul className="hidden md:flex items-center gap-8 text-sm font-bold tracking-wider text-white/60">
        {links.map(([label, path]) => {
          const isActive = pathname === path;
          return (
            <li key={path}>
              <Link
                to={path}
                aria-current={isActive ? "page" : undefined}
                title={label}
                className={`nav-link hover:text-white transition-colors${isActive ? " nav-link-active" : ""}`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        className="mobile-menu-toggle"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      {menuOpen && (
        <ul className="mobile-menu" aria-label="Mobile navigation">
          {links.map(([label, path]) => {
            const isActive = pathname === path;
            return (
              <li key={path}>
                <Link
                  to={path}
                  aria-current={isActive ? "page" : undefined}
                  title={label}
                  onClick={() => setMenuOpen(false)}
                  className={isActive ? "nav-link-active" : ""}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
