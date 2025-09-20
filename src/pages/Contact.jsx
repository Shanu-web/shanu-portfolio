import { motion } from 'framer-motion';

import ContactCard from '../components/ContactCard';
import SectionHeading from '../components/SectionHeading';
import useLocale from '../hooks/useLocale';
import { SOCIAL_LINKS } from '../utils/constants';

const Contact = () => {
  const { content } = useLocale();

  const socials = [
    { label: 'GitHub', href: SOCIAL_LINKS.github },
    { label: 'LinkedIn', href: SOCIAL_LINKS.linkedin },
    { label: 'X', href: SOCIAL_LINKS.x },
  ];

  return (
    <div className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow={content.nav.contact}
        title={content.contact.heading}
        description={content.contact.intro}
      />

      <div className="grid gap-8 lg:grid-cols-[1.6fr,1fr]">
        <div className="space-y-6">
          <ContactCard variant="secondary" />
          <div className="rounded-3xl border border-coffee/10 bg-white/90 p-6 text-sm leading-relaxed text-ink/70 shadow-soft dark:border-sand/10 dark:bg-mocha/80 dark:text-sand/70">
            <p>{content.contact.bookIntro}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3 }}
                  className="inline-flex items-center gap-2 rounded-full border border-coffee/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-ink transition hover:border-coffee/40 hover:text-coffee dark:border-sand/20 dark:text-sand dark:hover:text-terracotta"
                >
                  {social.label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-coffee/10 bg-gradient-to-br from-white via-white/80 to-coffee/10 p-8 text-sm leading-relaxed text-ink/70 shadow-soft dark:border-sand/10 dark:from-mocha dark:via-mocha/90 dark:to-coffee/20 dark:text-sand/70">
          <h3 className="font-display text-lg font-semibold text-ink dark:text-sand">{content.about.contactCardTitle}</h3>
          <p className="mt-4">
            {content.about.contactCardBody}
          </p>
          <p className="mt-4">
            {content.contact.availability}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
