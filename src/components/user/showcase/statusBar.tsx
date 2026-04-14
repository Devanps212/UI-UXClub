import { FaProjectDiagram, FaUsers, FaEye, FaTrophy } from "react-icons/fa";

const ShowcaseStatsBar = () => {
  const stats = [
    { icon: <FaProjectDiagram />, value: "120+", label: "Projects Submitted" },
    { icon: <FaUsers />, value: "340+", label: "Active Members" },
    { icon: <FaEye />, value: "48K+", label: "Total Views" },
    { icon: <FaTrophy />, value: "18", label: "Featured This Month" },
  ];

  return (
    <section className="bg-slate-800 py-6 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1">
            <span className="text-yellow-400 text-xl">{stat.icon}</span>
            <span className="text-2xl font-extrabold text-white">
              {stat.value}
            </span>
            <span className="text-xs text-slate-400">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowcaseStatsBar;
