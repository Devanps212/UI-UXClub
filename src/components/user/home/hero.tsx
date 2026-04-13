import { FaArrowRight, FaThLarge } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="mt-30">
      <div className="flex items-start justify-evenly">
        <div className="max-w-xl w-full">
          <p className="flex items-center gap-2 text-white">
            <div className="w-3 h-3 rounded-full bg-[#7A38F0]" />
            Welcome to UI/UX Club
          </p>
          <h1 className="text-5xl font-bold text-[#7A38F0]  w-full leading-16">
            Design. <span className="text-white">ShowCase.</span>{" "}
            <span className="text-white">Connect.</span> Grow
          </h1>
          <p className="mt-3 text-gray-300">
            Join the community of passionate UI/UX designers, where creativity
            meets innovation, ideas are shared, and designers collaborate to
            craft meaningful and user-centered digital experiences.
          </p>
          <div className="mr-auto mt-5 flex items-center gap-5">
            <button className="px-8 py-2 bg-[#6331F4] flex items-center gap-3 text-white rounded-md ">
              Join Club <FaArrowRight className="text-sm" />
            </button>
            <button className="px-8 py-2 bg-[#0D1022] border border-gray-700 flex items-center gap-3 text-white rounded-md ">
              Explore Showcase <FaThLarge className="text-sm text-[#A172F6]" />
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
