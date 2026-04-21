import { HiUsers } from "react-icons/hi";
import { PAST_MEETUPS, TAG_COLORS } from "../../../constants";

const PastMeetups = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-10">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-display text-4xl tracking-widest text-black">
          PAST <span className="text-zinc-400">MEETUPS</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PAST_MEETUPS.map((m) => (
          <div
            key={m.id}
            className="group border border-zinc-200 hover:border-yellow-400 p-5 transition-all duration-200 cursor-pointer"
          >
            <span
              className={`text-xs font-display tracking-widest px-2.5 py-1 rounded-sm ${TAG_COLORS[m.tag]}`}
            >
              {m.tag}
            </span>
            <h4 className="font-display text-xl text-zinc-600 group-hover:text-black mt-3 mb-2 leading-tight">
              {m.title.toUpperCase()}
            </h4>
            <p className="font-body text-xs text-zinc-400">{m.date}</p>
            <p className="font-body text-xs text-zinc-400 mt-1 flex items-center gap-1">
              <HiUsers /> {m.attendees} attended
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PastMeetups;
