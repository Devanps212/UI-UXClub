import { FaStar } from "react-icons/fa";
import type { Project } from "../../../types";
type Props = {
  projects: Project[];
  likedProjects: number[];
  onLike: (id: number) => void;
};

const FeaturedProjects = ({ projects }: Props) => {
  return (
    <section className="py-14 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <FaStar className="text-yellow-500" />
          <h2 className="text-xl font-bold text-slate-800">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden shadow-lg border border-yellow-200 bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full bg-yellow-400 text-yellow-900">
                  ⭐ Featured
                </span>
              </div>
              <div className="p-5">
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${project.category ? "bg-blue-100 text-blue-600" : ""}`}
                >
                  {project.category}
                </span>
                <h3 className="mt-2 font-bold text-slate-800 text-lg">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-500 mt-1 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs text-slate-400">
                    by {project.author}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
