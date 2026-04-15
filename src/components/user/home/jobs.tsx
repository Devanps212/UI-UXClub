import { useState } from "react";
import { FaChevronCircleDown } from "react-icons/fa";

const JobOpportunity = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const opportunities = [
    {
      title: "FullTime",
      description: "Find opportunities tailored for designers.",
      points: [
        "Full-time UI/UX roles",
        "Remote and hybrid opportunities",
        "Entry-level to senior positions",
        "Curated listings from top companies",
      ],
      footer: "👉 Stay updated and land your next role.",
    },
    {
      title: "Freelance Opportunities",
      description: "Work independently and build your portfolio.",
      points: [
        "Short-term and long-term freelance gigs",
        "Startup collaborations",
        "Real client projects",
        "Flexible work opportunities",
      ],
      footer: "👉 Start earning while you learn.",
    },
    {
      title: "Internships",
      description: "Kickstart your design career.",
      points: [
        "Internships for students and beginners",
        "Mentorship-driven programs",
        "Hands-on experience with real projects",
        "Portfolio-building opportunities",
      ],
      footer: "👉 Gain industry exposure early.",
    },
  ];

  return (
    <div className="z-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black max-w-xl z-10">
        Job <span className="text-yellow-400">Opportunity</span>
      </h1>

      <div className="mt-6 sm:mt-8 md:mt-10 space-y-3 sm:space-y-4">
        {opportunities.map((item, index) => (
          <div
            key={index}
            className={`w-full bg-white/20 backdrop-blur-2xl rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 border-2 sm:border-4
              ${
                openIndex === index
                  ? "border-yellow-400 shadow-xl"
                  : "border-gray-300"
              }`}
          >
            <div
              className="p-4 sm:p-5 md:p-6 flex items-center justify-between cursor-pointer gap-4"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-black tracking-wide sm:tracking-widest">
                {item.title}
              </h2>
              <FaChevronCircleDown
                className={`shrink-0 text-2xl sm:text-3xl md:text-4xl text-yellow-400 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>

            {openIndex === index && (
              <div className="px-4 pb-4 pt-0 sm:px-6 sm:pb-6 sm:pt-2 text-black">
                <p className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
                  {item.description}
                </p>

                <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3">
                      <span className="text-yellow-400 mt-1 sm:mt-1.5 text-xs sm:text-base shrink-0">
                        •
                      </span>
                      <span className="text-sm sm:text-base">{point}</span>
                    </li>
                  ))}
                </ul>

                <p className="font-medium text-sm sm:text-base">
                  {item.footer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobOpportunity;
