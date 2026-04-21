import { FaWhatsapp } from "react-icons/fa";

const WhatsappGroup = () => {
  return (
    <div className="flex items-center justify-center bg-black px-6 md:px-16 lg:px-24 py-20">
      <div className="w-3/4 h-full flex items-center">
        <div>
          <div className="flex items-center gap-2 font-body text-yellow-500 text-sm font-semibold tracking-widest uppercase">
            <div className="w-5 h-0.5 bg-yellow-400" />
            STAY CONNECTED
          </div>
          <h1 className="mt-5 font-display font-extrabold tracking-widest  text-8xl uppercase text-white">
            JOIN <br />
            OUR <span className="text-yellow-400">WHATSAPP</span> <br />
            COMMUNITY <span className="text-yellow-400">GROUP</span>
          </h1>
          <p className="font-body text-zinc-300 text-lg mt-2 font-light max-w-lg ">
            Stay connected with the community through real-time updates,
            discussions, feedback, and collaboration opportunities
          </p>
        </div>
      </div>
      <div className="w-1/3 h-full flex items-center">
        <div className="py-10 rounded-md bg-white/20 backdrop-blur-3xl mx-auto w-full flex flex-col items-center justify-center">
          <div className="w-28 h-28 bg-green-400 flex items-center justify-center rounded-full">
            <FaWhatsapp className="text-white text-7xl" />
          </div>
          <h1 className="text-3xl font-display text-white tracking-wider mt-5">
            Active community group
          </h1>
          <p className="font-body text-zinc-300 text-sm font-light max-w-lg">
            Designers, devs & creators
          </p>
          <button className="text-lg px-5 py-2 font-body rounded-lg bg-yellow-400 mt-4">
            Join the group →
          </button>
          <p className="font-body text-zinc-400 text-sm font-light max-w-lg mt-4">
            Open for everyone. Join anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatsappGroup;
