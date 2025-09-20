import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import useLocale from '../hooks/useLocale';

const Projects = () => {
  const { content } = useLocale();

  return (
    <div className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow={content.nav.projects}
        title={content.projects.heading}
        description={content.projects.intro}
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {content.projects.cards.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
