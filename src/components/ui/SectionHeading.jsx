import Reveal from './Reveal';

/** Consistent section heading: small accent eyebrow label + large title + optional intro. */
export default function SectionHeading({ eyebrow, title, intro, id, align = 'center' }) {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'items-start text-left';
  return (
    <Reveal className={`mb-12 flex max-w-2xl flex-col gap-3 sm:mb-14 ${alignment}`}>
      <span className="inline-flex items-center gap-2 text-fluid-xs font-semibold uppercase tracking-[0.2em] text-accent">
        <span className="h-px w-6 bg-accent-gradient" aria-hidden="true" />
        {eyebrow}
        <span className="h-px w-6 bg-accent-gradient" aria-hidden="true" />
      </span>
      <h2 id={id} className="text-fluid-2xl font-extrabold text-ink">
        {title}
      </h2>
      {intro && <p className="text-fluid-base text-muted">{intro}</p>}
    </Reveal>
  );
}
