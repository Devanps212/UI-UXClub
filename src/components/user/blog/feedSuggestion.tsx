const FeedSuggestion = () => {
  const FEED_ITEMS = ["For you", "Following", "Trending"];

  return (
    <div className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-start gap-3 sm:gap-10">
      <h1 className="text-black font-nav font-semibold text-sm sm:text-base">
        What's <br className="hidden sm:block" /> happening
      </h1>
      <div className="flex items-center gap-2 sm:gap-4 font-body flex-wrap">
        {FEED_ITEMS.map((feed, i) => (
          <button
            key={`feed-${i}`}
            className="px-3 sm:px-5 py-2 sm:py-3 text-sm sm:text-lg font-semibold border border-zinc-400
            rounded-lg hover:bg-black hover:text-white hover:border-black
            transition-colors ease-in-out duration-300"
          >
            {feed}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeedSuggestion;
