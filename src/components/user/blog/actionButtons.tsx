import { useState } from "react";
import {
  FiStar,
  FiMessageSquare,
  FiShare2,
  FiMoreHorizontal,
} from "react-icons/fi";

const ActionBar = () => {
  const [starred, setStarred] = useState(false);
  const [stars, setStars] = useState(36);

  const toggleStar = () => {
    setStarred((p) => !p);
    setStars((p) => (starred ? p - 1 : p + 1));
  };

  return (
    <div className="flex items-center justify-between mt-5 pt-4 border-t border-zinc-100">
      <div className="flex items-center gap-3">
        {/* Star pill */}
        <button
          onClick={toggleStar}
          className={`flex items-center gap-2 h-11 pl-4 pr-5 rounded-full text-[15px] font-semibold font-nav
            transition-all duration-200 active:scale-95
            ${
              starred
                ? "bg-yellow-400 text-black shadow-sm shadow-yellow-200"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
            }`}
        >
          <FiStar
            className={`text-[18px] transition-all ${starred ? "fill-black stroke-black" : ""}`}
          />
          <span className="tabular-nums">{stars}</span>
        </button>

        {/* Comment pill */}
        <button
          className="flex items-center gap-2 h-11 pl-4 pr-5 rounded-full bg-zinc-100 text-zinc-600
            text-[15px] font-semibold font-nav hover:bg-zinc-200 transition-all duration-200 active:scale-95"
        >
          <FiMessageSquare className="text-[18px]" />
          <span>3</span>
        </button>

        {/* Share */}
        <button
          className="flex items-center justify-center w-11 h-11 rounded-full bg-zinc-100 text-zinc-600
            hover:bg-zinc-200 transition-all duration-200 active:scale-95"
        >
          <FiShare2 className="text-[18px]" />
        </button>
      </div>

      {/* More */}
      <button
        className="flex items-center justify-center w-11 h-11 rounded-full text-zinc-400
          hover:bg-zinc-100 hover:text-black transition-all duration-200 active:scale-95"
      >
        <FiMoreHorizontal className="text-[22px]" />
      </button>
    </div>
  );
};

export default ActionBar;
