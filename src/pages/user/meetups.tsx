import Ticker from "../../components/meetups/ticker";
import FeaturedMeetup from "../../components/meetups/featuredMeetups";
import UpcomingMeetups from "../../components/meetups/upcomingMeetups";
import PastMeetups from "../../components/meetups/pastMeetups";
import HostMeetupCTA from "../../components/meetups/hostMeetupCTA";
import { UPCOMING_MEETUPS } from "../../constants";

const Meetups = () => {
  const featured = UPCOMING_MEETUPS.find((m) => m.featured);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap');
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-body { font-family: 'DM Sans', sans-serif; }
        .ticker-track {
          display: flex;
          width: max-content;
          animation: ticker 22s linear infinite;
        }
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .card-lift {
          transition: transform 0.3s cubic-bezier(.22,.68,0,1.2), box-shadow 0.3s ease;
        }
        .card-lift:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(234,179,8,0.2);
        }
        .progress-bar {
          transition: width 0.8s cubic-bezier(.22,.68,0,1.2);
        }
        .diagonal-bg {
          clip-path: polygon(0 0, 100% 0, 100% 88%, 0 100%);
        }
      `}</style>

      <div className="pt-24 pb-4 px-6 md:px-16 lg:px-24">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-0.5 bg-yellow-400" />
          <span className="font-body text-yellow-500 text-sm font-semibold tracking-widest uppercase">
            Community Gatherings
          </span>
        </div>
        <h1 className="font-display text-[clamp(4rem,12vw,9rem)] leading-none tracking-wide text-black">
          MEETUPS
        </h1>
        <p className="font-body text-zinc-600 text-lg max-w-xl mt-2 font-light">
          Where designers, developers, and makers collide. Learn together, build
          together.
        </p>
      </div>

      <Ticker />

      {featured && <FeaturedMeetup meetup={featured} />}

      <UpcomingMeetups />
      <PastMeetups />
      <HostMeetupCTA />
    </>
  );
};

export default Meetups;
