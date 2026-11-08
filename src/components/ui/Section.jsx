/** Section wrapper with consistent vertical rhythm and an accessible label. */
export default function Section({ id, labelledBy, className = '', children }) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`relative py-20 sm:py-24 lg:py-28 ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}
