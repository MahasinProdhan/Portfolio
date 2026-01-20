import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

const ProjectDetails = () => {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-textSecondary">Project not found</p>
      </div>
    );
  }

  return (
    <section className="py-32 bg-bg">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-textPrimary">{project.title}</h1>
        <p className="mt-4 text-textSecondary">{project.description}</p>
      </div>
    </section>
  );
};

export default ProjectDetails;
