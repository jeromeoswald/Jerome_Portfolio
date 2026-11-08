import { ArrowUp } from 'lucide-react';
import { navLinks, personal, site, socials } from '../../data/portfolio';
import SocialLinks from '../ui/SocialLinks';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <a href="#home" className="inline-flex min-h-11 items-center font-heading text-2xl font-extrabold text-ink">
            {personal.firstName}
            <span className="text-gradient">.</span>
          </a>
          <p className="mt-3 max-w-xs text-fluid-sm text-muted">{personal.tagline}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-fluid-sm font-bold uppercase tracking-wider text-ink">Quick Links</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 md:grid-cols-1">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="inline-flex min-h-11 items-center text-fluid-sm text-muted transition-colors hover:text-accent md:min-h-9">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-fluid-sm font-bold uppercase tracking-wider text-ink">Connect</h2>
          <SocialLinks links={socials} className="mt-4" />
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-center text-fluid-xs text-muted sm:flex-row sm:text-left">
          <p>
            © {year} {personal.name}. All rights reserved.
            <span className="mt-1 block sm:mt-0 sm:inline"> {site.footerNote}</span>
          </p>
          <a
            href="#home"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 font-semibold text-ink transition hover:border-accent/60 hover:text-accent"
          >
            Back to top
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
