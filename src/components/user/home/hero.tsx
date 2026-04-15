import { FaArrowRight, FaThLarge } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="mt-28 sm:mt-40 md:mt-30">
      <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-evenly">
        <div className="max-w-xl w-full text-center md:text-left">
          <p className="flex items-center justify-center md:justify-start gap-2 text-yellow-700">
            <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
            Welcome to UI/UX Club
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black w-full leading-tight md:leading-16 mt-2">
            Design. <span className="text-yellow-500">ShowCase.</span>{" "}
            <span className="text-yellow-500">Connect.</span>{" "}
            <span className="text-black">Grow</span>
          </h1>
          <p className="mt-3 text-gray-500 text-sm sm:text-base">
            Join the community of passionate UI/UX designers, where creativity
            meets innovation, ideas are shared, and designers collaborate to
            craft meaningful and user-centered digital experiences.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-5">
            <button
              className="w-full sm:w-auto px-6 py-2 flex items-center justify-center gap-3 text-black font-semibold rounded-md"
              style={{
                background: "linear-gradient(to right, #FFD700, #FFF176)",
              }}
            >
              Join Club <FaArrowRight className="text-sm text-yellow-700" />
            </button>
            <button
              className="w-full sm:w-auto px-6 py-2 flex items-center justify-center gap-3 text-black font-semibold rounded-md border border-yellow-400"
              style={{
                background: "linear-gradient(to right, #FFF176, #FFD700)",
              }}
            >
              Explore Showcase <FaThLarge className="text-sm text-yellow-700" />
            </button>
          </div>
        </div>
        <div className="hidden md:block w-full max-w-md lg:max-w-lg z-10">
          <img
            src="/home/banner/websites.png"
            alt="websites"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
