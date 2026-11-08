import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo2.png";
import { nav, company } from "../data/content";

export default function Navbar() {
  const { pathname } = useLocation();
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenu(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  const groupActive = (g) => g.items.some((i) => i.to === pathname);

  return (
    <header
      className={`me-nav ${scrolled ? "is-scrolled" : ""} ${menu ? "menu-open" : ""}`}
    >
      <Link className="me-logo" to="/">
        <img src={logo} alt="" width="200" height="70" />
      </Link>

      <nav className="me-desktop" aria-label="Main">
        {nav.map((n) =>
          n.items ? (
            <div key={n.label} className="me-nav-item">
              <button
                type="button"
                aria-haspopup="true"
                className={groupActive(n) ? "is-active" : ""}
              >
                {n.label}
              </button>
              <ul>
                {n.items.map((i) => (
                  <li key={i.to}>
                    <NavLink to={i.to}>{i.label}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div key={n.label} className="me-nav-item">
              <NavLink to={n.to}>{n.label}</NavLink>
            </div>
          ),
        )}
      </nav>

      <button
        type="button"
        className={`me-burger ${menu ? "open" : ""}`}
        aria-label={menu ? "Close menu" : "Open menu"}
        aria-expanded={menu}
        onClick={() => setMenu((m) => !m)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`me-drawer ${menu ? "open" : ""}`} aria-hidden={!menu}>
        {nav.map((n) => (
          <div key={n.label} className="me-drawer-group">
            {n.items ? (
              <>
                <p>{n.label}</p>
                {n.items.map((i) => (
                  <NavLink key={i.to} to={i.to} tabIndex={menu ? 0 : -1}>
                    {i.label}
                  </NavLink>
                ))}
              </>
            ) : (
              <NavLink to={n.to} tabIndex={menu ? 0 : -1} className="solo">
                {n.label}
              </NavLink>
            )}
          </div>
        ))}
      </div>
    </header>
  );
}
