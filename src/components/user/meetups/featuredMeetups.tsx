import {
  HiCalendar,
  HiClock,
  HiLocationMarker,
  HiUsers,
  HiArrowRight,
} from "react-icons/hi";
import { TAG_COLORS } from "../../../constants";

type Meetup = {
  id: number;
  tag: string;
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  capacity: number;
  speaker: string;
  role: string;
  description: string;
};

interface Props {
  meetup: Meetup;
}

const FeaturedMeetup = ({ meetup }: Props) => {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-8">
      <div className="relative bg-black text-white diagonal-bg overflow-hidden min-h-105 flex flex-col justify-between p-8 md:p-14">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full -translate-y-1/2 translate-x-1/3 opacity-20 pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-32 h-32 bg-yellow-400 rounded-full translate-y-1/2 opacity-10 pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`text-xs font-display tracking-widest px-3 py-1 rounded-sm ${TAG_COLORS[meetup.tag]}`}
              >
                {meetup.tag}
              </span>
              <span className="bg-yellow-400 text-black text-xs font-display tracking-widest px-3 py-1 rounded-sm">
                FEATURED
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none text-white mb-4">
              {meetup.title.toUpperCase()}
            </h2>
            <p className="font-body text-zinc-300 text-base max-w-lg leading-relaxed">
              {meetup.description}
            </p>
          </div>

          <div className="flex flex-col gap-4 min-w-56">
            <div className="flex items-center gap-2 font-body text-sm text-zinc-300">
              <HiCalendar className="text-yellow-400 text-lg shrink-0" />
              {meetup.date}
            </div>
            <div className="flex items-center gap-2 font-body text-sm text-zinc-300">
              <HiClock className="text-yellow-400 text-lg shrink-0" />
              {meetup.time}
            </div>
            <div className="flex items-center gap-2 font-body text-sm text-zinc-300">
              <HiLocationMarker className="text-yellow-400 text-lg shrink-0" />
              {meetup.location}
            </div>
            <div className="flex items-center gap-2 font-body text-sm text-zinc-300">
              <HiUsers className="text-yellow-400 text-lg shrink-0" />
              {meetup.attendees} / {meetup.capacity} spots filled
            </div>
            <div className="w-full bg-zinc-700 h-1.5 rounded-full mt-1">
              <div
                className="bg-yellow-400 h-1.5 rounded-full progress-bar"
                style={{
                  width: `${(meetup.attendees / meetup.capacity) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-10 relative z-10">
          <div>
            <p className="font-body text-xs text-zinc-400 uppercase tracking-widest">
              Speaker
            </p>
            <p className="font-body font-semibold text-white text-lg">
              {meetup.speaker}
            </p>
            <p className="font-body text-zinc-400 text-sm">{meetup.role}</p>
          </div>
          <button className="group flex items-center gap-3 bg-yellow-400 text-black font-display tracking-widest text-lg px-8 py-4 hover:bg-white hover:text-black transition-all duration-200">
            Join
            <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMeetup;
