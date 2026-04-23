import { useState } from "react";
import { FiPlus } from "react-icons/fi";

const Stories = () => {
  const STORIES = ["Priya S", "Tharun", "Shyam", "Dileep", "Dhinesh"];
  const [viewed, setViewed] = useState<Set<number>>(new Set());

  const markViewed = (i: number) => setViewed((prev) => new Set(prev).add(i));

  return (
    <div
      className="flex items-start gap-4 w-full overflow-x-auto pb-2 p-5"
      style={{ scrollbarWidth: "none" }}
    >
      <button className="flex flex-col items-center gap-1.5 flex-shrink-0 group">
        <div className="relative w-[62px] h-[62px]">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "transparent",
              border: "2.5px dashed #FACC15",
              animation: "spin 6s linear infinite",
            }}
          />
          <div className="absolute inset-[5px] rounded-full bg-yellow-400 flex items-center justify-center group-hover:bg-yellow-300 transition-colors">
            <FiPlus className="text-black text-xl" strokeWidth={2.5} />
          </div>
        </div>
        <span className="text-[11px] text-black font-semibold leading-none tracking-wide">
          Add
        </span>
      </button>

      <div className="w-px h-14 bg-black/10 self-center flex-shrink-0" />

      {STORIES.map((story, i) => {
        const initials = story
          .split(" ")
          .map((w: string) => w[0])
          .join("")
          .toUpperCase()
          .slice(0, 2);

        const isViewed = viewed.has(i);
        const firstName = story.split(" ")[0];

        return (
          <button
            key={i}
            onClick={() => markViewed(i)}
            className="flex flex-col items-center gap-1.5 flex-shrink-0 group"
          >
            <div className="relative w-[62px] h-[62px]">
              {!isViewed && (
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ border: "3px solid #FACC15" }}
                />
              )}

              {isViewed && (
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ border: "2.5px solid #D1D5DB" }}
                />
              )}

              <div
                className={`absolute inset-[5px] rounded-full flex items-center justify-center transition-all group-hover:scale-95 ${
                  isViewed ? "bg-white border border-gray-200" : "bg-yellow-400"
                }`}
              >
                <span
                  className={`text-sm font-bold tracking-wide ${
                    isViewed ? "text-gray-400" : "text-black"
                  }`}
                >
                  {initials}
                </span>
              </div>

              <span
                className="absolute bottom-0.5 right-0.5 w-3 h-3 rounded-full border-2 border-white"
                style={{ background: isViewed ? "#D1D5DB" : "#000" }}
              />
            </div>

            <span
              className={`text-[11px] font-semibold leading-none max-w-[64px] truncate tracking-wide transition-colors ${
                isViewed ? "text-gray-400" : "text-black"
              }`}
            >
              {firstName}
            </span>
          </button>
        );
      })}

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

export default Stories;
