import MeetTheCrew from "../../components/user/about/meetTheCrew";
import OurProjects from "../../components/user/about/ourProjects";
import WhatsappGroup from "../../components/user/about/whatsappGroup";
// import GetInTouch from "../../components/user/about/getInTouch";
// import OurMission from "../../components/user/about/mission";
// import Process from "../../components/user/about/process";
// import WhoYouWillFindHere from "../../components/user/about/whatWeDo";
// import Ticker from "../../components/user/meetups/ticker/ticker";

const About = () => {
  return (
    <div className="space-y-20">
      <section className="pt-24 pb-4 px-6 md:px-16 lg:px-24">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-0.5 bg-yellow-400" />
          <span className="font-body text-yellow-500 text-sm font-semibold tracking-widest uppercase">
            About us
          </span>
        </div>
        <h1 className="font-display text-[clamp(4rem,12vw,9rem)] leading-none tracking-wide text-black">
          ABOUT US
        </h1>
        <p className="font-body text-zinc-600 text-lg max-w-xl mt-2 font-light">
          A space where UI/UX designers, developers, and creators collaborate,
          learn, build projects and grow the communities
        </p>
      </section>
      <OurProjects />
      {/* <Process /> */}
      {/* <WhoYouWillFindHere /> */}
      <WhatsappGroup />
      {/* <OurMission /> */}
      <MeetTheCrew />
      {/* <Ticker />
      <GetInTouch /> */}
    </div>
  );
};

export default About;
