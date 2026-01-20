import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isHome, setIsHome] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setIsHome(location.pathname === "/");
  }, [location.pathname]);

  const sectionLink = (id, label) => (
    <a
      href={`#${id}`}
      className="text-textSecondary hover:text-primary transition"
      onClick={() => setMenuOpen(false)}
    >
      {label}
    </a>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mt-4 rounded-2xl bg-white/70 backdrop-blur-md shadow-soft">
          <div className="flex items-center justify-between px-6 py-4">
            {/* Logo / Name */}
            <Link to="/" className="text-xl font-bold text-textPrimary">
              Sourav<span className="text-primary">.</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
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

              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-medium"
                    : "text-textSecondary hover:text-primary"
                }
              >
                Blog
              </NavLink>

              {/* Theme Toggle Placeholder */}
              <button className="text-xl">🌙</button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden px-6 pb-4 flex flex-col gap-4">
              {isHome && sectionLink("home", "Home")}
              {isHome && sectionLink("about", "About")}
              {isHome && sectionLink("projects", "Projects")}
              {isHome && sectionLink("contact", "Contact")}

              {!isHome && (
                <NavLink to="/" onClick={() => setMenuOpen(false)}>
                  Home
                </NavLink>
              )}

              <NavLink to="/blog" onClick={() => setMenuOpen(false)}>
                Blog
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
