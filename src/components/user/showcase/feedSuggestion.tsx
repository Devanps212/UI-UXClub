const FeedSuggestion = () => {
  const FEED_ITEMS = ["For you", "Following", "trending"];

  return (
    <div className="p-5 flex items-center justify-start gap-10">
      <h1 className="text-black font-nav font-semibold">
        What's <br /> happening
      </h1>
      <div className="flex items-center gap-4 font-body">
        {FEED_ITEMS.map((feed, i) => (
          <button
            key={`feed-${i}`}
            className="
            px-5 py-3 text-lg font-semibold border border-zinc-400 
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
