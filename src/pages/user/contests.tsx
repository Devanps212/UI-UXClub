import ContestCard from "../../components/user/contests/contestCard";
import FeaturedContest from "../../components/user/contests/featuredContest";
import JoinNextContest from "../../components/user/contests/joinNextContest";
import ContestWinners from "../../components/user/contests/winners";

export interface Contest {
  id: number;
  title: string;
  description: string;
  status: "open" | "upcoming" | "closed";
  featured: boolean;
  prize: number;
  currency: "INR";
  deadline?: string;
  startDate?: string;
  endDate?: string;
  entries?: number;
  daysLeft?: number;
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
  category?: "UI/UX" | "Branding" | "Web Design" | "AI" | "Typography";
  timeEstimate?: string;
  tags?: string[];
}

const Contests = () => {
  const CONTESTS: Contest[] = [
    {
      id: 1,
      title: "Featured App Redesign Sprint",
      description:
        "Redesign a real-world app interface focusing on usability, accessibility, and delight. Open to all skill levels with mentorship available.",
      status: "open",
      featured: true,
      prize: 500,
      currency: "INR",
      deadline: "2026-05-15",
      entries: 47,
      daysLeft: 18,
      difficulty: "Intermediate",
      category: "UI/UX",
      timeEstimate: "3-5 days",
      tags: ["Figma", "UX", "Mobile"],
    },
    {
      id: 2,
      title: "Icon Design Challenge",
      description:
        "Create a cohesive set of 12 icons for a productivity app — judged on clarity, style, and consistency.",
      status: "open",
      featured: false,
      prize: 400,
      currency: "INR",
      deadline: "2026-05-08",
      entries: 23,
      difficulty: "Beginner",
      category: "Branding",
      timeEstimate: "1-2 days",
      tags: ["Icons", "Design System"],
    },
    {
      id: 3,
      title: "Landing Page in 48 hrs",
      description:
        "A timed challenge — design a landing page for a given brief in 48 hours.",
      status: "open",
      featured: false,
      prize: 700,
      currency: "INR",
      deadline: "2026-04-30",
      entries: 31,
      difficulty: "Intermediate",
      category: "Web Design",
      timeEstimate: "48 hours",
      tags: ["Landing Page", "UI"],
    },
    {
      id: 4,
      title: "Dark Mode UI Exploration",
      description: "Design multi-screen dark mode UI for a finance app.",
      status: "upcoming",
      featured: false,
      prize: 1000,
      currency: "INR",
      startDate: "2026-06-01",
      difficulty: "Advanced",
      category: "UI/UX",
      timeEstimate: "4-6 days",
      tags: ["Dark Mode", "Finance UI"],
    },
    {
      id: 5,
      title: "AI Tool Interface Design",
      description: "Design the interface for an AI-powered creative tool.",
      status: "upcoming",
      featured: false,
      prize: 2000,
      currency: "INR",
      startDate: "2026-06-15",
      difficulty: "Intermediate",
      category: "AI",
      timeEstimate: "5-7 days",
      tags: ["AI", "UX"],
    },
    {
      id: 6,
      title: "Onboarding Flow Redesign",
      description:
        "Participants redesigned onboarding for three different app categories.",
      status: "closed",
      featured: false,
      prize: 1500,
      currency: "INR",
      entries: 62,
      endDate: "2026-03-20",
      category: "UI/UX",
      tags: ["Onboarding"],
    },
    {
      id: 7,
      title: "Typography Challenge",
      description:
        "Editorial layouts using type as the primary design element.",
      status: "closed",
      featured: false,
      prize: 2300,
      currency: "INR",
      entries: 38,
      endDate: "2026-02-14",
      category: "Typography",
      tags: ["Fonts", "Editorial"],
    },
  ];

  const featured = CONTESTS.find((cont) => cont.featured) || null;

  return (
    <div className="pb-4 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="flex items-center gap-3 mb-2">
        <span className="w-8 h-0.5 bg-yellow-400" />
        <span className="font-body text-yellow-500 text-sm font-semibold tracking-widest uppercase">
          JOIN CONTESTS
        </span>
      </div>

      <h1 className="font-display text-[clamp(4rem,12vw,8rem)] leading-none tracking-wide text-black">
        CONTESTS
      </h1>

      <p className="font-body text-zinc-600 text-base sm:text-lg max-w-xl mt-2 font-light">
        Compete in challenges, get peer feedback, and earn recognition—open to
        all UI/UX Club members.
      </p>

      <section className="py-10 sm:py-20 space-y-7">
        {featured && <FeaturedContest featured={featured} />}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-4">
          {CONTESTS.filter((c) => !c.featured).map((c) => (
            <ContestCard key={c.id} contest={c} />
          ))}
        </div>
      </section>

      <ContestWinners />
      <JoinNextContest />
    </div>
  );
};

export default Contests;
