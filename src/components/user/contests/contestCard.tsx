import type { Contest } from "../../../pages/user/contests";

interface ContestCardProps {
  contest: Contest;
}

const ContestCard = ({ contest }: ContestCardProps) => {
  return (
    <div className="w-full rounded-2xl border border-gray-300 p-4 flex flex-col h-full min-h-64">
      <div className="space-y-4">
        <div className="flex items-center justify-between font-body">
          {contest.status === "open" ? (
            <div className="bg-green-500/10 px-4 py-1 rounded-full text-green-600 text-sm">
              • Open
            </div>
          ) : contest.status === "closed" ? (
            <div className="bg-gray-200 px-4 py-1 rounded-full text-gray-600 text-sm">
              Closed
            </div>
          ) : (
            <div className="bg-black text-yellow-400 px-4 py-1 rounded-full text-sm">
              Upcoming
            </div>
          )}
          <div className="px-3 py-1 bg-yellow-400 text-black rounded-full text-sm font-semibold">
            ₹{contest.prize}
          </div>
        </div>

        <h1 className="text-lg sm:text-xl font-body font-semibold line-clamp-1">
          {contest.title}
        </h1>

        <p className="text-sm text-gray-500 line-clamp-2">
          {contest.description}
        </p>
      </div>

      <div className="mt-auto">
        <div className="w-full h-0.5 bg-zinc-100 my-4" />
        <div className="flex items-center justify-between gap-4">
          <p className="text-gray-600 text-xs sm:text-sm truncate">
            {contest.status === "open" && `Closes ${contest.deadline}`}
            {contest.status === "upcoming" && `Starts ${contest.startDate}`}
            {contest.status === "closed" && `Ended ${contest.endDate}`}
          </p>
          <button className="shrink-0 px-4 py-2 border border-yellow-400 rounded-xl hover:bg-black hover:text-white hover:border-black font-semibold transition-colors duration-150 cursor-pointer text-sm">
            {contest.status === "open" && "Enter"}
            {contest.status === "upcoming" && "Notify Me"}
            {contest.status === "closed" && "Results"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContestCard;
