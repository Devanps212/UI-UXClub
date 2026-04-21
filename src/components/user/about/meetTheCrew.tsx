const MeetTheCrew = () => {
  const members = [
    { name: "Mahesh Kashinath", designation: "Founder", picture: null },
    { name: "Devan", designation: "Developer", picture: null },
    { name: "Jasim", designation: "Developer", picture: null },
    { name: "Dhanasekar", designation: "Illustrator", picture: null },
  ];

  return (
    <div className="px-6 md:px-16 lg:px-24 py-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <h1 className="font-display font-extrabold tracking-widest text-4xl sm:text-5xl lg:text-7xl uppercase leading-tight">
          MEET OUR CREW
        </h1>
        <a
          href="#"
          className="font-body text-zinc-600 text-base md:text-lg font-light"
        >
          View all members →
        </a>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-8">
        {members.map((member, i) => (
          <div key={i} className="w-full">
            {member.picture ? (
              <img
                src={member.picture}
                alt={member.name}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full aspect-[3/4] bg-blue-400 flex items-center justify-center">
                <div className="text-2xl sm:text-3xl text-white font-body bg-blue-500 rounded-full w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center">
                  {member.name.slice(0, 1)}
                </div>
              </div>
            )}
            <div className="w-10 sm:w-14 h-1 bg-yellow-500 mt-3" />
            <h1 className="text-lg sm:text-2xl lg:text-3xl font-display tracking-wider mt-2 sm:mt-3">
              {member.name}
            </h1>
            <p className="font-body text-zinc-600 text-sm sm:text-lg lg:text-xl font-light">
              {member.designation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTheCrew;
