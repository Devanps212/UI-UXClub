const OurMission = () => {
  const missions = [
    {
      title: "A space to connect",
      description:
        "We bring together UI/UX designers, developers, and creators to share ideas, collaborate, and grow together.",
    },
    {
      title: "Build and learn together",
      description:
        "Our focus is on real collaboration — working on projects, learning from each other, and improving through practice.",
    },
    {
      title: "Grow as a community",
      description:
        "We create opportunities for members to showcase their skills, gain experience, and support each other’s journey.",
    },
  ];

  return (
    <div className="flex h-dvh">
      <div className="w-1/2 bg-black flex flex-col items-center justify-center px-10">
        <h1 className="text-white text-8xl font-display">
          WE <br /> <span className="text-yellow-400">CONNECT</span> PEOPLE{" "}
          <br />
          WHO BUILD
        </h1>
        <p className="font-body text-zinc-300 text-lg mt-2 font-light max-w-lg ml-4">
          Our goal is to create a community where designers and developers can
          collaborate, learn, and build meaningful digital experiences together.
        </p>
      </div>

      <div className="w-1/2 bg-yellow-100/20 flex items-center justify-center px-20">
        <div className="space-y-10">
          {missions.map((mission, i) => (
            <div className="flex items-center gap-5 min-h-24 rounded-2xl p-2">
              <div className="flex items-center justify-center shrink-0 rounded-full w-12 h-12 bg-yellow-400 text-xl font-semibold">
                {i + 1}
              </div>
              <div>
                <h1 className="font-display tracking-wider text-2xl">
                  {mission.title}
                </h1>
                <p className="font-body text-zinc-700 text-lg mt-2 font-light">
                  {mission.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurMission;
