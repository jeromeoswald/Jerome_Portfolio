import ExternalLink from './ExternalLink';

const base =
  'group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-2.5 text-fluid-sm font-semibold transition duration-200 disabled:cursor-not-allowed disabled:opacity-50';

const variants = {
  primary: 'bg-button-gradient text-white shadow-glow hover:-translate-y-0.5 hover:brightness-110',
  outline: 'border border-line bg-surface/60 text-ink hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent',
  ghost: 'text-ink hover:text-accent',
};

/**
 * Renders an <a> when `href` is given (external links open in a new tab),
 * otherwise a <button>.
 */
export default function Button({ href, variant = 'primary', className = '', children, ...props }) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href) {
    const isInternal = href.startsWith('#');
    if (isInternal) {
      return (
        <a href={href} className={cls} {...props}>
          {children}
        </a>
      );
    }
    return (
      <ExternalLink href={href} className={cls} {...props}>
        {children}
      </ExternalLink>
    );
  }
  return (
    <button type="button" className={cls} {...props}>
      {children}
    </button>
  );
}
