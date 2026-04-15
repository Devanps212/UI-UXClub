import {
  FaArrowRight,
  FaCalendarAlt,
  FaFileAlt,
  FaStar,
  FaShieldAlt,
  FaTrophy,
} from "react-icons/fa";

const features = [
  {
    icon: <FaCalendarAlt />,
    title: "Web Developers",
    desc: "Build modern, responsive websites and sharpen your frontend and backend skills.",
  },
  {
    icon: <FaFileAlt />,
    title: "App Developers",
    desc: "Create powerful mobile and web apps with real-world functionality and performance.",
  },
  {
    icon: <FaStar />,
    title: "Graphic Designers",
    desc: "Design stunning visuals, branding, and UI/UX experiences that stand out.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Animators",
    desc: "Bring ideas to life with motion graphics, animations, and creative storytelling.",
  },
];

const gradientBorder = {
  border: "2px solid transparent",
  backgroundImage:
    "linear-gradient(white, white), linear-gradient(to right, #FFD700, #FFF176)",
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
};

const DesignContests = () => {
  return (
    <div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight mb-6 sm:mb-8 z-20">
        <span className="text-yellow-400">Design</span> Contests
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-white/5 hover:border-yellow-400 transition-colors rounded-xl sm:rounded-2xl p-4 sm:p-6"
            style={gradientBorder}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-yellow-400/15 flex items-center justify-center text-yellow-500 mb-3 sm:mb-4 text-sm sm:text-base">
              {f.icon}
            </div>
            <p className="text-black font-semibold mb-1 sm:mb-1.5 text-sm sm:text-base">
              {f.title}
            </p>
            <p className="text-black/50 leading-relaxed text-sm">{f.desc}</p>
          </div>
        ))}
      </div>

      <div
        className="rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 py-4 sm:py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        style={gradientBorder}
      >
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-yellow-400/25 flex items-center justify-center text-yellow-500 text-xl sm:text-2xl shrink-0">
            <FaTrophy />
          </div>
          <div>
            <p className="text-black font-semibold text-sm sm:text-base">
              Ready to compete?
            </p>
            <p className="text-black/50 text-xs sm:text-sm">
              Join the next challenge and show what you've got.
            </p>
          </div>
        </div>
        <button
          className="w-full sm:w-auto px-5 sm:px-6 py-2.5 flex items-center justify-center gap-2 text-black rounded-lg font-semibold text-sm shrink-0"
          style={{
            background: "linear-gradient(to right, #FFD700, #FFF176)",
          }}
        >
          Enter Contest <FaArrowRight className="text-xs text-yellow-700" />
        </button>
      </div>
    </div>
  );
};

export default DesignContests;
