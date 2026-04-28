import { BiChevronRight } from "react-icons/bi";

const AllEvents = () => {
  const EVENTS = [
    {
      day: "02",
      month: "May",
      title: "UX Research Fundamentals — Live Talk",
      meta: "Online · Zoom · Free · 1.5h",
      status: "Free",
    },
    {
      day: "08",
      month: "May",
      title: "Design Systems Explained by Seniors",
      meta: "Talk · Lab B, Tech Hub · 2h",
      status: "Open",
    },
    {
      day: "10",
      month: "May",
      title: "Design That Moves People — Speaker Night",
      meta: "Talk · Main Hall · 2h · Featured",
      status: "Open",
    },
    {
      day: "15",
      month: "May",
      title: "Monthly Designer Meetup + Networking",
      meta: "Meetup · The Loft · Open to all",
      status: "Free",
    },
    {
      day: "17",
      month: "May",
      title: "Portfolio Review Night — Spring '26",
      meta: "Critique · Auditorium · 90 min",
      status: "Filling fast",
    },
    {
      day: "24",
      month: "May",
      title: "Future of AI in Design — Panel Discussion",
      meta: "Talk · Online · 1h",
      status: "Free",
    },
  ];

  const badgeStyles: Record<string, string> = {
    open: "bg-yellow-400 text-yellow-900",
    free: "bg-green-100 text-green-700",
    "filling fast": "bg-red-100 text-red-700",
  };

  return (
    <div className="py-10">
      <h1 className="font-display font-extrabold tracking-widest text-4xl sm:text-5xl lg:text-7xl uppercase leading-tight">
        ALL EVENTS
      </h1>
      <div className="flex flex-col gap-3 mt-6">
        {EVENTS.map((event, i) => (
          <div
            key={`event-${i}`}
            className="grid grid-cols-[56px_1fr] sm:grid-cols-[72px_1fr_auto_auto] items-center gap-3 sm:gap-5 p-3 sm:p-4 bg-white border border-gray-200 rounded-2xl cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col items-center justify-center border border-black rounded-xl w-14 h-14 sm:w-[72px] sm:h-[72px] shrink-0">
              <span className="text-xl sm:text-2xl font-bold font-body leading-none">
                {event.day}
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-gray-500 font-semibold mt-1">
                {event.month}
              </span>
            </div>

            <div className="flex flex-col gap-0.5 sm:gap-1 min-w-0">
              <h2 className="text-base sm:text-xl lg:text-2xl font-display tracking-wide truncate">
                {event.title}
              </h2>
              <span className="text-xs sm:text-sm text-zinc-500 font-light truncate">
                {event.meta}
              </span>
              <span
                className={`mt-1 sm:hidden self-start px-3 py-0.5 text-xs font-semibold rounded-full ${
                  badgeStyles[event.status.toLowerCase()] ??
                  "bg-gray-200 text-gray-600"
                }`}
              >
                {event.status}
              </span>
            </div>

            <span
              className={`hidden sm:inline px-4 py-1 text-xs font-semibold rounded-full shrink-0 ${
                badgeStyles[event.status.toLowerCase()] ??
                "bg-gray-200 text-gray-600"
              }`}
            >
              {event.status}
            </span>

            <BiChevronRight className="hidden sm:block text-2xl text-gray-400 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
