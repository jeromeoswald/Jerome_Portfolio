import { personal } from '../../data/portfolio';
import EmailLink from './EmailLink';
import ExternalLink from './ExternalLink';
import SocialIcon from './SocialIcon';

/** Row of circular icon-only social links (each has an aria-label). */
export default function SocialLinks({ links, className = '' }) {
  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
      {links.map((s) => (
        <li key={s.label}>
          {s.url.startsWith('mailto:') ? (
            <EmailLink
              to={s.url.slice('mailto:'.length).split('?')[0]}
              subject={personal.emailSubject}
              aria-label={`${s.label} ${personal.email}`}
              title={s.label}
              className="icon-btn"
            >
              <SocialIcon name={s.icon} />
            </EmailLink>
          ) : (
            <ExternalLink href={s.url} aria-label={s.label} title={s.label} className="icon-btn">
              <SocialIcon name={s.icon} />
            </ExternalLink>
          )}
        </li>
      ))}
    </ul>
  );
}
