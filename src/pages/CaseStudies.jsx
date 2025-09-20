import SectionHeading from '../components/SectionHeading';
import CaseStudyCard from '../components/CaseStudyCard';
import useLocale from '../hooks/useLocale';

const CaseStudies = () => {
  const { content } = useLocale();

  return (
    <div className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow={content.nav.caseStudies}
        title={content.caseStudies.heading}
        description={content.caseStudies.intro}
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {content.caseStudies.cards.map((caseStudy) => (
          <CaseStudyCard key={caseStudy.title} {...caseStudy} />
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
