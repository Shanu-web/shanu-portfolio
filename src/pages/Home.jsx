import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import CaseStudyCard from '../components/CaseStudyCard';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/SectionHeading';
import useLocale from '../hooks/useLocale';

const Home = () => {
  const { content } = useLocale();

  return (
    <div className="space-y-24 pb-24">
      <Hero />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={content.nav.projects}
          title={content.projects.heading}
          description={content.projects.intro}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {content.projects.cards.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <div className="mt-6 flex justify-end">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-coffee transition hover:text-roast dark:text-terracotta dark:hover:text-sand"
          >
            {content.common.explore}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={content.nav.caseStudies}
          title={content.caseStudies.heading}
          description={content.caseStudies.intro}
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {content.caseStudies.cards.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.title} {...caseStudy} />
          ))}
        </div>
        <div className="mt-6 flex justify-end">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-coffee transition hover:text-roast dark:text-terracotta dark:hover:text-sand"
          >
            {content.common.explore}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-coffee/5 via-sand to-coffee/5 py-16 dark:from-mocha dark:via-mocha/90 dark:to-mocha">
        <div className="absolute inset-0 bg-grain opacity-40" aria-hidden />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-2xl">
            <SectionHeading
              eyebrow={content.nav.contact}
              title={content.contact.heading}
              description={content.contact.intro}
            />
          </div>
          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-full bg-coffee px-6 py-3 text-sm font-semibold text-sand shadow-soft transition hover:bg-roast dark:bg-terracotta"
          >
            <Link to="/contact" className="flex items-center gap-2">
              {content.hero.buttons.contact}
              <span aria-hidden>↗</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
