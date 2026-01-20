import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";

const ProjectDetails = () => {
  const { id } = useParams();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="mb-4">Project not found</p>
        <Link to="/" className="text-primary underline">
          Go Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-textSecondary mb-6">{project.description}</p>

      <div className="mb-6">
        <strong>Tech Stack:</strong> {project.tech.join(", ")}
      </div>

      <div className="flex gap-4">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Live Demo
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
