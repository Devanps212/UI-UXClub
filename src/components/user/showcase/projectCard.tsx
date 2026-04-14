import { FaEye, FaHeart } from "react-icons/fa";
import {
  linkIcons,
  categoryColors,
} from "../../../constants/user/projects/projects";
import type { Project } from "../../../types";

type Props = {
  project: Project;
  isLiked: boolean;
  onLike: (id: number) => void;
};

const ProjectCard = ({ project, isLiked, onLike }: Props) => {
  return (
    <div className="group rounded-2xl overflow-hidden border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all duration-300">
      <div className="relative h-44 overflow-hidden bg-slate-100">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />

        <div className="absolute bottom-3 left-3 flex gap-2">
          {Object.entries(project.links).map(([key, val]) => (
            <a
              key={key}
              href={val}
              className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-slate-700 hover:bg-blue-500 hover:text-white transition-all text-sm"
              title={key}
            >
              {linkIcons[key]}
            </a>
          ))}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span
            className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[project.category]}`}
          >
            {project.category}
          </span>
        </div>

        <h3 className="font-bold text-slate-800 text-base">{project.title}</h3>
        <p className="text-xs text-slate-500 mt-1 line-clamp-2">
          {project.description}
        </p>

        <div className="flex items-center justify-between mt-4 text-xs text-slate-400">
          <span>
            by{" "}
            <span className="text-blue-500 font-medium">{project.author}</span>
          </span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <FaEye /> {project.views}
            </span>
            <button
              onClick={() => onLike(project.id)}
              className={`flex items-center gap-1 transition-colors ${isLiked ? "text-red-500" : "hover:text-red-400"}`}
            >
              <FaHeart />
              {project.likes + (isLiked ? 1 : 0)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
