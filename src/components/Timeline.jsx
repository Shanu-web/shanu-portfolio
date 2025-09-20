import { motion } from 'framer-motion';

const Timeline = ({ items }) => {
  return (
    <div className="relative mt-10 pl-4 sm:pl-8">
      <div className="absolute left-[6px] top-0 h-full w-px bg-gradient-to-b from-terracotta/60 to-coffee/20 dark:from-terracotta/80 dark:to-sand/20" aria-hidden />
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={`${item.company}-${item.period}`}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: index * 0.05, ease: [0.4, 0, 0.2, 1] }}
            className="relative rounded-2xl border border-coffee/10 bg-white/90 p-5 shadow-soft dark:border-sand/10 dark:bg-mocha/80"
          >
            <span className="absolute -left-[21px] top-5 inline-flex h-3 w-3 items-center justify-center rounded-full border border-white bg-terracotta shadow-soft dark:border-mocha" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-display text-lg font-semibold text-ink dark:text-sand">
                {item.role} · <span className="text-coffee dark:text-terracotta">{item.company}</span>
              </h3>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink/60 dark:text-sand/60">{item.period}</span>
            </div>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink/70 dark:text-sand/70">
              {item.achievements.map((achievement) => (
                <li key={achievement} className="flex gap-2">
                  <span className="mt-1 inline-flex h-1.5 w-1.5 flex-none rounded-full bg-coffee/60 dark:bg-terracotta/80" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
