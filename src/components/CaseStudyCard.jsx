import { motion } from 'framer-motion';

import useLocale from '../hooks/useLocale';

const CaseStudyCard = ({ title, summary, metrics }) => {
  const { content } = useLocale();

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
      className="flex h-full flex-col gap-6 rounded-3xl border border-coffee/10 bg-white/90 p-6 shadow-soft transition hover:-translate-y-2 hover:border-coffee/30 hover:shadow-lg dark:border-sand/10 dark:bg-mocha/80"
    >
      <div>
        <h3 className="font-display text-xl font-semibold text-ink dark:text-sand">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink/70 dark:text-sand/70">{summary}</p>
      </div>
      <div className="rounded-2xl border border-dashed border-coffee/20 bg-coffee/5 p-4 dark:border-sand/20 dark:bg-coffee/10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-coffee/70 dark:text-terracotta">
          {content.common.metrics}
        </p>
        <dl className="mt-4 space-y-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="flex items-center justify-between text-sm">
              <dt className="text-ink/70 dark:text-sand/70">{metric.label}</dt>
              <dd className="font-semibold text-ink dark:text-sand">{metric.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </motion.article>
  );
};

export default CaseStudyCard;
