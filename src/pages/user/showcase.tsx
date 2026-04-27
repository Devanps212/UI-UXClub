import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CategoryButtons from "../../components/user/showcase/actionButtons/categoryButtons";
import Projects from "../../components/user/showcase/projects";
import ShowcaseFilter from "../../components/user/showcase/showcaseFilter";
import ShowcaseStatistics from "../../components/user/showcase/statistics";

const Showcase = () => {
  return (
    <div className="space-y-8 pb-10">
      <section className="flex items-center justify-between pb-4 px-6 md:px-16 lg:px-24">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-0.5 bg-yellow-400" />
            <span className="font-body text-yellow-500 text-sm font-semibold tracking-widest uppercase">
              Design ShowCase
            </span>
          </div>
          <h1 className="font-display text-[clamp(4rem,12vw,8rem)] leading-none tracking-wide text-black">
            DESIGN <br /> SHOWCASE
          </h1>
          <p className="font-body text-zinc-600 text-lg max-w-xl mt-2 font-light">
            Share your work, inspire others, and explore what creators like you
            are building.
          </p>
        </div>
        <div className="space-y-2">
          <button
            className="block text-lg px-6 py-2 rounded-lg border border-zinc-400 
          bg-white font-semibold font-nav hover:bg-black hover:text-white transition-colors 
          ease-in duration-150 cursor-pointer"
          >
            + Share Project Link
          </button>
          <span className="text-sm text-gray-500 font-nav">
            Share with 2,400+ designers
          </span>
        </div>
      </section>
      <ShowcaseStatistics />
      <CategoryButtons />
      <div className="flex items-center gap-3 pb-4 px-6 md:px-16 lg:px-24 divide-x divide-zinc-200">
        <ShowcaseFilter />
        <Projects />
      </div>
      <div className="flex items-center justify-center gap-2">
        <button
          className="w-8 h-8 flex items-center justify-center text-sm font-semibold font-nav
        border border-zinc-300 rounded-md bg-black text-white
        hover:bg-yellow-400 hover:border-yellow-400 hover:text-black
        transition-colors duration-150 cursor-pointer"
        >
          <FaChevronLeft />
        </button>
        {Array.from({ length: 6 }).map((_, i) => (
          <button
            key={i}
            className="w-8 h-8 flex items-center justify-center text-sm font-semibold font-nav
        border border-zinc-300 rounded-md bg-white text-black
        hover:bg-yellow-400 hover:border-yellow-400 hover:text-black
        transition-colors duration-150 cursor-pointer"
          >
            {i + 1}
          </button>
        ))}
        <button
          className="w-8 h-8 flex items-center justify-center text-sm font-semibold font-nav
        border border-zinc-300 rounded-md bg-black text-white
        hover:bg-yellow-400 hover:border-yellow-400 hover:text-black
        transition-colors duration-150 cursor-pointer"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Showcase;
