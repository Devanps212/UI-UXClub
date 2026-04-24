import MainFeed from "../../components/user/blog/mainFeed";
import NavigationPanel from "../../components/user/blog/navigationPanel";
import TrendingAndJobs from "../../components/user/blog/trendingAndJobs";

const Blog = () => {
  return (
    <div className="px-2 sm:px-4 lg:px-6 xl:px-0 py-4">
      <div className="flex items-start justify-center gap-4 w-full max-w-7xl mx-auto">
        <NavigationPanel />
        <MainFeed />
        <TrendingAndJobs />
      </div>
    </div>
  );
};

export default Blog;
