const ShowcaseStatistics = () => {
  const STATISTICS = [
    {
      title: "Members",
      value: "2,400+",
    },
    {
      title: "Projects",
      value: "1,200+",
    },
    {
      title: "Likes",
      value: "18.4k",
    },
    {
      title: "Categories",
      value: "15+",
    },
  ];
  return (
    <div className="w-full flex border border-zinc-200 items-center justify-start gap-16 bg-zinc-50 h-32 my-auto mx-auto pb-4 px-6 md:px-16 lg:px-24">
      {STATISTICS.map((stats, i) => (
        <div key={`stats-${i}`} className="space-y-1 rounded-lg py-2">
          <h2
            className={`text-3xl font-body font-semibold rounded-lg 
                ${stats.title.toLowerCase() === "likes" && "bg-yellow-400 py-1 px-2"}`}
          >
            {stats.value}
          </h2>
          <span className="text-sm text-gray-500 font-nav uppercase">
            {stats.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ShowcaseStatistics;
