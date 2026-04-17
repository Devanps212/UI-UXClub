const members = [
  { initials: "AR", name: "Anika R.", role: "Visual Designer", dark: true },
  { initials: "KM", name: "Karan M.", role: "UX Researcher", dark: false },
  { initials: "PS", name: "Priya S.", role: "Product Designer", dark: true },
  { initials: "JL", name: "Jay L.", role: "Motion Designer", dark: false },
  { initials: "NB", name: "Neha B.", role: "UI Lead", dark: true },
];

const stats = [
  { num: "500+", label: "Active members" },
  { num: "40+", label: "Events held" },
  { num: "12+", label: "Workshops / year" },
];

const GrowCommunity = () => {
  return (
    <section className="relative w-full overflow-hidden flex flex-col justify-center px-6 sm:px-12 md:px-24">
      {/* Large background text */}
      <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[11rem] font-black text-black/3 select-none leading-none pointer-events-none tracking-tighter whitespace-nowrap">
        COMMUNITY
      </span>

      {/* Dashed decorative squares */}
      <div className="hidden sm:block absolute right-20 top-16 w-28 h-28 border-[3px] border-dashed border-black/10 rotate-12 pointer-events-none" />
      <div className="absolute right-52 bottom-20 w-14 h-14 border-[3px] border-dashed border-black/10 rotate-45 pointer-events-none" />

      <div className="relative z-10 max-w-4xl w-full">
        {/* Heading */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight text-black mb-6">
          Grow a<br />
          <span className="text-yellow-400">Community.</span>
        </h2>

        <p className="text-black/50 text-lg sm:text-xl max-w-lg leading-relaxed mb-10">
          Real people. Real feedback. Connect with designers at every level,
          share your work, and build together — not in isolation.
        </p>

        {/* Member pill cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {members.map((m, i) => (
            <div
              key={i}
              className="group flex items-center gap-2.5 border border-black/10 hover:border-black rounded-full px-3 py-2 pr-4 cursor-pointer transition-all duration-200 hover:-translate-y-1"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 ${
                  m.dark ? "bg-black text-white" : "bg-yellow-400 text-black"
                }`}
              >
                {m.initials}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-black leading-tight">
                  {m.name}
                </span>
                <span className="text-[11px] text-black/35">{m.role}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="flex flex-wrap w-full border border-black/10 rounded-2xl overflow-hidden mb-10">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`flex-1 min-w-30 px-5 py-4 ${
                i !== stats.length - 1
                  ? "border-b border-r-0 sm:border-b-0 sm:border-r border-black/10"
                  : ""
              }`}
            >
              <div className="text-2xl font-black text-black leading-none">
                {s.num.replace("+", "")}
                <span className="text-yellow-400">+</span>
              </div>
              <div className="text-[11px] text-black/35 font-medium mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-6 flex-wrap">
          <button className="bg-black text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-yellow-400 hover:text-black transition-colors duration-200">
            Join the community →
          </button>
          <span className="text-black/30 text-sm">
            Free to join · Open to all levels
          </span>
        </div>
      </div>
    </section>
  );
};

export default GrowCommunity;
