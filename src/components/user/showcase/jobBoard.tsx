import { FiBriefcase, FiMapPin } from "react-icons/fi";

type BadgeType = "full-time" | "freelance" | "internship";

const JOBS = [
  {
    id: 1,
    role: "Senior UI/UX Designer",
    company: "Stripe",
    location: "Remote",
    type: "full-time" as BadgeType,
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=Stripe&backgroundColor=635bff&textColor=ffffff",
  },
  {
    id: 2,
    role: "Product Design Intern",
    company: "Notion",
    location: "Kochi",
    type: "internship" as BadgeType,
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=Notion&backgroundColor=18181b&textColor=ffffff",
  },
  {
    id: 3,
    role: "Freelance Illustrator",
    company: "Dribbble",
    location: "Remote",
    type: "freelance" as BadgeType,
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=Dribbble&backgroundColor=ea4c89&textColor=ffffff",
  },
  {
    id: 4,
    role: "UX Research Intern",
    company: "Figma",
    location: "Bangalore",
    type: "internship" as BadgeType,
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=Figma&backgroundColor=a259ff&textColor=ffffff",
  },
];

const BADGE: Record<BadgeType, { label: string; classes: string }> = {
  "full-time": {
    label: "Full-time",
    classes: "bg-zinc-900 text-white",
  },
  freelance: {
    label: "Freelance",
    classes: "bg-yellow-400 text-black",
  },
  internship: {
    label: "Internship",
    classes: "bg-zinc-100 text-zinc-600",
  },
};

const JobBoard = () => {
  return (
    <div className="mt-16">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-zinc-900 font-nav">
          Design Job Board
        </h2>
        <button className="text-sm font-medium text-blue-500 hover:text-black transition-colors font-nav">
          View all
        </button>
      </div>

      {/* Job list */}
      <div className="flex flex-col gap-2">
        {JOBS.map((job) => {
          const badge = BADGE[job.type];
          return (
            <div
              key={job.id}
              className="flex items-center gap-3 p-3 rounded-xl border border-zinc-100 hover:border-zinc-200 hover:bg-zinc-50 transition-all duration-150 cursor-pointer group"
            >
              {/* Company logo */}
              <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-zinc-900 font-nav truncate group-hover:text-yellow-500 transition-colors">
                  {job.role}
                </p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="flex items-center gap-1 text-xs text-zinc-400 font-nav">
                    <FiBriefcase className="text-[11px]" />
                    {job.company}
                  </span>
                  <span className="text-zinc-200">·</span>
                  <span className="flex items-center gap-1 text-xs text-zinc-400 font-nav">
                    <FiMapPin className="text-[11px]" />
                    {job.location}
                  </span>
                </div>
              </div>

              {/* Badge */}
              <span
                className={`flex-shrink-0 text-[11px] font-semibold font-nav px-2.5 py-1 rounded-full ${badge.classes}`}
              >
                {badge.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Post a job CTA */}
      {/* <button className="w-full mt-3 py-2.5 rounded-xl border border-dashed border-zinc-300 text-sm font-semibold font-nav text-zinc-400 hover:border-yellow-400 hover:text-yellow-500 hover:bg-yellow-50 transition-all duration-150 flex items-center justify-center gap-2">
        <FiClock className="text-base" />
        Post a job
      </button> */}
    </div>
  );
};

export default JobBoard;
