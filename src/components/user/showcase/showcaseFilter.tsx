const ShowcaseFilter = () => {
  const FILTERS = [
    {
      title: "Browse",
      items: [
        { name: "All Projects", value: 847 },
        { name: "Featured", value: 24 },
        { name: "Most Liked", value: 0 },
        { name: "Recent", value: 38 },
      ],
    },
    {
      title: "Category",
      items: [
        { name: "UI Design", value: 312 },
        { name: "UX Research", value: 198 },
        { name: "Prototypes", value: 143 },
        { name: "Case Studies", value: 94 },
        { name: "Motion", value: 67 },
        { name: "Branding", value: 33 },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "Figma", value: 521 },
        { name: "Framer", value: 144 },
        { name: "Adobe XD", value: 89 },
        { name: "Sketch", value: 41 },
        { name: "Webflow", value: 52 },
      ],
    },
  ];

  return (
    <div className="w-1/4 p-6">
      <div className="space-y-8">
        {FILTERS.map((filter, i) => (
          <div key={`filter-${i}`} className="space-y-3">
            <h2
              className="text-lg font-semibold uppercase tracking-wide 
                       bg-linear-to-r from-zinc-400 to-zinc-600 
                       bg-clip-text text-transparent"
            >
              {filter.title}
            </h2>
            <ul className="space-y-2 w-full">
              {filter.items.map((item, j) => {
                const isActive =
                  filter.title.toLowerCase() === "browse" && j === 0;

                return (
                  <li
                    key={j}
                    className={`w-full flex items-center justify-between 
                  font-medium font-nav cursor-pointer transition-all duration-200
                  
                  ${
                    isActive
                      ? "text-black"
                      : "text-zinc-400 hover:text-zinc-700"
                  }
                `}
                  >
                    <span>{item.name}</span>
                    <span className="text-sm">{item.value}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowcaseFilter;
