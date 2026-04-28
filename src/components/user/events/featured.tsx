const FeaturedEvent = () => {
  const FEATURED = [
    {
      event: "UIUX TALKS",
      title: "Design That Moves People — A Speaker Night",
      description:
        "Three industry designers share raw stories about products that changed lives. Q&A included.",
      date: "May 10",
      time: "6:00 PM",
      location: "Main Hall",
    },
    {
      event: "DESIGN JAM",
      title: "48-Hour UI Challenge — Build, Break, Repeat",
      description:
        "Teams compete to design and prototype a product in just 48 hours. Mentors, feedback, and prizes included.",
      date: "May 18",
      time: "10:00 AM",
      location: "Innovation Lab",
    },
  ];

  return (
    <div className="py-16 sm:py-24">
      <h1 className="font-display font-extrabold tracking-widest text-4xl sm:text-5xl lg:text-7xl uppercase leading-tight">
        FEATURED EVENTS
      </h1>
      <div className="flex flex-col sm:flex-row items-stretch gap-4 w-full mt-8">
        {FEATURED.map((ftrd, i) => (
          <div
            key={`ftrd-${i}`}
            className="w-full border border-black rounded-3xl overflow-hidden cursor-pointer"
          >
            <div className="bg-yellow-400 p-5 px-8 border-b-2 border-black">
              <h4 className="font-body font-bold text-md text-end">FEATURED</h4>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-display leading-none tracking-wide">
                <span className="block">{ftrd.event.split(" ")[0]}</span>
                <span className="block">{ftrd.event.split(" ")[1]}</span>
              </h1>
            </div>
            <div className="w-full h-full p-5 px-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display tracking-wider">
                {ftrd.title}
              </h1>
              <p className="font-body text-zinc-600 text-sm sm:text-base max-w-xl mt-2 font-light">
                {ftrd.description}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-5 gap-3 text-gray-500">
                <div className="flex flex-wrap items-center text-sm sm:text-base gap-y-1">
                  <span className="after:content-['•'] after:mx-2 sm:after:mx-3">
                    {ftrd.date}
                  </span>
                  <span className="after:content-['•'] after:mx-2 sm:after:mx-3">
                    {ftrd.time}
                  </span>
                  <span>{ftrd.location}</span>
                </div>
                <div className="px-6 py-2 bg-yellow-400 text-black font-nav font-semibold rounded-full self-start sm:self-auto">
                  Open
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedEvent;
