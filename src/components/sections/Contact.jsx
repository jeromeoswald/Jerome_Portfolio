import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail, MapPin, Phone, Send } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { personal } from '../../data/portfolio';
import EmailLink from '../ui/EmailLink';
import ExternalLink from '../ui/ExternalLink';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';

const whatsappUrl = `https://wa.me/${personal.whatsapp}?text=${encodeURIComponent(personal.whatsappMessage)}`;
const telUrl = `tel:${personal.phone.replace(/[^\d+]/g, '')}`;

const contactCards = [
  {
    key: 'whatsapp',
    href: whatsappUrl,
    icon: FaWhatsapp,
    title: 'Chat on WhatsApp',
    detail: personal.phone,
    cta: 'Start a chat',
    note: 'Usually replies within a few hours',
  },
  {
    key: 'email',
    email: { to: personal.email, subject: personal.emailSubject },
    icon: Mail,
    title: 'Send an Email',
    detail: personal.email,
    cta: 'Write to me',
    note: 'Best for detailed enquiries',
  },
];

/** Copies the email address and briefly shows a check mark. */
function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
    } catch {
      // Fallback for browsers without the async clipboard API
      const t = document.createElement('textarea');
      t.value = personal.email;
      document.body.appendChild(t);
      t.select();
      document.execCommand('copy');
      t.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      type="button"
      onClick={copy}
      className="relative z-10 inline-flex min-h-11 items-center gap-1.5 rounded-full border border-line bg-surface px-4 text-fluid-sm font-medium text-ink transition hover:border-accent/60 hover:text-accent"
    >
      {copied ? <Check className="h-4 w-4 text-accent" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
      <span aria-live="polite">{copied ? 'Copied!' : 'Copy email'}</span>
    </button>
  );
}

/**
 * Large contact card. The main link is "stretched" over the whole card (::after),
 * so the entire card is clickable while secondary buttons stay independently usable.
 */
function ContactCard({ card: c }) {
  const linkClass =
    "font-semibold text-accent after:absolute after:inset-0 after:rounded-2xl after:content-[''] focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-accent";
  const linkInner = (
    <span className="inline-flex items-center gap-1.5">
      {c.cta}
      <ArrowUpRight
        className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </span>
  );

  return (
    <div className="card group relative flex h-full flex-col overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lift sm:p-8">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-accent-gradient opacity-10 blur-2xl transition-opacity group-hover:opacity-25"
      />
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-gradient text-white shadow-glow">
        <c.icon className="h-7 w-7" aria-hidden="true" />
      </span>
      <h3 className="mt-6 text-fluid-xl font-bold text-ink">{c.title}</h3>
      <p className="mt-1 break-all font-medium text-ink/80">{c.detail}</p>
      <p className="mt-1 text-fluid-sm text-muted">{c.note}</p>

      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-3 pt-6">
        {c.email ? (
          <EmailLink {...c.email} aria-label={`${c.title} to ${c.detail}`} className={linkClass}>
            {linkInner}
          </EmailLink>
        ) : (
          <ExternalLink href={c.href} aria-label={`${c.title}: ${c.detail}`} className={linkClass}>
            {linkInner}
          </ExternalLink>
        )}
        {c.email && (
          <span className="sm:ml-auto">
            <CopyEmailButton />
          </span>
        )}
      </div>
    </div>
  );
}

const emailPattern =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', phone: '', message: '' });
  const [touched, setTouched] = useState({});

  const phoneDigits = values.phone.replace(/\D/g, '');
  const errors = {
    name: values.name.trim().length < 2 ? 'Please enter your name.' : '',
    email: !emailPattern.test(values.email.trim()) ? 'Please enter a valid email address.' : '',
    phone:
      !/^\+?[\d\s()-]+$/.test(values.phone.trim()) || phoneDigits.length < 7 || phoneDigits.length > 15
        ? 'Please enter a valid phone number (with country code).'
        : '',
    message: values.message.trim().length < 10 ? 'Message should be at least 10 characters.' : '',
  };
  const isValid = Object.values(errors).every((e) => !e);

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  const onBlur = (e) => setTouched((t) => ({ ...t, [e.target.name]: true }));

  const onSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, message: true });
    if (!isValid) {
      // Move focus to the first invalid field
      const first = ['name', 'email', 'phone', 'message'].find((k) => errors[k]);
      document.getElementById(`cf-${first}`)?.focus();
      return;
    }
    const text = [
      `Hi ${personal.firstName}! I'm reaching out from your portfolio.`,
      '',
      `*Name:* ${values.name.trim()}`,
      `*Email:* ${values.email.trim()}`,
      `*Phone:* ${values.phone.trim()}`,
      '',
      '*Message:*',
      values.message.trim(),
    ].join('\n');
    window.open(`https://wa.me/${personal.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const field =
    'mt-1.5 block w-full min-h-11 rounded-xl border bg-bg px-4 py-2.5 text-fluid-base text-ink placeholder:text-muted/70 transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30';

  const renderField = (name, label, props = {}, Tag = 'input') => {
    const showError = touched[name] && errors[name];
    return (
      <div>
        <label htmlFor={`cf-${name}`} className="text-fluid-sm font-medium text-ink">
          {label}
        </label>
        <Tag
          id={`cf-${name}`}
          name={name}
          value={values[name]}
          onChange={onChange}
          onBlur={onBlur}
          aria-invalid={showError ? 'true' : 'false'}
          aria-describedby={showError ? `cf-${name}-err` : undefined}
          className={`${field} ${showError ? 'border-red-500' : 'border-line'}`}
          {...props}
        />
        {showError && (
          <p id={`cf-${name}-err`} className="mt-1.5 text-fluid-xs font-medium text-red-600 dark:text-red-400">
            {errors[name]}
          </p>
        )}
      </div>
    );
  };

  return (
    <form onSubmit={onSubmit} noValidate className="card space-y-4 p-6 sm:p-8">
      <div>
        <h3 className="text-fluid-xl font-bold text-ink">Send a quick message</h3>
        <p className="mt-1 text-fluid-sm text-muted">
          This opens a WhatsApp chat with me with your details pre-filled. Just hit send.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {renderField('name', 'Your name', { type: 'text', autoComplete: 'name', placeholder: 'Nissi Karunya' })}
        {renderField('email', 'Your email', { type: 'email', autoComplete: 'email', placeholder: 'nissi@company.com' })}
        <div className="sm:col-span-2 lg:col-span-1">
          {renderField('phone', 'Your phone number', {
            type: 'tel',
            inputMode: 'tel',
            autoComplete: 'tel',
            placeholder: '+971 50 123 4567',
          })}
        </div>
      </div>
      {renderField('message', 'Message', { rows: 5, placeholder: 'Tell me about your project or opportunity…' }, 'textarea')}
      <button
        type="submit"
        className="group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-button-gradient px-6 py-2.5 text-fluid-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:brightness-110 sm:w-auto"
      >
        <FaWhatsapp className="h-[18px] w-[18px]" aria-hidden="true" />
        Send Message
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <Section id="contact" labelledBy="contact-title" className="bg-surface-2/40">
      <SectionHeading
        id="contact-title"
        eyebrow="Let's Talk"
        title="Get in Touch"
        intro="Have a project, a role or just a question? My inbox is always open. Pick whichever way suits you best."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {contactCards.map((c, i) => (
          <Reveal key={c.key} delay={i * 0.08} className="h-full">
            <ContactCard card={c} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-5 grid gap-5 sm:grid-cols-2">
        <div className="card flex items-center gap-4 p-5">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft/70 text-accent dark:bg-accent-soft/40">
            <MapPin className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className="text-fluid-xs font-medium uppercase tracking-wider text-muted">Location</p>
            <p className="font-semibold text-ink">{personal.location}</p>
          </div>
        </div>
        <a href={telUrl} className="card flex items-center gap-4 p-5 transition hover:border-accent/50">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft/70 text-accent dark:bg-accent-soft/40">
            <Phone className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className="text-fluid-xs font-medium uppercase tracking-wider text-muted">Phone</p>
            <p className="font-semibold text-ink">{personal.phone}</p>
          </div>
        </a>
      </Reveal>

      <Reveal className="mt-10">
        <ContactForm />
      </Reveal>
    </Section>
  );
}
