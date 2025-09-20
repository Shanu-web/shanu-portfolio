import SectionHeading from '../components/SectionHeading';
import Timeline from '../components/Timeline';
import useLocale from '../hooks/useLocale';
import ContactCard from '../components/ContactCard';

const About = () => {
  const { content } = useLocale();

  return (
    <div className="mx-auto max-w-7xl space-y-20 px-4 pb-24 pt-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow={content.nav.about}
        title={content.about.bioTitle}
        description={content.about.bioParagraphs[0]}
      />

      <div className="grid gap-10 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-6 text-base leading-relaxed text-ink/70 dark:text-sand/70">
          {content.about.bioParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="mt-8 rounded-3xl border border-coffee/10 bg-white/90 p-6 shadow-soft dark:border-sand/10 dark:bg-mocha/80">
            <h3 className="font-display text-lg font-semibold text-ink dark:text-sand">{content.about.skillsTitle}</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {content.about.skills.map((skill) => (
                <li key={skill} className="flex gap-2 text-ink/70 dark:text-sand/70">
                  <span className="mt-1 inline-flex h-1.5 w-1.5 flex-none rounded-full bg-terracotta" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-coffee/10 bg-coffee/5 p-6 shadow-soft dark:border-sand/10 dark:bg-coffee/10">
            <h3 className="font-display text-lg font-semibold text-ink dark:text-sand">{content.about.certificationsTitle}</h3>
            <ul className="mt-4 grid gap-3 text-sm text-ink/70 dark:text-sand/70 sm:grid-cols-2">
              {content.hero.certifications.map((cert) => (
                <li key={cert} className="rounded-xl border border-coffee/20 bg-white/80 px-3 py-2 dark:border-sand/20 dark:bg-mocha/80">
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="space-y-6">
          <ContactCard />
          <div className="rounded-3xl border border-dashed border-coffee/20 bg-white/80 p-6 text-sm leading-relaxed text-ink/70 shadow-soft dark:border-sand/20 dark:bg-mocha/80 dark:text-sand/70">
            <h3 className="font-display text-lg font-semibold text-ink dark:text-sand">{content.about.contactCardTitle}</h3>
            <p className="mt-3">{content.about.contactCardBody}</p>
          </div>
        </div>
      </div>

      <div>
        <SectionHeading
          eyebrow={content.about.heading}
          title={content.about.timelineTitle}
        />
        <Timeline items={content.about.timeline} />
      </div>
    </div>
  );
};

export default About;
