import ContactUs from "../../components/user/home/contactUs";
import DesignContests from "../../components/user/home/designContests";
import Hero from "../../components/user/home/hero";
import JobOpportunity from "../../components/user/home/jobs";
import MonthlyMeetups from "../../components/user/home/meetups";
import Showcase from "../../components/user/home/showcase";
import Testimonials from "../../components/user/home/testimonials";

const Home = () => {
  return (
    <div className="bg-white p-16 space-y-36">
      <Hero />
      <Testimonials />
      <Showcase />
      <JobOpportunity />
      <DesignContests />
      <MonthlyMeetups />
      <ContactUs />
    </div>
  );
};

export default Home;
