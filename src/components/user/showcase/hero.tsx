const ShowCaseHero = () => {
  return (
    <section className="relative bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden py-20 px-6">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-5">
          The{" "}
          <span
            style={{
              background: "linear-gradient(to right, #FFD700, #FFF176)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Showcase
          </span>
        </h1>
        <p className="text-slate-300 max-w-xl mx-auto text-lg mb-8">
          Explore stunning projects by our members — designers, developers, and
          motion artists pushing creative boundaries.
        </p>
      </div>
    </section>
  );
};

export default ShowCaseHero;
