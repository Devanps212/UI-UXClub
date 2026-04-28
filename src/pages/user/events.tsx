import AllEvents from "../../components/user/events/allEvents";
import EventsCalender from "../../components/user/events/calender";
import FeaturedEvent from "../../components/user/events/featured";
import NeverMissEvent from "../../components/user/events/neverMissEvent";
import CategoryButtons from "../../components/user/showcase/actionButtons/categoryButtons";

const Events = () => {
  const CATEGORIES = ["All", "Online", "Offline"];
  return (
    <div className="pb-4 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-0.5 bg-yellow-400" />
            <span className="font-body text-yellow-500 text-sm font-semibold tracking-widest uppercase">
              EVENTS
            </span>
          </div>
          <h1 className="font-display text-[clamp(3rem,10vw,8rem)] leading-none tracking-wide text-black">
            EXPLORE <br /> EVENTS
          </h1>
          <p className="font-body text-zinc-600 text-base sm:text-lg max-w-xl mt-2 font-light">
            Explore upcoming events, join the experience, and be part of
            something exciting
          </p>
        </div>
        <div className="w-full lg:w-[420px]">
          <EventsCalender />
        </div>
      </div>

      <CategoryButtons categories={CATEGORIES} />
      <FeaturedEvent />
      <AllEvents />
      <NeverMissEvent />
    </div>
  );
};

export default Events;
