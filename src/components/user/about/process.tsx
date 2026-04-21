import { FaArrowDown, FaArrowRight } from "react-icons/fa";

const Process = () => {
  const processDetails = [
    {
      title: "Learn",
      description:
        "Learn from the people you meet in the community — their experiences, ideas, and journeys shape your growth.",
    },
    {
      title: "Build",
      description:
        "Collaborate and build projects together, turning shared knowledge into real-world creations.",
    },
    {
      title: "Grow",
      description:
        "Create and contribute to a strong community where everyone supports, improves, and grows together.",
    },
  ];
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center bg-black p-3">
      {processDetails.map((detail, i) => (
        <div className="relative w-full px-10 py-20 border-b-2 sm:border-r-2 sm:border-b-0 border-zinc-600 last:border-none">
          <span className="text-yellow-400 font-body tracking-wider">
            STEP 0{i + 1}
          </span>
          <h1 className="font-body text-white tracking-wider text-2xl md:text-5xl uppercase mt-2">
            {detail.title}
          </h1>
          <p className="font-body text-zinc-300 text-sm md:text-md mt-2 font-light">
            {detail.description}
          </p>
          {i != 2 && (
            <div className="absolute -right-5 top-1/2 rounded-full w-10 h-10 hidden sm:flex items-center justify-center bg-yellow-300">
              <FaArrowRight className="text-yellow-600" />
            </div>
          )}
          {i != 2 && (
            <div className="absolute right-1/2 -bottom-5 rounded-full w-10 h-10 sm:hidden flex items-center justify-center bg-yellow-300">
              <FaArrowDown className="text-yellow-600" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Process;
