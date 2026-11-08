import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Building2, CalendarDays, CheckCircle2, Clock, MapPin } from 'lucide-react';
import { experience } from '../../data/portfolio';
import Chip from '../ui/Chip';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';

/* ---------- Date helpers (expects "MM-YYYY" or "Present") ---------- */
const parse = (v) => {
  if (!v || /present/i.test(v)) return new Date();
  const [m, y] = v.split('-').map(Number);
  return y ? new Date(y, m - 1) : new Date(m, 0);
};

const pretty = (v) => {
  if (!v || /present/i.test(v)) return 'Present';
  const [m, y] = v.split('-').map(Number);
  return y ? new Date(y, m - 1).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : v;
};

const duration = (start, end) => {
  const s = parse(start);
  const e = parse(end);
  const months = Math.max(1, (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth()) + 1);
  const y = Math.floor(months / 12);
  const m = months % 12;
  return [y && `${y} yr${y > 1 ? 's' : ''}`, m && `${m} mo${m > 1 ? 's' : ''}`].filter(Boolean).join(' ');
};

const panelVariants = {
  enter: (dir) => ({ opacity: 0, x: dir * 40 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.06, delayChildren: 0.1 } },
  exit: (dir) => ({ opacity: 0, x: dir * -40, transition: { duration: 0.25, ease: 'easeIn' } }),
};

const itemVariants = {
  enter: { opacity: 0, y: 10 },
  center: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  exit: { opacity: 0 },
};

/** Content of the detail panel. `animated` enables the staggered item variants. */
function JobDetails({ job, animated = false }) {
  const v = animated ? { variants: itemVariants } : {};
  return (
    <div className="relative flex h-full flex-col p-4 sm:p-6 lg:px-7 lg:py-6">
      <motion.div {...v} className="flex flex-wrap items-center gap-2 text-fluid-xs font-medium">
        {/* Dates are already shown on the tab right above on phones, so this chip appears from sm up */}
        <span className="hidden items-center gap-1.5 rounded-full bg-accent-soft/60 px-3 py-1 text-accent dark:bg-accent-soft/40 sm:inline-flex">
          <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
          {pretty(job.start)} – {pretty(job.end)}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-muted">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          {duration(job.start, job.end)}
        </span>
        <span className="inline-flex items-center gap-1.5 px-1 text-muted">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {job.location}
        </span>
      </motion.div>

      <motion.h3 {...v} className="mt-3 text-[clamp(1.25rem,1.05rem+0.8vw,1.75rem)] font-extrabold leading-tight text-ink">
        {job.role}
      </motion.h3>
      <motion.p {...v} className="mt-0.5 text-fluid-base font-semibold text-accent">
        @ {job.company}
      </motion.p>

      <motion.div {...v} aria-hidden="true" className="my-3 h-px sm:my-4 bg-gradient-to-r from-accent-from/50 via-line to-transparent" />

      <ul className="space-y-2 sm:space-y-2.5">
        {job.achievements.map((a) => (
          <motion.li key={a} {...v} className="flex gap-2.5 text-fluid-sm leading-normal text-muted sm:leading-relaxed">
            <CheckCircle2 className="mt-[3px] h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            <span>{a}</span>
          </motion.li>
        ))}
      </ul>

      {/* mt-auto pins the tags to the bottom so every entry shares the same layout */}
      <motion.ul {...v} className="mt-auto flex flex-wrap gap-1.5 pt-4 sm:pt-5" aria-label="Skills and tools">
        {job.tags.map((t) => (
          <li key={t}>
            <Chip>{t}</Chip>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}

export default function Experience() {
  const [[active, direction], setActive] = useState([0, 0]);
  const tabRefs = useRef([]);
  const job = experience[active];

  const blockRef = useRef(null);

  // Bring the whole tabs + panel block into view (below the sticky navbar) if any of it is off-screen
  const fitBlockInView = () => {
    const el = blockRef.current;
    if (!el) return;
    const navH = document.querySelector('header')?.offsetHeight ?? 72;
    const r = el.getBoundingClientRect();
    const room = window.innerHeight - navH - 8;
    let delta = 0;
    if (r.height > room || r.top < navH + 4) delta = r.top - navH - 6; // align top under navbar
    else if (r.bottom > window.innerHeight - 8) delta = r.bottom - window.innerHeight + 16; // reveal bottom
    if (Math.abs(delta) > 2) window.scrollBy({ top: delta, behavior: 'smooth' });
  };

  const select = (i) => {
    if (i !== active) setActive([i, i > active ? 1 : -1]);
    // keep the selected tab visible in the horizontal mobile tab bar (without scrolling the page)
    const tab = tabRefs.current[i];
    const bar = tab?.parentElement;
    if (bar && bar.scrollWidth > bar.clientWidth) {
      bar.scrollTo({ left: tab.offsetLeft - (bar.clientWidth - tab.offsetWidth) / 2, behavior: 'smooth' });
    }
    fitBlockInView();
  };

  const onKeyDown = (e) => {
    const keys = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    let next;
    if (e.key in keys) next = (active + keys[e.key] + experience.length) % experience.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = experience.length - 1;
    else return;
    e.preventDefault();
    select(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <Section id="experience" labelledBy="experience-title" className="bg-surface-2/40">
      <SectionHeading
        id="experience-title"
        eyebrow="My Journey"
        title="Work Experience"
        intro="Where I've worked, what I owned and the impact I made."
      />

      <div ref={blockRef}>
      <Reveal className="grid gap-4 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:gap-6">
        {/* ---------- Tabs: horizontal scroll on mobile, vertical list on desktop ---------- */}
        <div
          role="tablist"
          aria-label="Companies"
          aria-orientation="vertical"
          onKeyDown={onKeyDown}
          className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 pb-2 sm:scroll-px-6 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:mx-0 lg:flex-col lg:gap-2 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden"
        >
          {experience.map((exp, i) => {
            const selected = i === active;
            return (
              <button
                key={`${exp.company}-${i}`}
                ref={(el) => (tabRefs.current[i] = el)}
                type="button"
                role="tab"
                id={`exp-tab-${i}`}
                aria-selected={selected}
                aria-controls="exp-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => select(i)}
                className={`relative isolate w-[15rem] shrink-0 snap-start overflow-hidden rounded-xl border px-3.5 py-2.5 text-left lg:py-3 transition-colors duration-300 lg:w-full ${
                  selected
                    ? 'border-accent/40 bg-surface shadow-soft'
                    : 'border-line bg-surface/50 hover:border-accent/30 hover:bg-surface'
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="exp-active"
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-1 bg-accent-gradient"
                    transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                  />
                )}
                <span className="flex items-center gap-3">
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 ${
                      selected ? 'bg-accent-gradient text-white shadow-glow' : 'bg-surface-2 text-muted'
                    }`}
                  >
                    <Building2 className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className={`block truncate font-heading text-[0.95rem] font-bold ${selected ? 'text-ink' : 'text-ink/80'}`}>
                      {exp.company}
                    </span>
                    <span className="block truncate text-fluid-xs text-muted">{exp.role}</span>
                    <span className={`block text-fluid-xs font-medium ${selected ? 'text-accent' : 'text-muted'}`}>
                      {pretty(exp.start)} – {pretty(exp.end)}
                    </span>
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* ---------- Detail panel ---------- */}
        <div
          id="exp-panel"
          role="tabpanel"
          aria-labelledby={`exp-tab-${active}`}
          className="card relative overflow-hidden"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent-gradient opacity-[0.07] blur-3xl"
          />
          {/*
            Fixed height for every entry: all jobs are laid out invisibly in the same grid cell,
            so the panel always matches the TALLEST entry (at any screen width). The visible,
            animated entry sits on top in that same cell.
          */}
          <div className="grid">
            {experience.map((exp, i) => (
              <div key={`sizer-${i}`} aria-hidden="true" className="invisible [grid-area:1/1]">
                <JobDetails job={exp} />
              </div>
            ))}
            <div className="[grid-area:1/1]">
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                  key={active}
                  custom={direction}
                  variants={panelVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="h-full"
                >
                  <JobDetails job={job} animated />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Progress dots (mobile) */}
      <div className="mt-4 flex justify-center gap-2 lg:hidden" aria-hidden="true">
        {experience.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-6 bg-accent-gradient' : 'w-1.5 bg-line'}`}
          />
        ))}
      </div>
      </div>
    </Section>
  );
}
