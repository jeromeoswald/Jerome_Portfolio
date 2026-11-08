/** Anchor that opens http(s) links in a new tab safely; mailto:/tel: links open normally. */
export default function ExternalLink({ href, children, ...props }) {
  const isWeb = /^https?:\/\//i.test(href);
  return (
    <a href={href} {...(isWeb ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...props}>
      {children}
    </a>
  );
}
