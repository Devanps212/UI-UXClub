import Flowers from "../../common/decorations/flowers";
import Freelance from "../../components/user/home/freelance";
import GrowCommunity from "../../components/user/home/growCommunity";
import Hero from "../../components/user/home/hero";
import Meetups from "../../components/user/home/learnDesigns";
import DesignShowcase from "../../components/user/home/showcase";
// import LearnDesign from "../../components/user/home/learnDesigns";
// import ContactUs from "../../components/user/home/contactUs";
// import DesignContests from "../../components/user/home/designContests";
// import JobOpportunity from "../../components/user/home/jobs";
// import MonthlyMeetups from "../../components/user/home/meetups";
// import Showcase from "../../components/user/home/showcase";
// import Testimonials from "../../components/user/home/testimonials";
// import BuildProjects from "../../components/user/home/buildProjects";

const Home = () => {
  return (
    <div className="relative overflow-hidden bg-white px-4 py-8 sm:px-8 sm:py-12 md:px-16 md:py-16 space-y-16 sm:space-y-24 md:space-y-36">
      <Hero />
      <div className="absolute z-0 -right-10 sm:-right-20 md:-right-30 top-72 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 border-4 border-dashed border-black bg-yellow-300 rounded-full" />
      <svg
        className="absolute top-1/3 translate-y-30 pointer-events-none hidden sm:block"
        style={{ left: 0, width: "100vw" }}
        height="300"
        viewBox="0 0 1440 300"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 250 C 200 250, 200 50, 400 50 C 600 50, 600 200, 800 150 C 1000 100, 1100 20, 1440 50"
          fill="none"
          stroke="black"
          strokeWidth="3"
          strokeDasharray="10 6"
          strokeLinecap="round"
        />
      </svg>

      <Meetups />
      {/* <Showcase /> */}

      <div className="absolute z-0 -right-20 sm:-right-30 md:-right-40 top-550 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 border-4 border-dashed border-black bg-yellow-300 rounded-full" />

      <Freelance />
      <div className="hidden sm:block absolute -right-10 top-1/2 w-40 h-40 border-[3px] border-dashed border-black/10 rotate-12 pointer-events-none " />
      <div className="absolute right-24 bottom-1/2 w-16 h-16 border-[3px] border-dashed border-black/10 rotate-45 pointer-events-none" />
      {/* <JobOpportunity /> */}
      <DesignShowcase />

      <div className="relative">
        <svg
          className="absolute -top-16 pointer-events-none -z-10 hidden sm:block"
          style={{ left: "50%", transform: "translateX(-50%)", width: "100vw" }}
          height="500"
          viewBox="0 0 1440 500"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 20 C 80 20, 120 180, 220 160 C 320 140, 340 40, 480 80 C 600 115, 580 280, 720 240 C 860 200, 880 60, 1020 100 C 1140 135, 1120 320, 1280 280 C 1360 260, 1400 380, 1440 480"
            fill="none"
            stroke="black"
            strokeWidth="2.5"
            strokeDasharray="14 5"
            strokeLinecap="round"
          />
          <path
            d="M 0 80 C 100 60, 180 220, 300 180 C 440 135, 460 30, 620 60 C 780 90, 760 260, 920 210 C 1060 168, 1080 40, 1220 90 C 1340 130, 1380 320, 1440 400"
            fill="none"
            stroke="black"
            strokeWidth="1.5"
            strokeDasharray="6 10"
            strokeLinecap="round"
            opacity="0.35"
          />
        </svg>
        <div className="relative z-10">
          <GrowCommunity />
          {/* <DesignContests /> */}
        </div>
      </div>

      {/* <MonthlyMeetups /> */}
      {/* <ContactUs /> */}
      <Flowers left={0} right={0} bottom={0} top={96} />
    </div>
  );
};

export default Home;
