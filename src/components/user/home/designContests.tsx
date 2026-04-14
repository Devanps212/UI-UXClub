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

const DesignContests = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-black leading-tight mb-8">
        <span className="text-yellow-400">Design</span> Contests
      </h1>

      <div className="grid grid-cols-2 gap-4 mb-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-white/5 hover:border-yellow-400 transition-colors rounded-2xl p-6"
            style={{
              border: "2px solid transparent",
              backgroundImage:
                "linear-gradient(white, white), linear-gradient(to right, #FFD700, #FFF176)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
            }}
          >
            <div className="w-10 h-10 rounded-xl bg-yellow-400/15 flex items-center justify-center text-yellow-500 mb-4">
              {f.icon}
            </div>
            <p className="text-black font-semibold mb-1.5">{f.title}</p>
            <p className="text-black/50 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      <div
        className="bg-linear-to-r from-yellow-400/20 to-yellow-400/5 rounded-2xl px-8 py-5 flex items-center justify-between gap-4"
        style={{
          border: "2px solid transparent",
          backgroundImage:
            "linear-gradient(white, white), linear-gradient(to right, #FFD700, #FFF176)",
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
        }}
      >
        <div className="flex items-center gap-4">
          <div className="w-13 h-13 rounded-2xl bg-yellow-400/25 flex items-center justify-center text-yellow-500 text-2xl shrink-0">
            <FaTrophy />
          </div>
          <div>
            <p className="text-black font-semibold">Ready to compete?</p>
            <p className="text-black/50 text-sm">
              Join the next challenge and show what you've got.
            </p>
          </div>
        </div>
        <button
          className="px-6 py-2.5 flex items-center gap-2 text-black rounded-lg font-semibold text-sm shrink-0"
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
