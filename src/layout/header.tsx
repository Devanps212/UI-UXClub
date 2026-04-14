import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const NAV_ITEMS = ["Home", "Showcase", "Meetups", "Projects"];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full p-5 transition-all duration-300 z-10 
        ${scrolled ? "bg-[#040714]" : "bg-transparent"}`}
    >
      <div className="flex items-center justify-between">
        <NavLink to="#">
          <img src="/logo/uiux.png" alt="logo" className="w-20 h-14" />
        </NavLink>

        <nav className="absolute left-1/2 top-0 -translate-x-1/2 h-full">
          <ul className="list-none flex items-center gap-10 h-full">
            {NAV_ITEMS.map((text, i) => (
              <li
                key={i}
                className={`h-full flex items-center px-3 text-md font-semibold 
                  transition-all duration-200
                  ${
                    scrolled
                      ? "text-yellow-500 hover:text-yellow-400 hover:scale-105"
                      : "hover:border-b-2 hover:border-yellow-500 hover:text-yellow-500"
                  }`}
              >
                <NavLink
                  to={`/${text.toLowerCase() === "home" ? "/" : "text.toLowerCase()"}`}
                  className="h-full flex items-center"
                >
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button className="px-7 py-2 bg-yellow-500 rounded-md tracking-wider">
          Login/SignUp
        </button>
      </div>
    </header>
  );
};

export default Header;
