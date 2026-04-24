import { FiStar, FiMessageSquare } from "react-icons/fi";
import type { Project } from "../../../types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const initials = project.creator
    .split(" ")
    .map((s) => s[0])
    .join("");

  return (
    <div className="rounded-xl border border-zinc-200 overflow-hidden bg-white hover:shadow-[4px_4px_0px_#f5c800] hover:border-black transition-all duration-200 group">
      {/* Thumbnail */}
      <div className="w-full h-44 bg-zinc-100 relative overflow-hidden">
        <img
          src={project.thumbnail}
          className="w-full h-full object-cover"
          alt={project.title}
        />
        {/* Diagonal stripe overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, #f5c800, #f5c800 1px, transparent 1px, transparent 12px)",
          }}
        />
      </div>

      {/* Body */}
      <div className="p-4 border-b border-zinc-100">
        <h2 className="font-semibold font-nav text-base text-black leading-snug mb-2">
          {project.title}
        </h2>

        {/* Keywords */}
        <div className="flex items-center flex-wrap gap-1 font-body">
          {project.keywords.map((key, i) => (
            <span
              key={`key-${i}`}
              className={`text-[11px] font-bold uppercase tracking-wide px-2 py-1 rounded
                ${i === 0 ? "bg-black text-yellow-400" : ""}
                ${i === 1 ? "bg-yellow-400 text-black" : ""}
                ${i === 2 ? "border border-black text-black bg-transparent" : ""}
              `}
            >
              {key}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* Creator */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-yellow-400 text-xs font-bold font-nav flex-shrink-0">
            {initials}
          </div>
          <span className="text-sm text-zinc-500 font-body">
            {project.creator}
          </span>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-yellow-600 text-sm font-semibold">
            <FiStar size={13} />
            <span>{project.stars}</span>
          </div>
          <div className="flex items-center gap-1 text-zinc-400 text-sm font-semibold">
            <FiMessageSquare size={13} />
            <span>{project.comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
