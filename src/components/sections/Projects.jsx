import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, ExternalLink as ExternalIcon } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { githubProfile, projects } from '../../data/portfolio';
import Button from '../ui/Button';
import Chip from '../ui/Chip';
import ExternalLink from '../ui/ExternalLink';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';

const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

const initials = (title) =>
  title
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

/** Branded generated thumbnail, used when a project has no screenshot. */
function ProjectCover({ title, index }) {
  const variant = index % 4;
  const id = `cover-${index}`;
  return (
    <svg viewBox="0 0 400 225" className="h-full w-full" role="img" aria-label={`${title} cover illustration`}>
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="rgb(var(--accent-from))" />
          <stop offset="1" stopColor="rgb(var(--accent-to))" />
        </linearGradient>
        <pattern id={`${id}-p`} width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill="white" fillOpacity="0.22" />
        </pattern>
      </defs>
      <rect width="400" height="225" fill={`url(#${id}-g)`} />
      <rect width="400" height="225" fill={`url(#${id}-p)`} />
      {variant === 0 && <circle cx="340" cy="40" r="90" fill="white" fillOpacity="0.1" />}
      {variant === 1 && <rect x="250" y="-40" width="200" height="200" rx="40" transform="rotate(20 350 60)" fill="white" fillOpacity="0.1" />}
      {variant === 2 && <circle cx="60" cy="200" r="110" fill="white" fillOpacity="0.1" />}
      {variant === 3 && <path d="M0 170 Q100 120 200 170 T400 160 V225 H0Z" fill="white" fillOpacity="0.12" />}
      {/* Mini browser window */}
      <g transform="translate(110 52)">
        <rect width="180" height="122" rx="12" fill="white" fillOpacity="0.16" stroke="white" strokeOpacity="0.35" />
        <circle cx="16" cy="15" r="3.5" fill="white" fillOpacity="0.7" />
        <circle cx="28" cy="15" r="3.5" fill="white" fillOpacity="0.5" />
        <circle cx="40" cy="15" r="3.5" fill="white" fillOpacity="0.35" />
        <text
          x="90"
          y="82"
          textAnchor="middle"
          fontFamily="Plus Jakarta Sans, sans-serif"
          fontWeight="800"
          fontSize="40"
          fill="white"
        >
          {initials(title)}
        </text>
      </g>
    </svg>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="card group flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lift"
    >
      <div className="relative aspect-video overflow-hidden border-b border-line">
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
          {project.image ? (
            <img
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              loading="lazy"
              decoding="async"
              width="800"
              height="450"
              className="h-full w-full object-cover"
            />
          ) : (
            <ProjectCover title={project.title} index={index} />
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-fluid-lg font-bold text-ink">{project.title}</h3>
          <ArrowUpRight
            className="mt-1 h-5 w-5 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            aria-hidden="true"
          />
        </div>
        <p className="mt-2 flex-1 text-fluid-sm text-muted">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tech stack">
          {project.tags.map((t) => (
            <li key={t}>
              <Chip>{t}</Chip>
            </li>
          ))}
        </ul>

        {project.lastUpdated && (
          <p className="mt-4 inline-flex items-center gap-1.5 text-fluid-xs text-muted">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            Last updated <time dateTime={project.lastUpdated}>{formatDate(project.lastUpdated)}</time>
          </p>
        )}

        <div className="mt-5 grid grid-cols-2 gap-3">
          {project.liveDemo ? (
            <ExternalLink
              href={project.liveDemo}
              aria-label={`Live demo of ${project.title} (opens in a new tab)`}
              className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full bg-button-gradient px-3 text-fluid-sm font-semibold text-white transition hover:brightness-110"
            >
              <ExternalIcon className="h-4 w-4" aria-hidden="true" />
              Live Demo
            </ExternalLink>
          ) : (
            <span
              className="inline-flex min-h-11 cursor-not-allowed items-center justify-center gap-1.5 rounded-full border border-dashed border-line px-3 text-fluid-sm font-medium text-muted"
              title="Live demo coming soon"
            >
              <ExternalIcon className="h-4 w-4" aria-hidden="true" />
              Demo soon
            </span>
          )}
          <ExternalLink
            href={project.sourceCode}
            aria-label={`Source code of ${project.title} on GitHub (opens in a new tab)`}
            className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full border border-line px-3 text-fluid-sm font-semibold text-ink transition hover:border-accent/60 hover:text-accent"
          >
            <FaGithub className="h-4 w-4" aria-hidden="true" />
            Source Code
          </ExternalLink>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" labelledBy="projects-title" className="bg-surface-2/40">
      <SectionHeading
        id="projects-title"
        eyebrow="What I've Built"
        title="Featured Projects"
        intro="A selection of things I've designed and developed, from small UI builds to full-stack apps."
      />

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal as="li" key={p.title} delay={(i % 3) * 0.08} className="h-full">
            <ProjectCard project={p} index={i} />
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-12 flex justify-center">
        <Button href={githubProfile} variant="outline">
          <FaGithub className="h-4 w-4" aria-hidden="true" />
          View More on GitHub
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
        </Button>
      </Reveal>
    </Section>
  );
}
