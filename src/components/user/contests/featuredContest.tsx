import type { Contest } from "../../../pages/user/contests";

interface FeaturedProps {
  featured: Contest;
}

const FeaturedContest = ({ featured }: FeaturedProps) => {
  const FILTER = ["All", "Upcoming", "Open", "Closed"];

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="font-display font-extrabold tracking-widest text-4xl sm:text-5xl lg:text-7xl uppercase leading-tight">
          Active Contests
        </h1>
        <div className="flex items-center flex-wrap gap-2 sm:gap-4">
          {FILTER.map((btn, i) => (
            <button
              key={`btn-${i}`}
              className="px-4 sm:px-6 py-2 border border-black rounded-lg font-nav font-semibold
              hover:bg-black hover:border-black hover:text-white transition-colors ease-in duration-150 cursor-pointer text-sm sm:text-base"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>

      <div className="border-2 border-yellow-400 rounded-2xl p-5 sm:p-8 mt-7">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3 font-body flex-wrap">
              <div className="bg-green-500/10 backdrop-blur-2xl p-3 rounded-full px-6 py-1 text-green-600 text-sm">
                • Open
              </div>
              <div className="font-semibold rounded-md bg-yellow-400 px-6 py-1 text-sm">
                Featured
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl font-body">
              {featured?.title}
            </h1>
          </div>
          <div className="space-y-1 sm:space-y-4 sm:text-end">
            <span className="text-sm font-body text-gray-600 block">
              TOP PRIZE
            </span>
            <p className="font-body text-3xl sm:text-4xl font-bold">₹10,000</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-start justify-between mt-5 gap-4">
          <p className="text-sm sm:text-md text-gray-500 max-w-xl">
            Redesign a real-world app interface focusing on usability,
            accessibility, and delight. Open to all skill levels with mentorship
            available.
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <button className="px-5 py-2 rounded-xl border border-yellow-400 hover:bg-black hover:text-white hover:border-black font-semibold transition-colors ease-in duration-150 cursor-pointer text-sm">
              Details
            </button>
            <button className="px-5 py-2 rounded-xl border border-yellow-400 hover:bg-black hover:text-white hover:border-black font-semibold transition-colors ease-in duration-150 cursor-pointer text-sm">
              Enter Contest
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-start gap-6 sm:gap-10 mt-10">
          <div className="space-y-3">
            <h3 className="text-xs sm:text-sm font-body text-gray-500">
              DEADLINE
            </h3>
            <span className="text-base sm:text-lg font-body text-gray-700">
              {featured?.deadline}
            </span>
          </div>
          <div className="space-y-3">
            <h3 className="text-xs sm:text-sm font-body text-gray-500">
              ENTRIES
            </h3>
            <span className="text-base sm:text-lg font-body text-gray-700">
              {featured?.entries}
            </span>
          </div>
          <div className="space-y-3">
            <h3 className="text-xs sm:text-sm font-body text-gray-500">
              CATEGORY
            </h3>
            <span className="text-base sm:text-lg font-body text-gray-700">
              {featured?.category}
            </span>
          </div>
        </div>

        <div className="w-full h-0.5 bg-zinc-100 mt-8" />

        <div className="mt-8">
          <p className="text-sm sm:text-md font-body">
            {featured?.daysLeft} Days Left
          </p>
          <div className="w-full h-1 rounded-full bg-zinc-300 overflow-hidden mt-3">
            <div className="w-3/4 bg-gray-700 h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedContest;
