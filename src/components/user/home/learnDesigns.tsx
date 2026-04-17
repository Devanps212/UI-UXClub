const LearnDesign = () => {
  const topics = [
    {
      number: "01",
      title: "Design Fundamentals",
      desc: "Color theory, typography, spacing, and visual hierarchy — the core principles every designer must master.",
      tag: "Beginner",
    },
    {
      number: "02",
      title: "User Research",
      desc: "Learn to conduct interviews, usability tests, and synthesize insights that drive better design decisions.",
      tag: "Intermediate",
    },
    {
      number: "03",
      title: "Figma & Prototyping",
      desc: "From wireframes to high-fidelity prototypes — design, component libraries, and interactive flows.",
      tag: "Hands-on",
    },
    {
      number: "04",
      title: "Design Systems",
      desc: "Build scalable, consistent design systems that teams and products can grow with over time.",
      tag: "Advanced",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden flex flex-col justify-center px-6 md:px-16 lg:px-24">
      {/* Background decorative text */}
      <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[12vw] font-black text-black/3 select-none pointer-events-none leading-none pr-4 hidden md:block">
        DESIGN
      </span>

      {/* Heading */}
      <h2 className="text-5xl md:text-7xl font-black text-black leading-none mb-4 max-w-3xl">
        Learn <span className="text-yellow-400">Design.</span>
      </h2>

      <p className="text-gray-500 text-base md:text-lg max-w-xl mb-12 leading-relaxed">
        From first principles to advanced systems — develop the skills that make
        great designers through structured learning and peer collaboration.
      </p>

      {/* Topic cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl">
        {topics.map(({ number, title, desc, tag }) => (
          <div
            key={number}
            className="group relative bg-gray-50 hover:bg-yellow-50 border border-gray-100 hover:border-yellow-200 rounded-2xl p-5 transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <span className="absolute top-4 right-4 text-xs font-semibold bg-yellow-100 text-yellow-700 px-2.5 py-1 rounded-full">
              {tag}
            </span>
            <p className="text-2xl font-black text-yellow-300 group-hover:text-yellow-400 transition-colors mb-3">
              {number}
            </p>
            <h3 className="text-sm font-bold text-black mb-2">{title}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
            <div className="mt-4 h-[2px] w-0 group-hover:w-full bg-yellow-400 transition-all duration-500 rounded-full" />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-start gap-5 mt-12">
        <button className="text-sm rounded-full bg-black text-white hover:bg-yellow-400 hover:text-black transition-colors ease-in duration-200 px-10 py-3 font-semibold">
          Learn More →
        </button>
        <span className="text-black/30 text-sm">100+ Designs · All levels</span>
      </div>
    </section>
  );
};

export default LearnDesign;
