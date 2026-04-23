import MainFeed from "../../components/user/showcase/mainFeed";
import NavigationPanel from "../../components/user/showcase/navigationPanel";
import TrendingAndJobs from "../../components/user/showcase/trendingAndJobs";

const Showcase = () => {
  return (
    <div className="">
      <div className="flex items-start justify-center gap-4 w-full h-full">
        <NavigationPanel />
        <MainFeed />
        <TrendingAndJobs/>
      </div>
    </div>
  );
};

export default Showcase;
