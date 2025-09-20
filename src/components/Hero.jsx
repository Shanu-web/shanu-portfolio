import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import heroIllustration from '../assets/hero-brown.svg';
import useLocale from '../hooks/useLocale';
import { RESUME_URL, SOCIAL_LINKS } from '../utils/constants';

const Hero = () => {
  const { content } = useLocale();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white/70 to-sand/60 pb-16 pt-16 dark:from-mocha/60 dark:to-mocha">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-l from-coffee/5 to-transparent blur-3xl dark:from-terracotta/10 lg:block" aria-hidden />
      <div className="absolute -left-24 top-10 hidden h-72 w-72 rounded-full bg-terracotta/10 blur-3xl dark:bg-terracotta/20 lg:block" aria-hidden />
      <div className="absolute bottom-[-8rem] left-1/3 hidden h-72 w-72 rounded-full bg-coffee/10 blur-3xl dark:bg-coffee/20 lg:block" aria-hidden />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[1.65fr,1fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="lg:col-start-1"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-coffee/20 bg-white/90 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-coffee shadow-soft dark:border-sand/20 dark:bg-mocha/80 dark:text-terracotta">
            {content.hero.greeting}
          </div>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-ink dark:text-sand sm:text-5xl lg:text-[3.3rem]">
            {content.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/70 dark:text-sand/70">{content.hero.subtitle}</p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70 dark:text-sand/70">{content.hero.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/projects" className="btn-primary">
              {content.hero.buttons.projects}
            </Link>
            <Link to="/about" className="btn-secondary">
              {content.hero.buttons.about}
            </Link>
            <Link to="/contact" className="btn-secondary">
              {content.hero.buttons.contact}
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-ink/70 dark:text-sand/70">
            <span className="font-semibold text-ink dark:text-sand">{content.hero.socialTitle}</span>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-coffee/20 px-4 py-1.5 transition hover:border-coffee/40 hover:text-ink dark:border-sand/20 dark:hover:text-sand"
            >
              GitHub
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-coffee/20 px-4 py-1.5 transition hover:border-coffee/40 hover:text-ink dark:border-sand/20 dark:hover:text-sand"
            >
              LinkedIn
            </a>
            <a
              href={SOCIAL_LINKS.x}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-coffee/20 px-4 py-1.5 transition hover:border-coffee/40 hover:text-ink dark:border-sand/20 dark:hover:text-sand"
            >
              X
            </a>
            <a
              href={RESUME_URL}
              className="rounded-full border border-coffee/20 px-4 py-1.5 transition hover:border-coffee/40 hover:text-ink dark:border-sand/20 dark:hover:text-sand"
            >
              {content.common.downloadResume}
            </a>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="lg:col-start-2 lg:self-start"
        >
          <div className="relative overflow-hidden rounded-3xl border border-coffee/10 bg-white/90 p-6 shadow-soft backdrop-blur dark:border-sand/10 dark:bg-mocha/80 lg:p-7">
            <div className="absolute -right-12 -top-16 h-40 w-40 rounded-full bg-terracotta/10 blur-3xl" aria-hidden />
            <div className="absolute -left-14 bottom-6 h-36 w-36 rounded-full bg-coffee/10 blur-3xl" aria-hidden />
            <div className="flex items-center gap-4">
              <img src={heroIllustration} alt="Abstract coffee-toned illustration" className="h-24 w-24" />
              <div>
                <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-coffee/80 dark:text-terracotta">
                  {content.hero.quickFactsTitle}
                </p>
                <ul className="mt-3 space-y-2 text-xs text-ink/70 dark:text-sand/70">
                  {content.hero.quickFacts.map((fact) => (
                    <li key={fact} className="flex gap-2">
                      <span className="mt-1 inline-flex h-1.5 w-1.5 flex-none rounded-full bg-coffee/70 dark:bg-terracotta" />
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-dashed border-coffee/30 bg-coffee/5 p-4 dark:border-sand/20 dark:bg-coffee/10">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-coffee/80 dark:text-terracotta">
                {content.hero.certificationsTitle}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-ink/80 dark:text-sand/80">
                {content.hero.certifications.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 flex-none rounded-full bg-terracotta" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
};

export default Hero;
