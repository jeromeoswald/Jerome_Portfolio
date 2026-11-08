import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { navLinks, personal } from '../../data/portfolio';
import useScrolled from '../../hooks/useScrolled';
import useScrollSpy from '../../hooks/useScrollSpy';
import ThemeToggle from '../ui/ThemeToggle';
import MobileMenu from './MobileMenu';

const sectionIds = navLinks.map((l) => l.id);

export default function Navbar({ theme, onToggleTheme }) {
  const scrolled = useScrolled(20);
  const active = useScrollSpy(sectionIds);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);

  const close = useCallback(() => setOpen(false), []);

  // Close the mobile menu if the viewport grows to desktop size
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const solid = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Glass background lives on its own layer so `backdrop-filter` doesn't trap the fixed menu backdrop */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 -z-10 border-b transition-all duration-300 ${
          solid ? 'border-line/70 bg-bg/80 shadow-soft backdrop-blur-xl' : 'border-transparent bg-transparent'
        }`}
      />
      <nav aria-label="Primary" className="container-x flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        <a
          href="#home"
          onClick={close}
          className="flex min-h-11 items-center font-heading text-xl font-extrabold tracking-tight text-ink"
          aria-label={`${personal.name}, back to top`}
        >
          {personal.firstName}
          <span className="text-gradient">.</span>
        </a>

        <div className="flex items-center gap-2">
          <ul className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative isolate inline-flex min-h-11 items-center rounded-full px-3 text-[0.9rem] font-medium transition-colors xl:px-4 ${
                      isActive ? 'text-ink' : 'text-muted hover:text-ink'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-x-0.5 inset-y-1.5 -z-10 rounded-full bg-accent-soft/70 ring-1 ring-accent/25 dark:bg-accent-soft/40"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          {/* Animated hamburger (tablet & mobile) */}
          <button
            ref={toggleRef}
            type="button"
            className="icon-btn lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="relative block h-3.5 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-current transition-transform duration-300 ${
                  open ? 'translate-y-[6px] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] h-0.5 w-5 rounded bg-current transition-opacity duration-200 ${
                  open ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-5 rounded bg-current transition-transform duration-300 ${
                  open ? '-translate-y-[6px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <MobileMenu open={open} onClose={close} active={active} returnFocusRef={toggleRef} />
    </header>
  );
}
