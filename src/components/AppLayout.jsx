import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import {
  contactChannels,
  homeSections,
  navItems,
  siteMeta,
} from "../content/siteContent";
import {
  mountAnalyticsScript,
  trackOutboundLead,
  trackPageView,
} from "../lib/analytics";
import { ArrowIcon, CloseIcon, MenuIcon } from "./Icons";

function Brand() {
  return (
    <span className="brand brand--wordmark">LANDSHAFT</span>
  );
}

export function AppLayout({ routeTransitionState = "idle", routeTransitionPath }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const menuButtonRef = useRef(null);
  const mobileNavId = "site-mobile-navigation";

  const focusMainContent = () => {
    window.requestAnimationFrame(() => {
      document.getElementById("main-content")?.focus();
    });
  };

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

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 10);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const closeOnEscape = (event) => {
      if (event.key !== "Escape") {
        return;
      }

      setMenuOpen(false);
      menuButtonRef.current?.focus();
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content" onClick={focusMainContent}>
        Перейти до основного вмісту
      </a>

      <div className="site-shell__backdrop" aria-hidden="true">
        <span className="site-shell__orb site-shell__orb--one" />
        <span className="site-shell__orb site-shell__orb--two" />
        <span className="site-shell__orb site-shell__orb--three" />
        <span className="site-shell__grain" />
      </div>

      <header
        className={`site-header${menuOpen ? " site-header--menu-open" : ""}${
          isScrolled ? " site-header--scrolled" : ""
        }`}
      >
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
                {homeSections.hero.primaryCta.label}
                <ArrowIcon className="icon icon--arrow" />
              </Link>
            </div>

            <button
              ref={menuButtonRef}
              type="button"
              className={`menu-button${menuOpen ? " is-active" : ""}`}
              aria-expanded={menuOpen}
              aria-controls={mobileNavId}
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

        <div
          id={mobileNavId}
          className={`mobile-nav${menuOpen ? " is-open" : ""}`}
          aria-hidden={menuOpen ? "false" : "true"}
        >
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
                  {homeSections.hero.primaryCta.label}
                  <ArrowIcon className="icon icon--arrow" />
                </Link>

                <div className="mobile-nav__contact-list" aria-label="Швидкі контакти">
                  {contactChannels.map((channel) => (
                    <a
                      key={channel.id}
                      className="mobile-nav__contact"
                      href={channel.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${channel.label}: ${channel.handle}`}
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
        id="main-content"
        tabIndex={-1}
        key={routeTransitionPath}
        className={`route-shell route-shell--${routeTransitionState}`}
      >
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="shell">
          <div className="site-footer__inner">
            <div className="site-footer__lead">
              <div className="site-footer__brand">
                <Link className="site-footer__brand-link" to="/" aria-label="Landshaft home">
                  <Brand />
                </Link>
                <p>
                  Проєктуємо, реалізуємо та супроводжуємо приватні сади з архітектурною
                  ясністю та довготривалою цінністю.
                </p>
              </div>
              <p className="site-footer__note">{siteMeta.uk.serviceArea}</p>
            </div>

            <div className="site-footer__meta">
              <nav className="site-footer__nav" aria-label="Навігація у футері">
                <span className="site-footer__label">Навігація</span>
                <div className="site-footer__link-list">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.href}
                      className={({ isActive }) =>
                        `site-footer__link${isActive ? " is-active" : ""}`
                      }
                      to={item.href}
                      end={item.href === "/"}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                  <NavLink
                    className={({ isActive }) =>
                      `site-footer__link${isActive ? " is-active" : ""}`
                    }
                    to="/privacy"
                  >
                    Політика приватності
                  </NavLink>
                </div>
              </nav>

              <div className="site-footer__contact">
                <span className="site-footer__label">Контакти</span>
                <div className="site-footer__link-list">
                  {contactChannels.map((channel) => (
                    <a
                      key={channel.id}
                      className="site-footer__link"
                      href={channel.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {channel.label}
                    </a>
                  ))}
                </div>
                <p className="site-footer__copyright">© LANDSHAFT. Усі права захищено.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
