import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import { personal, socials } from '../../data/portfolio';
import useTypewriter from '../../hooks/useTypewriter';
import Button from '../ui/Button';
import SocialLinks from '../ui/SocialLinks';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const role = useTypewriter(personal.roles);

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-24 pt-28 sm:pt-32 lg:pb-28"
    >
      {/* Decorative background: faded grid + soft accent glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-accent-from/20 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-accent-to/20 blur-3xl sm:h-96 sm:w-96" />
      </div>

      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        {/* Text */}
        <motion.div variants={container} initial="hidden" animate="show" className="order-2 text-center lg:order-1 lg:text-left">
          <motion.p
            variants={item}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-4 py-1.5 text-fluid-xs font-medium text-muted backdrop-blur"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-soft-ping rounded-full bg-accent-from opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-from" />
            </span>
            Open to new opportunities
          </motion.p>

          <motion.p variants={item} className="text-fluid-lg font-medium text-muted">
            {personal.greeting}
          </motion.p>

          <motion.h1 id="hero-title" variants={item} className="mt-2 text-fluid-display font-extrabold text-ink">
            {personal.name.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-gradient">{personal.name.split(' ').slice(-1)}</span>
          </motion.h1>

          <motion.p variants={item} className="mt-4 font-heading text-fluid-xl font-semibold text-ink/90">
            <span className="sr-only">Roles: {personal.roles.join(', ')}</span>
            <span aria-hidden="true">
              I&apos;m a <span className="text-accent">{role}</span>
              <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.15em] animate-blink bg-accent" />
            </span>
          </motion.p>

          <motion.p variants={item} className="mx-auto mt-5 max-w-xl text-fluid-lg text-muted lg:mx-0">
            {personal.tagline}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-3 inline-flex items-center gap-1.5 text-fluid-sm text-muted"
          >
            <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
            {personal.location}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col items-stretch gap-3 min-[420px]:flex-row min-[420px]:justify-center lg:justify-start"
          >
            <Button href={personal.resumeUrl}>
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </Button>
            <Button href="#contact" variant="outline">
              Get in Touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex justify-center lg:justify-start">
            <SocialLinks links={socials.filter((s) => s.hero)} />
          </motion.div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ scale: 0.94 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
        >
          <div className="relative w-[min(68vw,15rem)] sm:w-[18rem] lg:w-[min(26rem,100%)]">
            {/* Soft blurred glow */}
            <div aria-hidden="true" className="absolute -inset-6 rounded-full bg-accent-gradient opacity-30 blur-3xl" />
            {/* Gradient ring */}
            <div className="relative aspect-square rounded-full bg-accent-gradient p-[3px] shadow-glow">
              <div className="h-full w-full rounded-full bg-bg p-2 sm:p-2.5">
                <img
                  src={personal.image}
                  srcSet={`${personal.imageSmall} 360w, ${personal.image} 640w`}
                  sizes="(min-width: 1024px) 26rem, (min-width: 640px) 18rem, 68vw"
                  alt={personal.imageAlt}
                  width="640"
                  height="640"
                  fetchpriority="high"
                  decoding="async"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-line bg-surface px-4 py-2 text-fluid-xs font-semibold text-ink shadow-lift sm:-bottom-3 lg:left-auto lg:right-2 lg:translate-x-0">
              <span className="text-gradient font-extrabold">Data Analyst</span>
              <span className="h-3 w-px bg-line" aria-hidden="true" />
              <span>Administrator</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll-down indicator */}
      <a
        href="#experience"
        aria-label="Scroll to Work Experience"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-fluid-xs font-medium text-muted transition-colors hover:text-accent sm:flex"
      >
        <span className="flex h-10 w-6 justify-center rounded-full border-2 border-current pt-2">
          <span className="h-2 w-1 animate-scroll-dot rounded-full bg-current" />
        </span>
        Scroll
      </a>
    </section>
  );
}
