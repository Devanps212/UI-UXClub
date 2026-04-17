const Ticker = () => {
  const items = [
    "UI/UX Design",
    "Web Development",
    "App Development",
    "Networking",
    "Live Critiques",
    "Open Mic Builds",
  ];

  return (
    <div className="overflow-hidden bg-yellow-400 py-3 my-6">
      <div className="ticker-track">
        {[...Array(2)].map((_, i) =>
          items.map((item, j) => (
            <span
              key={`${i}-${j}`}
              className="font-display text-black text-xl tracking-widest px-8"
            >
              {item} &nbsp;◆&nbsp;
            </span>
          )),
        )}
      </div>
    </div>
  );
};

export default Ticker;
