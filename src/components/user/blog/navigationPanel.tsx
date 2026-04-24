import { useState } from "react";
import {
  FiGrid,
  FiMenu,
  FiShare,
  FiStar,
  FiUser,
  FiUsers,
  FiX,
} from "react-icons/fi";

const NavigationPanel = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const PANEL_LINKS = [
    { title: "Feed", icon: <FiGrid /> },
    { title: "Members", icon: <FiUsers /> },
    { title: "Starred", icon: <FiStar /> },
    { title: "Share design", icon: <FiShare /> },
    { title: "My Profile", icon: <FiUser /> },
  ];

  const COMMUNITIES = [
    "UI Design",
    "UX Research",
    "Interaction Design",
    "Design Systems",
    "Accessibility",
    "Graphic Designers",
  ];

  return (
    <>
      <button
        className="sm:hidden fixed top-4 left-4 z-50 p-2 bg-white border border-zinc-200 rounded-lg shadow"
        onClick={() => setMobileOpen(true)}
      >
        <FiMenu className="text-xl" />
      </button>

      {mobileOpen && (
        <div
          className="sm:hidden fixed inset-0 z-40 bg-black/40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-zinc-200 p-5 overflow-y-auto
          transform transition-transform duration-300 ease-in-out
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          sm:static sm:translate-x-0 sm:h-auto sm:w-1/5 sm:border-none sm:p-0 sm:bg-transparent sm:overflow-visible
        `}
      >
        <button
          className="sm:hidden mb-4 p-1 text-zinc-400 hover:text-black"
          onClick={() => setMobileOpen(false)}
        >
          <FiX className="text-xl" />
        </button>

        <div className="space-y-1">
          {PANEL_LINKS.map((link, i) => (
            <button
              key={`panel-${i}`}
              className={`w-full font-nav p-3 rounded-xl border border-zinc-300 text-xs md:text-base
              flex items-center gap-4 font-semibold hover:bg-black hover:text-white
              transition-colors ease-in-out duration-300 cursor-pointer hover:border-black
              ${link.title === "Feed" ? "bg-black text-white" : ""}`}
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
                className={`list-disc ml-10 font-lighter font-nav text-zinc-500 hover:text-black
                  text-sm marker:text-2xl ${i % 2 === 0 ? "marker:text-yellow-400" : "marker:text-zinc-800"}`}
                key={`comm-${i}`}
              >
                <a href="#">{comm}</a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default NavigationPanel;
