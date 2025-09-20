import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import useLocale from '../hooks/useLocale';
import useTheme from '../hooks/useTheme';

const IconSun = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
  </svg>
);

const IconMoon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M21 12.79A9 9 0 0111.21 3 7 7 0 0012 17a7 7 0 009-4.21z" />
  </svg>
);

const IconGlobe = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a15.3 15.3 0 010 18M12 3a15.3 15.3 0 000 18" />
  </svg>
);

const navLinkClasses = ({ isActive }) =>
  `rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
    isActive
      ? 'bg-coffee text-sand shadow-soft'
      : 'text-ink/80 hover:text-ink hover:bg-coffee/10 dark:text-sand/80 dark:hover:text-sand'
  }`;

const Navbar = () => {
  const { content, locale, setLocale, locales } = useLocale();
  const { isDark, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const links = [
    { to: '/', label: content.nav.home },
    { to: '/about', label: content.nav.about },
    { to: '/projects', label: content.nav.projects },
    { to: '/case-studies', label: content.nav.caseStudies },
    { to: '/contact', label: content.nav.contact },
  ];

  const nextLocale = locale === 'en' ? 'hi' : 'en';
  const nextLocaleLabel = locales.find((item) => item.code === nextLocale)?.toggleLabel ?? nextLocale.toUpperCase();

  return (
    <header className="sticky top-0 z-40 border-b border-coffee/5 bg-sand/80 backdrop-blur-md dark:border-sand/10 dark:bg-mocha/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <NavLink to="/" className="flex items-center gap-2 text-base font-semibold text-ink dark:text-sand">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-coffee/10 text-coffee dark:bg-terracotta/20 dark:text-terracotta">
              SC
            </span>
            <span className="hidden font-display text-sm sm:block">{content.nav.brand}</span>
          </NavLink>
          <div className="hidden items-center gap-1 rounded-full bg-white/70 p-1 shadow-soft dark:bg-mocha/80 md:flex">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={navLinkClasses} onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center gap-2 rounded-full border border-coffee/20 bg-white/90 px-3 py-2 text-xs font-medium text-ink shadow-soft transition hover:-translate-y-0.5 hover:border-coffee/40 dark:border-sand/20 dark:bg-mocha/70 dark:text-sand"
            aria-label={content.common.themeToggle}
            title={`${content.nav.theme.light} / ${content.nav.theme.dark}`}
          >
            <motion.span
              key={isDark ? 'moon' : 'sun'}
              initial={{ rotate: -20, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-1"
            >
              {isDark ? <IconMoon /> : <IconSun />}
              <span className="hidden sm:inline">{isDark ? content.nav.theme.dark : content.nav.theme.light}</span>
            </motion.span>
          </button>

          <button
            type="button"
            onClick={() => setLocale(nextLocale)}
            className="inline-flex items-center gap-2 rounded-full border border-coffee/20 bg-white/90 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-ink shadow-soft transition hover:-translate-y-0.5 hover:border-coffee/40 dark:border-sand/20 dark:bg-mocha/70 dark:text-sand"
            aria-label={content.common.languageToggle}
            title={content.nav.language}
          >
            <IconGlobe />
            <span>{nextLocaleLabel}</span>
          </button>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-coffee/30 p-2 text-coffee transition hover:border-coffee hover:text-ink dark:border-sand/20 dark:text-sand md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Menu</span>
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden"
          >
            <div className="space-y-2 border-t border-coffee/10 bg-white/95 px-4 py-4 shadow-soft dark:border-sand/10 dark:bg-mocha/90">
              {links.map((link) => (
                <NavLink
                  key={`mobile-${link.to}`}
                  to={link.to}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-sm font-medium ${
                      isActive
                        ? 'bg-coffee text-sand shadow-soft'
                        : 'text-ink/80 hover:bg-coffee/10 hover:text-ink dark:text-sand/80 dark:hover:text-sand'
                    }`
                  }
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
