import { useEffect } from "react";

const members = [
  { initials: "AR", name: "Anika R.", role: "Visual Designer", dark: true },
  { initials: "KM", name: "Karan M.", role: "UX Researcher", dark: false },
  { initials: "PS", name: "Priya S.", role: "Product Designer", dark: true },
  { initials: "JL", name: "Jay L.", role: "Motion Designer", dark: false },
  { initials: "NB", name: "Neha B.", role: "UI Lead", dark: true },
];

const stats = [
  { num: "500+", label: "Active members" },
  { num: "40+", label: "Events held" },
  { num: "12+", label: "Workshops / year" },
];

const GrowCommunity = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&display=swap";
    document.head.appendChild(link);

    const style = document.createElement("style");
    style.textContent = `
      .gc-root {
        font-family: 'DM Sans', sans-serif;
      }
      .gc-heading {
        font-family: 'Bebas Neue', sans-serif;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="gc-root relative w-full overflow-hidden flex flex-col justify-center px-6 sm:px-12 md:px-24">
      <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[11rem] font-extrabold text-black/[0.03] select-none leading-none pointer-events-none">
        COMMUNITY
      </span>

      <div className="hidden sm:block absolute right-20 top-16 w-28 h-28 border-[3px] border-dashed border-black/10 rotate-12 pointer-events-none" />
      <div className="absolute right-52 bottom-20 w-14 h-14 border-[3px] border-dashed border-black/10 rotate-45 pointer-events-none" />

      <div className="relative z-10 max-w-4xl w-full">
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight text-black mb-6">
          Grow{" "}
          <span className="text-yellow-400 tracking-wider">Community.</span>
        </h2>

        <p className="text-black/50 text-lg sm:text-xl max-w-lg leading-relaxed mb-10">
          Connect, share, and grow with others.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {members.map((m, i) => (
            <div
              key={i}
              className="group flex items-center gap-2.5 border border-black/10 hover:border-black rounded-full px-3 py-2 pr-4 cursor-pointer transition-all duration-200 hover:-translate-y-1"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 ${
                  m.dark ? "bg-black text-white" : "bg-yellow-400 text-black"
                }`}
              >
                {m.initials}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-black leading-tight">
                  {m.name}
                </span>
                <span className="text-[11px] text-black/35">{m.role}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap w-full border border-black/10 rounded-2xl overflow-hidden mb-10">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`flex-1 min-w-30 px-5 py-4 ${
                i !== stats.length - 1
                  ? "border-b border-r-0 sm:border-b-0 sm:border-r border-black/10"
                  : ""
              }`}
            >
              <div className="gc-heading text-2xl text-black leading-none">
                {s.num.replace("+", "")}
                <span className="text-yellow-400">+</span>
              </div>
              <div className="text-[11px] text-black/35 font-medium mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-6 flex-wrap">
          <button className="bg-black text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-yellow-400 hover:text-black transition-colors duration-200">
            Join the community →
          </button>
        </div>
      </div>
    </section>
  );
};

export default GrowCommunity;
