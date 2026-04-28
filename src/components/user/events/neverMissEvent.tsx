const NeverMissEvent = () => {
  return (
    <div className="py-16 sm:py-24 px-0 sm:px-8 lg:px-20">
      <div className="bg-black rounded-3xl p-8 sm:p-10 flex flex-col items-center justify-center min-h-64 sm:min-h-80 lg:h-96 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-8xl font-semibold font-display text-white leading-tight">
          NEVER MISS AN <span className="text-yellow-400">EVENT</span>
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-300 text-center mt-3 max-w-md">
          Get notified when new events go live. Only for UIUX Club members.
        </p>
        <div className="flex items-center gap-4 mt-5">
          <button className="px-5 py-2.5 sm:px-6 sm:py-3 text-base sm:text-xl font-semibold rounded-lg bg-black border-2 border-yellow-400 text-white font-nav transition-all duration-300 ease-out hover:bg-yellow-400 hover:text-black hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/30">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NeverMissEvent;
