const DesignShowcase = () => {
  return (
    <section className="relative w-full flex flex-col justify-center px-6 sm:px-12 md:px-24 overflow-hidden">
      <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[11rem] font-black text-black/[0.03] select-none leading-none pointer-events-none">
        SHOWCASE
      </span>

      <div className="absolute -z-10 -right-16 top-24 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 border-4 border-dashed border-black bg-yellow-300 rounded-full" />

      <div className="relative z-10 max-w-xl w-full">
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight text-black mb-6">
          Design{" "}
          <span className="text-yellow-400 tracking-wider">Showcase.</span>
        </h2>

        <p className="font-body text-black/50 text-lg max-w-md leading-relaxed mb-4">
          Put your work out there and learn from real feedback.
        </p>

        <p className="font-body text-black/35 text-base max-w-sm leading-relaxed mb-10">
          Every project you share is a chance to grow, connect, and get noticed
          by the right people.
        </p>

        <div className="flex items-center gap-5">
          <button className="font-body bg-black text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-yellow-400 hover:text-black transition-colors duration-200">
            Showcase Your Work →
          </button>
        </div>
      </div>
    </section>
  );
};

export default DesignShowcase;
