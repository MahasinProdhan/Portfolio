/* Now dark theme is not implemented to do this just update the navbar */

import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const sections = ["home", "about", "projects", "contact"];

const Navbar = () => {
  const location = useLocation();
  const [isHome, setIsHome] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setIsHome(location.pathname === "/");
  }, [location.pathname]);

  // 🔥 Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;

      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionLink = (id, label) => {
    const isActive = activeSection === id;

    return (
      <a
        href={`#${id}`}
        onClick={() => setMenuOpen(false)}
        className={`transition font-medium
          ${isActive ? "text-primary" : "text-textSecondary hover:text-primary"}
        `}
      >
        {label}
      </a>
    );
  };

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="mt-4 rounded-2xl bg-white/70 backdrop-blur-md shadow-soft">
            <div className="flex items-center justify-between px-6 py-4">
              {/* Logo */}
              <Link to="/" className="text-xl font-bold text-textPrimary">
                Mahasin<span className="text-primary">.</span>
              </Link>

              {/* Desktop Menu */}
              <div className="items-center hidden gap-8 md:flex">
                {isHome && sectionLink("home", "Home")}
                {isHome && sectionLink("about", "About")}
                {isHome && sectionLink("projects", "Projects")}
                {isHome && sectionLink("contact", "Contact")}

                {!isHome && (
                  <NavLink
                    to="/"
                    className="text-textSecondary hover:text-primary"
                  >
                    Home
                  </NavLink>
                )}

                <button className="text-xl">🌙</button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="text-2xl md:hidden"
                onClick={() => setMenuOpen(true)}
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64
        bg-white/80 backdrop-blur-md z-50
        transform transition-transform duration-300 ease-in-out
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col gap-6 p-6">
          <button
            className="self-end text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          {isHome && sectionLink("home", "Home")}
          {isHome && sectionLink("about", "About")}
          {isHome && sectionLink("projects", "Projects")}
          {isHome && sectionLink("contact", "Contact")}

          {!isHome && (
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
