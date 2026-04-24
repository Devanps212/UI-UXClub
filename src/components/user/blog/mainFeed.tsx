import FeedSuggestion from "./feedSuggestion";
import PostCard from "./postCard";
import Stories from "./stories";

const MainFeed = () => {
  return (
    <div className="w-full sm:flex-1 lg:w-1/2 border border-zinc-200 rounded-xl min-w-0">
      <Stories />
      <div className="w-full h-0.5 bg-zinc-100 mt-5" />
      <FeedSuggestion />
      <div className="w-full h-0.5 bg-zinc-100 mt-5" />
      <PostCard />
      <div className="w-full h-0.5 bg-zinc-100 mt-5" />
      <PostCard />
    </div>
  );
};

export default MainFeed;
