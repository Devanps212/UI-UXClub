import {
  FaArrowRight,
  FaCommentDots,
  FaCheckCircle,
  FaUsers,
  FaInfoCircle,
} from "react-icons/fa";

const items = [
  {
    icon: <FaCommentDots />,
    title: "Guest Talks by Industry Experts",
    desc: "Hear directly from seasoned designers and product leaders sharing real insights.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Workshops & Live Design Sessions",
    desc: "Hands-on practice with guided walkthroughs on tools, flows, and methodologies.",
  },
  {
    icon: <FaUsers />,
    title: "Networking with Fellow Designers",
    desc: "Build genuine connections with a growing community of creatives and collaborators.",
  },
  {
    icon: <FaInfoCircle />,
    title: "Portfolio Reviews & Feedback",
    desc: "Get constructive critique from peers and mentors to sharpen your work.",
  },
];

const MonthlyMeetups = () => {
  return (
    <section className="grid grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-5xl font-bold text-white leading-tight mb-3">
          Monthly
          <br />
          <span className="text-[#7A38F0]">Meetups</span>
        </h1>

        <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-xs">
          Connect, collaborate, and learn together. Be part of a thriving design
          community.
        </p>

        <div className="flex items-center gap-6 mb-8">
          {[
            ["12+", "Events/year"],
            ["200+", "Members"],
            ["40+", "Speakers"],
          ].map(([num, label], i, arr) => (
            <div key={label} className="flex items-center gap-6">
              <div>
                <p className="text-2xl font-bold text-[#A172F6]">{num}</p>
                <p className="text-white/45 text-xs uppercase tracking-wider">
                  {label}
                </p>
              </div>
              {i < arr.length - 1 && <div className="w-px h-8 bg-white/10" />}
            </div>
          ))}
        </div>

        <button className="px-6 py-3 bg-[#6331F4] flex items-center gap-2 text-white rounded-xl font-semibold text-sm">
          Join Community <FaArrowRight className="text-xs" />
        </button>
      </div>

      <div className="flex flex-col gap-3.5">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex items-start gap-4 bg-white/[0.04] border border-white/[0.08] hover:border-[#7A38F0]/45 transition-colors rounded-2xl px-5 py-4"
          >
            <div className="w-10 h-10 rounded-xl bg-[#7A38F0]/15 flex items-center justify-center text-[#A172F6] shrink-0 mt-0.5">
              {item.icon}
            </div>
            <div>
              <p className="text-white font-semibold text-sm mb-1">
                {item.title}
              </p>
              <p className="text-white/45 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MonthlyMeetups;
