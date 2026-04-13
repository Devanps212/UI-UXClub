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
    title: "Monthly Themes",
    desc: "Fresh design challenges every month — from mobile apps to landing pages and beyond.",
  },
  {
    icon: <FaFileAlt />,
    title: "Real-World Problems",
    desc: "Tackle briefs inspired by actual industry use cases to sharpen your portfolio.",
  },
  {
    icon: <FaStar />,
    title: "Expert Feedback",
    desc: "Get critiqued by peers and seasoned designers who help you level up your craft.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Recognition & Prizes",
    desc: "Top submissions earn exciting rewards and get featured across the community.",
  },
];

const DesignContests = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-white leading-tight mb-8">
        <span className="text-[#7A38F0]">Design</span> Contests
      </h1>

      <div className="grid grid-cols-2 gap-4 mb-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-white/5 border border-white/10 hover:border-[#7A38F0]/50 transition-colors rounded-2xl p-6"
          >
            <div className="w-10 h-10 rounded-xl bg-[#7A38F0]/15 flex items-center justify-center text-[#A172F6] mb-4">
              {f.icon}
            </div>
            <p className="text-white font-semibold mb-1.5">{f.title}</p>
            <p className="text-white/50 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-linear-to-r from-[#7A38F0]/20 to-[#7A38F0]/5 border border-[#7A38F0]/40 rounded-2xl px-8 py-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-13 h-13 rounded-2xl bg-[#7A38F0]/25 flex items-center justify-center text-[#A172F6] text-2xl shrink-0">
            <FaTrophy />
          </div>
          <div>
            <p className="text-white font-semibold">Ready to compete?</p>
            <p className="text-white/50 text-sm">
              Join the next challenge and show what you've got.
            </p>
          </div>
        </div>
        <button className="px-6 py-2.5 bg-[#6331F4] flex items-center gap-2 text-white rounded-lg font-semibold text-sm shrink-0">
          Enter Contest <FaArrowRight className="text-xs" />
        </button>
      </div>
    </div>
  );
};

export default DesignContests;
