const JoinNextContest = () => {
  return (
    <div className="relative overflow-hidden min-h-96 h-full bg-black rounded-2xl flex flex-col items-center justify-center gap-3 p-6 sm:p-10 my-20">
      <span className="text-sm sm:text-md text-yellow-300 font-body tracking-wide text-center">
        READY TO COMPETE?
      </span>
      <h1 className="text-4xl sm:text-6xl lg:text-8xl font-display font-extrabold text-white text-center leading-tight">
        MORE CONTENTS COMING SOON <br />{" "}
        <span className="text-yellow-400">STAY TUNED</span>
      </h1>
      <p className="text-base sm:text-lg text-gray-300 text-center">
        Be the first to know about new contests
      </p>
      <div className="flex items-center gap-4 mt-5">
        <button
          className="px-5 py-2.5 sm:px-6 sm:py-3 text-base sm:text-xl font-semibold rounded-lg bg-black border-2 border-yellow-400 text-white font-nav
    transition-all duration-300 ease-out
    hover:bg-yellow-400 hover:text-black hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/30"
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default JoinNextContest;
