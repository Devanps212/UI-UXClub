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

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? ITEMS.length - 3 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === ITEMS.length - 3 ? 0 : prev + 1));
  };

  return (
    <section>
      <h1 className="text-5xl font-bold text-black max-w-xl">
        Explore The Creativity of our{" "}
        <span className="text-yellow-500">Community</span>
      </h1>

      <div className="relative mt-10">
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
          >
            {ITEMS.map((data, i) => (
              <div key={i} className="w-1/3 shrink-0">
                <div className="bg-yellow-50 border border-yellow-200 rounded-2xl overflow-hidden">
                  <img
                    src={data.thumbnail}
                    alt={data.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <h1 className="text-2xl font-semibold text-black mb-3">
                      {data.name}
                    </h1>
                    <p className="flex items-center gap-3 text-yellow-600 mb-4">
                      <FaUser /> {data.creator}
                    </p>
                    <p className="text-gray-500 line-clamp-3">
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
          className="absolute -left-5 top-1/2 -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 p-4 rounded-full z-10 transition-colors"
        >
          <FaChevronLeft size={28} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute -right-5 top-1/2 -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 p-4 rounded-full z-10 transition-colors"
        >
          <FaChevronRight size={28} />
        </button>
      </div>
    </section>
  );
};

export default Showcase;
