const LearnFromCommunity = () => {
  const insights = [
    {
      number: "01",
      title: "Real Workflows",
      desc: "See how designers and developers actually work day-to-day — not polished tutorials, but honest processes, mistakes, and breakthroughs shared openly.",
    },
    {
      number: "02",
      title: "Honest Feedback",
      desc: "Share your work and get genuine critique from people who've been in your shoes — the kind of feedback that actually helps you grow.",
    },
    {
      number: "03",
      title: "Industry Insights",
      desc: "Pick up on what's working in the real world — tools, trends, and decisions straight from people currently in design, dev, and creative roles.",
    },
    {
      number: "04",
      title: "Lived Experiences",
      desc: "Learn from the journeys of people around you — how they landed their first project, switched careers, or built something from scratch.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden flex flex-col justify-center px-6 md:px-16 lg:px-24">
      <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[12vw] font-black text-black/3 select-none pointer-events-none leading-none pr-4 hidden md:block">
        DESIGN
      </span>

      <h2 className="text-5xl md:text-7xl font-black text-black leading-none mb-4 max-w-3xl">
        Learn <span className="text-yellow-400">Design.</span>
      </h2>

      <p className="text-gray-500 text-base md:text-lg max-w-xl mb-12 leading-relaxed">
        Meet designers, developers, and creators who are already in the field —
        and learn directly from the people you find here in the community.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl">
        {insights.map(({ number, title, desc }) => (
          <div
            key={number}
            className="group relative bg-gray-50 hover:bg-yellow-50 border border-gray-100 hover:border-yellow-200 rounded-2xl p-5 transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <p className="text-2xl font-black text-yellow-300 group-hover:text-yellow-400 transition-colors mb-3">
              {number}
            </p>
            <h3 className="text-sm font-bold text-black mb-2">{title}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
            <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-yellow-400 transition-all duration-500 rounded-full" />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-start gap-5 mt-12">
        <button className="text-sm rounded-full bg-black text-white hover:bg-yellow-400 hover:text-black transition-colors ease-in duration-200 px-10 py-3 font-semibold">
          Join the Club →
        </button>
        <span className="text-black/30 text-sm">Real people · All levels</span>
      </div>
    </section>
  );
};

export default LearnFromCommunity;
