import { FiStar, FiMessageSquare } from "react-icons/fi";

const PROJECTS = [
  {
    id: 1,
    title: "Fintech Dashboard",
    author: "by Priya R",
    stars: 256,
    comments: 32,
    thumbnail:
      "https://api.dicebear.com/7.x/shapes/svg?seed=fintech&backgroundColor=dbeafe",
  },
  {
    id: 2,
    title: "Travel Booking App",
    author: "by Karan Mehta",
    stars: 189,
    comments: 21,
    thumbnail:
      "https://api.dicebear.com/7.x/shapes/svg?seed=travel&backgroundColor=fce7f3",
  },
  {
    id: 3,
    title: "NFT Marketplace UI",
    author: "by Neha Raj",
    stars: 146,
    comments: 18,
    thumbnail:
      "https://api.dicebear.com/7.x/shapes/svg?seed=nft&backgroundColor=1e1b4b",
  },
];

const PopularProjects = () => {
  return (
    <div className="mt-16">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-zinc-900 font-nav">
          Popular Projects
        </h2>
        <button className="text-sm font-medium text-blue-500 hover:text-black transition-colors font-nav">
          View all
        </button>
      </div>
      <div className="flex flex-col gap-3">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden flex-shrink-0 bg-zinc-100 border border-zinc-200">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-zinc-900 font-nav truncate group-hover:text-yellow-500 transition-colors">
                {project.title}
              </p>
              <p className="text-xs text-zinc-400 font-nav mt-0.5">
                {project.author}
              </p>
              <div className="flex items-center gap-3 mt-1">
                <span className="flex items-center gap-1 text-xs text-zinc-500 font-nav">
                  <FiStar className="text-yellow-400 fill-yellow-400 text-[13px]" />
                  {project.stars}
                </span>
                <span className="flex items-center gap-1 text-xs text-zinc-500 font-nav">
                  <FiMessageSquare className="text-[13px]" />
                  {project.comments}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProjects;
