import {
  HiClock,
  HiLocationMarker,
  HiUsers,
  HiArrowRight,
} from "react-icons/hi";
import { TAG_COLORS } from "../../constants";

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

const MeetupCard = ({ meetup }: Props) => {
  return (
    <div className="card-lift bg-white border border-zinc-200 hover:border-yellow-400 flex flex-col">
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-5">
          <span
            className={`text-xs font-display tracking-widest px-2.5 py-1 rounded-sm ${TAG_COLORS[meetup.tag]}`}
          >
            {meetup.tag}
          </span>
          <span className="font-body text-xs text-zinc-400">{meetup.date}</span>
        </div>

        <h3 className="font-display text-2xl text-black leading-tight mb-3">
          {meetup.title.toUpperCase()}
        </h3>
        <p className="font-body text-zinc-500 text-sm leading-relaxed flex-1 mb-5">
          {meetup.description}
        </p>

        <div className="space-y-2 mb-5">
          <div className="flex items-center gap-2 text-xs font-body text-zinc-500">
            <HiClock className="text-yellow-500 shrink-0" />
            {meetup.time}
          </div>
          <div className="flex items-center gap-2 text-xs font-body text-zinc-500">
            <HiLocationMarker className="text-yellow-500 shrink-0" />
            {meetup.location}
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-xs font-body text-zinc-400 mb-1.5">
            <span className="flex items-center gap-1">
              <HiUsers /> {meetup.attendees} attending
            </span>
            <span>{meetup.capacity - meetup.attendees} left</span>
          </div>
          <div className="w-full bg-zinc-200 h-1 rounded-full">
            <div
              className="bg-yellow-400 h-1 rounded-full progress-bar"
              style={{
                width: `${(meetup.attendees / meetup.capacity) * 100}%`,
              }}
            />
          </div>
        </div>

        <div className="border-t border-zinc-100 pt-4 flex items-center justify-between">
          <div>
            <p className="font-body font-semibold text-black text-sm">
              {meetup.speaker}
            </p>
            <p className="font-body text-zinc-400 text-xs">{meetup.role}</p>
          </div>
          <button className="group flex items-center gap-2 text-yellow-500 font-display tracking-widest text-sm hover:gap-3 transition-all duration-200">
            RSVP{" "}
            <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeetupCard;
