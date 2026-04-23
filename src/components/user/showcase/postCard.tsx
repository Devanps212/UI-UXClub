import ActionBar from "./actionButtons";

const PostCard = () => {
  return (
    <div className="p-5">
      <div className="flex items-center justify-start gap-3">
        <div className="w-14 h-14 flex items-center justify-center text-lg font-semibold font-body bg-yellow-400 rounded-full">
          PR
        </div>
        <div className="font-nav">
          <h1 className="text-lg font-bold font-nav">Priya R</h1>
          <p className="text-zinc-600 text-xs">Visual design lead · 2h</p>
        </div>
      </div>
      <div className="space-y-3 mt-5">
        <p className="w-full text-lg font-body">
          Just wrapped the final iteration of our #fintech dashboard. The
          challenge was showing account health at a glance without overwhelming
          users. Went through 11 versions of the home card. Happy to share the
          Figma file if anyone wants to poke around.
        </p>
        <div className="aspect-video rounded-xl bg-black border border-zinc-300 overflow-hidden">
          <img
            src="/showcase/dummy/uiuxProjects/carWebsite.png"
            alt="car-website"
            className="w-full h-full"
          />
        </div>

        <div className="flex items-center justify-start gap-2 text-sm text-gray-700 font-nav mt-5">
          <div className="px-3 py-1 bg-zinc-100 rounded-full">#dashboard</div>
          <div className="px-2 py-1 bg-zinc-100 rounded-full">#ux</div>
          <div className="px-2 py-1 bg-zinc-100 rounded-full">#figma</div>
        </div>
      </div>
      <ActionBar />
    </div>
  );
};

export default PostCard;
