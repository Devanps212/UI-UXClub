import { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import TrendingDesigners from "./trendingDesigners";
import PopularProjects from "./popularProjects";
import JobBoard from "./jobBoard";

const TrendingAndJobs = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="lg:hidden fixed bottom-4 right-4 z-50 px-4 py-2 bg-black text-white text-sm font-semibold rounded-full shadow-lg"
        onClick={() => setOpen(true)}
      >
        Trending
      </button>

      {open && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/40"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 right-0 z-50 h-full w-72 bg-white border-l border-zinc-200 p-5 overflow-y-auto
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
          lg:static lg:translate-x-0 lg:h-auto lg:w-1/5 lg:border-none lg:p-0 lg:bg-transparent lg:overflow-visible lg:block
        `}
      >
        <button
          className="lg:hidden mb-4 p-1 text-zinc-400 hover:text-black"
          onClick={() => setOpen(false)}
        >
          <FiX className="text-xl" />
        </button>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 px-3 py-2.5 bg-zinc-50 rounded-xl border border-zinc-200 focus-within:border-zinc-400 focus-within:bg-white transition-all duration-150 flex-1">
            <FiSearch className="text-zinc-400 text-[17px] shrink-0" />
            <input
              className="bg-transparent focus:outline-none text-sm font-medium text-zinc-700 placeholder:text-zinc-400 w-full"
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

        <div className="mt-6 rounded-xl border border-zinc-200 bg-white p-4 space-y-3">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-bold text-zinc-900 font-nav">
              Employers
            </h2>
          </div>

          <p className="font-body text-zinc-500 text-sm leading-relaxed">
            Access our database of top qualified UI/UX professionals.
          </p>
          <button
            className="w-full py-2 px-4 bg-white border border-zinc-400 text-black text-xs font-bold font-nav
    uppercase tracking-wide rounded-lg hover:bg-yellow-400 hover:text-black
    transition-colors duration-150 active:scale-95"
          >
            Browse Talent →
          </button>
        </div>

        <TrendingDesigners />
        <PopularProjects />
        <JobBoard />
      </aside>
    </>
  );
};

export default TrendingAndJobs;
