import { motion } from 'framer-motion';

import useLocale from '../hooks/useLocale';

const ProjectCard = ({ title, description, tech, cta, href }) => {
  const { content } = useLocale();

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="flex h-full flex-col justify-between rounded-3xl border border-coffee/10 bg-white/90 p-6 shadow-soft transition hover:-translate-y-2 hover:border-coffee/30 hover:shadow-lg dark:border-sand/10 dark:bg-mocha/80 lg:p-7"
    >
      <div>
        <h3 className="font-display text-xl font-semibold text-ink dark:text-sand">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink/70 dark:text-sand/70">{description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="inline-flex items-center rounded-full border border-coffee/20 bg-coffee/5 px-3 py-1 text-xs font-medium text-coffee dark:border-terracotta/30 dark:bg-terracotta/10 dark:text-terracotta"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-coffee transition hover:text-roast dark:text-terracotta dark:hover:text-sand"
        >
          {cta ?? content.common.viewProject}
          <span aria-hidden>↗</span>
        </a>
      ) : (
        <div className="mt-6 flex items-center justify-between text-sm font-semibold text-coffee dark:text-terracotta">
          <span>{cta ?? content.common.viewProject}</span>
          <span aria-hidden>↗</span>
        </div>
      )}
    </motion.article>
  );
};

export default ProjectCard;
