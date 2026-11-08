import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Award, ChevronDown, ExternalLink as ExternalIcon } from 'lucide-react';
import { CERTIFICATES_VISIBLE, certifications } from '../../data/portfolio';
import Button from '../ui/Button';
import ExternalLink from '../ui/ExternalLink';
import Reveal from '../ui/Reveal';

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const hasMore = certifications.length > CERTIFICATES_VISIBLE;
  const visible = showAll ? certifications : certifications.slice(0, CERTIFICATES_VISIBLE);

  return (
    <div className="mt-20 sm:mt-24">
      <Reveal className="mb-8 text-center">
        <h3 className="text-fluid-xl font-bold text-ink sm:text-[1.75rem]">
          <span className="text-gradient">Certifications</span>
        </h3>
        <p className="mt-2 text-fluid-sm text-muted">{certifications.length} certificates and counting</p>
      </Reveal>

      <ul id="cert-grid" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence initial={false}>
          {visible.map((c, i) => (
            <motion.li
              key={c.url}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.3, delay: i >= CERTIFICATES_VISIBLE ? (i - CERTIFICATES_VISIBLE) * 0.02 : 0 }}
              className="card group flex flex-col p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft/70 text-accent dark:bg-accent-soft/40">
                  <Award className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h4 className="font-heading text-fluid-base font-bold leading-snug text-ink">{c.title}</h4>
                  <p className="mt-0.5 text-fluid-xs font-medium text-muted">{c.issuer}</p>
                </div>
              </div>
              <ExternalLink
                href={c.url}
                className="mt-4 inline-flex min-h-11 items-center gap-1.5 self-start text-fluid-sm font-semibold text-accent hover:underline"
                aria-label={`View certificate: ${c.title} (opens in a new tab)`}
              >
                View Certificate
                <ExternalIcon className="h-3.5 w-3.5" aria-hidden="true" />
              </ExternalLink>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      {hasMore && (
        <div className="mt-8 flex justify-center">
          <Button variant="outline" onClick={() => setShowAll((s) => !s)} aria-expanded={showAll} aria-controls="cert-grid">
            {showAll ? 'Show Less' : `Show All (${certifications.length})`}
            <ChevronDown className={`h-4 w-4 transition-transform ${showAll ? 'rotate-180' : ''}`} aria-hidden="true" />
          </Button>
        </div>
      )}
    </div>
  );
}
