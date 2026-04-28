import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const EVENTS: Record<
  string,
  { title: string; time: string; location: string }[]
> = {
  "2026-3-2": [
    {
      title: "UX Research Fundamentals — Live Talk",
      time: "6:00 PM",
      location: "Online · Zoom",
    },
  ],
  "2026-3-8": [
    {
      title: "Design Systems Explained by Seniors",
      time: "5:00 PM",
      location: "Lab B, Tech Hub",
    },
  ],
  "2026-3-10": [
    {
      title: "Design That Moves People — Speaker Night",
      time: "7:00 PM",
      location: "Main Hall",
    },
  ],
  "2026-3-15": [
    {
      title: "Monthly Designer Meetup + Networking",
      time: "6:30 PM",
      location: "The Loft",
    },
  ],
  "2026-3-17": [
    {
      title: "Portfolio Review Night — Spring '26",
      time: "5:30 PM",
      location: "Auditorium",
    },
  ],
  "2026-3-24": [
    {
      title: "Future of AI in Design — Panel Discussion",
      time: "4:00 PM",
      location: "Online",
    },
  ],
  "2026-4-2": [
    {
      title: "UX Research Fundamentals — Live Talk",
      time: "6:00 PM",
      location: "Online · Zoom",
    },
  ],
  "2026-4-8": [
    {
      title: "Design Systems Explained by Seniors",
      time: "5:00 PM",
      location: "Lab B, Tech Hub",
    },
  ],
  "2026-4-10": [
    {
      title: "Design That Moves People — Speaker Night",
      time: "7:00 PM",
      location: "Main Hall",
    },
  ],
  "2026-4-15": [
    {
      title: "Monthly Designer Meetup + Networking",
      time: "6:30 PM",
      location: "The Loft",
    },
  ],
  "2026-4-17": [
    {
      title: "Portfolio Review Night — Spring '26",
      time: "5:30 PM",
      location: "Auditorium",
    },
  ],
  "2026-4-24": [
    {
      title: "Future of AI in Design — Panel Discussion",
      time: "4:00 PM",
      location: "Online",
    },
  ],
};

const EventsCalender = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const days = [];

  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={"empty-" + i} />);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const key = `${year}-${month}-${i}`;
    const events = EVENTS[key];
    const hasEvent = !!events;
    const isHovered = hoveredKey === key;

    days.push(
      <div
        key={i}
        className="relative flex items-center justify-center"
        onMouseEnter={() => hasEvent && setHoveredKey(key)}
        onMouseLeave={() => setHoveredKey(null)}
      >
        <div
          className={`h-12 w-full flex items-center justify-center rounded-lg cursor-pointer font-semibold font-body transition-colors
            ${
              hasEvent
                ? "bg-yellow-400 text-black hover:bg-yellow-300"
                : "hover:bg-black hover:text-yellow-400"
            }`}
        >
          {i}
        </div>

        {hasEvent && isHovered && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 w-56 bg-black text-white rounded-xl p-3 shadow-xl pointer-events-none">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-black" />
            {events.map((e, idx) => (
              <div
                key={idx}
                className={idx > 0 ? "mt-2 pt-2 border-t border-white/20" : ""}
              >
                <p className="font-semibold text-yellow-400 text-sm leading-snug">
                  {e.title}
                </p>
                <p className="text-xs text-zinc-300 mt-1">🕐 {e.time}</p>
                <p className="text-xs text-zinc-300">📍 {e.location}</p>
              </div>
            ))}
          </div>
        )}
      </div>,
    );
  }

  return (
    <div className="w-full mx-auto bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-body font-semibold text-gray-800">
          {currentDate.toLocaleString("default", { month: "long" })} {year}
        </h2>
        <div className="space-x-2">
          <button
            onClick={prevMonth}
            className="px-3 py-3 bg-black text-white rounded hover:text-yellow-400 cursor-pointer"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextMonth}
            className="px-3 py-3 bg-black text-white rounded hover:text-yellow-400 cursor-pointer"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 text-center text-zinc-400 font-medium mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">{days}</div>
    </div>
  );
};

export default EventsCalender;
