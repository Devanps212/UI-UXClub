import { HiArrowRight } from "react-icons/hi";

const HostMeetupCTA = () => {
  return (
    <section className="mx-6 md:mx-16 lg:mx-24 my-10 bg-yellow-400 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
      <div>
        <h2 className="font-display text-[clamp(2rem,5vw,4rem)] text-black leading-tight">
          WANT TO HOST A MEETUP?
        </h2>
        <p className="font-body text-zinc-800 mt-2 text-base max-w-md">
          Got a topic you're passionate about? We'll help you organise, promote,
          and run the session.
        </p>
      </div>
      <button className="group flex items-center gap-3 bg-black text-yellow-400 font-display tracking-widest text-lg px-10 py-5 hover:scale-105 transition-transform duration-200 shrink-0">
        PROPOSE A MEETUP
        <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
      </button>
    </section>
  );
};

export default HostMeetupCTA;
