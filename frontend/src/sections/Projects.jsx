import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="relative py-32 overflow-hidden bg-bg">
      {/* Background glows */}
      <div className="absolute top-20 left-1/4 w-[420px] h-[420px] bg-primary/15 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-1/4 w-[360px] h-[360px] bg-secondary/15 blur-[100px] rounded-full" />

      <div className="relative px-6 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <h2 className="text-4xl font-extrabold md:text-5xl text-textPrimary">
            Projects
          </h2>
          <p className="mt-5 text-lg text-textSecondary">
            A selection of real-world projects built using the MERN stack and
            modern web technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
