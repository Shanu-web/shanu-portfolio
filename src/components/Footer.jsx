import { motion } from 'framer-motion';

import useLocale from '../hooks/useLocale';
import { SOCIAL_LINKS } from '../utils/constants';

const socials = [
  { label: 'GitHub', href: SOCIAL_LINKS.github, handle: '@Shanu-web' },
  { label: 'LinkedIn', href: SOCIAL_LINKS.linkedin, handle: '/in/shanu-connect' },
  { label: 'X', href: SOCIAL_LINKS.x, handle: '@shanu40' },
];

const Footer = () => {
  const { content } = useLocale();
  const year = new Date().getFullYear();
  const rights = content.footer.rights.replace('{{year}}', String(year));

  return (
    <footer className="border-t border-coffee/10 bg-white/70 py-12 dark:border-sand/10 dark:bg-mocha/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-lg font-semibold text-ink dark:text-sand">{content.nav.brand}</h2>
            <p className="mt-2 max-w-xl text-sm text-ink/70 dark:text-sand/70">{content.footer.tagline}</p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3 }}
                className="rounded-xl border border-coffee/10 bg-white/80 px-4 py-3 text-sm text-ink shadow-soft transition hover:border-coffee/30 dark:border-sand/20 dark:bg-mocha/80 dark:text-sand"
              >
                <span className="font-semibold">{social.label}</span>
                <span className="block text-xs text-ink/60 dark:text-sand/60">{social.handle}</span>
              </motion.a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 border-t border-coffee/10 pt-6 text-xs text-ink/60 dark:border-sand/10 dark:text-sand/60 sm:flex-row sm:items-center sm:justify-between">
          <span>{content.footer.builtWith}</span>
          <span>{rights}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
