import { FiSearch } from "react-icons/fi";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import TrendingDesigners from "./trendingDesigners";
import PopularProjects from "./popularProjects";
import JobBoard from "./jobBoard";

const TrendingAndJobs = () => {
  return (
    <div className="w-1/5 rounded-xl">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 px-3 py-2.5 bg-zinc-50 rounded-xl border border-zinc-200 focus-within:border-zinc-400 focus-within:bg-white transition-all duration-150">
          <FiSearch className="text-zinc-400 text-[17px] shrink-0" />
          <input
            className="bg-transparent focus:outline-none text-sm font-medium text-zinc-700 placeholder:text-zinc-400 w-48"
            placeholder="Search"
            type="text"
          />
        </div>

        <button
          className="flex items-center justify-center px-3 py-2.5 bg-zinc-100 border border-zinc-200
          rounded-xl text-zinc-500 hover:bg-zinc-200 hover:text-black transition-all duration-150 active:scale-95"
        >
          <HiAdjustmentsHorizontal className="text-[17px]" />
        </button>
      </div>
      <TrendingDesigners />
      <PopularProjects />
      <JobBoard />
    </div>
  );
};

export default TrendingAndJobs;
