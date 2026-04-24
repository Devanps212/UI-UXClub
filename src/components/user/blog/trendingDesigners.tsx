const TrendingDesigners = () => {
  const DESIGNERS = [
    {
      name: "Priya Menon",
      position: "Product Designer",
      picture:
        "https://api.dicebear.com/7.x/initials/svg?seed=Priya Menon&backgroundColor=fbbf24&textColor=000000",
    },
    {
      name: "Arjun Nair",
      position: "UX Researcher",
      picture:
        "https://api.dicebear.com/7.x/initials/svg?seed=Arjun Nair&backgroundColor=18181b&textColor=ffffff",
    },
    {
      name: "Sara Khalid",
      position: "Interaction Designer",
      picture:
        "https://api.dicebear.com/7.x/initials/svg?seed=Sara Khalid&backgroundColor=fbbf24&textColor=000000",
    },
    {
      name: "Dev Anand",
      position: "UI/Visual Designer",
      picture:
        "https://api.dicebear.com/7.x/initials/svg?seed=Dev Anand&backgroundColor=18181b&textColor=ffffff",
    },
  ];

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-bold text-zinc-900 font-nav">
          Trending Designers
        </h2>
        <a href="#" className="text-blue-500 text-sm font-semibold">
          View all
        </a>
      </div>
      <div className="space-y-5 mt-4">
        {DESIGNERS.map((designer, i) => (
          <div
            key={`designer-${i}`}
            className="flex items-center justify-between gap-2"
          >
            <div className="flex items-center min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={designer.picture}
                  alt={designer.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-3 leading-tight min-w-0">
                <h1 className="font-nav text-sm text-zinc-700 hover:text-yellow-400 transition-colors ease-in duration-300 truncate">
                  {designer.name}
                </h1>
                <span className="text-xs font-nav text-zinc-500 truncate block">
                  {designer.position}
                </span>
              </div>
            </div>
            <button className="text-black text-xs px-3 py-2 bg-zinc-100 border border-zinc-200 rounded-xl flex-shrink-0">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingDesigners;
