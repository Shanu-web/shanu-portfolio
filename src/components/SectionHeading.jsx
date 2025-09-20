import { motion } from 'framer-motion';

const alignmentClassMap = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right ml-auto',
};

const accentAlignmentMap = {
  left: 'justify-start',
  center: 'justify-center',
  right: 'justify-end',
};

const SectionHeading = ({ eyebrow, title, description, align = 'left' }) => {
  const alignmentClass = alignmentClassMap[align] ?? alignmentClassMap.left;
  const accentAlignment = accentAlignmentMap[align] ?? accentAlignmentMap.left;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true, margin: '-80px' }}
      className={`mx-auto max-w-3xl ${alignmentClass}`}
    >
      {eyebrow && (
        <div className={`mb-2 flex items-center gap-3 ${accentAlignment}`}>
          <span className="hidden h-px w-12 bg-gradient-to-r from-terracotta/60 via-coffee/60 to-transparent sm:block" aria-hidden />
          <span className="font-display text-xs uppercase tracking-[0.3em] text-coffee/80 dark:text-terracotta">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="mt-2 font-display text-3xl font-semibold text-ink dark:text-sand sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-base leading-relaxed text-ink/70 dark:text-sand/70">{description}</p>}
    </motion.div>
  );
};

export default SectionHeading;
