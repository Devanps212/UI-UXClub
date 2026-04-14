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
    <div>
      <h1 className="text-5xl font-bold text-black max-w-xl">
        Job <span className="text-yellow-400">Opportunity</span>
      </h1>

      <div className="mt-10 space-y-4">
        {opportunities.map((item, index) => (
          <div
            key={index}
            className={`w-full bg-white/20 backdrop-blur-2xl rounded-2xl overflow-hidden transition-all duration-300 border-4
              ${
                openIndex === index
                  ? "border-yellow-400 shadow-xl"
                  : "border-gray-300"
              }`}
          >
            <div
              className="p-6 flex items-center justify-between cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h1 className="text-3xl font-semibold text-black tracking-widest">
                {item.title}
              </h1>
              <FaChevronCircleDown
                className={`text-4xl text-yellow-400 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
              />
            </div>

            {openIndex === index && (
              <div className="p-6 pt-2 text-black">
                <p className="text-lg mb-4">{item.description}</p>

                <ul className="space-y-2 mb-6">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-yellow-400 mt-1.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <p className="font-medium">{item.footer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobOpportunity;
