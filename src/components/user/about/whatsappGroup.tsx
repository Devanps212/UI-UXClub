import { FaWhatsapp } from "react-icons/fa";

const WhatsappGroup = () => {
  const WHATSAPP_LINK = "https://chat.whatsapp.com/J3Tx32f2GbJFHLDJYAQqEA";
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-black px-6 md:px-16 lg:px-24 py-14 md:py-20 gap-10 lg:gap-0">
      <div className="w-full lg:w-3/4 h-full flex items-center">
        <div>
          <div className="flex items-center gap-2 font-body text-yellow-500 text-sm font-semibold tracking-widest uppercase">
            <div className="w-5 h-0.5 bg-yellow-400" />
            STAY CONNECTED
          </div>
          <h1 className="mt-5 font-display font-extrabold tracking-widest text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase text-white leading-tight">
            JOIN <br />
            OUR <span className="text-yellow-400">WHATSAPP</span> <br />
            COMMUNITY <span className="text-yellow-400">GROUP</span>
          </h1>
          <p className="font-body text-zinc-300 text-base md:text-lg mt-3 font-light max-w-lg">
            Stay connected with the community through real-time updates,
            discussions, feedback, and collaboration opportunities
          </p>
        </div>
      </div>

      <div className="w-full sm:w-2/3 lg:w-1/3 h-full flex items-center">
        <div className="py-10 px-6 rounded-md bg-white/20 backdrop-blur-3xl mx-auto w-full flex flex-col items-center justify-center">
          <div className="w-24 h-24 md:w-28 md:h-28 bg-green-400 flex items-center justify-center rounded-full">
            <FaWhatsapp className="text-white text-6xl md:text-7xl" />
          </div>
          <h1 className="text-2xl md:text-3xl font-display text-white tracking-wider mt-5 text-center">
            Active community group
          </h1>
          <p className="font-body text-zinc-300 text-sm font-light text-center mt-1">
            Designers, devs & creators
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base md:text-lg px-5 py-2 font-body rounded-lg bg-yellow-400 mt-4"
          >
            Join the group →
          </a>
          <p className="font-body text-zinc-400 text-sm font-light mt-4 text-center">
            Open for everyone. Join anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatsappGroup;
