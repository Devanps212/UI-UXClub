const MeetTheCrew = () => {
  const members = [
    { name: "Devan", designation: "Developer", picture: null },
    {
      name: "Jasim",
      designation: "Developer",
      picture: null,
    },
    {
      name: "Dhanashekar",
      designation: "Illustrator",
      picture: null,
    },
  ];
  return (
    <div className="px-6 md:px-16 lg:px-24 py-10">
      <div className="flex items-center justify-between">
        <h1 className="font-display font-extrabold tracking-widest text-7xl">
          MEET OUR CREW
        </h1>
        <a
          href="#"
          className="font-body text-zinc-600 text-lg max-w-lg mt-2 font-light text-end"
        >
          View all members →
        </a>
      </div>
      <div className="flex items-center justify-center gap-5 mt-8">
        {members.map((member, i) => (
          <div key={i} className="w-full">
            {member.picture ? (
              <img
                src={member.picture}
                alt={member.name}
                className="w-full h-48"
              />
            ) : (
              <div
                key={i}
                className="w-70 h-96 bg-blue-400 flex items-center justify-center"
              >
                <div className="text-3xl text-white font-body bg-blue-500 rounded-full w-20 h-20 flex items-center justify-center">
                  {member.name.slice(0, 1)}
                </div>
              </div>
            )}
            <div className="w-14 h-1 bg-yellow-500 mt-3" />
            <h1 className="text-3xl font-display tracking-wider mt-3">
              {member.name}
            </h1>
            <p className="font-body text-zinc-600 text-xl max-w-lg font-light ">
              {member.designation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTheCrew;
