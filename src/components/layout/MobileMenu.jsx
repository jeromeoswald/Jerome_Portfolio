import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks, socials } from '../../data/portfolio';
import SocialLinks from '../ui/SocialLinks';

export default function MobileMenu({ open, onClose, active, returnFocusRef }) {
  const firstLinkRef = useRef(null);

  // Lock page scroll, focus first link, close on Escape
  useEffect(() => {
    if (!open) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    firstLinkRef.current?.focus({ preventScroll: true });

    const onKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
        returnFocusRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose, returnFocusRef]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop: tap outside to close */}
          <motion.div
            key="backdrop"
            className="fixed inset-x-0 bottom-0 top-16 z-40 bg-bg/60 backdrop-blur-sm sm:top-[4.5rem] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            key="panel"
            id="mobile-menu"
            className="absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-line bg-bg shadow-lift lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="container-x flex flex-col gap-1 py-4">
              {navLinks.map((link, i) => {
                const isActive = active === link.id;
                return (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i + 0.05 }}
                  >
                    <a
                      ref={i === 0 ? firstLinkRef : undefined}
                      href={`#${link.id}`}
                      onClick={onClose}
                      aria-current={isActive ? 'true' : undefined}
                      className={`flex min-h-12 items-center justify-between rounded-xl px-4 font-heading text-fluid-lg font-semibold transition-colors ${
                        isActive
                          ? 'bg-accent-soft/60 text-ink dark:bg-accent-soft/40'
                          : 'text-muted hover:bg-surface-2 hover:text-ink'
                      }`}
                    >
                      {link.label}
                      {isActive && <span className="h-2 w-2 rounded-full bg-accent-gradient" aria-hidden="true" />}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
            <div className="container-x border-t border-line py-4">
              <SocialLinks links={socials.filter((s) => s.hero)} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
