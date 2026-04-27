import { FaStar } from "react-icons/fa";

const ContestWinners = () => {
  return (
    <div className="mt-5 px-4">
      <h1 className="font-display font-extrabold tracking-widest text-3xl sm:text-5xl lg:text-7xl uppercase leading-tight">
        MEET THE WINNERS
      </h1>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-4 px-6 my-5 bg-black rounded-xl">
        <div className="flex items-center gap-4">
          <FaStar className="text-yellow-400 shrink-0" />
          <span className="text-white font-body font-semibold">
            Redesign Challenge 2024
          </span>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <span className="text-gray-400">Ended · Nov 2024</span>
          <span className="bg-yellow-400 px-3 py-1 rounded-full text-sm font-semibold">
            48 Entries
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-center gap-5 mt-10 font-body">
        <div className="flex flex-col items-center justify-center gap-4 w-full rounded-xl border-2 border-gray-300 bg-gray-100 py-8 md:order-1">
          <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center font-bold text-3xl text-gray-600">
            PK
          </div>
          <div className="text-center px-4">
            <span className="bg-black text-yellow-400 text-xs font-semibold px-3 py-1 rounded-full">
              Redesign Challenge 2024
            </span>
            <h2 className="text-xl font-semibold mt-2">Priya Kumar</h2>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs text-gray-400 uppercase tracking-widest">
              Rank
            </span>
            <div className="w-12 h-12 bg-gray-400 text-white text-xl font-bold rounded-full flex items-center justify-center">
              2
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs text-gray-400 uppercase tracking-widest">
              Prize Won
            </span>
            <p className="text-xl font-bold text-gray-600">₹300</p>
          </div>
          <div className="flex flex-col items-center gap-1 px-4 text-center">
            <span className="text-xs text-gray-400 uppercase tracking-widest">
              Winning Project
            </span>
            <p className="text-sm font-semibold text-gray-700">
              Healthcare App Redesign
            </p>
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-center gap-4 w-full rounded-xl border-2 border-yellow-400 bg-yellow-100 py-8 md:order-2 md:scale-105">
          <div className="absolute left-1/2 -translate-x-1/2 -top-4 px-6 py-1 bg-yellow-400 font-body rounded-full font-bold text-sm tracking-wide">
            WINNER
          </div>
          <div className="w-24 h-24 rounded-full bg-yellow-400 border-4 border-black flex items-center justify-center font-bold text-3xl text-black">
            AS
          </div>
          <div className="text-center px-4">
            <span className="bg-black text-yellow-400 text-xs font-semibold px-3 py-1 rounded-full">
              Redesign Challenge 2024
            </span>
            <h2 className="text-2xl font-bold mt-2">Aryan Sharma</h2>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs text-gray-500 uppercase tracking-widest">
              Rank
            </span>
            <div className="w-12 h-12 bg-yellow-400 border-2 border-black text-black text-xl font-bold rounded-full flex items-center justify-center">
              1
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs text-gray-500 uppercase tracking-widest">
              Prize Won
            </span>
            <p className="text-2xl font-bold text-black">₹500</p>
          </div>
          <div className="flex flex-col items-center gap-1 px-4 text-center">
            <span className="text-xs text-gray-500 uppercase tracking-widest">
              Winning Project
            </span>
            <p className="text-sm font-semibold text-gray-800">
              FinTech Dashboard
            </p>
          </div>
          <button className="bg-black text-yellow-400 text-sm font-semibold px-5 py-2 rounded-lg mt-1">
            View Submission
          </button>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 w-full rounded-xl border-2 border-orange-300 bg-orange-50 py-8 md:order-3">
          <div className="w-20 h-20 rounded-full bg-orange-200 flex items-center justify-center font-bold text-3xl text-orange-800">
            NM
          </div>
          <div className="text-center px-4">
            <span className="bg-orange-800 text-orange-100 text-xs font-semibold px-3 py-1 rounded-full">
              Redesign Challenge 2024
            </span>
            <h2 className="text-xl font-semibold mt-2">Neha Mehta</h2>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs text-gray-400 uppercase tracking-widest">
              Rank
            </span>
            <div className="w-12 h-12 bg-orange-300 text-orange-900 text-xl font-bold rounded-full flex items-center justify-center">
              3
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs text-gray-400 uppercase tracking-widest">
              Prize Won
            </span>
            <p className="text-xl font-bold text-orange-800">₹200</p>
          </div>
          <div className="flex flex-col items-center gap-1 px-4 text-center">
            <span className="text-xs text-gray-400 uppercase tracking-widest">
              Winning Project
            </span>
            <p className="text-sm font-semibold text-gray-700">
              EdTech Mobile UI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestWinners;
