import type { SLIDES } from "../../../constants";

const SlideCard = ({
  slide,
  type,
  onClick,
}: {
  slide: (typeof SLIDES)[0];
  type: "center" | "side";
  onClick?: () => void;
}) => {
  const isCenter = type === "center";

  return (
    <div
      onClick={onClick}
      className={`
        relative flex flex-col justify-between rounded-3xl overflow-hidden p-6
        transition-all duration-300 select-none
        ${
          isCenter
            ? "w-80 h-96 z-10 -mx-6 border-2 border-white shadow-[0_20px_50px_rgba(245,158,11,0.5)] cursor-default"
            : "w-44 h-64 z-0 opacity-80 hover:opacity-100 cursor-pointer border border-yellow-200 shadow-md hover:shadow-yellow-200/50 shrink-0"
        }
      `}
      style={
        isCenter
          ? { background: "linear-gradient(145deg, #fbbf24, #f59e0b)" }
          : { background: "#ffffff" }
      }
    >
      {isCenter && (
        <>
          <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/10 pointer-events-none" />
          <div className="absolute -bottom-10 -left-6 w-32 h-32 rounded-full bg-white/[0.08] pointer-events-none" />
        </>
      )}

      <span
        className={`
          relative z-10 self-start text-xs font-bold tracking-widest uppercase 
          px-3 py-1.5 rounded-full transition-all
          ${
            isCenter
              ? "bg-white/30 text-yellow-900 text-sm"
              : "bg-yellow-50 text-yellow-800"
          }
        `}
      >
        {slide.tag}
      </span>

      <span
        className={`relative z-10 transition-all duration-300 ${
          isCenter ? "text-6xl" : "text-4xl"
        }`}
      >
        {slide.icon}
      </span>

      <div className="relative z-10 space-y-2">
        <p
          className={`font-bold leading-tight transition-all ${
            isCenter ? "text-xl md:text-2xl" : "text-sm"
          }`}
        >
          {slide.title}
        </p>
        <p
          className={`leading-snug transition-all ${
            isCenter ? "text-sm text-black/70" : "text-xs text-gray-500"
          }`}
        >
          {slide.desc}
        </p>
      </div>

      <div
        className={`
          relative z-10 w-9 h-9 rounded-2xl flex items-center justify-center 
          text-xl font-bold self-start transition-all hover:scale-110
          ${
            isCenter
              ? "bg-black text-yellow-400"
              : "bg-yellow-50 text-yellow-800 border border-yellow-200"
          }
        `}
      >
        →
      </div>
    </div>
  );
};

export default SlideCard;
