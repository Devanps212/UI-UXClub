import { FiGrid, FiShare, FiStar, FiUser, FiUsers } from "react-icons/fi";

const NavigationPanel = () => {
  const PANEL_LINKS = [
    {
      title: "Feed",
      icon: <FiGrid />,
    },
    {
      title: "Members",
      icon: <FiUsers />,
    },
    {
      title: "Starred",
      icon: <FiStar />,
    },
    {
      title: "Share design",
      icon: <FiShare />,
    },
    {
      title: "My Profile",
      icon: <FiUser />,
    },
  ];

  const COMMUNITIES = [
    "UI Design",
    "UX Research",
    "Interaction Design",
    "Design Systems",
    "Accessibility",
  ];

  return (
    <div className="w-1/5 h-1/2">
      <div className="space-y-1">
        {PANEL_LINKS.map((link, i) => (
          <button
            key={`panel-${i}`}
            className={`w-full font-nav p-3 rounded-xl border border-zinc-300
            flex items-center gap-4 font-semibold hover:bg-black hover:text-white 
            transition-colors ease-in-out duration-300 cursor-pointer hover:border-black ${link.title === "Feed" ? "bg-black text-white" : ""}`}
          >
            {link.icon}
            {link.title}
          </button>
        ))}
      </div>
      <div className="mt-10">
        <h1 className="font-nav text-zinc-600 font-semibold text-xl">
          Featured Communities
        </h1>
        <ul className="mt-3 space-y-5">
          {COMMUNITIES.map((comm, i) => (
            <li
              className={`
                list-disc ml-10 font-lighter font-nav text-zinc-500 hover:text-black
                text-sm marker:text-2xl ${i % 2 == 0 ? "marker:text-yellow-400" : "marker:text-zinc-800"}`}
              key={`comm-${i}`}
            >
              <a href="#">{comm}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavigationPanel;
