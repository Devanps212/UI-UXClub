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

const gradientBorder = {
  border: "2px solid transparent",
  backgroundImage:
    "linear-gradient(white, white), linear-gradient(to right, #FFD700, #FFF176)",
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
};

const MonthlyMeetups = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 items-center">
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight mb-3">
          Monthly
          <br />
          <span className="text-yellow-400">Meetups</span>
        </h1>

        <p className="text-black/50 text-sm leading-relaxed mb-6 sm:mb-8 max-w-xs">
          Connect, collaborate, and learn together. Be part of a thriving design
          community.
        </p>

        <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
          {[
            ["12+", "Events/year"],
            ["200+", "Members"],
            ["40+", "Speakers"],
          ].map(([num, label], i, arr) => (
            <div key={label} className="flex items-center gap-4 sm:gap-6">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-yellow-500">
                  {num}
                </p>
                <p className="text-black/45 text-xs uppercase tracking-wider">
                  {label}
                </p>
              </div>
              {i < arr.length - 1 && <div className="w-px h-8 bg-black/10" />}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <button
            className="px-5 sm:px-6 py-3 flex items-center justify-center gap-2 text-black rounded-xl font-semibold text-sm"
            style={{
              background: "linear-gradient(to right, #FFD700, #FFF176)",
            }}
          >
            Join Community <FaArrowRight className="text-xs text-yellow-700" />
          </button>

          <button className="px-5 sm:px-6 py-3 flex items-center justify-center gap-2 text-yellow-600 rounded-xl font-semibold text-sm border border-yellow-400 hover:bg-yellow-50 transition">
            Book Appointment <FaArrowRight className="text-xs" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:gap-3.5">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex items-start gap-3 sm:gap-4 transition-colors rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4"
            style={gradientBorder}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-yellow-400/15 flex items-center justify-center text-yellow-500 shrink-0 mt-0.5 text-sm sm:text-base">
              {item.icon}
            </div>
            <div>
              <p className="text-black font-semibold text-sm mb-1">
                {item.title}
              </p>
              <p className="text-black/45 leading-relaxed text-xs sm:text-sm">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MonthlyMeetups;
