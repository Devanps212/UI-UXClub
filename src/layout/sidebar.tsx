import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HiX } from "react-icons/hi";

const NAV_ITEMS = ["Home", "Showcase", "Meetups", "Projects"];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-1001 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-[#040714] z-1002 transform transition-transform duration-300 ease-in-out md:hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-5 border-b border-yellow-500/30">
            <img src="/logo/uiux.png" alt="logo" className="w-16 h-11" />
            <button
              onClick={onClose}
              className="text-yellow-500 text-2xl hover:text-yellow-400 transition-colors"
            >
              <HiX />
            </button>
          </div>

          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-2">
              {NAV_ITEMS.map((text, i) => (
                <li key={i}>
                  <NavLink
                    to={
                      text.toLowerCase() === "home"
                        ? "/"
                        : `/${text.toLowerCase()}`
                    }
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-base transition-all duration-200
                      ${
                        isActive
                          ? "bg-yellow-500 text-black"
                          : "text-white hover:bg-yellow-500/10 hover:text-yellow-400"
                      }`
                    }
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 shrink-0" />
                    {text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="px-6 py-8 border-t border-yellow-500/30">
            <button className="w-full py-3 bg-yellow-500 text-black font-bold rounded-xl tracking-wider hover:bg-yellow-400 transition-colors">
              Login / SignUp
            </button>
            <p className="text-white/30 text-xs text-center mt-4">
              UI/UX Community © 2025
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
