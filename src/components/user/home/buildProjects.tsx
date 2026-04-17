const BuildProjects = () => {
  const projects = [
    {
      title: "Brand Identity Kit",
      difficulty: "Intermediate",
      duration: "2 weeks",
      tags: ["Logo", "Guidelines", "Type"],
    },
    {
      title: "App UI from Scratch",
      difficulty: "Advanced",
      duration: "3 weeks",
      tags: ["Figma", "Components", "Flows"],
    },
    {
      title: "Poster Series",
      difficulty: "Beginner",
      duration: "1 week",
      tags: ["Layout", "Print", "Color"],
    },
  ];

  const difficultyColor: Record<string, string> = {
    Beginner: "bg-black/5 text-black/50",
    Intermediate: "bg-black text-white",
    Advanced: "bg-yellow-400 text-black",
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-center px-6 sm:px-12 md:px-24 overflow-hidden">
      <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[11rem] font-black text-black/[0.03] select-none leading-none pointer-events-none">
        PROJECTS
      </span>

      <div className="absolute -z-10 -left-16 top-72 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 border-4 border-dashed border-black bg-yellow-300 rounded-full" />

      <div className="relative z-10 max-w-5xl w-full">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight text-black mb-6">
          Build <span className="text-yellow-400">Projects.</span>
        </h2>

        <p className="text-black/50 text-lg sm:text-xl max-w-lg leading-relaxed mb-12">
          Real briefs. Real deliverables. Build a portfolio that shows what you
          can actually do — not just what you know.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group flex-1 border border-black/10 hover:border-black rounded-2xl p-5 cursor-pointer transition-all duration-200 hover:-translate-y-1"
            >
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded-full ${difficultyColor[project.difficulty]}`}
              >
                {project.difficulty}
              </span>

              <h3 className="text-black font-bold text-base mt-4 mb-1">
                {project.title}
              </h3>
              <p className="text-black/30 text-xs mb-4">{project.duration}</p>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="text-xs text-black/40 border border-black/10 rounded-full px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 text-black/20 group-hover:text-black transition-colors text-base">
                →
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button className="bg-black text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-yellow-400 hover:text-black transition-colors duration-200">
            Browse projects →
          </button>
          <span className="text-black/30 text-sm">
            20+ projects · All levels
          </span>
        </div>
      </div>
    </section>
  );
};

export default BuildProjects;
