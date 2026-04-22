const Freelance = () => {
  return (
    <section className="relative w-full flex flex-col md:flex-row items-start justify-between gap-16 px-6 sm:px-12 md:px-24 overflow-hidden">
      <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[11rem] font-black text-black/[0.03] select-none leading-none pointer-events-none">
        FREELANCE
      </span>

      <div className="absolute -z-10 -left-16 top-72 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 border-4 border-dashed border-black bg-yellow-300 rounded-full" />

      {/* Left — Freelance */}
      <div className="relative z-10 max-w-lg w-full">
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight text-black mb-6">
          Go <span className="text-yellow-400 tracking-wider">Freelance.</span>
        </h2>

        <p className="font-body text-black/50 text-lg max-w-md leading-relaxed mb-4">
          Find opportunities by connecting with people who are looking for your
          skills.
        </p>

        <p className="font-body text-black/35 text-base max-w-sm leading-relaxed mb-10">
          Designers, developers, motion artists — clients are looking for you
          here.
        </p>

        <button className="font-body bg-black text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-yellow-400 hover:text-black transition-colors duration-200">
          Apply for Freelance →
        </button>
      </div>

      {/* Right — Internship slider */}
      <div className="relative z-10 w-full md:w-72 shrink-0">
        <p className="font-display text-xs font-black text-black/30 uppercase tracking-widest mb-4">
          Internships
        </p>

        <h3 className="font-display text-2xl font-black text-black leading-tight mb-3">
          Looking for an internship?
        </h3>

        <p className="font-body text-black/40 text-md leading-relaxed mb-6">
          Discover internship opportunities shared by people and explore roles
          that match your interests.
        </p>

        <button className="font-body border border-black/15 hover:border-black text-black text-sm font-semibold px-6 py-2.5 rounded-full transition-colors duration-200">
          See Internships →
        </button>
      </div>
    </section>
  );
};

export default Freelance;
