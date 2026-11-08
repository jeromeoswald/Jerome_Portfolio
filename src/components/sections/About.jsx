import { FileText } from 'lucide-react';
import { certifications, education, personal, projects } from '../../data/portfolio';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';

const stats = [
  { value: `${projects.length}+`, label: 'Projects built' },
  { value: `${certifications.length}`, label: 'Certifications' },
  { value: `${education.length}`, label: 'Degrees' },
];

export default function About() {
  return (
    <Section id="about" labelledBy="about-title" className="overflow-hidden">
      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal className="mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative">
            <div aria-hidden="true" className="absolute -inset-3 rotate-3 rounded-[2rem] bg-accent-gradient opacity-80" />
            <img
              src={personal.image}
              alt={personal.imageAlt}
              width="640"
              height="640"
              loading="lazy"
              decoding="async"
              className="relative aspect-square w-full rounded-[2rem] border-4 border-bg object-cover shadow-lift"
            />
          </div>
        </Reveal>

        <div>
          <SectionHeading id="about-title" eyebrow="Get to Know Me" title="About Me" align="left" />
          <Reveal className="-mt-6 space-y-4 text-fluid-base text-muted">
            {personal.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>

          <Reveal as="dl" delay={0.1} className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
            {stats.map((s) => (
              <div key={s.label} className="card flex flex-col-reverse p-3 text-center sm:p-5">
                <dt className="mt-1 text-fluid-xs font-medium text-muted">{s.label}</dt>
                <dd className="font-heading text-fluid-xl font-extrabold text-gradient sm:text-3xl">{s.value}</dd>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.15} className="mt-8">
            <Button href={personal.resumeUrl}>
              <FileText className="h-4 w-4" aria-hidden="true" />
              See My Resume
            </Button>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
