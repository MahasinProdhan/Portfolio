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
    status,
  } = project;

  return (
    <div className="relative overflow-hidden transition-all duration-300 border group rounded-2xl bg-white/90 backdrop-blur-xl border-border shadow-soft hover:shadow-xl hover:-translate-y-1">
      {/* Project Image */}
      <div className="relative overflow-hidden h-52">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
        />

        {/* 🔥 Show badge ONLY if project is ongoing */}
        {status === "Ongoing" && (
          <span className="absolute px-3 py-1 text-xs font-semibold text-yellow-700 bg-yellow-100 border border-yellow-300 rounded-full top-4 left-4 backdrop-blur">
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

        <p className="text-sm leading-relaxed text-textSecondary">
          {shortDescription}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {techStack.slice(0, 7).map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-medium border rounded-full bg-primary/10 text-primary border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex justify-end pt-4">
          <div className="flex flex-wrap items-center justify-end gap-3">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View source code for ${title}`}
                title="View Source Code"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-textSecondary transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:border-primary/30 hover:bg-primary/5 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                <FaGithub className="text-base" aria-hidden="true" />
                <span>Code</span>
              </a>
            )}

            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open live project for ${title}`}
                title="Open Project"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                <FaExternalLinkAlt className="text-sm" aria-hidden="true" />
                <span>View Project</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
