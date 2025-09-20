import { motion } from 'framer-motion';

import useLocale from '../hooks/useLocale';
import { RESUME_URL } from '../utils/constants';

const CONTACT_INFO = {
  email: 'chshanu97@gmail.com',
  phone: '+91 (96868) 72426',
};

const ContactCard = ({ variant = 'primary' }) => {
  const { content, locale } = useLocale();

  const cardClasses =
    variant === 'secondary'
      ? 'border-dashed border-coffee/20 bg-white/70 dark:border-sand/20 dark:bg-mocha/80'
      : 'border-coffee/10 bg-white/90 shadow-soft dark:border-sand/10 dark:bg-mocha/80';

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className={`rounded-3xl border p-6 ${cardClasses}`}
    >
      <div className="space-y-4 text-sm text-ink/70 dark:text-sand/70">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-coffee/80 dark:text-terracotta">
            {content.contact.email}
          </p>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="mt-1 block text-base font-semibold text-ink transition hover:text-coffee dark:text-sand dark:hover:text-terracotta"
          >
            {CONTACT_INFO.email}
          </a>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-coffee/80 dark:text-terracotta">
            {content.contact.phone}
          </p>
          <a
            href={`tel:${CONTACT_INFO.phone.replace(/[^+\d]/g, '')}`}
            className="mt-1 block text-base font-semibold text-ink transition hover:text-coffee dark:text-sand dark:hover:text-terracotta"
          >
            {CONTACT_INFO.phone}
          </a>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-coffee/80 dark:text-terracotta">
            {content.contact.location}
          </p>
          <p className="mt-1 text-base font-semibold text-ink dark:text-sand">{content.contact.locationValue}</p>
        </div>
      </div>
      <div className="mt-6 rounded-2xl bg-coffee/5 p-4 text-sm leading-relaxed text-ink/70 dark:bg-coffee/10 dark:text-sand/70">
        <p>{content.contact.availability}</p>
        <p className="mt-3 text-xs uppercase tracking-[0.3em] text-coffee/80 dark:text-terracotta">
          {content.common.connect} · {locale.toUpperCase()}
        </p>
      </div>
      <a
        href={RESUME_URL}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-coffee px-4 py-2 text-sm font-semibold text-sand shadow-soft transition hover:-translate-y-1 hover:bg-roast focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coffee/50 dark:bg-terracotta dark:text-sand"
      >
        {content.common.downloadResume}
        <span aria-hidden>↗</span>
      </a>
    </motion.div>
  );
};

export default ContactCard;
