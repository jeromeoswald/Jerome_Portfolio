import { CalendarDays, GraduationCap } from 'lucide-react';
import { education } from '../../data/portfolio';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Certifications from './Certifications';
import Skills from './Skills';

export default function Education() {
  return (
    <Section id="education" labelledBy="education-title">
      <SectionHeading
        id="education-title"
        eyebrow="Academics"
        title="Educational Qualification"
        intro="The foundations behind my work, plus the skills and certifications I keep adding to."
      />

      {/* Degrees */}
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((ed, i) => (
          <Reveal key={ed.degree} delay={i * 0.08} className="card group relative overflow-hidden p-6 sm:p-8">
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent-gradient transition-transform duration-500 group-hover:scale-x-100"
            />
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-gradient text-white shadow-glow">
                <GraduationCap className="h-6 w-6" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="inline-flex items-center gap-1.5 text-fluid-xs font-semibold text-accent">
                  <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                  {ed.start} – {ed.end}
                </p>
                <h3 className="mt-1 text-fluid-xl font-bold text-ink">{ed.degree}</h3>
                <p className="mt-1 font-medium text-ink/80">{ed.institution}</p>
              </div>
            </div>
            <p className="mt-5 text-fluid-sm text-muted">{ed.description}</p>
          </Reveal>
        ))}
      </div>

      <Skills />
      <Certifications />
    </Section>
  );
}
