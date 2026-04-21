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
    <div className="px-6 md:px-16 lg:px-24 py-10">
      <div className="flex items-center justify-between">
        <h1 className="font-display font-extrabold tracking-widest text-7xl uppercase">
          Who You’ll Find Here
        </h1>
        <p className="font-body text-zinc-600 text-lg max-w-lg mt-2 font-light text-end">
          People from different backgrounds come together here to learn, create,
          and turn ideas into real experiences.
        </p>
      </div>
      <div className="flex shrink items-center justify-center gap-5 mt-10">
        {services.map((data, i) => (
          <div
            key={i}
            className="p-4 w-full h-full flex flex-col justify-between border-r-2 border-zinc-400 last:border-r-0"
          >
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-yellow-600 text-2xl font-semibold min-w-10">
                  0{i + 1}
                </span>
                <div className="w-4 h-1 bg-yellow-600" />
              </div>

              <div>
                <div className="w-10 h-10 bg-black flex items-center justify-center text-yellow-400 rounded-full text-2xl">
                  {data.logo}
                </div>

                <h1 className="font-display tracking-wider text-3xl mt-5 min-h-18">
                  {data.title}
                </h1>

                <p className="font-body text-zinc-600 text-lg mt-2 font-light min-h-24">
                  {data.description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {data.tags.map((tag, i) => (
                <div
                  key={i}
                  className="font-display tracking-wider flex items-center justify-center text-sm text-zinc-400 px-3 py-1 rounded-sm border border-zinc-500"
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
