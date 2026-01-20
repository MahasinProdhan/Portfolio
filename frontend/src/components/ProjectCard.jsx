import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const {
    title,
    subtitle,
    shortDescription,
    techStack,
    image,
    githubLink,
    liveLink,
    slug,
    status,
  } = project;

  return (
    <div
      className="group relative rounded-2xl overflow-hidden
                 bg-white/90 backdrop-blur-xl
                 border border-border
                 shadow-soft
                 transition-all duration-300
                 hover:shadow-xl hover:-translate-y-1"
    >
      {/* Project Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover
                     transition-transform duration-500
                     group-hover:scale-105"
        />

        {/* 🔥 Show badge ONLY if project is ongoing */}
        {status === "Ongoing" && (
          <span
            className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold
                       rounded-full bg-yellow-100 text-yellow-700
                       border border-yellow-300 backdrop-blur"
          >
            Ongoing
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-textPrimary">{title}</h3>
          <p className="text-sm text-textSecondary">{subtitle}</p>
        </div>

        <p className="text-sm text-textSecondary leading-relaxed">
          {shortDescription}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {techStack.slice(0, 5).map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-medium
                         rounded-full
                         bg-primary/10 text-primary
                         border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="pt-4 flex items-center justify-between">
          <Link
            to={`/projects/${slug}`}
            className="text-sm font-semibold text-primary
                       hover:underline"
          >
            View Details →
          </Link>

          <div className="flex items-center gap-3">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-textSecondary hover:text-primary transition"
              >
                <FaGithub />
              </a>
            )}

            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-textSecondary hover:text-primary transition"
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
