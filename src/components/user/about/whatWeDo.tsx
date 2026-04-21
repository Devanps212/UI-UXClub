import { FaCode, FaPaintBrush, FaPenNib } from "react-icons/fa";

const WhoYouWillFindHere = () => {
  const services = [
    {
      title: "UI/UX Design",
      description:
        "Designers who come here to share their work, learn from others, and improve their skills through real feedback and collaboration.",
      tags: ["Wireframing", "Prototyping", "Design Systems"],
      logo: <FaPaintBrush />,
    },
    {
      title: "Developers",
      description:
        "Developers building projects, exploring new ideas, and working with others to turn concepts into real applications.",
      tags: ["React / Next.js", "TypeScript", "APIs"],
      logo: <FaCode />,
    },
    {
      title: "Motion & Graphic Artists",
      description:
        "Creators who express ideas through visuals and animation, sharing their creativity and learning alongside the community.",
      tags: ["Branding", "Posters", "Social Media"],
      logo: <FaPenNib />,
    },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-8 md:py-10">
      <div className="flex xl:flex-row flex-col items-start xl:items-center justify-between gap-4">
        <h1 className="font-display font-extrabold tracking-widest text-4xl sm:text-5xl xl:text-7xl uppercase leading-tight">
          Who You'll
          <br className="sm:hidden" /> Find Here
        </h1>
        <p className="font-body text-zinc-600 text-base md:text-lg max-w-xs sm:max-w-sm md:max-w-lg mt-0 font-light text-start leading-relaxed">
          People from different backgrounds come together here to learn, create,
          and turn ideas into real experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 mt-8 md:mt-10">
        {services.map((data, i) => (
          <div
            key={i}
            className={`p-4 sm:p-5 w-full flex flex-col justify-between
              border-b-2 border-zinc-400
              lg:border-b-0 lg:border-r-2 lg:last:border-r-0
              ${i === 0 ? "sm:border-r-2" : ""}
              ${i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}
            `}
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center">
                <span className="text-yellow-600 text-base lg:text-2xl font-semibold min-w-8 md:min-w-10">
                  0{i + 1}
                </span>
                <div className="w-4 h-1 bg-yellow-600" />
              </div>

              <div>
                <div className="w-9 h-9 md:w-10 md:h-10 bg-black flex items-center justify-center text-yellow-400 rounded-full text-xl md:text-2xl">
                  {data.logo}
                </div>

                <h1 className="font-display tracking-wider text-2xl md:text-3xl mt-4 md:mt-5 min-h-fit md:min-h-18">
                  {data.title}
                </h1>

                <p className="font-body text-zinc-600 text-base md:text-lg mt-2 font-light min-h-fit md:min-h-24 leading-relaxed">
                  {data.description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {data.tags.map((tag, j) => (
                <div
                  key={j}
                  className="font-display tracking-wider flex items-center justify-center text-xs md:text-sm text-zinc-400 px-2 md:px-3 py-1 rounded-sm border border-zinc-500"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoYouWillFindHere;
