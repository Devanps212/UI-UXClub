const Meetups = () => {
  return (
    <section className="relative w-full overflow-hidden flex flex-col justify-center px-6 md:px-16 lg:px-24">
      <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[12vw] font-black text-black/3 select-none pointer-events-none leading-none pr-4 hidden md:block">
        MEETUPS
      </span>

      <h2 className="font-display text-5xl md:text-7xl font-black text-black leading-none mb-6 max-w-3xl">
        Creative{" "}
        <span className="text-yellow-400 tracking-wider">Meetups.</span>
      </h2>

      <p className="font-body text-gray-500 text-base md:text-lg max-w-xl leading-relaxed mb-4">
        Join meetups to learn from people, share ideas, and grow together.
      </p>

      <p className="font-body text-gray-400 text-sm md:text-base max-w-lg leading-relaxed">
        Meet creatives, learn together, and build real connections.
      </p>

      <div className="flex items-center justify-start gap-5 mt-10">
        <button className="font-body text-sm rounded-full bg-black text-white hover:bg-yellow-400 hover:text-black transition-colors ease-in duration-200 px-10 py-3 font-semibold">
          See Upcoming Meetups →
        </button>
      </div>
    </section>
  );
};

export default Meetups;
