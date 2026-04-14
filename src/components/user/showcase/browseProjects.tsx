import { useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import ProjectCard from "./projectCard";
import { categories } from "../../../constants/user/projects/projects";
import type { Project } from "../../../types";

type Props = {
  projects: Project[];
  likedProjects: number[];
  onLike: (id: number) => void;
};

const BrowseProjects = ({ projects, likedProjects, onLike }: Props) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = projects.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section id="browse" className="py-14 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
          <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-4 py-2 w-full md:w-80">
            <FaSearch className="text-slate-400 text-sm" />
            <input
              type="text"
              placeholder="Search projects or authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="outline-none text-sm w-full text-slate-700 placeholder:text-slate-400"
            />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <FaFilter className="text-slate-400 text-sm" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                  activeCategory === cat
                    ? "bg-blue-500 text-white border-blue-500"
                    : "border-slate-200 text-slate-600 hover:border-blue-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-slate-400">
            <p className="text-4xl mb-3">🔍</p>
            <p className="text-lg font-medium">No projects found.</p>
            <p className="text-sm">Try a different search or category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isLiked={likedProjects.includes(project.id)}
                onLike={onLike}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BrowseProjects;
