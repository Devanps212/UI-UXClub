const GetInTouch = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black px-6 md:px-16 lg:px-24 py-30 -my-6">
      <div className="flex items-center justify-center gap-3">
        <div className="w-8 h-[1.5px] bg-yellow-400" />
        <span className="font-body text-yellow-500 text-sm font-semibold tracking-widest uppercase">
          Welcome to the club
        </span>
      </div>
      <h1 className="text-[9vw] leading-[0.9] font-body font-bold tracking-[-0.02em] text-white w-full text-center mt-4 uppercase">
        Your Community <br />
        Starts <span className="text-yellow-400">Here</span>
      </h1>
      <p className="font-body text-zinc-400 text-lg max-w-xl font-light mt-4 text-center">
        Join people who are learning, building, and growing together — no matter
        where you’re starting from.
      </p>
      <button className="cursor-pointer text-yellow-400 mt-7 px-7 py-2 border border-yellow-400 font-body hover:bg-yellow-400 hover:border-white hover:border-2 hover:text-black transition-colors ease-in duration-200">
        Get started ↗
      </button>
    </div>
  );
};

export default GetInTouch;
