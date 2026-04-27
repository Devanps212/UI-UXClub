const CategoryButtons = () => {
  const CATEGORIES = [
    "All",
    "UI Design",
    "UX Research",
    "Prototypes",
    "Case Studies",
    "Motion",
    "Branding",
  ];
  return (
    <div className="flex shrink items-center justify-start gap-5 w-full mt-8 pb-4 px-6 md:px-16 lg:px-24">
      {CATEGORIES.map((categ, i) => (
        <button
          key={`category-${i}`}
          className="px-5 py-2 text-black border border-zinc-400 font-semibold 
          font-nav rounded-lg hover:bg-black hover:text-white hover:border-black transition-colors ease-in duration-150 cursor-pointer"
        >
          {categ}
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;
