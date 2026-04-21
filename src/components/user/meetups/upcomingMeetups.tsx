import { useState } from "react";
import { HiFilter } from "react-icons/hi";
import { UPCOMING_MEETUPS, FILTERS } from "../../../constants";
import MeetupCard from "./meetupCard";

const UpcomingMeetups = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  //   const featured = UPCOMING_MEETUPS.find((m) => m.featured);
  const filtered = UPCOMING_MEETUPS.filter(
    (m) => !m.featured && (activeFilter === "All" || m.tag === activeFilter),
  );

  return (
    <section className="px-6 md:px-16 lg:px-24 py-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h2 className="font-display text-4xl tracking-widest text-black">
          UPCOMING <span className="text-yellow-500">EVENTS</span>
        </h2>
        <div className="flex items-center gap-2 flex-wrap">
          <HiFilter className="text-zinc-400" />
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`font-body text-sm px-4 py-1.5 rounded-sm font-medium transition-all duration-200
                ${
                  activeFilter === f
                    ? "bg-yellow-400 text-black"
                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((meetup) => (
          <MeetupCard key={meetup.id} meetup={meetup} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="font-display text-4xl text-zinc-300 tracking-widest">
            NO EVENTS FOUND
          </p>
          <p className="font-body text-zinc-400 mt-2">Try a different filter</p>
        </div>
      )}
    </section>
  );
};

export default UpcomingMeetups;
