import { gmailComposeUrl, openEmail } from '../../utils/email';

/**
 * Link that composes an email to `to`. The href is the Gmail compose URL (works on
 * any desktop without a mail app, and for middle-click / "open in new tab");
 * a normal click picks the best option for the device via openEmail().
 */
export default function EmailLink({ to, subject, body, children, onClick, ...props }) {
  const handleClick = (e) => {
    onClick?.(e);
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    openEmail({ to, subject, body });
  };

  return (
    <a
      href={gmailComposeUrl({ to, subject, body })}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
}
