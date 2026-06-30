import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { contactChannels, navItems, siteMeta } from "../content/siteContent";
import { mountAnalyticsScript, trackOutboundLead, trackPageView } from "../lib/analytics";
import { ArrowIcon, CloseIcon, MenuIcon } from "./Icons";

function Brand() {
  return (
    <span className="brand brand--wordmark">LANDSHAFT</span>
  );
}

export function AppLayout({ routeTransitionState = "idle", routeTransitionPath }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    mountAnalyticsScript();
    trackPageView(window.location.href);
  }, [routeTransitionPath]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <div className="site-shell">
      <div className="site-shell__backdrop" aria-hidden="true">
        <span className="site-shell__orb site-shell__orb--one" />
        <span className="site-shell__orb site-shell__orb--two" />
        <span className="site-shell__orb site-shell__orb--three" />
        <span className="site-shell__grain" />
      </div>

      <header className={`site-header${menuOpen ? " site-header--menu-open" : ""}`}>
        <div className="site-header__inner shell">
          <Link className="brand-link" to="/" aria-label="Landshaft home">
            <Brand />
          </Link>

          <div className="site-header__controls">
            <nav className="desktop-nav" aria-label="Основна навігація">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  className={({ isActive }) =>
                    `desktop-nav__link${isActive ? " is-active" : ""}`
                  }
                  to={item.href}
                  end={item.href === "/"}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="desktop-actions">
              <Link className="button button--solid site-header__cta" to="/contact">
                Обговорити проєкт
                <ArrowIcon className="icon icon--arrow" />
              </Link>
            </div>

            <button
              type="button"
              className={`menu-button${menuOpen ? " is-active" : ""}`}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Закрити меню" : "Відкрити меню"}
              onClick={() => setMenuOpen((value) => !value)}
            >
              <span className="menu-button__label">{menuOpen ? "Закрити" : "Меню"}</span>
              {menuOpen ? (
                <CloseIcon className="icon icon--menu" />
              ) : (
                <MenuIcon className="icon icon--menu" />
              )}
            </button>
          </div>
        </div>

        <div className={`mobile-nav${menuOpen ? " is-open" : ""}`}>
          <div className="mobile-nav__scrim" aria-hidden="true" />
          <div className="shell">
            <div className="mobile-nav__inner">
              <nav aria-label="Мобільна навігація">
                {navItems.map((item) => (
                  <NavLink
                    key={item.href}
                    className={({ isActive }) =>
                      `mobile-nav__link${isActive ? " is-active" : ""}`
                    }
                    to={item.href}
                    end={item.href === "/"}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>

              <div className="mobile-nav__actions">
                <Link className="button button--solid" to="/contact">
                  Обговорити проєкт
                </Link>
                <div className="mobile-nav__contact-list">
                  {contactChannels.map((channel) => (
                    <a
                      key={channel.id}
                      className="mobile-nav__contact"
                      href={channel.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => trackOutboundLead(channel.label)}
                    >
                      <span>{channel.label}</span>
                      <strong>{channel.handle}</strong>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main
        key={routeTransitionPath}
        className={`route-shell route-shell--${routeTransitionState}`}
      >
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="shell">
          <div className="site-footer__inner">
            <Link className="site-footer__brand-link" to="/" aria-label="Landshaft home">
              <Brand />
            </Link>
            <p className="site-footer__copyright">© LANDSHAFT. Усі права захищено.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
