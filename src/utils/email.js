/**
 * Email helpers.
 *
 * `mailto:` links only work when the visitor has a default mail app configured,
 * which many desktop users (especially on Windows) don't. So:
 *   - phones / tablets → mailto: (opens the native mail app reliably)
 *   - desktops         → Gmail web compose in a new tab, with To / Subject / Body pre-filled
 */

const q = (params) =>
  Object.entries(params)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
    .join('&');

export const mailtoUrl = ({ to, subject, body }) => {
  const query = q({ subject, body });
  return `mailto:${to}${query ? `?${query}` : ''}`;
};

export const gmailComposeUrl = ({ to, subject, body }) =>
  `https://mail.google.com/mail/?${q({ view: 'cm', fs: '1', to, su: subject, body })}`;

export const isTouchDevice = () =>
  typeof window !== 'undefined' &&
  (window.matchMedia('(pointer: coarse)').matches || /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent));

/** Opens the best compose experience for the current device. */
export const openEmail = (opts) => {
  if (isTouchDevice()) {
    window.location.href = mailtoUrl(opts);
  } else {
    window.open(gmailComposeUrl(opts), '_blank', 'noopener,noreferrer');
  }
};
