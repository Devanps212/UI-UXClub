import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaUser } from "react-icons/fa";

const Showcase = () => {
  const ITEMS = [
    {
      name: "Website 1",
      creator: "Ankith Kaur",
      thumbnail: "/home/showcase/1kiTL.jpg",
      description: "Modern portfolio design with smooth animations.",
    },
    {
      name: "Website 2",
      creator: "Ankith Kaur",
      thumbnail: "/home/showcase/3EXCn.jpg",
      description: "SaaS dashboard with clean UI.",
    },
    {
      name: "Website 3",
      creator: "Ankith Kaur",
      thumbnail: "/home/showcase/6gKYT.jpg",
      description: "E-commerce landing page.",
    },
    {
      name: "Website 4",
      creator: "Ankith Kaur",
      thumbnail: "/home/showcase/TBBvr.jpg",
      description: "AI tool marketing website.",
    },
    {
      name: "Website 5",
      creator: "Ankith Kaur",
      thumbnail: "/home/showcase/VdRUB.jpg",
      description: "Creative agency showcase.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisibleCount = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount);

  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      const newCount = getVisibleCount();
      setVisibleCount(newCount);
      setCurrentIndex((prev) => {
        const maxIndex = ITEMS.length - newCount;
        return prev > maxIndex ? maxIndex : prev;
      });
    });
  }

  const maxIndex = ITEMS.length - visibleCount;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const slidePercent = 100 / visibleCount;

  return (
    <section>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black max-w-xl z-50">
        Explore The Creativity of our{" "}
        <span className="text-yellow-500">Community</span>
      </h1>

      <div className="relative mt-8 sm:mt-10 px-6 sm:px-8">
        <div className="overflow-hidden">
          <div
            className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * slidePercent}%)`,
            }}
          >
            {ITEMS.map((data, i) => (
              <div
                key={i}
                className="shrink-0"
                style={{ width: `calc(${slidePercent}% - 1.25rem)` }}
              >
                <div className="bg-yellow-50 border border-yellow-200 rounded-2xl overflow-hidden h-full">
                  <img
                    src={data.thumbnail}
                    alt={data.name}
                    className="w-full h-48 sm:h-60 md:h-80 object-cover"
                  />
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-2 sm:mb-3">
                      {data.name}
                    </h3>
                    <p className="flex items-center gap-2 text-yellow-600 mb-3 sm:mb-4 text-sm sm:text-base">
                      <FaUser className="shrink-0" /> {data.creator}
                    </p>
                    <p className="text-gray-500 line-clamp-3 text-sm sm:text-base">
                      {data.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 p-2 sm:p-3 md:p-4 rounded-full z-10 transition-colors"
        >
          <FaChevronLeft size={18} className="sm:hidden" />
          <FaChevronLeft size={24} className="hidden sm:block md:hidden" />
          <FaChevronLeft size={28} className="hidden md:block" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 p-2 sm:p-3 md:p-4 rounded-full z-10 transition-colors"
        >
          <FaChevronRight size={18} className="sm:hidden" />
          <FaChevronRight size={24} className="hidden sm:block md:hidden" />
          <FaChevronRight size={28} className="hidden md:block" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-yellow-400 w-6"
                : "bg-gray-300 hover:bg-gray-400 w-2"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Showcase;
