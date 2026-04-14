import { FaArrowRight, FaThLarge } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="mt-30">
      <div className="flex items-start justify-evenly">
        <div className="max-w-xl w-full">
          <p className="flex items-center gap-2 text-blue-500">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            Welcome to UI/UX Club
          </p>
          <h1 className="text-5xl font-bold text-black w-full leading-16">
            Design. <span className="text-blue-500">ShowCase.</span>{" "}
            <span className="text-blue-500">Connect.</span>{" "}
            <span className="text-black">Grow</span>
          </h1>
          <p className="mt-3 text-gray-500">
            Join the community of passionate UI/UX designers, where creativity
            meets innovation, ideas are shared, and designers collaborate to
            craft meaningful and user-centered digital experiences.
          </p>
          <div className="mr-auto mt-5 flex items-center gap-5">
            <button
              className="px-8 py-2 flex items-center gap-3 text-black font-semibold rounded-md"
              style={{
                background: "linear-gradient(to right, #FFD700, #FFF176)",
              }}
            >
              Join Club <FaArrowRight className="text-sm text-yellow-700" />
            </button>
            <button
              className="px-8 py-2 flex items-center gap-3 text-black font-semibold rounded-md border border-yellow-400"
              style={{
                background: "linear-gradient(to right, #FFF176, #FFD700)",
              }}
            >
              Explore Showcase <FaThLarge className="text-sm text-yellow-700" />
            </button>
          </div>
        </div>
        <div>
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
