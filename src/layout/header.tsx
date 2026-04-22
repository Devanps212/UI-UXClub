import { NavLink } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";

const NAV_ITEMS = [
  "Home",
  "Events",
  "Showcase Design",
  "Meetups",
  // "Projects/Case Studies",
  // "Community Collaboration",
];

interface HeaderProps {
  onMenuClick: () => void;
  scrolled: boolean;
}

const Header = ({ onMenuClick, scrolled }: HeaderProps) => {
  return (
    <header
      className={`fixed top-0 w-full px-5 py-4 transition-all duration-300 z-[999] font-nav
        ${scrolled ? "bg-[#040714]" : "bg-white"}`}
    >
      <div className="flex items-center justify-between">
        <NavLink to="/">
          <img src="/logo/uiux.png" alt="logo" className="w-20 h-14" />
        </NavLink>

        <nav className="absolute left-1/2 top-0 -translate-x-1/2 h-full hidden md:flex">
          <ul className="list-none flex items-center gap-10 h-full">
            {NAV_ITEMS.map((text, i) => (
              <li
                key={i}
                className={`h-full flex items-center px-3 text-md font-semibold transition-all duration-200
                  ${
                    scrolled
                      ? "text-yellow-500 hover:text-yellow-400 hover:scale-105"
                      : "hover:border-b-2 hover:border-yellow-500 hover:text-yellow-500"
                  }`}
              >
                <NavLink
                  to={
                    text.toLowerCase() === "home"
                      ? "/"
                      : `/${text.toLowerCase()}`
                  }
                  className="h-full flex items-center text-nowrap"
                >
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button className="px-7 py-2 bg-yellow-500 rounded-md tracking-wider font-semibold hidden md:block">
          Login/SignUp
        </button>

        <button
          className={`md:hidden text-2xl transition-colors duration-300 ${scrolled ? "text-yellow-500" : "text-black"}`}
          onClick={onMenuClick}
        >
          <HiMenuAlt3 />
        </button>
      </div>
    </header>
  );
};

export default Header;
