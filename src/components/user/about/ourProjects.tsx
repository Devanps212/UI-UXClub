const OurProjects = () => {
  const OUR_PROJECTS = [
    {
      name: "Active listeners",
      thumbnail: "/about/ourProjects/activelisteners.png",
      link: "https://www.activelisteners.in",
    },
    {
      name: "Story Club",
      thumbnail: "/about/ourProjects/storyclub.png",
      link: "https://storyclub.in",
    },
    {
      name: "Toonland",
      thumbnail: "/about/ourProjects/toonland.png",
      link: "https://toonland.in",
    },
    {
      name: "Propelling Stories",
      thumbnail: "/about/ourProjects/propellingStories.png",
      link: "https://www.propellingstories.com",
    },
    {
      name: "Mentoons",
      thumbnail: "/about/ourProjects/mentoons.png",
      link: "https://mentoons.com",
    },
    {
      name: "Mentoons Mythos",
      thumbnail: "/about/ourProjects/mythos.png",
      link: "https://mentoonsmythos.com/",
    },
  ];

  return (
    <section className="px-6 md:px-16 lg:px-24 py-10">
      <h1 className="font-display font-extrabold tracking-widest text-4xl sm:text-5xl lg:text-7xl uppercase leading-tight">
        OUR PROJECTS
      </h1>
      <div className="grid grid-cols-3 place-items-center gap-8">
        {OUR_PROJECTS.map((project, i) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full mt-8 overflow-hidden hover:scale-105 hover:shadow-[-10px_10px_0px_black] active:shadow-none transition-shadow ease-in duration-100 cursor-pointer "
            key={`row-1-${i}`}
          >
            <img
              src={project.thumbnail}
              alt={project.name}
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 w-full h-full bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 flex items-end justify-start p-4 transition-all ease-in-out duration-200">
              <h1 className="text-4xl font-bold font-body text-yellow-400">
                {project.name}
              </h1>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default OurProjects;
